import pathlib
import re
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]

class ChemistrySmokeTests(unittest.TestCase):
    def test_quiz_progress_integration(self):
        html = (ROOT / 'chemistry-mcq.html').read_text(encoding='utf-8')
        for expected in ('/central-config.js', '/central-auth.js', 'SkillUpAuth.getSession()', 'SkillUpAuth.getProgress(', 'SkillUpAuth.saveProgress(', 'persistCompletion()', 'id="saveStatus"'):
            with self.subTest(expected=expected):
                self.assertIn(expected, html)
        self.assertLess(html.index('central-auth.js'), html.index('async function persistCompletion'))
        self.assertRegex(html, r"replaceChildren\(card\);\s*void persistCompletion\(\)")

    def test_home_links_to_quiz(self):
        html = (ROOT / 'chemistry-home.html').read_text(encoding='utf-8')
        self.assertIn('chemistry-mcq.html', html)
        self.assertIn('chemistry-1062-concepts-base.js', html)

if __name__ == '__main__':
    unittest.main()
