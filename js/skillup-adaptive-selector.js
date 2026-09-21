/* SkillUp Adaptive Selector v1
 * Selects questions from an existing bank without requiring the bank to be rebuilt.
 */
(function(window){
  "use strict";

  function normalizeDifficulty(q){
    const d=String(q&& (q.difficulty||q.level||q.difficulty_level)||"medium").toLowerCase();
    if(d==="easy"||d==="simple") return "easy";
    if(d==="hard"||d==="difficult") return "hard";
    return "medium";
  }

  function score(q,index){
    const d=normalizeDifficulty(q);
    const weight={easy:1,medium:2,hard:3}[d]||2;
    return {q,index,d,weight};
  }

  function targetDifficulty(stage){
    if(stage==="learn") return ["easy","medium"];
    if(stage==="practice") return ["easy","medium"];
    if(stage==="level_2") return ["medium","easy","hard"];
    if(stage==="level_3") return ["hard","medium"];
    return ["medium","easy","hard"];
  }

  function select(bank,plan,count){
    const source=Array.isArray(bank)?bank:[];
    const n=Math.max(1,Math.min(Number(count)||10,source.length||1));
    const wanted=targetDifficulty(plan&&plan.stage);
    const scored=source.map(score);

    scored.sort((a,b)=>{
      const ai=wanted.indexOf(a.d), bi=wanted.indexOf(b.d);
      return (ai-bi)||((a.index+17)%31-(b.index+17)%31);
    });

    const chosen=[];
    const seen=new Set();
    for(const item of scored){
      const id=item.q&&(item.q.question_id||item.q.questionId||item.q.id);
      const key=id!=null?String(id):"idx:"+item.index;
      if(seen.has(key)) continue;
      seen.add(key);
      chosen.push(item.q);
      if(chosen.length>=n) break;
    }
    return chosen;
  }

  function shuffleStable(items){
    return items.slice().sort(function(a,b){
      const ai=String(a&& (a.question_id||a.questionId||a.id)||"");
      const bi=String(b&& (b.question_id||b.questionId||b.id)||"");
      return ai.localeCompare(bi);
    });
  }

  function forConcept(studentId,conceptId,bank,count){
    if(!window.SkillUpMastery) return Array.isArray(bank)?bank.slice(0,count||10):[];
    const plan=window.SkillUpMastery.getAdaptivePlan(studentId||"anonymous",conceptId);
    return select(bank,plan,count||plan.min_questions);
  }

  window.SkillUpAdaptiveSelector={
    version:"1.0.0",
    normalizeDifficulty,
    select,
    forConcept
  };
})(window);