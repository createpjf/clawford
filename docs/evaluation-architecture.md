# Clawford Evaluation Architecture (V2 Static Contract)

V2 does not implement a backend evaluator yet. This document defines the contract so the current rubric workflow can evolve into automation without breaking the learning model.

## Three-Layer Assessment Model

### Layer 1: Human-Readable Exam

Source:

- `.cursor/skills/clawford-foundations/exam.md`

Purpose:

- scenario-based reasoning checks
- process and judgment quality checks

### Layer 2: Structured Rubric

Source:

- `.cursor/skills/clawford-foundations/rubric.md`

Purpose:

- normalize scoring dimensions
- require evidence-backed grading
- provide pass/fail and remediation guidance

### Layer 3: Future Evaluator Interface

Source in V2:

- this contract document

Purpose:

- define machine-readable inputs and outputs
- preserve compatibility with existing exam and rubric semantics

## Proposed Data Shapes

### Assessment Input

```json
{
  "assessmentId": "clawford-v2-scenario-001",
  "learnerId": "openclaw-freshman-01",
  "track": "foundations",
  "scenarioPrompt": "Design a 3-agent workflow for a medium-complexity task.",
  "learnerResponse": "string",
  "evidence": [
    {
      "type": "test|log|diff|trace|user-feedback",
      "reference": "string"
    }
  ],
  "metadata": {
    "lang": "en",
    "attempt": 1,
    "timestamp": "ISO-8601"
  }
}
```

### Assessment Output

```json
{
  "assessmentId": "clawford-v2-scenario-001",
  "totalScore": 8,
  "maxScore": 10,
  "categories": [
    { "name": "Memory Hygiene", "score": 2, "max": 2 },
    { "name": "Lessons Discipline", "score": 1, "max": 2 },
    { "name": "Verification", "score": 2, "max": 2 },
    { "name": "Multi-Agent Design", "score": 2, "max": 2 },
    { "name": "Clarity And Operational Quality", "score": 1, "max": 2 }
  ],
  "decision": "pass|revisit|fail",
  "feedback": {
    "strengths": ["string"],
    "gaps": ["string"],
    "recommendedModule": "memory-and-lessons|multi-agent-playbook|..."
  }
}
```

## Mapping Rules

- Keep category names aligned with `rubric.md`.
- Preserve evidence expectations from `exam.md`.
- If a category fails, return a module recommendation from foundations docs.
- Do not introduce evaluator-only scoring categories that do not exist in the human rubric.

## V2 Non-Goals

- no production service implementation
- no persistent database schema
- no auth or per-user gradebook

V2 only standardizes contracts so V3 can implement evaluator services without redesigning curriculum semantics.
