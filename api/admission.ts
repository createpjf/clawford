import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  lookupByUsername,
  registerIdentity,
  getTranscript,
  saveTranscript,
  createFreshTranscript,
} from "./_lib/blob";
import type { IdentityRecord } from "./_lib/blob";
import {
  normalizeUsername,
  generateUid,
  generateSalt,
  hashPassword,
  verifyPassword,
  sortIntoHouse,
  MAX_USERNAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MAX_DISPLAY_NAME_LENGTH,
} from "./_lib/identity";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { username, password, displayName } = req.body ?? {};

    if (!username || typeof username !== "string" || !username.trim()) {
      return res.status(400).json({ error: "username is required" });
    }
    if (!password || typeof password !== "string" || password.length < 1) {
      return res.status(400).json({ error: "password is required" });
    }
    if (username.length > MAX_USERNAME_LENGTH) {
      return res.status(400).json({ error: "username too long" });
    }
    if (password.length > MAX_PASSWORD_LENGTH) {
      return res.status(400).json({ error: "password too long" });
    }
    if (
      displayName &&
      typeof displayName === "string" &&
      displayName.length > MAX_DISPLAY_NAME_LENGTH
    ) {
      return res.status(400).json({ error: "displayName too long" });
    }

    const normalized = normalizeUsername(username);
    if (!normalized) {
      return res.status(400).json({ error: "username is invalid" });
    }

    const existing = await lookupByUsername(normalized);

    if (existing) {
      if (!verifyPassword(password, existing.salt, existing.passwordHash)) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      existing.lastSeen = new Date().toISOString();
      await registerIdentity(normalized, existing);

      const transcript = await getTranscript(existing.uid);
      return res.status(200).json({
        uid: existing.uid,
        displayName: existing.displayName,
        house: transcript?.house ?? null,
        transcript,
        isNew: false,
      });
    }

    const uid = generateUid(normalized);
    const house = sortIntoHouse(uid);
    const salt = generateSalt();
    const pwHash = hashPassword(password, salt);
    const name =
      displayName && typeof displayName === "string" && displayName.trim()
        ? displayName.trim()
        : normalized;
    const now = new Date().toISOString();

    const record: IdentityRecord = {
      uid,
      username: normalized,
      passwordHash: pwHash,
      salt,
      displayName: name,
      role: "student",
      createdAt: now,
      lastSeen: now,
    };

    await registerIdentity(normalized, record);

    const transcript = createFreshTranscript(uid, name, house);
    await saveTranscript(transcript);

    return res.status(201).json({
      uid,
      displayName: name,
      house,
      transcript,
      isNew: true,
    });
  } catch (err) {
    console.error("admission error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again." });
  }
}
