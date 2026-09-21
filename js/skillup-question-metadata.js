/* SkillUp Question Metadata v1
 * Normalizes legacy MCQs into the learning-engine contract at runtime.
 */
(function(window){
  "use strict";

  function slug(v){
    return String(v||"").toLowerCase().trim()
      .replace(/[–—]/g,"-").replace(/&/g,"and").replace(/['’]/g,"")
      .replace(/[^a-z0-9]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");
  }

  function difficulty(q,index){
    const raw=String(q&&(
      q.difficulty||q.level||q.difficulty_level||q.difficultyLevel||""
    )).toLowerCase().trim();
    if(["easy","simple","basic"].includes(raw)) return "easy";
    if(["hard","difficult","advanced"].includes(raw)) return "hard";

    // Legacy banks without metadata remain usable; distribute conservatively.
    const n=Number(index)||0;
    return n%5===4 ? "hard" : (n%3===1 ? "easy" : "medium");
  }

  function normalize(q,index,subject,topic){
    const x=(q&&typeof q==="object")?Object.assign({},q):{question:String(q||"")};
    const concept=x.concept_id||x.conceptId;
    x.question_id=x.question_id||x.questionId||x.id||
      slug(subject)+"-"+slug(topic)+"-"+String(index+1).padStart(3,"0");
    x.concept_id=concept||((window.SkillUpQuestionEngine&&
      window.SkillUpQuestionEngine.conceptIdFromTopic)
      ?window.SkillUpQuestionEngine.conceptIdFromTopic(topic,subject)
      :slug(subject)+"-"+slug(topic));
    x.difficulty=difficulty(x,index);
    x.exam_tags=x.exam_tags||x.examTags||[];
    x.metadata_version="1.0.0";
    return x;
  }

  function normalizeBank(bank,subject,topic){
    return (Array.isArray(bank)?bank:[]).map((q,i)=>normalize(q,i,subject,topic));
  }

  window.SkillUpQuestionMetadata={
    version:"1.0.0",
    normalize,
    normalizeBank,
    difficulty
  };
})(window);