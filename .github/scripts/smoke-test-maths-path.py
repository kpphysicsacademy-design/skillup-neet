#!/usr/bin/env python3
"""Deployment smoke test for the SkillUp Maths learning path."""
from pathlib import Path
import re

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

levels = re.findall(r'^\s{4}"(?:CLASS \d+|IIT JEE)[^"]*"\s*,\s*\{', data, re.M)
chapters = re.findall(r'^\s{6}"[^"]+"\s*:\s*\[', data, re.M)
concepts = re.findall(r'^\s{8}"[^"]+"\s*,?\s*$', data, re.M)
if not levels or not chapters or not concepts:
    raise SystemExit(f"FAIL: empty curriculum parse (levels={len(levels)}, chapters={len(chapters)}, concepts={len(concepts)})")

if "var levels=window.SKILLUP_MATH_PATH" not in home or "pathLoadError" not in home:
    raise SystemExit("FAIL: maths-home.html is missing its data-load guard/error state")

route_map = home.split("var verifiedQuizRoutes=", 1)[-1].split("\n};", 1)[0]
routes = sorted(set(re.findall(r':\s*"([^"]+\.html)(?:\?[^"]*)?"', route_map)))
missing = [route for route in routes if not (root / route).is_file()]
if missing:
    raise SystemExit("FAIL: missing quiz route files: " + ", ".join(missing[:20]))


# Validate the JavaScript route-map object itself. The previous existence-only
# check allowed a missing comma to pass and break the Maths page at runtime.
route_match = re.search(r'var\s+verifiedQuizRoutes\s*=\s*\{(.*?)\n\};', home, re.S)
if not route_match:
    raise SystemExit("FAIL: could not locate the verified Maths quiz route map")
route_js = "const verifiedQuizRoutes = {\n" + route_match.group(1) + "\n};\n"
import subprocess
syntax = subprocess.run(
    ["node", "--check"],
    input=route_js,
    text=True,
    capture_output=True,
)
if syntax.returncode:
    raise SystemExit("FAIL: invalid JavaScript in verifiedQuizRoutes:\n" + syntax.stderr)

nav_scripts = re.findall(r'<script[^>]+src=["\']([^"\']*shared-nav\.js[^"\']*)', home)
if len(nav_scripts) != 1:
    raise SystemExit(f"FAIL: maths-home.html must load shared-nav.js exactly once (found {len(nav_scripts)})")

print(f"PASS: {len(levels)} levels, {len(chapters)} chapters, {len(concepts)} concepts")
print(f"PASS: {len(routes)} unique mapped quiz pages exist")
print("PASS: versioned data load and visible failure guard are present")
