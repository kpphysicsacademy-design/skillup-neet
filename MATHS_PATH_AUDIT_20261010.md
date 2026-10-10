# SkillUp Maths Path Audit — 10 October 2026

## Scope and architecture

- Repository: `kpphysicsacademy-design/skillup-neet`
- Path index: `maths-home.html`
- Concept router / lesson / quiz renderer: `maths-path-concept.html`
- Curriculum source: `maths-path-data.js`
- Active concept quiz bank: `maths-quiz-bank.js`
- Legacy bank candidate: `maths-question-bank.js`

The curriculum currently contains **369 concepts across six stages**: Class 8 Foundation (33), Class 9 Core (34), Class 10 Bridge (43), Class 11 Senior Core (80), Class 12 Advanced Core (74), and JEE Mastery (105).

## Findings

1. **Quiz coverage is incomplete.** A static match of curriculum concepts against quiz-bank keys and explicit quiz-selection branches finds approximately **111/369 concepts** with a direct match. This is an estimate: aliases and inline branches make exact static matching imperfect. Many Class 11, Class 12, and JEE concepts still need dedicated question banks.
2. **Learn coverage is uneven.** The concept router contains about 105 concept-specific lesson branches. Other topics previously fell through to a placeholder that explicitly said the lesson needed expansion.
3. **The legacy `maths-question-bank.js` file does not parse as valid JavaScript.** It contains malformed/overlapping question-bank entries. The active concept page currently loads `maths-quiz-bank.js`, not the legacy file; do not wire the legacy file into the live page until it has been repaired and validated.
4. **The previous quiz UI claimed every quiz had 30 questions**, although some banks had only six questions. That mismatch has been corrected for the eight short banks expanded in this release.
5. **Live browser verification remains outstanding.** Repository source and inline JavaScript syntax were checked, but a real browser smoke test of all live routes, MathJax rendering, mobile layouts, and quiz interactions is still required.

## Improvements committed in this release

- Replaced the generic Learn placeholder with a guided scaffold: learning outcomes, a four-step study method, a topic-specific concept check when a bank exists, and common-error reminders.
- Added validation so malformed question rows are filtered before a quiz starts. Empty or invalid banks show an explicit recovery message rather than a blank quiz.
- Expanded these eight banks from 6 to 30 questions each: Standard quadratic equations, Factorisation method, Values of standard angles, Trigonometric identities, Median of grouped data, Mode of grouped data, Heights and distances, and Classical probability.
- Corrected identified answer keys and duplicate MCQs, removed duplicate options, and balanced correct-answer positions across those eight expanded banks.
- Added final quiz percentage, a mastery-level message, and a review section for missed questions.
- Updated the Maths path and concept-page cache-busting release to `20261010-maths-world-class-audit-v1`.

## Validation snapshot

- 369 curriculum concepts across six stages.
- 64 active quiz-bank topics and 1,920 question rows (30 per topic).
- Active quiz bank passed structural checks: four options per row, valid answer indices, explanations present, no duplicate question stems within a topic, and no duplicate options within a question.
- Inline JavaScript in the concept page passed syntax compilation after the changes.

## Next priorities

1. Repair and independently validate `maths-question-bank.js` before reusing or merging any of its content.
2. Create dedicated concept-specific Learn content and 30-question banks for the remaining Class 11, Class 12, and JEE concepts; do not substitute unrelated questions.
3. Add automated curriculum-to-bank coverage checks, answer-key/content review, and duplicate-question detection to prevent regressions.
4. Smoke-test representative routes from every stage on desktop and mobile, including direct URL entry, formulas/MathJax, quiz feedback, retry, and missed-question review.
