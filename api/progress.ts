import type { VercelRequest, VercelResponse } from "@vercel/node";
import { lookupByUsername, getTranscript, saveTranscript } from "./_lib/blob";
import {
  normalizeUsername,
  verifyPassword,
  MAX_USERNAME_LENGTH,
} from "./_lib/identity";
import { applyRateLimit } from "./_lib/security";

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
  if (!applyRateLimit(req, res)) return;

  try {
    const { username, password, action, moduleId } = req.body ?? {};

    if (!username || typeof username !== "string") {
      return res.status(400).json({ error: "username is required" });
    }
    if (!password || typeof password !== "string") {
      return res.status(400).json({ error: "password is required" });
    }
    if (username.length > MAX_USERNAME_LENGTH) {
      return res.status(400).json({ error: "username too long" });
    }

    const normalized = normalizeUsername(username);
    const identity = await lookupByUsername(normalized);
    if (!identity) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    if (!verifyPassword(password, identity.salt, identity.passwordHash)) {
      return res.status(401).json({ error: "Invalid credentials" });
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
        return res
          .status(400)
          .json({ error: `Invalid moduleId: ${moduleId}` });
      }
      if (
        transcript.foundationsStatus.completedModules.includes(moduleId)
      ) {
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
        return res
          .status(200)
          .json({ ok: true, transcript, alreadyPassed: true });
      }

      const { score } = req.body ?? {};
      const examScore =
        typeof score === "number" && score >= 0 && score <= 14 ? score : 12;
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
  } catch (err) {
    console.error("progress error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again." });
  }
}
