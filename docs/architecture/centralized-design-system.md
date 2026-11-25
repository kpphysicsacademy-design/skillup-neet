# SkillUp centralized architecture and design foundation

Version 1.0. Status: additive foundation; subject-page migration is staged separately.

## Goals
- Preserve all five subject curricula, question banks, URLs and learning progress.
- Establish one shared visual language for Physics, Chemistry, Botany, Zoology and Mathematics.
- Migrate one page archetype at a time, beginning with Botany as the visual reference.
- Avoid global CSS overrides and avoid changing legacy pages merely by adding this foundation.

## Layers
1. Platform shell: brand/header, responsive page container, navigation and accessibility primitives.
2. Subject home: subject identity, hero, search and canonical concept path.
3. Concept experience: Learn, Practice, Simulator and Cheat Sheet pages.
4. Assessment: topic quizzes, daily tests, timed exam sessions and result review.
5. Progress services: authenticated identity, subject/concept progress, scores, streaks, mistakes and resume state.
6. Content registry: canonical concept IDs, page routes and question-bank references.

## Canonical concept identity
Every concept must have a stable, subject-qualified ID. Display titles are not identifiers. A registry entry maps subjectId, conceptId, title, unitId, routes.learn, routes.practice, optional routes.simulator, routes.cheatSheet and questionBankId.

Do not infer a question-bank match from a title substring. Do not silently fall back to an unrelated bank. Legacy aliases must be explicit and tested.

## Standard page archetypes
- Subject home: subject hero, search, unit/concept path and progress summary.
- Learn: one concept explanation at a time, worked example, one Quick Check at a time, immediate explanation and retry.
- Practice: topic questions, answer feedback, explanation, score, mistake review and retry.
- Simulator: clear controls, live outputs, reset and accessible non-animated fallback.
- Cheat Sheet: concise definitions, formula/key facts, worked example and links to Learn/Practice.
- Test: clear instructions, timer, question navigator, save/resume policy, submit confirmation and results.

A page must not advertise a route that does not exist. If a simulator is not educationally meaningful for a concept, show an intentional unavailable state rather than a broken link.

## Design system files
- assets/skillup-design-tokens.css: shared colour, spacing, radius, typography and shadow tokens.
- assets/skillup-platform.css: opt-in, namespaced .su-* presentation primitives.

These files intentionally do not reset body, headings, links or generic buttons. Existing pages are not affected until they explicitly load these files and adopt the shared classes.

## Safe adoption
Load tokens before components:
<link rel="stylesheet" href="/assets/skillup-design-tokens.css">
<link rel="stylesheet" href="/assets/skillup-platform.css">

Migrate one page archetype at a time. Compare desktop and mobile screenshots, test all links and state transitions, then expand to the next subject. Keep curriculum data and page routing separate from presentation.

## Progress and data rules
- User-owned progress is keyed by authenticated UID, subject ID and stable concept ID.
- Never treat a display name, email address or client-provided user ID as authorization.
- Firestore security rules remain the authorization boundary.
- Resume resolves only against the user's permitted subject/concept catalogue.
- Progress writes are idempotent; quiz submission must not double-award score/XP on replay.
- Preserve offline/local progress only as a clearly scoped cache; reconcile it with authenticated cloud progress.
- Do not merge subject progress stores without account-isolation and legacy-migration regression tests.

## Rollout sequence
1. Additive design tokens, shared primitives and CI contract test (this change).
2. Migrate Botany subject-home archetype and verify existing routes/content.
3. Migrate Learn, Practice, Simulator and Cheat Sheet archetypes using one Botany concept.
4. Verify concept registry and question-bank resolution.
5. Migrate Physics, Chemistry, Zoology and Mathematics one subject at a time.
6. Add cross-subject progress and Test Centre end-to-end regression coverage.
7. Enable production deployment only after CI and manual mobile/browser verification.

## Acceptance criteria
- No curriculum, question-bank or canonical route deletion during visual migration.
- No duplicate global CSS resets or unscoped subject styles added by the shared foundation.
- Keyboard focus is visible; reduced-motion preference is respected.
- Mobile layout has no horizontal overflow at 320px viewport width.
- Every displayed Learn/Practice/Simulator/Cheat Sheet link resolves to the correct concept.
- Progress is isolated by authenticated account and stable concept identity.
