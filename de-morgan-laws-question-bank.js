/* SkillUp Mathematics — De Morgan Laws | Basic → Master */
window.SkillUpDeMorganLawsQuestions=[
{level:"Basic",q:"Which is De Morgan's law for the complement of a union?",o:["(A∪B)ᶜ=Aᶜ∩Bᶜ","(A∪B)ᶜ=Aᶜ∪Bᶜ","(A∪B)ᶜ=A∪B","(A∪B)ᶜ=A∩B"],a:0,e:"The complement of a union equals the intersection of the complements."},
{level:"Basic",q:"Which is De Morgan's law for the complement of an intersection?",o:["(A∩B)ᶜ=Aᶜ∩Bᶜ","(A∩B)ᶜ=Aᶜ∪Bᶜ","(A∩B)ᶜ=A∩B","(A∩B)ᶜ=A∪B"],a:1,e:"The complement of an intersection equals the union of the complements."},
{level:"Basic",q:"Which operation changes to the other operation under De Morgan's laws?",o:["Difference to complement","Union to intersection and intersection to union","Subset to equality","Cardinality to union"],a:1,e:"De Morgan's laws interchange union and intersection when taking complements."},
{level:"Basic",q:"The complement of A∪B contains elements that are:",o:["In A or B","In both A and B","In neither A nor B","Only in A"],a:2,e:"An element outside A∪B belongs to neither A nor B."},
{level:"Basic",q:"The complement of A∩B contains elements that are:",o:["In both A and B only","Not in both A and B simultaneously","Only in A","Only in B"],a:1,e:"An element is outside A∩B if it fails to belong to at least one of the sets."},
{level:"Basic",q:"If U={1,2,3,4} and A={1,2}, B={2,3}, then A∪B is:",o:["{2}","{1,2,3}","{1,3}","{4}"],a:1,e:"The union contains every distinct element from A and B."},
{level:"Basic",q:"For U={1,2,3,4}, A={1,2}, B={2,3}, (A∪B)ᶜ is:",o:["{4}","{2}","{1,3}","∅"],a:0,e:"A∪B={1,2,3}; the only element of U outside it is 4."},
{level:"Basic",q:"For U={1,2,3,4}, A={1,2}, B={2,3}, Aᶜ∩Bᶜ is:",o:["{4}","{2}","{1,3}","∅"],a:0,e:"Aᶜ={3,4} and Bᶜ={1,4}; their intersection is {4}."},
{level:"Basic",q:"For any set A, which is always true?",o:["A∪Aᶜ=∅","A∩Aᶜ=U","A∪Aᶜ=U","A=Aᶜ"],a:2,e:"Every element of U is either in A or outside A."},
{level:"Basic",q:"For any set A, which is always true?",o:["A∩Aᶜ=∅","A∩Aᶜ=U","A∪Aᶜ=A","Aᶜ=A"],a:0,e:"A and its complement have no common elements."},

{level:"Developing",q:"Which identity is correct?",o:["(A∪B)ᶜ=Aᶜ∩Bᶜ","(A∪B)ᶜ=Aᶜ∪Bᶜ","(A∪B)ᶜ=A∩B","(A∪B)ᶜ=A∪B"],a:0,e:"This is De Morgan's first law."},
{level:"Developing",q:"Which identity is correct?",o:["(A∩B)ᶜ=Aᶜ∪Bᶜ","(A∩B)ᶜ=Aᶜ∩Bᶜ","(A∩B)ᶜ=A∩B","(A∩B)ᶜ=A∪B"],a:0,e:"This is De Morgan's second law."},
{level:"Developing",q:"Which three-set identity is correct?",o:["(A∪B∪C)ᶜ=Aᶜ∩Bᶜ∩Cᶜ","(A∪B∪C)ᶜ=Aᶜ∪Bᶜ∪Cᶜ","(A∪B∪C)ᶜ=A∩B∩C","(A∪B∪C)ᶜ=U"],a:0,e:"De Morgan's law extends from two sets to any finite collection of sets."},
{level:"Developing",q:"Which three-set identity is correct?",o:["(A∩B∩C)ᶜ=Aᶜ∪Bᶜ∪Cᶜ","(A∩B∩C)ᶜ=Aᶜ∩Bᶜ∩Cᶜ","(A∩B∩C)ᶜ=A∩B∩C","(A∩B∩C)ᶜ=A∪B∪C"],a:0,e:"The complement of a three-way intersection is the union of the three complements."},
{level:"Developing",q:"If (A∪B)ᶜ=∅, then:",o:["A∪B=∅","A∪B=U","A∩B=U","A=B"],a:1,e:"A set has empty complement exactly when it equals U."},
{level:"Developing",q:"If (A∩B)ᶜ=U, then:",o:["A∩B=U","A∩B=∅","A∪B=U","A=B"],a:1,e:"Only the empty set has complement U."},
{level:"Developing",q:"If Aᶜ∩Bᶜ=∅, then by De Morgan's law:",o:["A∪B=U","A∩B=∅","A∪B=∅","A=B"],a:0,e:"Aᶜ∩Bᶜ=(A∪B)ᶜ=∅, so A∪B=U."},
{level:"Developing",q:"If Aᶜ∪Bᶜ=U, then:",o:["A∩B=U","A∩B=∅","A∪B=U","A=B"],a:1,e:"Aᶜ∪Bᶜ=(A∩B)ᶜ=U, hence A∩B=∅."},
{level:"Developing",q:"Which statement is equivalent to A⊆B?",o:["A∩Bᶜ=∅","A∪Bᶜ=U","Aᶜ∩B=∅","Aᶜ∪B=∅"],a:0,e:"A⊆B means no element of A lies outside B, so A∩Bᶜ=∅."},

{level:"Intermediate",q:"Simplify (A∪Bᶜ)ᶜ:",o:["Aᶜ∩B","A∩Bᶜ","Aᶜ∪B","A∪B"],a:0,e:"By De Morgan, (A∪Bᶜ)ᶜ=Aᶜ∩(Bᶜ)ᶜ=Aᶜ∩B."},
{level:"Intermediate",q:"Simplify (Aᶜ∩B)ᶜ:",o:["A∪Bᶜ","Aᶜ∪B","A∩Bᶜ","A∪B"],a:0,e:"The complement of Aᶜ∩B is A∪Bᶜ."},
{level:"Intermediate",q:"If U={1,2,3,4,5}, A={1,2,3}, B={3,4}, then (A∩B)ᶜ is:",o:["{3}","{1,2,4,5}","{1,2,3,4}","{5}"],a:1,e:"A∩B={3}; all other elements of U form its complement."},
{level:"Intermediate",q:"If Aᶜ∩Bᶜ=Aᶜ, what follows?",o:["A⊆B","B⊆A","A∩B=∅","A=B"],a:1,e:"Aᶜ∩Bᶜ=Aᶜ means Aᶜ⊆Bᶜ. Taking complements reverses inclusion, so B⊆A."},
{level:"Intermediate",q:"Which identity is equivalent to A∩B=A?",o:["A⊆B","B⊆A","A∪B=∅","A∩B=∅"],a:0,e:"If the intersection equals A, every element of A is in B, so A⊆B."},

{level:"Advanced",q:"Simplify (A∪B)∩(A∪Bᶜ):",o:["A","B","A∪B","A∩B"],a:0,e:"Using distributivity, this equals A∪(B∩Bᶜ)=A."},
{level:"Advanced",q:"Simplify (A∩B)∪(A∩Bᶜ):",o:["A","B","A∩B","U"],a:0,e:"Factor A: A∩(B∪Bᶜ)=A∩U=A."},
{level:"Advanced",q:"If (A∪B)ᶜ=Aᶜ, what follows?",o:["A⊆B","B⊆A","A∩B=∅","A=B"],a:1,e:"Taking complements gives A∪B=A, which is equivalent to B⊆A."},

{level:"Master",q:"If (A∩B)ᶜ=Aᶜ, what relation follows?",o:["A⊆B","B⊆A","A∩B=∅","A=B"],a:0,e:"Taking complements gives A∩B=A, hence A⊆B."},
{level:"Master",q:"Simplify [(A∪B)ᶜ∪(A∩B)ᶜ]ᶜ:",o:["A∪B","A∩B","A△B","∅"],a:1,e:"The inner union equals (A∪B)ᶜ∪(A∩B)ᶜ. Taking its complement gives (A∪B)∩(A∩B)=A∩B."}
];