#!/usr/bin/env python3
"""Static regression checks for the SkillUp Test Centre mobile layout."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / "take-a-test.html").read_text(encoding="utf-8")
css = (ROOT / "assets/test-centre.css").read_text(encoding="utf-8")

assert re.search(r'<section\\s+id="examPanel"[^>]*\\bhidden', html, re.I)
assert "main:has(#examPanel:not([hidden]))" in css
assert "main:has(#examPanel:not([hidden])) > :is(header,h1,p,footer)" in css
assert "#examPanel #clock{top:0" in css
assert "#examPanel #question label{min-height:44px" in css
assert "#subjectStarts .subject-card" in css
assert "@media(max-width:280px)" in css
print("Test Centre mobile layout regression passed")
