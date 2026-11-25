#!/usr/bin/env python3
"""Regression tests for SkillUp's build-time SEO enrichment."""
from __future__ import annotations

from pathlib import Path
import re
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / ".github" / "scripts" / "seo-enrich.py"


def meta_content(page: str, name: str) -> str:
    pattern = rf"""<meta\b(?=[^>]*\bname=["']{re.escape(name)}["'])[^>]*\bcontent=(["'])(.*?)\1"""
    match = re.search(pattern, page, re.I | re.S)
    return match.group(2) if match else ""


def canonical(page: str) -> str:
    pattern = r"""<link\b(?=[^>]*\brel=["']canonical["'])[^>]*\bhref=["'](.*?)["']"""
    match = re.search(pattern, page, re.I | re.S)
    return match.group(1) if match else ""

def main() -> None:
    with tempfile.TemporaryDirectory() as temporary:
        root = Path(temporary)
        (root / "index.html").write_text(
            '<!doctype html><html><head><title>SkillUp Academy</title>'
            '<meta name="description" content="short">'
            '<link rel="canonical" href="/"></head><body><h1>Home</h1></body></html>',
            encoding="utf-8",
        )
        (root / "physics-unit-conversion-quiz.html").write_text(
            '<!doctype html><html><head><title>SkillUp Physics | Unit Conversion Quiz</title>'
            '</head><body><h1>Unit Conversion</h1></body></html>',
            encoding="utf-8",
        )
        (root / "private.html").write_text(
            '<!doctype html><html><head><title>Private</title>'
            '<meta name="robots" content="noindex"></head><body>Private</body></html>',
            encoding="utf-8",
        )
        (root / "admin.html").write_text(
            '<!doctype html><html><head><title>Admin</title></head><body>Admin</body></html>',
            encoding="utf-8",
        )

        subprocess.run([sys.executable, str(SCRIPT), str(root)], check=True)

        index = (root / "index.html").read_text(encoding="utf-8")
        quiz = (root / "physics-unit-conversion-quiz.html").read_text(encoding="utf-8")
        site_map = (root / "site-map.html").read_text(encoding="utf-8")

        assert canonical(index) == "https://skillupedu.in/"
        assert canonical(quiz) == "https://skillupedu.in/physics-unit-conversion-quiz.html"
        assert 70 <= len(meta_content(index, "description")) <= 160
        assert 70 <= len(meta_content(quiz, "description")) <= 160
        assert 'href="/site-map.html"' in index
        assert 'href="/physics-unit-conversion-quiz.html"' in site_map
        assert "private.html" not in site_map
        assert "admin.html" not in site_map
        assert canonical(site_map) == "https://skillupedu.in/site-map.html"
        assert 70 <= len(meta_content(site_map, "description")) <= 160

        subprocess.run([sys.executable, str(SCRIPT), str(root)], check=True)
        index_again = (root / "index.html").read_text(encoding="utf-8")
        assert index_again.count('rel="canonical"') == 1
        assert index_again.count('name="description"') == 1
        assert index_again.count('href="/site-map.html"') == 1

    print("SEO enrichment regression passed")


if __name__ == "__main__":
    main()
