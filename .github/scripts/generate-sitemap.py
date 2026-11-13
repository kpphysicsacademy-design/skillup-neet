#!/usr/bin/env python3
"""Generate an XML sitemap for the public SkillUp GitHub Pages site."""
from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import quote
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
BASE_URL = "https://skillupedu.in"
OUTPUT = ROOT / "sitemap.xml"
EXCLUDED_DIRS = {".git", ".github", "node_modules", "vendor"}
EXCLUDED_FILES = {
    "404.html",
    "admin.html",
    "login.html",
    "register.html",
    "profile.html",
    "progress.html",
    "central-login.html",
    "central-register.html",
    "central-reset-password.html",
    "chemistry-asset-manager.html",
    "deployment-check-20260909.html",
}


class RobotsMetaParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.noindex = False

    def handle_starttag(self, tag, attrs) -> None:
        if tag.lower() != "meta":
            return
        values = {str(k).lower(): (v or "").strip().lower() for k, v in attrs}
        if values.get("name") in {"robots", "googlebot"}:
            directives = {part.strip() for part in values.get("content", "").split(",")}
            if "noindex" in directives:
                self.noindex = True


def is_excluded(path: Path) -> bool:
    relative = path.relative_to(ROOT)
    if any(part in EXCLUDED_DIRS or part.startswith(".") for part in relative.parts[:-1]):
        return True
    if path.name.lower() in EXCLUDED_FILES:
        return True
    return False


def is_noindex(path: Path) -> bool:
    try:
        parser = RobotsMetaParser()
        with path.open("r", encoding="utf-8", errors="replace") as page:
            for chunk in iter(lambda: page.read(65536), ""):
                parser.feed(chunk)
                if parser.noindex:
                    return True
        return False
    except OSError as exc:
        raise RuntimeError(f"Unable to read {path}: {exc}") from exc


def main() -> None:
    pages = []
    for path in ROOT.rglob("*.html"):
        if is_excluded(path) or is_noindex(path):
            continue
        relative = path.relative_to(ROOT).as_posix()
        if relative == "index.html":
            url_path = "/"
        else:
            url_path = "/" + quote(relative, safe="/-._~")
        pages.append(BASE_URL + url_path)

    pages = sorted(set(pages))
    if not pages:
        raise SystemExit("Sitemap generation failed: no eligible HTML pages found.")
    if len(pages) > 50000:
        raise SystemExit(f"Sitemap generation failed: {len(pages)} URLs exceeds the 50,000 URL limit.")

    ET.register_namespace("", "http://www.sitemaps.org/schemas/sitemap/0.9")
    namespace = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
    urlset = ET.Element(namespace + "urlset")
    for url in pages:
        entry = ET.SubElement(urlset, namespace + "url")
        ET.SubElement(entry, namespace + "loc").text = url

    tree = ET.ElementTree(urlset)
    ET.indent(tree, space="  ")
    tree.write(OUTPUT, encoding="utf-8", xml_declaration=True)

    # Re-open and validate the emitted XML before the deployment artifact is uploaded.
    parsed = ET.parse(OUTPUT)
    emitted = parsed.findall(f"{namespace}url")
    if len(emitted) != len(pages):
        raise SystemExit("Sitemap validation failed: emitted URL count does not match input.")
    for entry in emitted:
        loc = entry.findtext(f"{namespace}loc", "")
        if not loc.startswith(BASE_URL + "/") and loc != BASE_URL:
            raise SystemExit(f"Sitemap validation failed: non-canonical URL: {loc}")

    print(f"Generated and validated {len(pages)} canonical URLs in {OUTPUT.name}.")


if __name__ == "__main__":
    main()
