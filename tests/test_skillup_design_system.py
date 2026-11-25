#!/usr/bin/env python3
"""Contract checks for the additive SkillUp shared design foundation."""
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
tokens = (ROOT / "assets/skillup-design-tokens.css").read_text(encoding="utf-8")
components = (ROOT / "assets/skillup-platform.css").read_text(encoding="utf-8")
docs = (ROOT / "docs/architecture/centralized-design-system.md").read_text(encoding="utf-8")
botany = (ROOT / "botany-home.html").read_text(encoding="utf-8")
botany_quiz = (ROOT / "botany-mcq.html").read_text(encoding="utf-8")
botany_learn = (ROOT / "botany-quick-learn.html").read_text(encoding="utf-8")
botany_sheet = (ROOT / "botany-cell-cheat-sheet.html").read_text(encoding="utf-8")

required_tokens = [
    "--su-color-ink", "--su-color-primary", "--su-color-success",
    "--su-color-physics", "--su-color-chemistry", "--su-color-botany",
    "--su-color-zoology", "--su-color-mathematics", "--su-space-4",
    "--su-radius-md", "--su-content-width", "--su-focus-ring",
]
for token in required_tokens:
    assert token in tokens, f"Missing design token: {token}"

required_components = [
    ".su-shell", ".su-header", ".su-brand", ".su-hero", ".su-grid",
    ".su-card", ".su-button", ".su-progress", ":focus-visible",
    "prefers-reduced-motion", "max-width:640px",
]
for selector in required_components:
    assert selector in components, f"Missing shared component/accessibility rule: {selector}"

# The foundation remains opt-in; it must not introduce generic page resets.
for forbidden in (r"(?m)^\s*body\s*\{", r"(?m)^\s*h1\s*\{", r"(?m)^\s*button\s*\{", r"(?m)^\s*\*\s*\{"):
    assert not re.search(forbidden, components), f"Unexpected global selector: {forbidden}"

for subject in ("Physics", "Chemistry", "Botany", "Zoology", "Mathematics"):
    assert subject in docs, f"Architecture docs omit {subject}"

assert "questionBankId" in docs
assert "authenticated UID" in docs
assert "Do not infer a question-bank match" in docs

# Botany is the first migrated reference page and must consume the shared system.
assert "assets/skillup-design-tokens.css" in botany
assert "assets/skillup-platform.css" in botany
for adopted_class in ("su-header", "su-brand", "su-shell", "su-hero", "su-hero__title", "su-pill-row", "su-pill"):
    assert adopted_class in botany, f"Botany reference page is missing {adopted_class}"
# Botany concept-practice and cheat-sheet archetypes share the platform header.
for page_name, page in (("Botany quiz", botany_quiz), ("Botany Quick Learn", botany_learn), ("Botany cheat sheet", botany_sheet)):
    assert "assets/skillup-design-tokens.css" in page, f"{page_name} is missing design tokens"
    assert "assets/skillup-platform.css" in page, f"{page_name} is missing shared components"
    assert "su-header" in page, f"{page_name} is missing shared header adoption"
    if page_name == "Botany Quick Learn":
        assert "botany-mcq.html" in page, "Botany Quick Learn lost its practice route"
        assert "botany-topic-cheat-sheet.html" in page, "Botany Quick Learn lost its cheat-sheet route"
    else:
        assert "botany-home.html" in page, f"{page_name} lost its subject-home route"
# Quick Learn must resolve the 61 focused Botany banks that reuse verified source banks.
assert "botany-63-focused-question-banks.js" in botany_learn
assert "focusedSourceByConcept" in botany_learn
assert "replace(/^Focused/,'')" in botany_learn
fallback_match = re.search(r"const focusedSourceByConcept=(\{[\s\S]*?\n\});", botany_learn)
assert fallback_match, "Quick Learn focused-bank mapping is missing"
focused_sources = json.loads(fallback_match.group(1))
assert len(focused_sources) == 61, f"Expected 61 focused-bank mappings, found {len(focused_sources)}"
for source in focused_sources.values():
    if source:
        assert (ROOT / "question-banks" / f"{source}-question-bank.js").is_file(), f"Missing focused-bank source: {source}"


print("SkillUp shared design-system contract passed")
