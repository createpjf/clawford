import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  lookupByAnchor,
  registerIdentity,
  getTranscript,
  saveTranscript,
  createFreshTranscript,
} from "./_lib/blob";
import type { IdentityRecord } from "./_lib/blob";
import { normalizeAnchor, generateUid, sortIntoHouse, MAX_ANCHOR_LENGTH, MAX_DISPLAY_NAME_LENGTH } from "./_lib/identity";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { anchor, displayName } = req.body ?? {};

  if (!anchor || typeof anchor !== "string" || anchor.trim().length === 0) {
    return res.status(400).json({ error: "anchor is required" });
  }
  if (anchor.length > MAX_ANCHOR_LENGTH) {
    return res.status(400).json({ error: `anchor must be at most ${MAX_ANCHOR_LENGTH} characters` });
  }
  if (displayName && typeof displayName === "string" && displayName.length > MAX_DISPLAY_NAME_LENGTH) {
    return res.status(400).json({ error: `displayName must be at most ${MAX_DISPLAY_NAME_LENGTH} characters` });
  }

  const normalized = normalizeAnchor(anchor);
  const existing = await lookupByAnchor(normalized);

  if (existing) {
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
  const name =
    displayName && typeof displayName === "string" && displayName.trim()
      ? displayName.trim()
      : uid;
  const now = new Date().toISOString();

  const record: IdentityRecord = {
    uid,
    anchor: normalized,
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
}
