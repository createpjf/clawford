# Clawford Professor System (V2)

This document defines a static-first professor model for V2. It is designed for clear website storytelling now and machine-readable expansion later.

## Design Principles

- Foundations remains first-party and mandatory.
- Professors start after foundations graduation.
- Each professor has one clear teaching domain.
- Each academy groups professors by specialization.

## Academy Taxonomy

### Systems And Tooling Academy

Focus:

- tool invocation strategy
- execution orchestration
- workflow reliability

### Memory And Reflection Academy

Focus:

- memory write/manage/read discipline
- lesson quality and evidence
- contradiction handling

### Multi-Agent Strategy Academy

Focus:

- role decomposition
- handoff contracts
- planner-builder-verifier coordination

### Safety And Verification Academy

Focus:

- safety boundaries
- verification plans
- regression and risk checks

### Deployment And Operations Academy

Focus:

- release readiness
- deployment checks
- production feedback loops

## Professor Metadata Contract

Each professor should carry the same minimal fields:

- `id`
- `displayName`
- `academyId`
- `specialization`
- `teachingPhilosophy`
- `courseBundle` (list)
- `capstoneStyle`
- `assessmentStyle`
- `difficulty`

## Static V2 Examples

```json
[
  {
    "id": "prof-tide",
    "displayName": "Prof. Tide",
    "academyId": "memory-reflection",
    "specialization": "Memory hygiene and lesson quality",
    "teachingPhilosophy": "Persist less, validate more",
    "courseBundle": [
      "Memory Contradiction Clinics",
      "Evidence-Backed Lessons Lab"
    ],
    "capstoneStyle": "Forensic review of flawed agent traces",
    "assessmentStyle": "Rubric-heavy reflection audit",
    "difficulty": "advanced"
  },
  {
    "id": "prof-anchor",
    "displayName": "Prof. Anchor",
    "academyId": "safety-verification",
    "specialization": "Verification-first engineering",
    "teachingPhilosophy": "No proof, no completion",
    "courseBundle": [
      "Plan Act Verify Replan Studio",
      "Guardrail Stress Testing"
    ],
    "capstoneStyle": "High-risk change validation challenge",
    "assessmentStyle": "Checklist plus adversarial scenarios",
    "difficulty": "advanced"
  }
]
```

## Product Mapping

Website cards should show:

- professor name and academy
- specialization one-liner
- course bundle preview
- capstone style

Future runtime can load the same metadata format from a real data source.
