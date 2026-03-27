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

# README ASCII Logo Refresh

- [x] Remove the `river` text from the README ASCII logo
- [x] Redraw the mark as a cleaner claw-above-ford composition
- [x] Keep the `Clawford` / `Oxford` wordplay in prose, not inside the art
- [x] Review the README copy for consistency after the logo change

## Review

- README identity section now keeps the `Oxford` wordplay in prose only
- ASCII mark now reads as a claw above a ford without embedded English labels
- No linter issues were reported for the edited files

# Website Identity Sync

- [x] Replace the homepage hero ASCII art with the updated claw-above-ford mark
- [x] Update hero identity copy so it matches the new claw/ford concept
- [x] Verify the site still builds after the identity sync

## Review

- `src/components/Hero.tsx` now uses the updated claw-above-ford ASCII mark and matching accessibility label
- `src/i18n/en.ts` and `src/i18n/zh.ts` now describe the identity as name-based wordplay with a claw-above-ford symbol
- `npm run build` succeeds after the homepage identity sync

# Centralized Agent Onboarding And Student Wall

- [x] Define identity-binding contract: `docs/schemas/identity-binding.schema.json` with UID format `CLW-{8hex}`, anchor mapping, displayName, role, house
- [x] Rename `learnerId` to `uid` across all schemas (transcript, credential, assessment) for universal identity
- [x] Add Vercel Blob-backed API: `api/admission.ts`, `api/transcript.ts`, `api/progress.ts`, `api/students.ts`
- [x] Add API lib: `api/_lib/blob.ts` (registry, transcript, wall-index CRUD), `api/_lib/identity.ts` (UID generation, house sorting)
- [x] Refactor terminal: anchor input + real enrollment instead of simulated timer logs
- [x] Refactor Sorting Hat: no manual ID entry, display server-issued UID, editable displayName only
- [x] Move progress to server truth: module completion and exam pass via POST `/api/progress`
- [x] Add session context: `src/contexts/SessionContext.tsx` (connect, studyModule, takeExam, updateDisplayName, localStorage persistence)
- [x] Add client-side routing: react-router-dom for `/students` page, Vercel rewrite in `vercel.json`
- [x] Add homepage student wall section: top-6 by credits from `GET /api/students`
- [x] Add full `/students` page: ranked table with UID, displayName, house, credits, modules, exam status
- [x] Update i18n: remove "simulation" wording, add student wall strings in en/zh
- [x] Update existing tests for new architecture (Router + SessionProvider + mocked fetch)
- [x] Add new identity/schema tests: UID determinism, house determinism, schema pattern validation
- [x] Full verification: 0 type errors, 0 lint errors, build succeeds, 34/34 tests pass

## Review

Full centralized onboarding and student wall implementation completed.

- 4 API routes (`admission`, `transcript`, `progress`, `students`) with Vercel Blob persistence
- Identity binding schema defines UID format, write authority, and Blob storage layout
- All 3 existing schemas updated: `learnerId` → `uid` for universal identity (students + professors)
- Terminal section now accepts an anchor input for real enrollment instead of simulated flow
- Sorting Hat shows server-assigned UID and house with editable displayName only
- Session context manages connection state, persists anchor in localStorage, and provides API-backed actions
- Homepage features a student wall highlight section; `/students` page shows a ranked student directory
- 34 tests pass covering legacy profile hook, new identity logic, schema patterns, App routing, and enrollment flow

# Code Review Fixes (Post-Onboarding)

- [x] C1: Add write mutex for Blob read-modify-write operations to prevent concurrent data loss
- [x] C2: Add try/catch + error display in all async UI handlers; surface error state in terminal
- [x] C3: Fix undefined CSS variables (--border -> --panel-border, --muted -> --text-muted)
- [x] C4: Memoize SessionContext.Provider value to prevent unnecessary full-tree re-renders
- [x] H1: Add input length limits, UID regex validation, moduleId allow-list on all API endpoints
- [x] H2: Increase UID hash from 8 to 16 hex chars (32-bit -> 64-bit) and update all schema patterns
- [x] H3: Add idempotency check on pass-exam (skip if already passed), accept configurable score
- [x] H4: Document Blob public access limitation; no endpoint exposes registry URL
- [x] H5: Rewrite identity tests to import actual production generateUid/sortIntoHouse functions
- [x] H6: Lift language state to App-level so StudentsPage inherits user's language choice
- [x] M1: Change StudentWallEntry.house type from string to HouseId union; remove unsafe casts
- [x] M2: Import HouseId in api/_lib/blob.ts for type consistency with frontend types
- [x] M3: Add sr-only labels to terminal inputs; add ARIA table roles to StudentsPage grid
- [x] M4: Fix SortingHat state sync (derive nameInput from prop when not editing); cleanup setTimeout
- [x] M5: Add error/loading states to StudentWallSection and StudentsPage (no more silent swallowing)
- [x] M6: Translate 4 untranslated section titles in zh.ts to Chinese
- [x] M7: Add required arrays to assessment schema top-level and transcript assessmentResults items; reconcile house-assignment docs
- [x] M8: Add prefers-reduced-motion media query for all animations
- [x] L3: Replace single /students rewrite with SPA catch-all in vercel.json
- [x] L4: Improve anchor normalization (whitespace collapse)
- [x] L5: Cap terminal logs at 200 entries to prevent unbounded growth
- [x] L7: Rename CourseStatus_Display to CourseStatusDisplay (PascalCase consistency)
- [x] Full verification: 0 type errors, 0 lint errors, build succeeds, 35/35 tests pass

## Review

Code review fixes completed across all 4 phases.

- Security: write mutex, input validation (length limits, UID regex, moduleId allow-list), exam idempotency
- Correctness: UID collision risk reduced from ~65K to ~4B users, CSS variables fixed, context memoized
- UX/a11y: error feedback in terminal, ARIA labels/table roles, prefers-reduced-motion, i18n completeness
- Maintainability: shared language state, HouseId type safety, PascalCase naming, terminal log cap, SPA catch-all
