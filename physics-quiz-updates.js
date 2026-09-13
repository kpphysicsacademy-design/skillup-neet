/* SkillUp Physics Quiz Updates Registry
 * IMPORTANT: This file is append-only for concept quiz banks.
 * Do not replace physics-400-concepts.js when adding a new quiz.
 */
(function(w){
  w.SKILLUP_PHYSICS_QUIZ_UPDATES = w.SKILLUP_PHYSICS_QUIZ_UPDATES || Object.create(null);
  w.SKILLUP_REGISTER_PHYSICS_QUIZ = function(key, title, quiz, hint){
    key = String(key || '').trim().toLowerCase();
    if(!key || !Array.isArray(quiz) || !quiz.length) return;
    w.SKILLUP_PHYSICS_QUIZ_UPDATES[key] = {key:key,title:title||key,quiz:quiz,hint:hint||''};
  };
})(window);
