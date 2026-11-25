#!/usr/bin/env python3
"""Fail the PR build when critical SEO enrichment regressions remain."""
from __future__ import annotations
import json
import sys
from pathlib import Path

report = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
summary = report["summary"]
required_zero = (
    "missing_title",
    "title_length_out_of_range",
    "missing_meta_description",
    "meta_description_length_out_of_range",
    "missing_canonical",
    "multiple_canonical_tags",
    "duplicate_titles",
    "broken_internal_links",
    "orphan_pages_no_html_inbound_link",
)
failures = {name: summary.get(name, 0) for name in required_zero if summary.get(name, 0)}
if report.get("sitemap_missing_page_count", 0):
    failures["sitemap_missing_page_count"] = report["sitemap_missing_page_count"]
if not report.get("robots_txt_ok", False):
    failures["robots_txt_ok"] = "false"
print(json.dumps({
    "pages_scanned": report.get("pages_scanned"),
    "sitemap_url_count": report.get("sitemap_url_count"),
    "critical_checks": {name: summary.get(name, 0) for name in required_zero},
    "pages_without_h1": summary.get("pages_without_h1", 0),
    "pages_with_multiple_h1": summary.get("pages_with_multiple_h1", 0),
    "empty_anchor_elements": summary.get("empty_anchor_elements", 0),
}, indent=2))
if failures:
    raise SystemExit("Critical SEO checks failed: " + json.dumps(failures, sort_keys=True))
print("Critical SEO checks passed; H1 and empty-anchor review counts are reported separately.")
