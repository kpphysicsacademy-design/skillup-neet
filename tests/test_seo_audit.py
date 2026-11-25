#!/usr/bin/env python3
"""Regression tests for static and JavaScript-generated H1 detection."""
from __future__ import annotations

import importlib.util
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / ".github" / "scripts" / "seo-audit.py"
spec = importlib.util.spec_from_file_location("skillup_seo_audit", SCRIPT)
module = importlib.util.module_from_spec(spec)
assert spec and spec.loader
spec.loader.exec_module(module)


def parse(source: str):
    parser = module.PageParser()
    parser.feed(source)
    return parser


def main() -> None:
    dynamic = parse(
        '<html><head><title>Example</title></head><body>'
        '<script>document.querySelector("#title").innerHTML = "<h1>Dynamic heading</h1>";</script>'
        '</body></html>'
    )
    assert dynamic.h1_count == 1

    created = parse(
        '<html><head><title>Example</title></head><body>'
        '<script>const heading = document.createElement("h1");</script>'
        '</body></html>'
    )
    assert created.h1_count == 1

    mixed = parse(
        '<html><head><title>Example</title></head><body><h1>Static</h1>'
        '<script>document.querySelector("#title").innerHTML = "<h1>Dynamic</h1>";</script>'
        '</body></html>'
    )
    assert mixed.h1_count == 2
    print("SEO audit dynamic H1 regression passed")


if __name__ == "__main__":
    main()
