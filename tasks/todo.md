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
