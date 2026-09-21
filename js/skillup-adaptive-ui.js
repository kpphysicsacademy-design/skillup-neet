/* SkillUp Adaptive UI v1
 * Reads the mastery engine and exposes a non-destructive adaptive plan
 * for existing learning-path pages.
 */
(function(window,document){
  "use strict";

  function studentId(){
    return window.SkillUpStudentId ||
      localStorage.getItem("skillup.student_id") ||
      localStorage.getItem("student_id") || "anonymous";
  }

  function plan(conceptId){
    if(!window.SkillUpMastery || !conceptId) return null;
    return window.SkillUpMastery.getAdaptivePlan(studentId(),conceptId);
  }

  function apply(container,conceptId){
    const p=plan(conceptId);
    if(!p || !container) return p;

    let badge=container.querySelector(".skillup-adaptive-badge");
    if(!badge){
      badge=document.createElement("div");
      badge.className="skillup-adaptive-badge";
      badge.setAttribute("role","status");
      container.prepend(badge);
    }

    const labels={
      learn:"Learn",
      practice:"Practice",
      level_2:"Level 2",
      level_3:"Level 3",
      revision:"Revision"
    };

    badge.textContent="Next: "+(labels[p.stage]||p.stage)+
      " • "+p.difficulty+
      " • "+p.min_questions+" questions"+
      " • Mastery "+p.mastery+"%";

    badge.dataset.stage=p.stage;
    badge.dataset.conceptId=p.concept_id;
    return p;
  }

  function getNextAction(conceptId){
    const p=plan(conceptId);
    return p ? p.stage : "practice";
  }

  window.SkillUpAdaptiveUI={
    version:"1.0.0",
    plan,
    apply,
    getNextAction
  };
})(window,document);