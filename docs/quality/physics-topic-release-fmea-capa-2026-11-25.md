# SkillUp Physics — Physical Quantities Release FMEA & CAPA

**Record:** PQ-FMEA-CAPA-2026-11-25  
**Scope:** Learn, Simulator, Practice, shared topic stylesheet and GitHub Pages release path  
**Evidence:** User-provided Android screenshots; repository HTML/CSS; service-worker source; GitHub Actions history  
**Assessment note:** S/O/D values are engineering estimates (1–10), not measured production incident statistics. RPN = Severity × Occurrence × Detectability.

## Incident statement

The deployed/mobile experience did not match the intended topic design. The screenshots showed a missing topic hero, incomplete Learn/Simulator/Practice navigation, answer options rendered with a green default appearance, and inconsistent page shells. A successful commit or earlier deployment did not prove that the browser had loaded the intended asset versions.

## FMEA

| Failure mode | Evidence / likely mechanism | Effect | S | O | D | RPN | Risk |
|---|---|---|---:|---:|---:|---:|---|
| Stale HTML/CSS shown after deployment | Topic stylesheet was versioned independently; service worker used a persistent cache and did not treat the new topic CSS as a network-first theme asset | User sees old layout after successful deploy | 8 | 6 | 7 | 336 | High |
| Answer options inherit legacy green styling | Multiple inline and shared CSS generations; broad/high-specificity selectors can override neutral option styling | Correct/incorrect states become ambiguous before answer selection | 7 | 7 | 6 | 294 | High |
| Navigation/hero differs between topic pages | Separate markup and duplicated styles across Learn, Simulator and Practice | Broken learning flow and inconsistent product quality | 6 | 6 | 6 | 216 | High |
| Deployment not gated by topic-specific regression checks | Existing workflow had no test for this three-page topic contract | Regression can pass generic build and publish | 8 | 6 | 8 | 384 | High |
| Multiple push-triggered deployments overlap | Several commits in quick succession produced cancelled/queued runs | Confusing release status and risk of checking an intermediate deployment | 6 | 5 | 6 | 180 | Medium |

## Root-cause analysis

1. **CSS cascade debt:** old page-level rules and later shared rules were layered rather than consolidated. Selector specificity and important declarations made the visible state dependent on rule order.
2. **Cache invalidation gap:** the service worker cache version and fresh-theme policy did not explicitly include the Physical Quantities shared stylesheet; the page stylesheet URL also needed a new version after changes.
3. **Architecture drift:** Learn, Simulator and Practice had independently evolved markup, resulting in different hero/navigation arrangements.
4. **Release-control gap:** no automated topic-specific gate checked the page shell, three-way navigation, neutral answer state, preserved question count and simulator families before publishing.

## Corrective actions completed

| Action | Implementation | Verification |
|---|---|---|
| CA-01 | Replaced accumulated topic stylesheet with one authoritative v2 stylesheet | Source contains explicit neutral, selected, correct and incorrect answer rules |
| CA-02 | Neutral answer rule excludes selected/correct/wrong states; only explicit state classes receive tinted backgrounds | Release test checks the neutral rule and state rules |
| CA-03 | Added a cache-busted stylesheet URL to all three pages | All three HTML files reference the v2 cache-busting query |
| CA-04 | Advanced service-worker cache to v7 and made the topic stylesheet network-first | Source check in release gate |
| CA-05 | Standardized topic hero and all three navigation links across Learn, Simulator and Practice | Release gate checks all three pages |
| CA-06 | Preserved the 30-question bank, quiz controls, nine conversion families and existing page progress logic | Release gate checks these source invariants |

## Preventive actions / CAPA

1. **PA-01 — Mandatory pre-deploy regression:** tests/test_physics_topic_release.py runs in GitHub Actions before Pages artifact upload. A failed assertion blocks deployment.
2. **PA-02 — Cache version discipline:** any shared CSS change must update the linked asset version. Service-worker cache version changes when cache policy or offline asset behavior changes.
3. **PA-03 — One source of truth:** topic-level visual rules belong in the shared topic stylesheet; remove new inline overrides instead of appending another style block.
4. **PA-04 — Explicit interaction states:** answer options must have a neutral default and mutually exclusive selected/correct/wrong states. Never style every option green by default.
5. **PA-05 — Release evidence:** record the deployed commit SHA and successful build/deploy run. Do not label a commit as deployed until the deploy job succeeds.
6. **PA-06 — Device verification:** after deployment, check Learn, Simulator and Practice on a narrow Android viewport; confirm the third navigation item is visible, default options are neutral, and correct/incorrect feedback appears only after checking an answer.
7. **PA-07 — Regression scope:** keep content IDs, question banks, answer keys, converter calculations and saved progress outside design-only changes.

## Release acceptance criteria

- [ ] All three pages load the same versioned shared topic stylesheet.
- [ ] All three pages show the same three destination links.
- [ ] Practice options are white/neutral before selection.
- [ ] Selected, correct and incorrect states are visually distinct.
- [ ] Learn hero and lesson cards fit a 360–430 px viewport without horizontal overflow.
- [ ] Simulator converter supports all nine existing quantity families.
- [ ] All 30 MCQs and their explanations remain intact.
- [ ] Existing local/cloud progress restoration remains intact.
- [ ] The CAPA test passes in the build job.
- [ ] GitHub Pages deploy job succeeds for the final commit.
- [ ] Live Android browser verification is recorded separately from source/build verification.

**Current limitation:** automated source/build checks do not replace a real browser screenshot test. Live visual acceptance remains pending until the published pages are inspected on-device.
