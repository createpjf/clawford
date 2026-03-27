import type { VercelRequest, VercelResponse } from "@vercel/node";
import { put, list, getDownloadUrl } from "@vercel/blob";

const RATE_LIMITS_PATH = "clawford/rate-limits.json";
const REGISTRATION_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
const LOGIN_LOCKOUT_WINDOW_MS = 10 * 60 * 1000;
const MAX_LOGIN_FAILURES = 5;
const GLOBAL_RATE_WINDOW_MS = 60 * 1000;
const GLOBAL_RATE_MAX = 60;

interface RegistrationRecord {
  count: number;
  lastAt: string;
}

interface LoginFailureRecord {
  count: number;
  firstAt: string;
}

interface RateLimitRegistry {
  registrations: Record<string, RegistrationRecord>;
  loginFailures: Record<string, LoginFailureRecord>;
}

// ---- In-memory global rate limit (resets on cold start) ----

const globalHits = new Map<string, { count: number; windowStart: number }>();

export function checkGlobalRate(ip: string): boolean {
  const now = Date.now();
  const entry = globalHits.get(ip);
  if (!entry || now - entry.windowStart > GLOBAL_RATE_WINDOW_MS) {
    globalHits.set(ip, { count: 1, windowStart: now });
    return true;
  }
  entry.count++;
  return entry.count <= GLOBAL_RATE_MAX;
}

// ---- IP extraction ----

export function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  const realIp = req.headers["x-real-ip"];
  if (typeof realIp === "string") return realIp.trim();
  return "unknown";
}

// ---- Blob-backed rate limit registry ----

async function readRateLimits(): Promise<RateLimitRegistry> {
  try {
    const { blobs } = await list({ prefix: RATE_LIMITS_PATH, limit: 1 });
    const blob = blobs.find((b) => b.pathname === RATE_LIMITS_PATH);
    if (!blob) return { registrations: {}, loginFailures: {} };
    const signedUrl = await getDownloadUrl(blob.url);
    const res = await fetch(signedUrl);
    if (!res.ok) return { registrations: {}, loginFailures: {} };
    return (await res.json()) as RateLimitRegistry;
  } catch {
    return { registrations: {}, loginFailures: {} };
  }
}

async function writeRateLimits(data: RateLimitRegistry): Promise<void> {
  await put(RATE_LIMITS_PATH, JSON.stringify(data), {
    access: "private",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}

// ---- Registration cooldown (7 days per IP) ----

export async function canRegister(
  ip: string,
): Promise<{ allowed: boolean; retryAfter?: string }> {
  const reg = await readRateLimits();
  const record = reg.registrations[ip];
  if (!record) return { allowed: true };

  const elapsed = Date.now() - new Date(record.lastAt).getTime();
  if (elapsed < REGISTRATION_COOLDOWN_MS) {
    const retryAt = new Date(
      new Date(record.lastAt).getTime() + REGISTRATION_COOLDOWN_MS,
    );
    return { allowed: false, retryAfter: retryAt.toISOString() };
  }
  return { allowed: true };
}

export async function recordRegistration(ip: string): Promise<void> {
  const reg = await readRateLimits();
  const existing = reg.registrations[ip];
  reg.registrations[ip] = {
    count: (existing?.count ?? 0) + 1,
    lastAt: new Date().toISOString(),
  };
  await writeRateLimits(reg);
}

// ---- Login failure lockout (5 attempts per 10 min) ----

export async function canLogin(
  username: string,
): Promise<{ allowed: boolean; retryAfter?: string }> {
  const reg = await readRateLimits();
  const record = reg.loginFailures[username];
  if (!record) return { allowed: true };

  const elapsed = Date.now() - new Date(record.firstAt).getTime();
  if (elapsed > LOGIN_LOCKOUT_WINDOW_MS) {
    delete reg.loginFailures[username];
    await writeRateLimits(reg);
    return { allowed: true };
  }
  if (record.count >= MAX_LOGIN_FAILURES) {
    const retryAt = new Date(
      new Date(record.firstAt).getTime() + LOGIN_LOCKOUT_WINDOW_MS,
    );
    return { allowed: false, retryAfter: retryAt.toISOString() };
  }
  return { allowed: true };
}

export async function recordLoginFailure(username: string): Promise<void> {
  const reg = await readRateLimits();
  const existing = reg.loginFailures[username];
  if (!existing) {
    reg.loginFailures[username] = {
      count: 1,
      firstAt: new Date().toISOString(),
    };
  } else {
    existing.count++;
  }
  await writeRateLimits(reg);
}

export async function clearLoginFailures(username: string): Promise<void> {
  const reg = await readRateLimits();
  if (reg.loginFailures[username]) {
    delete reg.loginFailures[username];
    await writeRateLimits(reg);
  }
}

// ---- Admin bypass ----

export function isAdmin(req: VercelRequest): boolean {
  const code = req.body?.adminCode ?? req.query?.adminCode;
  const secret = process.env.ADMIN_CODE;
  return !!secret && typeof code === "string" && code === secret;
}

// ---- Global rate limit middleware helper ----

export function applyRateLimit(
  req: VercelRequest,
  res: VercelResponse,
): boolean {
  if (isAdmin(req)) return true;
  const ip = getClientIp(req);
  if (!checkGlobalRate(ip)) {
    res.status(429).json({ error: "Too many requests. Please slow down." });
    return false;
  }
  return true;
}
