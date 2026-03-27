import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  lookupByUsername,
  registerIdentity,
  getTranscript,
  saveTranscript,
} from "./_lib/blob";
import {
  normalizeUsername,
  verifyPassword,
  isValidUid,
  MAX_USERNAME_LENGTH,
  MAX_DISPLAY_NAME_LENGTH,
} from "./_lib/identity";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  try {
    if (req.method === "GET") {
      return handleGet(req, res);
    }
    if (req.method === "PATCH") {
      return handlePatch(req, res);
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("transcript error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again." });
  }
}

async function handleGet(req: VercelRequest, res: VercelResponse) {
  const uid = req.query.uid as string | undefined;
  if (!uid) {
    return res.status(400).json({ error: "uid query parameter is required" });
  }
  if (!isValidUid(uid)) {
    return res.status(400).json({ error: "Invalid uid format" });
  }

  const transcript = await getTranscript(uid);
  if (!transcript) {
    return res.status(404).json({ error: "Transcript not found" });
  }

  return res.status(200).json(transcript);
}

async function handlePatch(req: VercelRequest, res: VercelResponse) {
  const { username, password, displayName } = req.body ?? {};

  if (!username || typeof username !== "string") {
    return res.status(400).json({ error: "username is required" });
  }
  if (!password || typeof password !== "string") {
    return res.status(400).json({ error: "password is required" });
  }
  if (username.length > MAX_USERNAME_LENGTH) {
    return res.status(400).json({ error: "username too long" });
  }
  if (!displayName || typeof displayName !== "string" || !displayName.trim()) {
    return res.status(400).json({ error: "displayName is required" });
  }
  if (displayName.length > MAX_DISPLAY_NAME_LENGTH) {
    return res.status(400).json({ error: "displayName too long" });
  }

  const normalized = normalizeUsername(username);
  const identity = await lookupByUsername(normalized);
  if (!identity) {
    return res.status(404).json({ error: "User not found" });
  }
  if (!verifyPassword(password, identity.salt, identity.passwordHash)) {
    return res.status(401).json({ error: "Incorrect password" });
  }

  const transcript = await getTranscript(identity.uid);
  if (!transcript) {
    return res.status(404).json({ error: "Transcript not found" });
  }

  const trimmedName = displayName.trim();
  transcript.displayName = trimmedName;
  identity.displayName = trimmedName;

  await saveTranscript(transcript);
  await registerIdentity(normalized, identity);

  return res.status(200).json({ ok: true, transcript });
}
