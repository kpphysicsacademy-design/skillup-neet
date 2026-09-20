/* SkillUp Chemistry Universal MCQ Renderer
 * Handles text, formulas, structures, reactions, diagrams, images and future numeric types.
 */
(function () {
  "use strict";

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, ch => ({
      "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"
    }[ch]));
  }

  function renderFormula(value) {
    return value ? '<span class="skillup-formula">\\(' + value + '\\)</span>' : "";
  }

  function renderAsset(assetId, alt) {
    const asset = window.SkillUpChemistryAssets && window.SkillUpChemistryAssets.get(assetId);
    if (!asset || !asset.path) {
      return '<span class="skillup-asset-missing" role="img" aria-label="Missing asset">' + esc(assetId || "missing asset") + '</span>';
    }
    return '<img class="skillup-chem-asset" src="' + esc(asset.path) + '" alt="' + esc(alt || asset.name || assetId) + '" loading="lazy">';
  }

  function renderContent(type, value, assetId, alt) {
    switch (type) {
      case "formula":
        return renderFormula(value);
      case "structure":
      case "image":
      case "reaction":
      case "diagram":
        return renderAsset(assetId, value || alt);
      default:
        return '<span>' + esc(value) + '</span>';
    }
  }

  function renderQuestion(container, question) {
    if (!container) throw new Error("MCQ container is required.");
    const qContent =
      '<div class="skillup-q-text">' + esc(question.question) + '</div>' +
      (question.questionFormula ? renderFormula(question.questionFormula) : "") +
      (question.questionAssetId ? renderAsset(question.questionAssetId, question.question) : "");

    const options = (question.options || []).map(opt =>
      '<button type="button" class="skillup-option" data-option-id="' + esc(opt.id) + '">' +
      '<span class="skillup-option-label">' + esc(opt.id) + '</span>' +
      '<span class="skillup-option-content">' + renderContent(opt.type || "text", opt.value, opt.assetId, question.question) + '</span>' +
      '</button>'
    ).join("");

    container.innerHTML =
      '<article class="skillup-chem-mcq" data-mcq-id="' + esc(question.id) + '">' +
      '<div class="skillup-mcq-question">' + qContent + '</div>' +
      '<div class="skillup-mcq-options">' + options + '</div>' +
      '</article>';

    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([container]);
    }
    return container;
  }

  window.SkillUpChemistryMCQRenderer = { renderQuestion };
})();
