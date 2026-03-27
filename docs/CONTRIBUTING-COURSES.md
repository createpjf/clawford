# Contributing a Course to Clawford

This guide explains how open-source developers can contribute professor-led courses to Clawford University. Every course goes through the same pipeline: submit a PR, pass review, get published.

## Prerequisites

Before contributing a course, familiarize yourself with:

- [Course Package Schema](schemas/course-package.schema.json) — the machine-readable contract every course must satisfy
- [Foundations Course Package](foundations-course-package.json) — the canonical first-party reference implementation
- [Review Pipeline](review-pipeline.md) — how submissions are evaluated
- [Professor System](professor-system.md) — the academy taxonomy and professor model

## Required Directory Structure

Every course lives under `.cursor/skills/{course-id}/`:

```
.cursor/skills/{course-id}/
├── SKILL.md              # Agent-facing skill entry point (with frontmatter)
├── course.json           # Machine-readable course package (schema-conformant)
├── curriculum.md         # Human-readable curriculum map
├── lessons/
│   ├── lesson-1-{slug}.md
│   ├── lesson-2-{slug}.md
│   └── ...
├── exam.md               # Final exam
├── rubric.md             # Grading rubric
└── README.md             # Optional: human-readable overview for GitHub
```

## Naming Conventions

| Element | Convention | Examples |
|---------|-----------|----------|
| course-id | lowercase, hyphenated, globally unique | `flock-101`, `solana-agents-201` |
| Lesson files | `lesson-{N}-{slug}.md`, N is 1-indexed | `lesson-1-what-is-flock.md` |
| Module codes | `{PREFIX}-{NNN}` pattern | `FLK-01`, `SOL-201` |
| SKILL.md frontmatter `name` | must match course-id | `name: flock-101` |

## course.json

Every course must include a `course.json` that conforms to [`schemas/course-package.schema.json`](schemas/course-package.schema.json).

A ready-to-copy template is available at [`templates/course.json.template`](templates/course.json.template).

### Key Rules

- `id` must match your course-id directory name.
- `prerequisites` **must** include `"clawford-foundations"`. Agents must complete foundations before any elective.
- `instructor.type` must be `"third-party"` for community-contributed courses.
- `reviewStatus.status` must be `"draft"` when you open the PR. First-party reviewers set it to `"published"` on merge.
- `manifest` fields (`networkAccess`, `executionRequired`, `sandboxRecommended`) must honestly reflect what the course content requires.
- All `contentPath` references must point to files that exist in your directory.

### Validation

```bash
# Using ajv-cli
npm install -g ajv-cli
ajv validate -s docs/schemas/course-package.schema.json -d .cursor/skills/{course-id}/course.json

# Using python jsonschema
pip install jsonschema
python -m jsonschema -i .cursor/skills/{course-id}/course.json docs/schemas/course-package.schema.json
```

## Website Data Entry

In addition to the skill package, you must add an entry to `src/data/courses.ts` so your course appears in the website's Course Catalog.

Follow the `ElectiveCourse` type defined in `src/types.ts`. Key fields:

- `status`: set to `"pending"` in your PR. Reviewers change it to `"reviewed"` before merge.
- `skillPath`: relative path to your skill directory (e.g. `".cursor/skills/flock-101"`).
- All `Localized` fields require `en` at minimum. `zh` is encouraged for bilingual courses.
- Pick a `theme` color from the existing set: `amber`, `cyan`, `violet`, `emerald`, `orange`, `red`, `sky`, `rose`, `teal`, `indigo`.
- Pick an appropriate icon from `lucide-react`.

## SKILL.md Format

Your `SKILL.md` must include YAML frontmatter:

```yaml
---
name: {course-id}
description: A concise description of the course for agent discovery.
---
```

The body should contain: course title, instructor info, structure overview, usage instructions, and learning outcomes.

## Lesson Content

Each lesson file should cover one coherent topic. Recommended structure:

1. **Title and learning objective** — what the learner will understand after this lesson
2. **Core content** — the teaching material, with clear explanations
3. **Key takeaways** — bullet-point summary
4. **Knowledge check** — 2-3 questions to verify understanding

Bilingual courses should interleave both languages naturally, with key concepts provided in both.

## Assessment Requirements

- `exam.md` must contain a meaningful final assessment (MCQ, short answer, scenario-based, or a combination).
- `rubric.md` must define 3-6 grading categories with clear scoring descriptors.
- Passing threshold should be between 50% and 100% (declared in `course.json`).

## PR Checklist

Include this checklist in your PR description:

```markdown
### Course Contribution Checklist

- [ ] `.cursor/skills/{course-id}/` directory with all required files
- [ ] `course.json` validates against `docs/schemas/course-package.schema.json`
- [ ] `prerequisites` includes `"clawford-foundations"`
- [ ] `reviewStatus.status` is `"draft"`
- [ ] Entry added to `src/data/courses.ts` with `status: "pending"`
- [ ] Every lesson file exists and is referenced in `course.json` modules
- [ ] `exam.md` + `rubric.md` present with 3-6 rubric categories
- [ ] No secrets, API keys, or unsafe instructions in lesson content
- [ ] Manifest safety declarations match actual content
- [ ] `SKILL.md` has valid frontmatter with `name` and `description`
```

## What Happens After You Open a PR

1. **Automated checks**: schema validation, asset integrity, safety lint (run by reviewers).
2. **Human review**: pedagogy quality, assessment fairness, operational correctness. See [review-pipeline.md](review-pipeline.md) for the five review lanes.
3. **Revision if needed**: reviewer posts findings, you update the PR.
4. **Approval**: reviewer sets `status: "reviewed"` in `courses.ts` and `reviewStatus.status: "published"` in `course.json`.
5. **Merge**: course appears on the Clawford website and becomes available as a Cursor skill.

## Review Criteria Summary

| Lane | What Reviewers Check |
|------|---------------------|
| Schema | course.json structure, field completeness |
| Safety | no unsafe tool instructions, honest manifest declarations, no secrets |
| Pedagogy | clear learning objectives, complete lesson structure, realistic examples |
| Assessment | rubric alignment with outcomes, fair grading, anti-gaming resilience |
| Operational | all file paths resolve, skill loads correctly, no duplicates |

## Questions?

Open an issue on the repository or reference this guide in your PR for context.
