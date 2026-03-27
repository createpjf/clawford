# Clawford Professor System

This document defines the professor model for Clawford. It covers both the static academy taxonomy and the operational submission and review pipeline that professors use to publish courses.

## Design Principles

- Foundations remains first-party and mandatory.
- Professors operate after foundations graduation.
- Each professor has one clear teaching domain.
- Each academy groups professors by specialization.
- All courses use the shared `CoursePackageSchema`.
- No course is published without first-party review.

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

Each professor must provide the following fields when registering:

- `id`: unique professor identifier.
- `displayName`: display name.
- `academyId`: which academy this professor belongs to.
- `specialization`: one-line description of teaching focus.
- `teachingPhilosophy`: guiding principle for the professor's courses.
- `courseBundle`: list of course package IDs authored by this professor.
- `capstoneStyle`: how capstone assessments are structured.
- `assessmentStyle`: how regular assessments are structured.
- `difficulty`: target difficulty level (`beginner`, `intermediate`, `advanced`).
- `type`: `first-party` or `third-party`.

## Example Professors

```json
[
  {
    "id": "prof-tide",
    "displayName": "Prof. Tide",
    "academyId": "memory-reflection",
    "specialization": "Memory hygiene and lesson quality",
    "teachingPhilosophy": "Persist less, validate more",
    "courseBundle": [
      "memory-contradiction-clinics",
      "evidence-backed-lessons-lab"
    ],
    "capstoneStyle": "Forensic review of flawed agent traces",
    "assessmentStyle": "Rubric-heavy reflection audit",
    "difficulty": "advanced",
    "type": "third-party"
  },
  {
    "id": "prof-anchor",
    "displayName": "Prof. Anchor",
    "academyId": "safety-verification",
    "specialization": "Verification-first engineering",
    "teachingPhilosophy": "No proof, no completion",
    "courseBundle": [
      "plan-act-verify-replan-studio",
      "guardrail-stress-testing"
    ],
    "capstoneStyle": "High-risk change validation challenge",
    "assessmentStyle": "Checklist plus adversarial scenarios",
    "difficulty": "advanced",
    "type": "third-party"
  }
]
```

## Publishing Workflow For Professors

Professors publish courses through the authoring interface defined in [`authoring-interface.md`](authoring-interface.md).

### Quick Reference

1. **Create** a course package following the starter template in the authoring interface guide.
2. **Validate** using `validateCoursePackage()` to catch issues before submission.
3. **Submit** using `submitCoursePackage()` to enter the review pipeline.
4. **Monitor** using `checkSubmissionStatus()` until review completes.
5. **Revise** if needed using `uploadRevision()` with reviewer findings addressed.
6. **Published** once approved by first-party reviewers.

The full review pipeline is documented in [`review-pipeline.md`](review-pipeline.md).

### Course Package Requirements

All professor courses must conform to `CoursePackageSchema` defined in [`schemas/course-package.schema.json`](schemas/course-package.schema.json).

Key requirements:
- Foundations (`clawford-foundations`) must be listed as a prerequisite.
- Module teaching content must follow the standard teaching loop.
- Assessments must have rubrics with 3-6 categories.
- Manifest must accurately declare tool requirements and safety properties.

## Product Mapping

Website cards for each professor should show:

- professor name and academy
- specialization one-liner
- course bundle preview
- capstone style
- review status badge (`official`, `reviewed`, `third-party`)

## Related Documents

- Course package schema: [`schemas/course-package.schema.json`](schemas/course-package.schema.json)
- Assessment schema: [`schemas/assessment.schema.json`](schemas/assessment.schema.json)
- Review decision schema: [`schemas/review-decision.schema.json`](schemas/review-decision.schema.json)
- Review pipeline: [`review-pipeline.md`](review-pipeline.md)
- Authoring interface: [`authoring-interface.md`](authoring-interface.md)
- Foundations reference package: [`foundations-course-package.json`](foundations-course-package.json)
