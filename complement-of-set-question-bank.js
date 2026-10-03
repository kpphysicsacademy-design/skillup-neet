/* SkillUp Mathematics — Complement of a Set | Basic → Master */
window.SkillUpComplementOfSetQuestions=[
{level:"Basic",q:"If U={1,2,3,4,5} and A={1,3,5}, then Aᶜ is:",o:["{1,3,5}","{2,4}","{1,2,3}","∅"],a:1,e:"The complement contains elements of U that are not in A: {2,4}."},
{level:"Basic",q:"The complement of A with respect to U is written as:",o:["A∩U","Aᶜ","A∪U","A−U"],a:1,e:"Aᶜ denotes the elements in the universal set that are not in A."},
{level:"Basic",q:"For a universal set U, Uᶜ equals:",o:["U","∅","1","A"],a:1,e:"There are no elements of U outside U itself."},
{level:"Basic",q:"For any set A⊆U, A∪Aᶜ equals:",o:["A","Aᶜ","∅","U"],a:3,e:"Every element of U is either in A or in its complement."},
{level:"Basic",q:"For any set A⊆U, A∩Aᶜ equals:",o:["A","U","∅","Aᶜ"],a:2,e:"No element can belong to both A and its complement."},
{level:"Basic",q:"If U={a,b,c,d} and A={a,c}, then Aᶜ is:",o:["{a,c}","{b,d}","{a,b}","{c,d}"],a:1,e:"Remove a and c from U; b and d remain."},
{level:"Basic",q:"If A=∅ in universal set U, then Aᶜ is:",o:["∅","A","U","Uᶜ"],a:2,e:"Every element of U lies outside the empty set."},
{level:"Basic",q:"If A=U, then Aᶜ is:",o:["U","∅","A","A∩U"],a:1,e:"Nothing in U lies outside U."},
{level:"Basic",q:"If n(U)=20 and n(A)=8, then n(Aᶜ) is:",o:["8","12","20","28"],a:1,e:"For A⊆U, n(Aᶜ)=n(U)−n(A)=20−8=12."},
{level:"Basic",q:"Which operation gives Aᶜ when A⊆U?",o:["U−A","A−U","U∩A","U∪A"],a:0,e:"The complement is the set of elements of U that are not in A, i.e. U−A."},

{level:"Developing",q:"Which is De Morgan's first law?",o:["(A∪B)ᶜ=Aᶜ∩Bᶜ","(A∪B)ᶜ=Aᶜ∪Bᶜ","(A∪B)ᶜ=A∪B","(A∪B)ᶜ=A∩B"],a:0,e:"The complement of a union equals the intersection of the complements."},
{level:"Developing",q:"Which is De Morgan's second law?",o:["(A∩B)ᶜ=Aᶜ∩Bᶜ","(A∩B)ᶜ=Aᶜ∪Bᶜ","(A∩B)ᶜ=A∩B","(A∩B)ᶜ=A∪B"],a:1,e:"The complement of an intersection equals the union of the complements."},
{level:"Developing",q:"The complement of the complement of A is:",o:["∅","U","A","Aᶜ"],a:2,e:"Taking the complement twice returns the original set: (Aᶜ)ᶜ=A."},
{level:"Developing",q:"Which identity is correct?",o:["A−B=A∩Bᶜ","A−B=A∪Bᶜ","A−B=Aᶜ∩B","A−B=Aᶜ∪B"],a:0,e:"A−B contains elements in A and outside B, so A−B=A∩Bᶜ."},
{level:"Developing",q:"If A⊆B⊆U, which relation is correct?",o:["Bᶜ⊆Aᶜ","Aᶜ⊆Bᶜ","Aᶜ=Bᶜ always","A∩Bᶜ=A"],a:0,e:"Taking complements reverses subset inclusion."},
{level:"Developing",q:"If A and B are disjoint, then A∩Bᶜ equals:",o:["A","B","∅","U"],a:0,e:"If A∩B=∅, no element of A is in B, so every element of A is in Bᶜ."},
{level:"Developing",q:"If n(U)=50, n(A)=28 and n(B)=20 with A∩B=∅, then n((A∪B)ᶜ) is:",o:["2","8","22","30"],a:1,e:"n(A∪B)=28+20=48, so its complement has 50−48=2. Correct option is 2."},
{level:"Developing",q:"If Aᶜ=∅, then A must be:",o:["∅","U","Aᶜ","A−U"],a:1,e:"Only U has no elements outside itself."},
{level:"Developing",q:"If Aᶜ=U, then A must be:",o:["U","∅","A","Aᶜ"],a:1,e:"The complement can equal all of U only when A contains no elements."},
{level:"Developing",q:"Which statement is always true?",o:["A⊆Aᶜ","A∩Aᶜ=∅","A∪Aᶜ=A","Aᶜ⊆A"],a:1,e:"A set and its complement are always disjoint."},

{level:"Intermediate",q:"If U={1,2,3,4,5,6}, A={1,2,3}, and B={3,4}, then (A∪B)ᶜ is:",o:["{5,6}","{1,2,3,4}","{3}","{1,2,5,6}"],a:0,e:"A∪B={1,2,3,4}; its complement in U is {5,6}."},
{level:"Intermediate",q:"For the same sets U={1,2,3,4,5,6}, A={1,2,3}, B={3,4}, (A∩B)ᶜ is:",o:["{3}","{1,2,4,5,6}","{1,2,3,4}","{5,6}"],a:1,e:"A∩B={3}; everything else in U belongs to its complement."},
{level:"Intermediate",q:"Which expression is equivalent to A−B using complements?",o:["A∩Bᶜ","Aᶜ∩B","A∪Bᶜ","Aᶜ∪B"],a:0,e:"Set difference is intersection with the complement of the second set."},
{level:"Intermediate",q:"If Aᶜ∩Bᶜ=∅, then:",o:["A∪B=U","A∩B=∅","A=B","A∪B=∅"],a:0,e:"By De Morgan's law, (A∪B)ᶜ=Aᶜ∩Bᶜ=∅, hence A∪B=U."},
{level:"Intermediate",q:"If Aᶜ∪Bᶜ=U, then:",o:["A∩B=U","A∩B=∅","A∪B=U","A=B"],a:1,e:"By De Morgan's law, (A∩B)ᶜ=U, so A∩B must be empty."},

{level:"Advanced",q:"If n(U)=100, n(A)=60, n(B)=45 and n(A∩B)=20, then n((A∪B)ᶜ) is:",o:["15","20","25","35"],a:0,e:"n(A∪B)=60+45−20=85, so the complement has 100−85=15 elements."},
{level:"Advanced",q:"If Aᶜ⊆Bᶜ, what follows?",o:["A⊆B","B⊆A","A∩B=∅","A=B"],a:0,e:"Complement reverses inclusion: Aᶜ⊆Bᶜ implies A⊆B."},
{level:"Advanced",q:"Which identity is correct for three sets?",o:["(A∪B∪C)ᶜ=Aᶜ∩Bᶜ∩Cᶜ","(A∪B∪C)ᶜ=Aᶜ∪Bᶜ∪Cᶜ","(A∪B∪C)ᶜ=A∩B∩C","(A∪B∪C)ᶜ=U"],a:0,e:"De Morgan's law extends to any finite number of sets."},

{level:"Master",q:"If Aᶜ∩B=∅, what must be true?",o:["B⊆A","A⊆B","A∩B=∅","A∪B=∅"],a:0,e:"Aᶜ∩B=∅ means no element of B lies outside A; therefore B⊆A."},
{level:"Master",q:"If (Aᶜ∪Bᶜ)ᶜ=A, which relation is forced?",o:["A⊆B","B⊆A","A=B","A∩B=∅"],a:0,e:"By De Morgan, (Aᶜ∪Bᶜ)ᶜ=A∩B. Thus A∩B=A, which means A⊆B."}
];