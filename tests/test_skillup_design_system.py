#!/usr/bin/env python3
"""Contract checks for the additive SkillUp shared design foundation."""
from pathlib import Path
import json
import re
import subprocess

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
focused_registry = (ROOT / "botany-63-focused-question-banks.js").read_text(encoding="utf-8")
assert re.search(r"function\s+dedicated\s*\([^)]*\)\s*\{\s*return\s*\[\s*\];\s*\}", focused_registry), "Placeholder focused banks must remain disabled until real academic questions are supplied"
focused_runtime = subprocess.run(["node", "-e", "global.window=global; require(process.argv[1]);", str(ROOT / "botany-63-focused-question-banks.js")], text=True, capture_output=True)
assert focused_runtime.returncode == 0, "Focused Botany bank registry failed at runtime: " + focused_runtime.stderr
assert "replace(/^Focused/,'')" in botany_learn
fallback_match = re.search(r"const focusedSourceByConcept=(\{[\s\S]*?\n\});", botany_learn)
assert fallback_match, "Quick Learn focused-bank mapping is missing"
focused_sources = json.loads(fallback_match.group(1))
assert len(focused_sources) == 61, f"Expected 61 focused-bank mappings, found {len(focused_sources)}"
units_match = re.search(r"const units=(\[[\s\S]*?\n\]);", botany)
assert units_match, "Botany concept path data could not be read"
botany_units = json.loads(units_match.group(1))
bank_aliases = {
    "dicot-root-t-s": "dicot-root-ts",
    "monocot-root-t-s": "monocot-root-ts",
    "dicot-stem-t-s": "dicot-stem-ts",
    "monocot-stem-t-s": "monocot-stem-ts",
}
for unit in botany_units:
    for concept in unit[1]:
        title = concept[0]
        slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
        slug = bank_aliases.get(slug, slug)
        direct_bank = ROOT / "question-banks" / f"{slug}-question-bank.js"
        assert direct_bank.is_file() or title in focused_sources, f"Quick Learn has no verified bank route for {title}"

for source in focused_sources.values():
    if source:
        source_path = ROOT / "question-banks" / f"{source}-question-bank.js"
        assert source_path.is_file(), f"Missing focused-bank source: {source}"

# Verify each mapped focused() registry reference resolves to its named source-bank export.
focus_assignments = re.findall(
    r"window\.(skillUpFocused\w+Questions)=focus\(window\.(skillUp\w+Questions)",
    focused_registry,
)
normalise = lambda value: re.sub(r"[^a-z0-9]", "", value.lower())
for topic, source in focused_sources.items():
    if not source:
        continue
    focused_suffix = normalise(topic)
    assignment = next(
        ((focused_name, source_name) for focused_name, source_name in focus_assignments
         if normalise(focused_name.replace("skillUpFocused", "").replace("Questions", "")) == focused_suffix),
        None,
    )
    assert assignment, f"No focused registry mapping exists for {topic}"
    focused_name, source_name = assignment
    source_path = ROOT / "question-banks" / f"{source}-question-bank.js"
    assert source_path.is_file(), f"{focused_name} source bank file is missing: {source}"
    assert source_name in source_path.read_text(encoding="utf-8"), f"{focused_name} source symbol {source_name} is not exported by {source}"

# Placeholder-only dedicated banks are disabled; their concepts must have a real direct bank.
concept_names = {normalise(concept[0]): concept[0] for unit in botany_units for concept in unit[1]}
for focused_name in re.findall(r"window\.(skillUpFocused\w+Questions)=dedicated\(", focused_registry):
    suffix = normalise(focused_name.replace("skillUpFocused", "").replace("Questions", ""))
    title = concept_names.get(suffix)
    assert title, f"No Botany curriculum concept matches placeholder registry {focused_name}"
    direct_slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    direct_slug = bank_aliases.get(direct_slug, direct_slug)
    direct_path = ROOT / "question-banks" / f"{direct_slug}-question-bank.js"
    direct_symbol = focused_name.replace("skillUpFocused", "skillUp")
    assert direct_path.is_file(), f"Placeholder bank {focused_name} has no direct bank file"
    assert direct_symbol in direct_path.read_text(encoding="utf-8"), f"Direct bank for {title} does not export {direct_symbol}"

