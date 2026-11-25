#!/usr/bin/env python3
"""Build-time SEO enrichment for SkillUp's static GitHub Pages site.

Adds absolute canonical URLs and useful, length-bounded descriptions to public
HTML pages, and generates a searchable HTML sitemap. Source pages are modified
only in the GitHub Pages build workspace.
"""
from __future__ import annotations

from collections import defaultdict
from html import escape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import quote, urljoin
import re
import sys

BASE_URL = "https://skillupedu.in"
EXCLUDED_DIRS = {".git", ".github", "node_modules", "vendor"}
EXCLUDED_FILES = {
    "404.html", "admin.html", "login.html", "register.html",
    "profile.html", "progress.html", "central-login.html",
    "central-register.html", "central-reset-password.html",
    "chemistry-asset-manager.html", "deployment-check-20260909.html",
}
SPECIAL_TITLES = {
    "botany-topic-cheat-sheet.html": "Botany Topic Cheat Sheet | SkillUp",
    "maths-addition-subtraction-algebraic-expressions-learn.html":
        "SkillUp Maths | Algebraic Expressions: Add & Subtract",
    "maths-class7-algebra-add-sub-learn.html":
        "SkillUp Maths | Class 7 Algebra: Add & Subtract",
    "maths-positive-negative-rationals-simulator.html":
        "SkillUp Maths | Positive & Negative Rational Numbers Simulator",
    "maths-rational-numbers-simulator.html":
        "SkillUp Maths | Rational Numbers Simulator",
}


class MetaParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.title_parts: list[str] = []
        self.in_title = False
        self.description = ""
        self.canonical = ""
        self.robots: list[str] = []
        self.h1_count = 0

    def handle_starttag(self, tag: str, attrs) -> None:
        tag = tag.lower()
        values = {str(k).lower(): (v or "").strip() for k, v in attrs}
        if tag == "title":
            self.in_title = True
        elif tag == "h1":
            self.h1_count += 1
        elif tag == "meta":
            name = values.get("name", "").lower()
            if name == "description":
                self.description = values.get("content", "")
            elif name in {"robots", "googlebot"}:
                self.robots.append(values.get("content", "").lower())
        elif tag == "link" and "canonical" in values.get("rel", "").lower().split():
            self.canonical = values.get("href", "")

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() == "title":
            self.in_title = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)

    @property
    def title(self) -> str:
        return re.sub(r"\s+", " ", " ".join(self.title_parts)).strip()

    @property
    def noindex(self) -> bool:
        return any("noindex" in {part.strip() for part in value.split(",")} for value in self.robots)


def excluded(path: Path, root: Path) -> bool:
    rel = path.relative_to(root)
    return (
        any(part in EXCLUDED_DIRS or part.startswith(".") for part in rel.parts[:-1])
        or path.name.lower() in EXCLUDED_FILES
    )


def html_pages(root: Path) -> list[Path]:
    return [
        path for path in sorted(root.rglob("*.html"))
        if not excluded(path, root)
    ]


def page_url(path: Path, root: Path) -> str:
    rel = path.relative_to(root).as_posix()
    if rel == "index.html":
        return BASE_URL + "/"
    return BASE_URL + "/" + quote(rel, safe="/-._~")


def parse_page(content: str) -> MetaParser:
    parser = MetaParser()
    parser.feed(content)
    return parser


def subject_for(path: Path) -> str:
    name = path.name.lower()
    if name.startswith(("maths-", "math-")) or path.parent.name.lower() == "math":
        return "Maths"
    for prefix, label in (
        ("physics-", "Physics"), ("chemistry-", "Chemistry"),
        ("botany-", "Botany"), ("zoology-", "Zoology"),
        ("biology-", "Biology"),
    ):
        if name.startswith(prefix):
            return label
    return "Science"


