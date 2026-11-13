#!/usr/bin/env python3
"""Static SEO and internal-link audit for SkillUp GitHub Pages.

Diagnostic only: this script never edits page content or submits URLs to Google.
"""
from __future__ import annotations
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse
import json, re, sys, xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
BASE_URL = "https://skillupedu.in"
SITEMAP = ROOT / "sitemap.xml"
ROBOTS = ROOT / "robots.txt"
EXCLUDED_DIRS = {".git", ".github", "node_modules", "vendor"}
EXCLUDED_FILES = {
    "404.html", "admin.html", "login.html", "register.html",
    "profile.html", "progress.html", "central-login.html",
    "central-register.html", "central-reset-password.html",
    "chemistry-asset-manager.html", "deployment-check-20260909.html",
}
SKIP_SCHEMES = {"mailto", "tel", "javascript", "data", "sms"}

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title_parts, self.robots, self.canonicals, self.links = [], [], [], []
        self.in_title = False
        self.meta_description = ""
        self.viewport = False
        self.h1_count = 0
        self.images_missing_alt = 0
        self.empty_anchors = 0
        self.anchor_open = False
        self.anchor_has_text = False

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        a = {str(k).lower(): (v or "").strip() for k, v in attrs}
        if tag == "title":
            self.in_title = True
        elif tag == "h1":
            self.h1_count += 1
        elif tag == "meta":
            name = a.get("name", "").lower()
            if name == "description":
                self.meta_description = a.get("content", "").strip()
            elif name in {"robots", "googlebot"}:
                self.robots.append(a.get("content", "").lower())
            elif name == "viewport":
                self.viewport = bool(a.get("content"))
        elif tag == "link" and "canonical" in a.get("rel", "").lower().split():
            if a.get("href"):
                self.canonicals.append(a["href"])
        elif tag == "a":
            href = a.get("href", "")
            if href:
                self.links.append(href)
            self.anchor_open, self.anchor_has_text = True, False
        elif tag == "img" and "alt" not in a:
            self.images_missing_alt += 1

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag == "title":
            self.in_title = False
        elif tag == "a" and self.anchor_open:
            if not self.anchor_has_text:
                self.empty_anchors += 1
            self.anchor_open = False

    def handle_data(self, data):
        if self.in_title:
            self.title_parts.append(data)
        if self.anchor_open and data.strip():
            self.anchor_has_text = True

    @property
    def title(self):
        return re.sub(r"\s+", " ", " ".join(self.title_parts)).strip()

    @property
    def noindex(self):
        return any("noindex" in {x.strip() for x in c.split(",")} for c in self.robots)

def excluded(path):
    rel = path.relative_to(ROOT)
    return (any(p in EXCLUDED_DIRS or p.startswith(".") for p in rel.parts[:-1])
            or path.name.lower() in EXCLUDED_FILES)

def public_pages():
    pages = []
    for path in ROOT.rglob("*.html"):
        if excluded(path):
            continue
        parser = PageParser()
        parser.feed(path.read_text(encoding="utf-8", errors="replace"))
        if not parser.noindex:
            pages.append(path)
    return sorted(pages)

def public_url(path):
    rel = path.relative_to(ROOT).as_posix()
    return BASE_URL + ("/" if rel == "index.html" else "/" + rel)

def resolve_local_target(source, href):
    parsed = urlparse(href)
    if parsed.scheme.lower() in SKIP_SCHEMES:
        return None
    if parsed.scheme and parsed.scheme.lower() not in {"http", "https"}:
        return None
    if parsed.netloc and parsed.hostname not in {"skillupedu.in", "www.skillupedu.in"}:
        return None
    if not parsed.path:
        return None
    decoded = unquote(parsed.path)
    candidate = ROOT / decoded.lstrip("/") if decoded.startswith("/") else source.parent / decoded
    candidate = candidate.resolve()
    try:
        candidate.relative_to(ROOT.resolve())
    except ValueError:
        return None
    if candidate.is_dir():
        candidate = candidate / "index.html"
    if not candidate.suffix:
        if candidate.with_suffix(".html").exists():
            candidate = candidate.with_suffix(".html")
        elif (candidate / "index.html").exists():
            candidate = candidate / "index.html"
    return candidate

