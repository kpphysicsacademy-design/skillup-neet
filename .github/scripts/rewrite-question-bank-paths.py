#!/usr/bin/env python3
"""Rewrite legacy root-level question-bank script references for GitHub Pages."""
from pathlib import Path
import re

ROOT = Path(".")
PATTERN = re.compile(r'(?<![A-Za-z0-9_./-])(?P<prefix>\./|/)?(?P<file>[A-Za-z0-9_-]+-question-bank\.js)(?![A-Za-z0-9_.-])')
TEXT_SUFFIXES = {".html", ".htm", ".js", ".mjs", ".json", ".css", ".md", ".txt", ".xml", ".yml", ".yaml", ".webmanifest"}

changed = 0
for path in ROOT.rglob("*"):
    if not path.is_file() or "question-banks" in path.parts or ".git" in path.parts:
        continue
    if path.suffix.lower() not in TEXT_SUFFIXES:
        continue
    try:
        original = path.read_text(encoding="utf-8")
    except (UnicodeDecodeError, OSError):
        continue
    updated = PATTERN.sub(lambda m: (m.group("prefix") or "") + "question-banks/" + m.group("file"), original)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        changed += 1
print(f"Updated question-bank references in {changed} files.")
