import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  lookupByAnchor,
  registerIdentity,
  getTranscript,
  saveTranscript,
} from "./_lib/blob";
import { normalizeAnchor, isValidUid, MAX_ANCHOR_LENGTH, MAX_DISPLAY_NAME_LENGTH } from "./_lib/identity";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method === "GET") {
    return handleGet(req, res);
  }
  if (req.method === "PATCH") {
    return handlePatch(req, res);
  }
  return res.status(405).json({ error: "Method not allowed" });
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
  const { anchor, displayName } = req.body ?? {};

  if (!anchor || typeof anchor !== "string") {
    return res.status(400).json({ error: "anchor is required for auth" });
  }
  if (anchor.length > MAX_ANCHOR_LENGTH) {
    return res.status(400).json({ error: "anchor too long" });
  }
  if (!displayName || typeof displayName !== "string" || !displayName.trim()) {
    return res.status(400).json({ error: "displayName is required" });
  }
  if (displayName.length > MAX_DISPLAY_NAME_LENGTH) {
    return res.status(400).json({ error: `displayName must be at most ${MAX_DISPLAY_NAME_LENGTH} characters` });
  }

  const normalized = normalizeAnchor(anchor);
  const identity = await lookupByAnchor(normalized);
  if (!identity) {
    return res.status(404).json({ error: "Identity not found" });
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
