"""Generate and verify release metadata for the final Pages artifact."""
import argparse
import hashlib
import json
import re
import time
import urllib.request
from pathlib import Path

FILES = ("index.html", "service-worker.js", "shared-nav.js", "central-auth.js", "central-config.js", "central-login.html", "central-register.html")
BASE = "https://skillupedu.in/"

def digest(data):
    return hashlib.sha256(data).hexdigest()

def generate(root, sha):
    if not re.fullmatch(r"[0-9a-f]{40}", sha):
        raise ValueError("Invalid commit SHA")
    worker = root / "service-worker.js"
    source = worker.read_text(encoding="utf-8")
    source, count = re.subn(r"const CACHE_NAME = '[^']+';", "const CACHE_NAME = 'skillup-release-" + sha + "';", source)
    if count != 1:
        raise ValueError("Expected one cache declaration")
    worker.write_text(source, encoding="utf-8")
    metadata = {"commit": sha, "files": {name: digest((root / name).read_bytes()) for name in FILES}}
    (root / "release-version.json").write_text(json.dumps(metadata, sort_keys=True) + "\n", encoding="utf-8")
    return metadata

def verify(expected, fetch):
    for suffix in ("", "?release=" + expected["commit"]):
        actual = json.loads(fetch("release-version.json" + suffix))
        if actual != expected:
            raise ValueError("Live release metadata mismatch")
        for name, checksum in expected["files"].items():
            if digest(fetch(name + suffix)) != checksum:
                raise ValueError("Live content mismatch: " + name)

def fetch_live(path):
    req = urllib.request.Request(BASE + path, headers={"Cache-Control": "no-cache", "User-Agent": "SkillUp-release-verifier"})
    with urllib.request.urlopen(req, timeout=20) as response:
        if not response.geturl().startswith(BASE):
            raise ValueError("Unexpected redirect")
        return response.read()

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=["generate", "verify"])
    parser.add_argument("--root", type=Path, default=Path("."))
    parser.add_argument("--sha", required=True)
    args = parser.parse_args()
    if args.mode == "generate":
        generate(args.root, args.sha)
    else:
        expected = json.loads((args.root / "release-version.json").read_text())
        if expected["commit"] != args.sha or set(expected["files"]) != set(FILES):
            raise ValueError("Unexpected artifact metadata")
        for attempt in range(6):
            try:
                verify(expected, fetch_live)
                print("Live release verified:", args.sha)
                return
            except (OSError, ValueError) as error:
                print("Verification attempt", attempt + 1, str(error), flush=True)
                if attempt == 5:
                    raise
                time.sleep(20)

if __name__ == "__main__":
    main()
