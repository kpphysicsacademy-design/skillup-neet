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
    if(["medium","moderate","intermediate"].includes(raw)) return "medium";

    const text=String(q&&(
      q.question||q.q||q.text||""
    )).toLowerCase();
    const options=Array.isArray(q&&q.options)?q.options:(Array.isArray(q&&q.o)?q.o:[]);
    const combined=text+" "+options.map(v=>String(v&&typeof v==="object"?(v.text||v.value||v.label||""):v)).join(" ").toLowerCase();

    // Content signals provide a more meaningful fallback than question position.
    const hardSignals=[
      /assertion.*reason/,/match.*column/,/multiple.*statement/,
      /incorrect.*statement/,/correct.*statements/,/which.*combination/,
      /calculate|determine|numerical|value of/,/ratio|graph|slope/,
      /more than one|number of/
    ];
    const easySignals=[
      /define|definition|unit of|symbol of|called as|known as/,
      /which.*is.*example|identify|belongs to|basic principle/
    ];
    const hardScore=hardSignals.reduce((n,r)=>n+(r.test(combined)?1:0),0);
    const easyScore=easySignals.reduce((n,r)=>n+(r.test(combined)?1:0),0);
    if(hardScore>=2 || options.length>0 && /calculate|determine|numerical/.test(text)) return "hard";
    if(easyScore>=1 && hardScore===0) return "easy";

    // Stable medium fallback for ambiguous legacy questions.
    return "medium";
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