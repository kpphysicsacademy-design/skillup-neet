/* SkillUp NEET — unified MCQ bank registry
 * Keeps chapter routing in one place while preserving existing question-bank files.
 */
window.SkillUpMCQBanks = window.SkillUpMCQBanks || {};

(function () {
  const aliases = {
    "systems of units": "systems-of-units-question-bank.js",
    "significant figures": "significant-figures-question-bank.js",
    "dimensions and dimensional formulae": "dimensions-and-dimensional-formulae-question-bank.js",
    "dimensional analysis and applications": "dimensional-analysis-and-applications-question-bank.js",
    "vector addition and subtraction": "vector-addition-and-subtraction-question-bank.js",
    "scalar and vector products": "scalar-and-vector-products-question-bank.js",
    "resolution of a vector": "resolution-of-a-vector-question-bank.js"
  };

  window.SkillUpMCQBanks.normalizeTopic = function (value) {
    return String(value || "").trim().toLowerCase().replace(/\\s+/g, " ");
  };

  window.SkillUpMCQBanks.getSource = function (topic) {
    return aliases[window.SkillUpMCQBanks.normalizeTopic(topic)] || null;
  };
})();