# Execute the mapped source/direct banks and validate the Quick Learn data contract.
runtime_specs = []
for topic, source in focused_sources.items():
    if not source:
        continue
    focused_suffix = normalise(topic)
    focused_name, source_name = next(
        (focused_name, source_name) for focused_name, source_name in focus_assignments
        if normalise(focused_name.replace("skillUpFocused", "").replace("Questions", "")) == focused_suffix
    )
    runtime_specs.append((str(ROOT / "question-banks" / f"{source}-question-bank.js"), source_name))
for focused_name in re.findall(r"window\.(skillUpFocused\w+Questions)=dedicated\(", focused_registry):
    suffix = normalise(focused_name.replace("skillUpFocused", "").replace("Questions", ""))
    title = concept_names[suffix]
    direct_slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    direct_slug = bank_aliases.get(direct_slug, direct_slug)
    runtime_specs.append((str(ROOT / "question-banks" / f"{direct_slug}-question-bank.js"), focused_name.replace("skillUpFocused", "skillUp")))
runtime_specs = list(dict.fromkeys(runtime_specs))
runtime_script = r"""
global.window = global;
const specs = JSON.parse(process.argv[1]);
for (const path of [...new Set(specs.map(x => x[0]))]) require(path);
for (const [path, name] of specs) {
  const bank = global[name];
  if (!Array.isArray(bank) || bank.length === 0) throw new Error(name + " did not load a non-empty question bank from " + path);
  const bad = bank.find((item, i) => !item || typeof item.q !== "string" || !item.q.trim() ||
    !Array.isArray(item.o) || item.o.length !== 4 || !Number.isInteger(Number(item.a)) ||
    Number(item.a) < 0 || Number(item.a) > 3 || typeof item.e !== "string" || !item.e.trim());
  if (bad) throw new Error(name + " contains a question incompatible with Quick Learn (q/o/a/e contract)");
}
console.log("Validated " + specs.length + " direct/focused Quick Learn bank exports");
"""
bank_runtime = subprocess.run(["node", "-e", runtime_script, json.dumps(runtime_specs)], text=True, capture_output=True)
assert bank_runtime.returncode == 0, "Botany Quick Learn bank runtime validation failed: " + bank_runtime.stderr


physics_home = (ROOT / "physics-home-fast.html").read_text(encoding="utf-8")

# Physics home adopts the shared tokens and primitives without replacing its
# established Physics-specific path layout or its existing navigation.
assert "assets/skillup-design-tokens.css" in physics_home
assert "assets/skillup-platform.css" in physics_home
assert 'class="physics-path-refresh"' in physics_home
assert "su-subject-header" in physics_home
assert "su-subject-brand" in physics_home
assert "physics-home-fast.html" in docs


physics_lesson = (ROOT / "physics-physical-quantities.html").read_text(encoding="utf-8")
assert "assets/skillup-design-tokens.css" in physics_lesson
assert "assets/skillup-platform.css" in physics_lesson
assert 'class="learn-card su-card"' in physics_lesson
assert 'href="physics-home-fast.html"' in physics_lesson
assert 'href="physics-physical-quantities-simulator.html"' in physics_lesson
assert 'href="physics-physical-quantities-practice.html"' in physics_lesson
assert "Physical quantities and measurement" in physics_lesson


physics_simulator = (ROOT / "physics-physical-quantities-simulator.html").read_text(encoding="utf-8")
physics_practice = (ROOT / "physics-physical-quantities-practice.html").read_text(encoding="utf-8")
for page_name, page in (("Physics simulator", physics_simulator), ("Physics practice", physics_practice)):
    assert "assets/skillup-design-tokens.css" in page, f"{page_name} is missing shared tokens"
    assert "assets/skillup-platform.css" in page, f"{page_name} is missing shared primitives"
    assert "physics-home-fast.html" in page, f"{page_name} lost its Physics home route"
    assert "physics-physical-quantities.html" in page, f"{page_name} lost its Learn route"
    assert "physics-physical-quantities-simulator.html" in page, f"{page_name} lost its Simulator route"
    assert "physics-physical-quantities-practice.html" in page, f"{page_name} lost its Practice route"
assert 'class="card su-card"' in physics_simulator
assert "quantityType" in physics_simulator and "quantityValue" in physics_simulator
assert "data-preset" in physics_simulator and "addEventListener('input'" in physics_simulator
assert 'class="quiz-card su-card"' in physics_practice
assert "const bank=" in physics_practice or "const questions=" in physics_practice
assert "Expected 30 questions" in physics_practice
assert "function render()" in physics_practice

print("SkillUp shared design-system contract passed")