def filename_title(path: Path) -> str:
    stem = path.stem
    subject = subject_for(path)
    prefixes = ("maths-", "math-", "physics-", "chemistry-", "botany-", "zoology-", "biology-")
    for prefix in prefixes:
        if stem.lower().startswith(prefix):
            stem = stem[len(prefix):]
            break
    kind = ""
    for suffix, label in (
        ("-cheat-sheet", "Cheat Sheet"), ("-quick-learn", "Quick Learn"),
        ("-quicklearn", "Quick Learn"), ("-simulator", "Simulator"),
        ("-quiz", "Quiz"), ("-mcq", "Quiz"), ("-learn", "Learn"),
        ("-practice", "Practice"), ("-lab", "Virtual Lab"),
    ):
        if stem.lower().endswith(suffix):
            stem = stem[:-len(suffix)]
            kind = label
            break
    class_match = re.search(r"(?:^|-)class(\d+)(?:-|$)", stem, re.I)
    class_label = f"Class {class_match.group(1)} " if class_match else ""
    stem = re.sub(r"(?:^|-)class\d+(?:-|$)", "-", stem, flags=re.I).strip("-")
    words = [word for word in stem.replace("-", " ").split() if word]
    title = " ".join(word.upper() if word.lower() in {"si", "dna", "rna", "mcq"} else word.capitalize() for word in words)
    title = re.sub(r"\b(Of|And|The|In|To|For|With)\b", lambda m: m.group(1).lower(), title)
    topic = (class_label + title).strip() or subject
    return f"SkillUp {subject} | {topic}" + (f" {kind}" if kind else "")


def normalized_title(path: Path, current: str) -> str:
    if path.name in SPECIAL_TITLES:
        return SPECIAL_TITLES[path.name]
    title = current
    title = title.replace("SkillUp Physics | SkillUp Physics |", "SkillUp Physics |")
    title = re.sub(r"\s*\|\s*Practice\s*\|\s*SkillUp.*$", "", title, flags=re.I)
    title = re.sub(r"\s*\|\s*SkillUp Physics\s*—\s*Learn.*$", "", title, flags=re.I)
    title = re.sub(r"\s*—\s*Duolingo-Style Concept Quiz.*$", " Quiz", title, flags=re.I)
    title = re.sub(r"\s*—\s*Interactive Simulator", " Simulator", title, flags=re.I)
    title = re.sub(r"\s*—\s*(?:Brief )?Learn.*$", "", title, flags=re.I)
    title = re.sub(r"\s*\|\s*Brief Learn.*$", "", title, flags=re.I)
    title = re.sub(r"\s*Brief Learn\b", "", title, flags=re.I)
    title = re.sub(r"\s*—\s*Practice\s*$", "", title, flags=re.I)
    title = re.sub(r"\s*\|\s*Learn\s*\|\s*SkillUp.*$", "", title, flags=re.I)
    title = re.sub(r"\s+", " ", title).strip(" |—-")
    if 15 <= len(title) <= 65:
        return title
    without_brand = re.sub(
        r"\s*\|\s*SkillUp(?:\\s+(?:Maths|Physics|Chemistry|Botany|Zoology|Biology|Science))?$",
        "",
        title,
        flags=re.I,
    ).strip()
    if 15 <= len(without_brand) <= 54:
        return without_brand + " | SkillUp"
    if 15 <= len(without_brand) <= 65:
        return without_brand
    first = current.split(" | ")[0].strip()
    generic_subject = re.fullmatch(
        r"SkillUp\s+(?:Maths|Physics|Chemistry|Botany|Zoology|Biology|Science)",
        first,
        flags=re.I,
    )
    if not generic_subject and 15 <= len(first) <= 54:
        return first + " | SkillUp"
    if not generic_subject and len(first) > 54:
        return first[:54].rsplit(" ", 1)[0].rstrip(" |—-") + " | SkillUp"
    fallback = filename_title(path)
    if len(fallback) > 65:
        fallback = fallback[:62].rsplit(" ", 1)[0].rstrip(" |—-")
    return fallback


def topic_for_description(path: Path, title: str) -> str:
    topic = title
    topic = re.sub(r"^SkillUp\s+(?:Maths|Physics|Chemistry|Botany|Zoology|Biology|Science)\s*\|\s*", "", topic, flags=re.I)
    topic = re.sub(r"\s*\|\s*SkillUp.*$", "", topic, flags=re.I)
    topic = re.sub(r"\s+(?:Quiz|Learn|Quick Learn|Simulator|Cheat Sheet|Practice|Virtual Lab)$", "", topic, flags=re.I)
    return topic.strip() or filename_title(path)


def fit_description(value: str) -> str:
    value = re.sub(r"\s+", " ", value).strip()
    if len(value) > 160:
        shortened = value[:157].rsplit(" ", 1)[0].rstrip(" ,;:-")
        value = shortened + "..."
    if len(value) < 70:
        suffix = " Explore related lessons and focused practice on SkillUp."
        value = (value + suffix).strip()
        if len(value) > 160:
            value = value[:157].rsplit(" ", 1)[0].rstrip(" ,;:-") + "..."
    return value


