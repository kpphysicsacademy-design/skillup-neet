# SkillUp — Official NEET Release

This repository is the production publication repository for **SkillUp v1.0**, focused on the NEET syllabus.

## Release scope

- NEET Physics
- NEET Chemistry
- NEET Biology
- Production quiz engine and navigation
- Verified MCQs, answers, scoring, and specific explanations
- Mobile and desktop readiness

## Current publication status

- **Repository:** connected and writable
- **Branch:** `main`
- **Release:** `SkillUp v1.0.0 — Official NEET Release`
- **Physics path source:** `full-physics-path.html` created
- **Physics test engine:** `physics-chapter-test.html` created
- **Physics chapter structure:** Class 11 and Class 12 chapter links created
- **GitHub Pages deployment workflow:** `.github/workflows/deploy.yml` added; deploys the `main` branch on push
- **Live-site synchronization:** requires GitHub Pages to be enabled for this repository and the `skillupedu.in` custom domain to be configured/verified in repository Pages settings

## Physics publication files

- `full-physics-path.html` — complete Physics chapter navigation
- `physics-chapter-test.html` — chapter test/MCQ engine using the `?chapter=` parameter

## Release principle

Every published MCQ must have:

**Question → Options → Correct Answer → Specific Explanation → Concept**

Generic filler explanations are not acceptable.

## Version

**SkillUp v1.0.0 — Official NEET Release**

Release preparation is performed only after end-to-end verification of content, quiz behavior, navigation, responsiveness, and production safety.


## Text-to-speech (Listen button)

- `skillup-tts.js` adds browser-based Listen and Stop controls without Firebase, an API key, or a paid service.
- The default speech language is English (India) (`en-IN`). The helper selects an installed matching voice when available; actual voice availability depends on the learner's browser and device.
- The first integration is `physics-physical-quantities.html`.
- To enable it on another Firebase-independent HTML page, add this immediately before `</body>`:

  ```html
  <script src="/skillup-tts.js?v=20261021-tts-v1"></script>
  ```

- Quiz pages with `#question` and `#options` read the current question and available answer choices. Otherwise, the helper reads the main page content. Selecting text before pressing Listen reads only the selection.
- Test on the target browser/device. Some Android WebViews may not support Web Speech API; use Chrome or a compatible browser for the initial test.
