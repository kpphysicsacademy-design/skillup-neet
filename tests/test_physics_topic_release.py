#!/usr/bin/env python3
"""Release gate for the Physical Quantities three-page learning experience."""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
PAGES = {
    "learn": ROOT / "physics-physical-quantities.html",
    "simulator": ROOT / "physics-physical-quantities-simulator.html",
    "practice": ROOT / "physics-physical-quantities-practice.html",
}
THEME = ROOT / "physics-physical-quantities-theme.css"
SW = ROOT / "service-worker.js"
EXPECTED_THEME = "physics-physical-quantities-theme.css?v=20261125-capa-v2"
REQUIRED_LINKS = (
    "physics-physical-quantities.html",
    "physics-physical-quantities-simulator.html",
    "physics-physical-quantities-practice.html",
)

def fail(message):
    print(f"FAIL: {message}", file=sys.stderr)
    raise SystemExit(1)

contents = {}
for name, path in PAGES.items():
    if not path.exists():
        fail(f"{name} page missing: {path.name}")
    html = path.read_text(encoding="utf-8")
    contents[name] = html
    if 'body class="pq-bright"' not in html:
        fail(f"{name}: expected shared topic body class")
    if EXPECTED_THEME not in html:
        fail(f"{name}: expected cache-busted shared stylesheet {EXPECTED_THEME}")
    if 'class="hero page-hero"' not in html:
        fail(f"{name}: topic hero missing")
    for target in REQUIRED_LINKS:
        if target not in html:
            fail(f"{name}: navigation missing {target}")
    if re.search(r":is\((?:main,header)\)\s*\*\s*\{\s*color:\s*#000", html):
        fail(f"{name}: broad global black-text override found")

css = THEME.read_text(encoding="utf-8")
neutral = r"\.option:not\(\.selected\):not\(\.correct\):not\(\.wrong\)"
if not re.search(neutral, css):
    fail("theme: explicit neutral default answer state missing")
for state in ("selected", "correct", "wrong"):
    if f".option.{state}" not in css:
        fail(f"theme: explicit {state} answer state missing")
if "background:#fff!important" not in css[css.find("/* Neutral is the mandatory default."):]:
    fail("theme: neutral answer background must be white")
if re.search(r":is\([^}]*\.option[^}]*\)\s*\{[^}]*background:\s*#(?:d5f5bd|dce7d7)", css, re.I):
    fail("theme: broad green answer background override found")

practice = contents["practice"]
bank_match = re.search(r"const bank=\[(.*?)\n\];", practice, re.S)
if not bank_match:
    fail("practice: MCQ bank not found")
question_count = len(re.findall(r'^\s*\["', bank_match.group(1), re.M))
if question_count != 30:
    fail(f"practice: expected 30 MCQs, found {question_count}")
for marker in ('id="question"', 'id="options"', 'id="check"', 'id="continue"', 'id="syncStatus"'):
    if marker not in practice:
        fail(f"practice: required quiz control missing: {marker}")

sim = contents["simulator"]
for unit in ("length:", "mass:", "time:", "area:", "volume:", "speed:", "force:", "energy:", "pressure:"):
    if unit not in sim:
        fail(f"simulator: conversion family missing {unit}")

sw = SW.read_text(encoding="utf-8")
if "skillup-offline-v15-zoology-side-by-side-actions" not in sw:
    fail("service worker cache version was not advanced")
if "physics-physical-quantities-theme\.css" not in sw:
    fail("service worker does not fetch the topic stylesheet network-first")

print("PASS: Physical Quantities release gate")
print("PASS: 3 pages share the v2 stylesheet, topic hero and complete 3-way navigation")
print("PASS: neutral/selected/correct/incorrect answer states are explicit")
print("PASS: all 30 MCQs, quiz controls and 9 converter families are present")
print("PASS: service-worker cache version and fresh-theme policy are updated")
