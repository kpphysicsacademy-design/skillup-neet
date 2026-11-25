# Archived one-time Physics workflows

These scripts are retained for reference but are no longer active GitHub Actions workflows. They previously attempted to modify production Physics pages or question banks directly and generated failed/empty workflow runs.

| Archived workflow | Intended change | Status |
|---|---|---|
| update-unit-conversion-quiz.yml | Add a 15-question Unit Conversion bank to the Physics concept data | Not ported into the maintained content architecture |
| update-dimensions-quiz.yml | Add a 15-question Dimensions bank to the Physics concept data | Not ported into the maintained content architecture |
| update-si-base-units-neet.yml | Add a 15-question SI Base Units bank to the Physics concept page | Not ported into the maintained content architecture |
| fix-units-measurement-quiz.yml | Replace the legacy Units of Measurement quiz bank | Not ported into the maintained content architecture |

Do not restore these files under `.github/workflows/` to apply their changes. Review the intended content, migrate it into the maintained Physics question-bank architecture, and ship it through a reviewed pull request with regression tests.
