import importlib.util
import json
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("release", ROOT / ".github/scripts/release-consistency.py")
release = importlib.util.module_from_spec(spec)
spec.loader.exec_module(release)

class ReleaseTests(unittest.TestCase):
    def test_release(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            for name in release.FILES:
                (root / name).write_bytes((ROOT / name).read_bytes())
            sha = "a" * 40
            expected = release.generate(root, sha)
            self.assertIn("skillup-release-" + sha, (root / "service-worker.js").read_text())
            def fetch(path):
                return (root / path.split("?")[0]).read_bytes()
            release.verify(expected, fetch)
            def stale(path):
                return b"stale" if path == "index.html" else fetch(path)
            with self.assertRaises(ValueError):
                release.verify(expected, stale)
            def stale_metadata(path):
                return json.dumps({"commit": "b" * 40}).encode() if path.startswith("release-version.json") else fetch(path)
            with self.assertRaises(ValueError):
                release.verify(expected, stale_metadata)
            def stale_busted(path):
                return b"stale" if path.startswith("shared-nav.js?") else fetch(path)
            with self.assertRaises(ValueError):
                release.verify(expected, stale_busted)

    def test_worker_policy(self):
        source = (ROOT / "service-worker.js").read_text()
        self.assertIn("url.pathname === '/release-version.json'", source)
        self.assertIn("fetch(request, {cache:'no-store'})", source)
        self.assertIn("fetch(request, {cache:'no-cache'})", source)
        self.assertIn("cache.match(pageKey)", source)
        self.assertIn("cache:'reload'", source)

if __name__ == "__main__":
    unittest.main()
