# Clawford V1 Todo

- [x] Convert the landing page into a deployable Vite app
- [x] Package the Clawford foundations as a project skill
- [x] Write curriculum, memory, collaboration, exam, and rubric docs
- [x] Add Vercel deployment metadata and docs
- [x] Capture post-build review notes

## Review

Build verification completed with `npm run build`.

- Production bundle generated successfully in `dist/`
- No IDE linter issues were reported for the edited app entry files
- Repository now contains the deployable site, the project skill, the exam, and the install docs

# Clawford Code Review Improvements

- [x] Phase 1: Add ESLint + Prettier, vite.config.js, clean dist/, add CI
- [x] Phase 2: Decompose App.jsx into components + extract i18n and data
- [x] Phase 3: Fix hardcoded English text, complete i18n coverage
- [x] Phase 4: Add ARIA attributes, focus styles, skip-nav, mobile menu
- [x] Phase 5: Install Vitest, write core interaction tests, integrate CI
- [x] Phase 6: TypeScript migration with full type definitions
- [x] Phase 7: Fix useMemo, add ErrorBoundary, fade-in animation, meta tags

## Review

Full code review improvements completed.

- 947-line monolith split into 11 components, 3 data modules, 3 i18n files, and 1 type definition file
- ESLint + Prettier + TypeScript configured with 0 errors
- GitHub Actions CI pipeline (lint, typecheck, build, test)
- 13 tests covering language switch, connect flow, module completion, and exam
- All hardcoded English text moved to i18n translation objects
- ARIA labels, skip-link, mobile hamburger menu, focus styles added
- ErrorBoundary, OG meta tags, favicon, terminal fade-in animation added

# Clawford University Architecture (V2 Expansion)

- [x] Expand foundations curriculum to 8 modules with full teaching loop
- [x] Create detailed module files (FND-101 through FND-108) with anti-patterns, worked examples, practice drills, remediation paths
- [x] Expand exam to 8 scenarios covering 7 competency dimensions
- [x] Expand rubric to 7 categories (14 points max) with module mappings
- [x] Create 5 JSON Schemas: course-package, assessment, review-decision, credential, transcript
- [x] Create first-party foundations reference course package (foundations-course-package.json)
- [x] Design complete review pipeline (draft-submit-review-publish with 5 review lanes)
- [x] Design agent-facing authoring interface (validate, submit, check status, revise)
- [x] Create course package starter template and quality checklist for professors
- [x] Update professor-system.md with publishing workflow integration
- [x] Update evaluation-architecture.md with expanded assessment contracts
- [x] Refactor src/types.ts with Professor, SubmissionStatus, LearnerState, CourseListItem entities
- [x] Expand src/data/curriculum.ts to 8 modules with codes and prerequisites
- [x] Update src/data/university.ts with proper Professor objects
- [x] Update src/data/assessment.ts with expanded criteria and docs
- [x] Update components (AcademiesSection, CurriculumSection) for new data model
- [x] Update README.md and v2-roadmap.md to reflect complete V2 state

## Review

Full university architecture implementation completed.

- TypeScript compiles clean (0 errors)
- Vite production build succeeds
- All 13 tests pass
- No linter errors in modified files
- 8 module teaching files created with standardized pedagogical structure
- 5 JSON Schemas define all data contracts for courses, assessments, reviews, credentials, transcripts
- Review pipeline spec covers automated checks (5 types) and human review (5 lanes)
- Authoring interface provides 7 operations for professor agents
- First-party foundations course package serves as reference implementation
