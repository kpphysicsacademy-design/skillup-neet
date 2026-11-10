#!/usr/bin/env python3
"""Deployment smoke test for the SkillUp Maths learning path."""
from pathlib import Path
import re, sys

root = Path(__file__).resolve().parents[2]
home_path = root / "maths-home.html"
data_path = root / "maths-path-data.js"
if not home_path.is_file() or not data_path.is_file():
    raise SystemExit("FAIL: maths-home.html or maths-path-data.js is missing")

home = home_path.read_text(encoding="utf-8")
data = data_path.read_text(encoding="utf-8")
version = "20261110-maths-path-data-v1"
if f'maths-path-data.js?v={version}' not in home:
    raise SystemExit("FAIL: maths-home.html does not load the current versioned Maths path data")
if "window.SKILLUP_MATH_PATH" not in data:
    raise SystemExit("FAIL: maths-path-data.js does not define SKILLUP_MATH_PATH")

# Count curriculum concepts from the data source. The dataset is a JS literal
# whose chapter entries contain arrays of quoted concept strings.
levels = re.findall(r'^\\s*"(?:CLASS \\d+|IIT JEE)[^"]*"\\s*,\\s*\\{', data, re.M)
chapters = re.findall(r'^\\s{6}"[^"]+"\\s*:\\s*\\[', data, re.M)
concepts = re.findall(r'^\\s{8}"[^"]+"\\s*,?\\s*$', data, re.M)
if not levels or not chapters or not concepts:
    raise SystemExit("FAIL: Maths path data parsed as empty (levels/chapters/concepts)")
if len(concepts) <= 0:
    raise SystemExit("FAIL: rendered concept count must be greater than zero")

# The landing page must render from the external global and surface a visible
# error instead of silently showing an empty list when the data script fails.
if "var levels=window.SKILLUP_MATH_PATH" not in home or "pathLoadError" not in home:
    raise SystemExit("FAIL: maths-home.html is missing the data-load guard/error state")

# Verify every quiz URL exposed by the landing-page route map points to a file.
route_map = home.split("var verifiedQuizRoutes=", 1)[-1].split("\\n};", 1)[0]
routes = sorted(set(re.findall(r':\\s*"([^"]+\\.html)(?:\\?[^"]*)?"', route_map)))
missing = [route for route in routes if not (root / route).is_file()]
if missing:
    raise SystemExit("FAIL: missing quiz route files: " + ", ".join(missing[:20]))

print(f"PASS: {len(levels)} levels, {len(chapters)} chapters, {len(concepts)} concepts")
print(f"PASS: {len(routes)} unique mapped quiz pages exist")
print("PASS: versioned data load and visible failure guard are present")
