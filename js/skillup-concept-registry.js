/* SkillUp Central Concept Registry
 * One registry connects concepts -> existing MCQ topics -> learning workflow.
 * No question content is duplicated here.
 */
(function (global) {
  "use strict";

  const REGISTRY_URL = "data/skillup-concept-registry.json";
  let cache = null;

  function normalize(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[–—]/g, "-")
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  async function load() {
    if (cache) return cache;
    const response = await fetch(REGISTRY_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Unable to load SkillUp concept registry");
    cache = await response.json();
    return cache;
  }

  async function findConcept(value) {
    const data = await load();
    const key = normalize(value);
    return data.concepts.find(function (concept) {
      if (normalize(concept.concept_id) === key) return true;
      if (normalize(concept.name) === key) return true;
      if (normalize(concept.slug) === key) return true;
      if (normalize(concept.question_topic) === key) return true;
      return (concept.aliases || []).some(function (alias) {
        return normalize(alias) === key;
      });
    }) || null;
  }

  async function getConceptsBySubject(subjectId) {
    const data = await load();
    return data.concepts.filter(function (concept) {
      return concept.subject_id === subjectId;
    });
  }

  function getCachedConcept(value) {
    if (!cache) return null;
    const key = normalize(value);
    return cache.concepts.find(function (concept) {
      if (normalize(concept.concept_id) === key || normalize(concept.name) === key || normalize(concept.slug) === key || normalize(concept.question_topic) === key) return true;
      return (concept.aliases || []).some(function (alias) { return normalize(alias) === key; });
    }) || null;
  }

  async function getQuestionTopic(value) {
    const concept = await findConcept(value);
    return concept ? concept.question_topic : String(value || "");
  }

  global.SkillUpConceptRegistry = {
    load: load,
    findConcept: findConcept,
    getConceptsBySubject: getConceptsBySubject,
    getQuestionTopic: getQuestionTopic,
    getCachedConcept: getCachedConcept
  };
})(window);
