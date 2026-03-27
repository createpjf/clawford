import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getWallIndex, getTranscript, saveTranscript } from "./_lib/blob.js";
import { applyRateLimit, isAdmin } from "./_lib/security.js";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!applyRateLimit(req, res)) return;
  if (!isAdmin(req)) {
    return res.status(403).json({ error: "Forbidden: admin required" });
  }

  try {
    const wall = await getWallIndex();
    let updated = 0;
    let skipped = 0;

    for (const student of wall.students) {
      const transcript = await getTranscript(student.uid);
      if (!transcript) {
        skipped++;
        continue;
      }
      await saveTranscript(transcript);
      updated++;
    }

    return res.status(200).json({
      ok: true,
      processed: wall.students.length,
      updated,
      skipped,
      message: "Student wall backfill complete.",
    });
  } catch (err) {
    console.error("backfill student wall error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again." });
  }
}
