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
    if (p.revision_due && new Date(p.revision_due).getTime() <= Date.now()) return "revision";
    if (p.mastery < 60) return "practice";
    if (p.mastery < 80) return "level_2";
    if (p.mastery < 95) return "level_3";
    return "revision";
  }

  function getAdaptivePlan(studentId, conceptId) {
    const p = get(studentId, conceptId);
    const action = getNextAction(studentId, conceptId);
    const plans = {
      learn: { stage: "learn", min_questions: 15, difficulty: "easy", reason: "No attempts recorded" },
      practice: { stage: "practice", min_questions: 15, difficulty: "easy-medium", reason: "Mastery below 60" },
      level_2: { stage: "level_2", min_questions: 15, difficulty: "medium", reason: "Mastery 60-79" },
      level_3: { stage: "level_3", min_questions: 15, difficulty: "hard", reason: "Mastery 80-94" },
      revision: { stage: "revision", min_questions: 15, difficulty: "mixed", reason: "Revision due or mastery established" }
    };
    return Object.assign({
      student_id: studentId || "anonymous",
      concept_id: conceptId || "",
      mastery: p.mastery,
      status: p.status,
      accuracy: p.accuracy,
      attempts: p.attempts
    }, plans[action]);
  }

  function getRecommendedConcepts(studentId, concepts) {
    const list = Array.isArray(concepts) ? concepts : [];
    return list.map(c => {
      const p = get(studentId, c.concept_id);
      return Object.assign({}, c, {
        mastery: p.mastery,
        status: p.status,
        next_action: getNextAction(studentId, c.concept_id)
      });
    }).sort((a,b) => {
      const priority = { learn: 0, revision: 1, practice: 2, level_2: 3, level_3: 4 };
      return (priority[a.next_action] - priority[b.next_action]) || (a.mastery - b.mastery);
    });
  }

  window.SkillUpMastery = {
    get,
    recordAnswer,
    getRevisionQueue,
    getNextAction,
    getAdaptivePlan,
    getRecommendedConcepts,
    statusFor
  };
})(window);