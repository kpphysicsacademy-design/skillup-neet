/* SkillUp Universal Question Engine v1
 * Non-destructive adapter for existing question banks.
 * Connects answer events to SkillUpMastery without replacing current quiz rendering.
 */
(function (window) {
  "use strict";

  function normalize(value) {
    return String(value || "").trim().toLowerCase()
      .replace(/[&/]+/g, "-").replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function conceptIdFromTopic(topic, subject) {
    const s = normalize(subject);
    const t = normalize(topic);
    const registry = window.SkillUpConceptRegistry;
    if (registry && typeof registry.getCachedConcept === "function") {
      const concept = registry.getCachedConcept(topic);
      if (concept && concept.concept_id) return concept.concept_id;
    }
    if (!t) return "";
    const explicit = {
      "velocity": "PHY-KIN-MSL-005",
      "speed": "PHY-KIN-MSL-004",
      "acceleration": "PHY-KIN-MSL-006",
      "position": "PHY-KIN-MSL-001",
      "distance": "PHY-KIN-MSL-002",
      "displacement": "PHY-KIN-MSL-003",
      "position-time-graphs": "PHY-KIN-MSL-007",
      "velocity-time-graphs": "PHY-KIN-MSL-008",
      "equations-of-motion": "PHY-KIN-MSL-009"
    };
    return explicit[t] || (s === "physics" ? "PHY-TOPIC-" + t.toUpperCase() : s.toUpperCase() + "-TOPIC-" + t.toUpperCase());
  }

  function getStudentId() {
    return window.SkillUpStudentId ||
      localStorage.getItem("skillup.student_id") ||
      localStorage.getItem("student_id") ||
      "anonymous";
  }

  function record(answer) {
    if (!window.SkillUpMastery || typeof window.SkillUpMastery.recordAnswer !== "function") return null;
    const conceptId = answer.conceptId || conceptIdFromTopic(answer.topic, answer.subject);
    if (!conceptId) return null;
    return window.SkillUpMastery.recordAnswer(
      answer.studentId || getStudentId(),
      conceptId,
      answer.difficulty || "medium",
      !!answer.isCorrect,
      answer.questionId || null
    );
  }

  function nextAction(conceptId) {
    if (!window.SkillUpMastery) return "practice";
    return window.SkillUpMastery.getNextAction(getStudentId(), conceptId);
  }

  window.SkillUpQuestionEngine = {
    version: "1.0.0",
    conceptIdFromTopic,
    record,
    nextAction
  };
})(window);