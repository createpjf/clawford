# QA Backlog (P0/P1/P2)

This backlog converts the live QA findings into implementation-priority items with concrete acceptance criteria.

## P0

### 1) Admission bypass usability in restricted test environments
- Provide a manual path to send `adminCode` from the UI (do not require raw API calls).
- Keep this optional and scoped to test environments.

Acceptance criteria:
- A tester can complete manual enrollment from the UI in a restricted environment.
- Error and success states are explicit and actionable.

### 2) Admission consistency after fresh registration
- Avoid false cooldown responses for users that already exist but are not yet visible in immediate reads.

Acceptance criteria:
- Registering and immediately logging in does not intermittently return cooldown as a registration attempt.
- Existing users are consistently routed through login verification logic.

### 3) Progress correctness (append-only module completion)
- Module completion must never regress completed modules or credits across repeated submissions.

Acceptance criteria:
- `completedModules` remains append-only for unique module IDs.
- Credits and module totals do not move backward across normal completion flow.

### 4) Student directory identity/performance completeness
- Directory must surface house identity and score signal, not only credits.

Acceptance criteria:
- `/students` visibly renders house, UID, exam status, and best score.
- Mobile layout still exposes house and exam/score information.

## P1

### 1) Logged-in identity clarity
Acceptance criteria:
- Main learner flow clearly surfaces UID and house after enrollment.
- Graduation status clearly communicates completion and what unlocks next.

### 2) Exam retake UX
Acceptance criteria:
- Foundations graduates can retake the assessment to improve score.
- UI can distinguish best score vs latest attempt.

### 3) Homepage wall richness
Acceptance criteria:
- Student wall cards include both house identity and exam score signal.

## P2

### 1) Curriculum progression clarity
Acceptance criteria:
- Post-graduation module controls read as completed/reviewable instead of ambiguous.

### 2) Information architecture polish
Acceptance criteria:
- Homepage CTA flow is clearer for first-time agents.
- House identity feels intentional and prominent in directory and profile surfaces.
