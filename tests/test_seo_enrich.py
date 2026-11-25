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
            '</head><body><h1>Unit Conversion</h1><svg><title>Very long diagram description that is not the document title</title></svg></body></html>',
            encoding="utf-8",
        )
        (root / "physics-example-learn.html").write_text(
            '<!doctype html><html><head><title>SkillUp Physics | Example Topic</title>'
            '</head><body><h1>Example</h1></body></html>',
            encoding="utf-8",
        )
        (root / "physics-example-quiz.html").write_text(
            '<!doctype html><html><head><title>SkillUp Physics | Example Topic</title>'
            '</head><body><h1>Example quiz</h1></body></html>',
            encoding="utf-8",
        )
        (root / "physics-no-heading.html").write_text(
            '<!doctype html><html><head><title>SkillUp Physics | No Heading</title></head>'
            '<body><main><p>Content without a semantic page heading.</p></main></body></html>',
            encoding="utf-8",
        )
        (root / "physics-multiple-headings.html").write_text(
            '<!doctype html><html><head><title>SkillUp Physics | Multiple Headings</title></head>'
            '<body><main><h1>Primary heading</h1><h1>Secondary heading</h1>'
            '<script>document.querySelector("#x").innerHTML = "<h1>Dynamic heading</h1>";</script>'
            '</main></body></html>',
            encoding="utf-8",
        )
        (root / "private.html").write_text(
            '<!doctype html><html><head><title>Private</title>'
            '<meta name="robots" content="noindex"></head><body>Private</body></html>',
            encoding="utf-8",
        )
        (root / "redirect.html").write_text(
            '<!doctype html><html><head><title>Redirect</title>'
            '<meta http-equiv="refresh" content="0;url=physics-unit-conversion-quiz.html">'
            '</head><body>Redirecting</body></html>',
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
        redirect = (root / "redirect.html").read_text(encoding="utf-8")
        assert canonical(redirect) == "https://skillupedu.in/physics-unit-conversion-quiz.html"
        assert 70 <= len(meta_content(index, "description")) <= 160
        assert 70 <= len(meta_content(quiz, "description")) <= 160
        assert 'href="/site-map.html"' in index
        assert 'href="/physics-unit-conversion-quiz.html"' in site_map
        assert "Very long diagram description" not in site_map
        assert "private.html" not in site_map
        assert "redirect.html" not in site_map
        assert "admin.html" not in site_map
        no_heading = (root / "physics-no-heading.html").read_text(encoding="utf-8")
        assert '<h1 class="skillup-seo-heading">No Heading</h1>' in no_heading
        multiple = (root / "physics-multiple-headings.html").read_text(encoding="utf-8")
        without_scripts = re.sub(r"<script\b.*?</script\s*>", "", multiple, flags=re.I | re.S)
        assert len(re.findall(r"<h1\b", without_scripts, re.I)) == 1
        assert "<h2>Secondary heading</h2>" in multiple
        assert "<h2>Dynamic heading</h2>" in multiple
        assert canonical(site_map) == "https://skillupedu.in/site-map.html"
        assert 70 <= len(meta_content(site_map, "description")) <= 160
        learn_title = re.search(r"<title>(.*?)</title>", (root / "physics-example-learn.html").read_text(encoding="utf-8"), re.I).group(1)
        quiz_title = re.search(r"<title>(.*?)</title>", (root / "physics-example-quiz.html").read_text(encoding="utf-8"), re.I).group(1)
        assert learn_title != quiz_title
        assert learn_title.endswith("| Learn")
        assert quiz_title.endswith("| Quiz")

        subprocess.run([sys.executable, str(SCRIPT), str(root)], check=True)
        index_again = (root / "index.html").read_text(encoding="utf-8")
        assert index_again.count('rel="canonical"') == 1
        assert index_again.count('name="description"') == 1
        assert index_again.count('href="/site-map.html"') == 1

    print("SEO enrichment regression passed")


if __name__ == "__main__":
    main()
