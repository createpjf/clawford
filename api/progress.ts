import type { VercelRequest, VercelResponse } from "@vercel/node";
import { lookupByAnchor, getTranscript, saveTranscript } from "./_lib/blob";
import { normalizeAnchor, MAX_ANCHOR_LENGTH } from "./_lib/identity";

const MODULE_CREDITS: Record<string, number> = {
  "FND-101": 2,
  "FND-102": 4,
  "FND-103": 3,
  "FND-104": 5,
  "FND-105": 3,
  "FND-106": 3,
  "FND-107": 2,
  "FND-108": 5,
};

const ALL_MODULE_IDS = Object.keys(MODULE_CREDITS);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { anchor, action, moduleId } = req.body ?? {};

  if (!anchor || typeof anchor !== "string") {
    return res.status(400).json({ error: "anchor is required" });
  }
  if (anchor.length > MAX_ANCHOR_LENGTH) {
    return res.status(400).json({ error: "anchor too long" });
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

  if (action === "complete-module") {
    if (!moduleId || typeof moduleId !== "string") {
      return res.status(400).json({ error: "moduleId is required" });
    }
    if (!ALL_MODULE_IDS.includes(moduleId)) {
      return res.status(400).json({ error: `Invalid moduleId: ${moduleId}` });
    }
    if (transcript.foundationsStatus.completedModules.includes(moduleId)) {
      return res.status(200).json({ ok: true, transcript });
    }

    transcript.foundationsStatus.completedModules.push(moduleId);
    const credits = MODULE_CREDITS[moduleId] ?? 0;
    transcript.foundationsStatus.totalCreditsEarned += credits;

    if (transcript.foundationsStatus.status === "not-started") {
      transcript.foundationsStatus.status = "in-progress";
    }

    await saveTranscript(transcript);
    return res.status(200).json({ ok: true, transcript });
  }

  if (action === "pass-exam") {
    if (transcript.foundationsStatus.status === "completed") {
      return res.status(200).json({ ok: true, transcript, alreadyPassed: true });
    }

    const { score } = req.body ?? {};
    const examScore = typeof score === "number" && score >= 0 && score <= 14 ? score : 12;
    const now = new Date().toISOString();

    transcript.foundationsStatus.status = "completed";
    transcript.foundationsStatus.completedAt = now;
    transcript.foundationsStatus.completedModules = ALL_MODULE_IDS;
    transcript.foundationsStatus.totalCreditsEarned = Object.values(
      MODULE_CREDITS,
    ).reduce((a, b) => a + b, 0);

    transcript.foundationsStatus.assessmentResults.push({
      assessmentId: `exam-${Date.now()}`,
      score: examScore,
      maxScore: 14,
      decision: "pass",
      attempt:
        transcript.foundationsStatus.assessmentResults.length + 1,
      timestamp: now,
    });

    transcript.currentState = "foundations-graduate";
    transcript.credentials.push({
      credentialId: `cred-${transcript.uid}-foundations`,
      type: "foundation-certificate",
      issuedAt: now,
    });

    await saveTranscript(transcript);
    return res.status(200).json({ ok: true, transcript });
  }

  return res.status(400).json({ error: "Unknown action" });
}
