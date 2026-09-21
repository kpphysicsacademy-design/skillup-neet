/* SkillUp Learning Engine v1
 * Client-side mastery/progress engine.
 * Uses localStorage now and exposes a stable API for Firebase migration later.
 */
(function (window) {
  "use strict";

  const KEY = "skillup.mastery.v1";

  function readStore() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); }
    catch (_) { return {}; }
  }

  function writeStore(store) {
    localStorage.setItem(KEY, JSON.stringify(store));
    return store;
  }

  function key(studentId, conceptId) {
    return String(studentId || "anonymous") + "::" + String(conceptId || "unknown");
  }

  function statusFor(score) {
    if (score >= 95) return "mastered";
    if (score >= 80) return "strong";
    if (score >= 60) return "practicing";
    if (score >= 40) return "developing";
    return "needs_learning";
  }

  function accuracy(correct, attempts) {
    return attempts ? Math.round((correct / attempts) * 1000) / 10 : 0;
  }

  function get(studentId, conceptId) {
    const store = readStore();
    return store[key(studentId, conceptId)] || {
      student_id: studentId || "anonymous",
      concept_id: conceptId || "",
      attempts: 0,
      correct: 0,
      accuracy: 0,
      easy_attempts: 0, easy_correct: 0, easy_accuracy: 0,
      medium_attempts: 0, medium_correct: 0, medium_accuracy: 0,
      hard_attempts: 0, hard_correct: 0, hard_accuracy: 0,
      mistake_count: 0,
      consecutive_correct: 0,
      mastery: 0,
      status: "needs_learning",
      last_attempt: null,
      revision_due: null
    };
  }

  function recordAnswer(studentId, conceptId, difficulty, isCorrect, questionId) {
    const store = readStore();
    const k = key(studentId, conceptId);
    const p = get(studentId, conceptId);
    const d = ["easy", "medium", "hard"].includes(difficulty) ? difficulty : "medium";

    p.attempts += 1;
    if (isCorrect) {
      p.correct += 1;
      p.consecutive_correct += 1;
    } else {
      p.mistake_count += 1;
      p.consecutive_correct = 0;
    }

    p[d + "_attempts"] += 1;
    if (isCorrect) p[d + "_correct"] += 1;
    p[d + "_accuracy"] = accuracy(p[d + "_correct"], p[d + "_attempts"]);
    p.accuracy = accuracy(p.correct, p.attempts);

    // Conservative mastery: accuracy plus experience, capped until enough attempts exist.
    const experience = Math.min(1, p.attempts / 10);
    p.mastery = Math.round(p.accuracy * experience);
    p.status = statusFor(p.mastery);
    p.last_attempt = new Date().toISOString();

    // Wrong answers enter a short revision window.
    if (!isCorrect) {
      p.revision_due = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
      p.last_mistake_question_id = questionId || null;
    } else if (p.consecutive_correct >= 3) {
      p.revision_due = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();
    }

    store[k] = p;
    writeStore(store);
    return p;
  }

  function getRevisionQueue(studentId) {
    const store = readStore();
    const now = Date.now();
    return Object.values(store)
      .filter(p => p.student_id === (studentId || "anonymous") && p.revision_due && new Date(p.revision_due).getTime() <= now)
      .sort((a, b) => new Date(a.revision_due) - new Date(b.revision_due));
  }

  function getNextAction(studentId, conceptId) {
    const p = get(studentId, conceptId);
    if (p.attempts === 0) return "learn";
    if (p.mastery < 60) return "practice";
    if (p.mastery < 80) return "level_2";
    if (p.mastery < 95) return "level_3";
    return "revision";
  }

  window.SkillUpMastery = {
    get,
    recordAnswer,
    getRevisionQueue,
    getNextAction,
    statusFor
  };
})(window);