def generated_description(path: Path, title: str) -> str:
    subject = subject_for(path)
    topic = topic_for_description(path, title)
    name = (path.name + " " + title).lower()
    if "cheat-sheet" in name or "cheat sheet" in name:
        value = f"Revise {topic} with concise notes, key facts and diagrams in this SkillUp {subject} study guide."
    elif "quick-learn" in name or "quicklearn" in name or "quick learn" in name:
        value = f"Learn {topic} step by step with concise explanations, examples and focused practice on SkillUp."
    elif any(term in name for term in ("quiz", "mcq", "simulator")):
        value = f"Practise {topic} with focused questions, instant feedback and clear answer explanations on SkillUp {subject}."
    elif "home" in path.name or "full-path" in path.name or path.name in {"index.html", "math.html"}:
        value = f"Explore {subject} topics, lessons and practice resources on SkillUp to build understanding and exam confidence."
    else:
        value = f"Learn and practise {topic} with clear explanations, examples and focused questions on SkillUp {subject}."
    return fit_description(value)


def replace_title(content: str, title: str) -> str:
    escaped = escape(title)
    pattern = re.compile(r"(<title\b[^>]*>).*?(</title\s*>)", re.I | re.S)
    if pattern.search(content):
        return pattern.sub(lambda m: m.group(1) + escaped + m.group(2), content, count=1)
    return insert_head(content, f"<title>{escaped}</title>\n")


def insert_head(content: str, markup: str) -> str:
    match = re.search(r"</head\s*>", content, re.I)
    if match:
        return content[:match.start()] + markup + content[match.start():]
    head = re.search(r"<head\b[^>]*>", content, re.I)
    if head:
        return content[:head.end()] + "\n" + markup + content[head.end():]
    return "<head>\n" + markup + "</head>\n" + content


def replace_description(content: str, description: str) -> str:
    escaped = escape(description, quote=True)
    tag_re = re.compile(r"<meta\b(?=[^>]*\bname\s*=\s*['\"]description['\"])[^>]*>", re.I)
    match = tag_re.search(content)
    if not match:
        return insert_head(content, f'<meta name="description" content="{escaped}">\n')
    tag = match.group(0)
    content_re = re.compile(r"\bcontent\s*=\s*(['\"]).*?\1", re.I | re.S)
    if content_re.search(tag):
        new_tag = content_re.sub(f'content="{escaped}"', tag, count=1)
    else:
        new_tag = tag[:-1] + f' content="{escaped}">'
    return content[:match.start()] + new_tag + content[match.end():]


def ensure_canonical(content: str, url: str) -> str:
    tag_re = re.compile(r"<link\b(?=[^>]*\brel\s*=\s*['\"][^'\"]*canonical[^'\"]*['\"])[^>]*>", re.I)
    match = tag_re.search(content)
    if not match:
        return insert_head(content, f'<link rel="canonical" href="{escape(url, quote=True)}">\n')
    tag = match.group(0)
    href_re = re.compile(r"\bhref\s*=\s*(['\"])(.*?)\1", re.I | re.S)
    href_match = href_re.search(tag)
    if not href_match:
        new_tag = tag[:-1] + f' href="{escape(url, quote=True)}">'
    else:
        existing = href_match.group(2).strip()
        absolute = existing if existing.startswith(("http://", "https://")) else urljoin(url, existing)
        new_tag = href_re.sub(f'href="{escape(absolute, quote=True)}"', tag, count=1)
    return content[:match.start()] + new_tag + content[match.end():]


def normalize_page(path: Path, root: Path) -> None:
    content = path.read_text(encoding="utf-8", errors="replace")
    info = parse_page(content)
    if info.noindex:
        return
    title = normalized_title(path, info.title or filename_title(path))
    if title != info.title:
        content = replace_title(content, title)
    current = parse_page(content).description
    if not current or len(current) < 70 or len(current) > 160:
        content = replace_description(content, generated_description(path, title) if not current or len(current) < 70 else fit_description(current))
    content = ensure_canonical(content, page_url(path, root))
    path.write_text(content, encoding="utf-8")


def group_for(path: Path) -> str:
    return subject_for(path)