def parse_sitemap():
    if not SITEMAP.exists():
        return set(), "sitemap.xml was not generated before the audit."
    try:
        root = ET.parse(SITEMAP).getroot()
        ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        return {n.text.strip() for n in root.findall(".//sm:loc", ns) if n.text}, None
    except (ET.ParseError, OSError) as exc:
        return set(), f"Could not parse sitemap.xml: {exc}"

def main():
    out_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("/tmp/skillup-seo-audit")
    out_dir.mkdir(parents=True, exist_ok=True)
    pages = public_pages()
    page_set = set(pages)
    sitemap_urls, sitemap_error = parse_sitemap()
    rows, title_counts, canonical_counts = [], Counter(), Counter()
    inbound, broken_links = Counter(), []
    missing_alt, empty_anchors, total_links = 0, 0, 0

    for path in pages:
        parser = PageParser()
        parser.feed(path.read_text(encoding="utf-8", errors="replace"))
        rel, url = path.relative_to(ROOT).as_posix(), public_url(path)
        title = parser.title
        canonical = parser.canonicals[0] if parser.canonicals else ""
        title_counts[title] += 1
        if canonical:
            canonical_counts[canonical] += 1
        missing_alt += parser.images_missing_alt
        empty_anchors += parser.empty_anchors
        rows.append({
            "path": rel, "url": url, "title": title, "title_length": len(title),
            "has_meta_description": bool(parser.meta_description),
            "description_length": len(parser.meta_description),
            "canonical": canonical, "canonical_count": len(parser.canonicals),
            "h1_count": parser.h1_count, "has_viewport": parser.viewport,
            "images_missing_alt": parser.images_missing_alt,
            "empty_anchors": parser.empty_anchors,
        })
        for href in parser.links:
            total_links += 1
            target = resolve_local_target(path, href)
            if target is None:
                continue
            if target in page_set:
                inbound[target] += 1
            elif not target.exists():
                try:
                    target_name = target.relative_to(ROOT).as_posix()
                except ValueError:
                    target_name = str(target)
                broken_links.append({"source": rel, "href": href, "resolved_target": target_name})

    missing_title = [r for r in rows if not r["title"]]
    title_length = [r for r in rows if r["title"] and (r["title_length"] < 15 or r["title_length"] > 65)]
    missing_desc = [r for r in rows if not r["has_meta_description"]]
    desc_length = [r for r in rows if r["has_meta_description"] and (r["description_length"] < 70 or r["description_length"] > 160)]
    missing_canonical = [r for r in rows if not r["canonical"]]
    multiple_canonical = [r for r in rows if r["canonical_count"] > 1]
    missing_h1 = [r for r in rows if r["h1_count"] == 0]
    multiple_h1 = [r for r in rows if r["h1_count"] > 1]
    missing_viewport = [r for r in rows if not r["has_viewport"]]
    sitemap_missing = [r["url"] for r in rows if r["url"] not in sitemap_urls]
    sitemap_extra = sorted(sitemap_urls - {r["url"] for r in rows})
    duplicate_titles = {k: v for k, v in title_counts.items() if k and v > 1}
    duplicate_title_pages = {
        title: [{"path": r["path"], "url": r["url"]} for r in rows if r["title"] == title]
        for title in duplicate_titles
    }
    duplicate_canonicals = {k: v for k, v in canonical_counts.items() if v > 1}
    orphan_pages = [r["url"] for r in rows if r["path"] != "index.html" and inbound[ROOT / r["path"]] == 0]
    robots_text = ROBOTS.read_text(encoding="utf-8", errors="replace") if ROBOTS.exists() else ""
    robots_ok = "User-agent:" in robots_text and "Allow: /" in robots_text and BASE_URL + "/sitemap.xml" in robots_text

    summary = {
        "missing_title": len(missing_title),
        "title_length_out_of_range": len(title_length),
        "missing_meta_description": len(missing_desc),
        "meta_description_length_out_of_range": len(desc_length),
        "missing_canonical": len(missing_canonical),
        "multiple_canonical_tags": len(multiple_canonical),
        "duplicate_titles": len(duplicate_titles),
        "duplicate_canonical_urls": len(duplicate_canonicals),
        "pages_without_h1": len(missing_h1),
        "pages_with_multiple_h1": len(multiple_h1),
        "missing_viewport": len(missing_viewport),
        "images_missing_alt": missing_alt,
        "empty_anchor_elements": empty_anchors,
        "broken_internal_links": len(broken_links),
        "orphan_pages_no_html_inbound_link": len(orphan_pages),
    }
    details = {
        "missing_title": missing_title,
        "title_length_out_of_range": title_length,
        "missing_meta_description": missing_desc,
        "meta_description_length_out_of_range": desc_length,
        "missing_canonical": missing_canonical,
        "multiple_canonical_tags": multiple_canonical,
        "duplicate_titles": duplicate_titles,
        "duplicate_title_pages": duplicate_title_pages,
        "duplicate_canonical_urls": duplicate_canonicals,
        "pages_without_h1": missing_h1,
        "pages_with_multiple_h1": multiple_h1,
        "missing_viewport": missing_viewport,
        "broken_internal_links": broken_links,
        "orphan_pages_no_html_inbound_link": orphan_pages,
        "pages_missing_from_sitemap": sitemap_missing,
        "extra_sitemap_urls": sitemap_extra,
    }
    notes = [
        "Static repository audit only; it is not a live HTTP crawl or Google indexing report.",
        "Being listed in a sitemap does not guarantee Google will index a page.",
        "Orphan detection checks standard HTML anchor links; JavaScript-generated links may not be counted.",
        "Title and description length ranges are review flags, not Google ranking rules.",
        "The audit does not edit pages or request indexing.",
    ]
    report = {
        "site": BASE_URL, "pages_scanned": len(pages),
        "sitemap_url_count": len(sitemap_urls), "sitemap_error": sitemap_error,
        "sitemap_missing_page_count": len(sitemap_missing),
        "sitemap_extra_url_count": len(sitemap_extra), "robots_txt_ok": robots_ok,
        "summary": summary, "details": details, "notes": notes,
    }
    (out_dir / "seo-audit.json").write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    lines = [
        "# SkillUp Academy SEO audit", "",
        f"- Site: {BASE_URL}",
        f"- HTML pages audited: **{len(pages)}**",
        f"- Sitemap URLs: **{len(sitemap_urls)}**",
        f"- robots.txt configuration: **{'PASS' if robots_ok else 'REVIEW'}**",
        "", "## Findings", "", "| Check | Count |", "|---|---:|",
    ]
    for key, value in summary.items():
        lines.append(f"| {key.replace('_', ' ')} | {value} |")
    if sitemap_error:
        lines.extend(["", f"**Sitemap error:** {sitemap_error}"])
    lines.extend(["", "## Pages needing review", ""])
    sections = [
        ("missing_title", "Pages missing a title"),
        ("missing_meta_description", "Pages missing a meta description"),
        ("missing_canonical", "Pages missing a canonical URL"),
        ("duplicate_title_pages", "Pages sharing duplicate title text"),
        ("pages_without_h1", "Pages without an H1"),
        ("broken_internal_links", "Broken internal links"),
        ("orphan_pages_no_html_inbound_link", "Pages with no detected HTML inbound link"),
        ("pages_missing_from_sitemap", "Eligible pages missing from sitemap"),
    ]
    for key, label in sections:
        raw_items = details[key]
        if isinstance(raw_items, dict):
            items = [
                {"path": row.get("path", ""), "title": title}
                for title, rows in raw_items.items()
                for row in rows
            ]
        else:
            items = raw_items
        lines.extend([f"### {label} ({len(items)})", ""])
        if not items:
            lines.append("- None found.")
        else:
            for item in items[:100]:
                if isinstance(item, dict):
                    extra = " — " + item.get("title", item.get("href", ""))
                    lines.append("- " + item.get("path", item.get("source", "")) + extra)
                else:
                    lines.append("- " + str(item))
            if len(items) > 100:
                lines.append(f"- Plus {len(items) - 100} more; see seo-audit.json.")
        lines.append("")
    lines.extend(["## Scope and limitations", ""] + ["- " + n for n in notes])
    (out_dir / "seo-audit.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"SEO audit complete: {len(pages)} HTML pages scanned.")
    print(json.dumps(summary, indent=2))
    print(f"Reports written to {out_dir}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