def generate_html_sitemap(root: Path, pages: list[Path]) -> Path:
    groups: dict[str, list[tuple[str, str]]] = defaultdict(list)
    for path in pages:
        if path.name == "site-map.html":
            continue
        content = path.read_text(encoding="utf-8", errors="replace")
        info = parse_page(content)
        if info.noindex:
            continue
        rel = path.relative_to(root).as_posix()
        href = "/" if rel == "index.html" else "/" + quote(rel, safe="/-._~")
        title = info.title or filename_title(path)
        groups[group_for(path)].append((href, title))

    sections = []
    for subject in sorted(groups):
        links = "".join(
            f'<li><a href="{escape(href, quote=True)}">{escape(title)}</a></li>'
            for href, title in sorted(groups[subject], key=lambda item: item[1].lower())
        )
        sections.append(
            f'<details><summary>{escape(subject)} ({len(groups[subject])})</summary><ul>{links}</ul></details>'
        )

    page = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>SkillUp Academy | All Topics and Learning Pages</title>
<meta name="description" content="Browse SkillUp Academy's Physics, Chemistry, Botany, Zoology and Maths lessons, quizzes, simulators and revision guides in one searchable site map.">
<link rel="canonical" href="https://skillupedu.in/site-map.html">
<style>
*{box-sizing:border-box}body{margin:0;background:#f5f8ff;color:#17265e;font:16px/1.5 system-ui,sans-serif}
main{max-width:1100px;margin:auto;padding:24px 16px 60px}a{color:#245fbd}header{display:flex;align-items:center;justify-content:space-between;gap:12px}
h1{font-size:clamp(26px,4vw,38px);margin:20px 0 8px}p{color:#5d6b85}
input{width:100%;padding:13px 15px;border:1px solid #cbd8ed;border-radius:12px;font:inherit;margin:14px 0 20px}
details{background:#fff;border:1px solid #dbe5f4;border-radius:14px;margin:10px 0;padding:12px 16px}
summary{cursor:pointer;font-weight:800}ul{columns:2;column-gap:28px;padding-left:20px}li{break-inside:avoid;margin:6px 0}
@media(max-width:620px){ul{columns:1}main{padding:18px 12px 48px}}
</style>
</head>
<body><main>
<header><a href="/">← SkillUp Academy home</a><span>Explore the learning library</span></header>
<h1>All SkillUp Academy Topics</h1>
<p>Browse every published lesson, quiz, simulator and revision page. Search by topic or open a subject section.</p>
<input id="siteMapSearch" type="search" placeholder="Search all SkillUp topics…" aria-label="Search all SkillUp topics">
<div id="siteMapGroups">
""" + "\n".join(sections) + """
</div>
</main>
<script>
(function(){const input=document.getElementById('siteMapSearch');if(!input)return;input.addEventListener('input',function(){const q=input.value.trim().toLowerCase();document.querySelectorAll('#siteMapGroups details').forEach(section=>{let count=0;section.querySelectorAll('li').forEach(li=>{const show=!q||li.textContent.toLowerCase().includes(q);li.hidden=!show;if(show)count++;});section.hidden=!!q&&!count;if(q&&count)section.open=true;});});})();
</script>
</body></html>
"""
    target = root / "site-map.html"
    target.write_text(page, encoding="utf-8")
    return target


def add_site_map_link(root: Path) -> None:
    index = root / "index.html"
    if not index.exists():
        return
    content = index.read_text(encoding="utf-8", errors="replace")
    if 'href="/site-map.html"' in content or "href='site-map.html'" in content:
        return
    link = '<p class="skillup-site-map-link"><a href="/site-map.html">Browse all SkillUp topics</a></p>\n'
    match = re.search(r"</body\s*>", content, re.I)
    if match:
        content = content[:match.start()] + link + content[match.start():]
    else:
        content += "\n" + link
    index.write_text(content, encoding="utf-8")


def main() -> int:
    root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).resolve().parents[2]
    pages = html_pages(root)
    if not pages:
        raise SystemExit("SEO enrichment failed: no public HTML pages found.")

    for path in pages:
        if path.name != "site-map.html":
            normalize_page(path, root)

    public_pages = [
        path for path in html_pages(root)
        if path.name != "site-map.html" and not parse_page(path.read_text(encoding="utf-8", errors="replace")).noindex
    ]
    sitemap_page = generate_html_sitemap(root, public_pages)
    add_site_map_link(root)
    normalize_page(sitemap_page, root)

    print(f"SEO enrichment complete: normalized {len(public_pages)} public pages and generated site-map.html.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
