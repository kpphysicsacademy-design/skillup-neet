/* SkillUp Mathematics — Difference of Sets | Basic → Master */
window.SkillUpDifferenceOfSetsQuestions=[
{level:"Basic",q:"If A={1,2,3,4} and B={3,4,5}, then A−B is:",o:["{1,2}","{3,4}","{5}","{1,2,5}"],a:0,e:"A−B contains elements in A that are not in B, so A−B={1,2}."},
{level:"Basic",q:"If A={1,2,3} and B={2,3,4}, then B−A is:",o:["{1}","{2,3}","{4}","{1,4}"],a:2,e:"The only element of B not in A is 4."},
{level:"Basic",q:"A−B means:",o:["Elements common to A and B","Elements in A but not in B","Elements in B but not in A","Elements in neither set"],a:1,e:"Set difference A−B keeps elements belonging to A and removes elements belonging to B."},
{level:"Basic",q:"For any set A, A−A equals:",o:["A","U","∅","Aᶜ"],a:2,e:"Every element of A is removed when A is subtracted from itself."},
{level:"Basic",q:"For any set A, A−∅ equals:",o:["∅","A","U","Aᶜ"],a:1,e:"Removing no elements leaves A unchanged."},
{level:"Basic",q:"For any set A in universal set U, A−U equals:",o:["A","U","∅","Aᶜ"],a:2,e:"Every element of A belongs to U, so all elements are removed."},
{level:"Basic",q:"If A and B are disjoint, then A−B equals:",o:["A","B","∅","U"],a:0,e:"Since B contains no element of A, subtracting B removes nothing from A."},
{level:"Basic",q:"If A⊆B, then A−B equals:",o:["A","B","∅","U"],a:2,e:"Every element of A is in B, so none remains in A−B."},
{level:"Basic",q:"If A={2,4,6,8} and B={4,8,10}, then A−B is:",o:["{2,6}","{4,8}","{10}","{2,4,6,8,10}"],a:0,e:"Remove 4 and 8 from A; the remaining elements are 2 and 6."},
{level:"Basic",q:"Which symbol commonly represents set difference?",o:["A∪B","A∩B","A−B","A⊆B"],a:2,e:"A−B is the standard notation for the difference of A and B."},

{level:"Developing",q:"Which identity is always true?",o:["A−B=A∩B","A−B=A∩Bᶜ","A−B=A∪B","A−B=B−A"],a:1,e:"An element is in A−B exactly when it is in A and not in B, giving A∩Bᶜ."},
{level:"Developing",q:"Which statement is always true?",o:["A−B⊆A","A−B⊆B","A−B=B−A","A−B=A∩B"],a:0,e:"Every element of A−B comes from A, so A−B is a subset of A."},
{level:"Developing",q:"If A∩B=∅, then:",o:["A−B=A","A−B=B","A−B=∅","A=B"],a:0,e:"Disjointness means B removes no elements from A."},
{level:"Developing",q:"If A−B=∅, then:",o:["A⊆B","B⊆A","A and B are disjoint","A=B always"],a:0,e:"If no element of A lies outside B, every element of A must be in B."},
{level:"Developing",q:"If B−A=∅, then:",o:["A⊆B","B⊆A","A∩B=∅","A=B always"],a:1,e:"No element of B lies outside A, so B⊆A."},
{level:"Developing",q:"If A={1,2,3,4} and B={3,4}, then A−B is:",o:["{1,2}","{3,4}","{1,2,3,4}","∅"],a:0,e:"Removing the elements 3 and 4 from A leaves {1,2}."},
{level:"Developing",q:"If A={1,2,3} and B={2,3,4}, then A−B is:",o:["{1}","{2,3}","{4}","∅"],a:0,e:"The elements 2 and 3 are common and are removed; 1 remains."},
{level:"Developing",q:"Which relation connects difference and complement?",o:["A−B=A∩Bᶜ","A−B=A∪Bᶜ","A−B=Aᶜ∩B","A−B=Aᶜ∪B"],a:0,e:"Difference is intersection with the complement of the second set."},
{level:"Developing",q:"If n(A)=20 and n(A−B)=7, how many elements of A are in B?",o:["7","13","20","27"],a:1,e:"A is divided into A−B and A∩B. Thus n(A∩B)=20−7=13."},
{level:"Developing",q:"If A−B=A, what must be true?",o:["A⊆B","A∩B=∅","B⊆A","A=B"],a:1,e:"No element of A is removed by B, so A and B are disjoint."},

{level:"Intermediate",q:"If A={1,2,3,4,5}, B={2,4,6}, then (A−B) is:",o:["{1,3,5}","{2,4}","{1,2,3,4,5,6}","{6}"],a:0,e:"Removing 2 and 4 from A leaves {1,3,5}."},
{level:"Intermediate",q:"Which identity is correct for (A−B)−C?",o:["A−(B∪C)","A−(B∩C)","(A−B)∪C","A∩B∩C"],a:0,e:"Removing B and then C removes every element in B∪C, so (A−B)−C=A−(B∪C)."},
{level:"Intermediate",q:"Which identity is correct for A−(B∩C)?",o:["(A−B)∩(A−C)","(A−B)∪(A−C)","A−B−C","A∩B∩C"],a:1,e:"A−(B∩C)=A∩(B∩C)ᶜ=A∩(Bᶜ∪Cᶜ)=(A−B)∪(A−C)."},
{level:"Intermediate",q:"If A−B=A and B−A=B, then A and B are:",o:["Equal","Disjoint","Nested","Universal"],a:1,e:"A−B=A means A∩B=∅, and B−A=B gives the same conclusion."},
{level:"Intermediate",q:"If A−B=B−A, what must the common set be?",o:["A∪B","A∩B","∅","U"],a:2,e:"A−B and B−A are disjoint. If they are equal, the only possible common set is ∅."},

{level:"Advanced",q:"If n(A)=30, n(B)=22 and n(A∩B)=8, then n(A−B) is:",o:["8","14","22","30"],a:1,e:"n(A−B)=n(A)−n(A∩B)=30−8=22, so the correct option is 22."},
{level:"Advanced",q:"If A−B=A−C, must B=C?",o:["Yes, always","No, not necessarily","Only if A=U","Only if A=∅"],a:1,e:"The differences only describe how B and C affect elements inside A; B and C can differ outside A."},
{level:"Advanced",q:"Which identity is correct?",o:["A−(B∪C)=(A−B)∩(A−C)","A−(B∪C)=(A−B)∪(A−C)","A−(B∪C)=A∪B∪C","A−(B∪C)=A−B∩C"],a:0,e:"Using complements, A−(B∪C)=A∩(B∪C)ᶜ=A∩Bᶜ∩Cᶜ=(A−B)∩(A−C)."},

{level:"Master",q:"Let A−B=A and A∩B=B. What can be concluded?",o:["A and B are disjoint and B⊆A","A⊆B and A∩B=∅, so B=∅","A=B","B⊆A only"],a:1,e:"A−B=A implies A∩B=∅. Also A∩B=B implies B⊆A. Therefore B must be empty."},
{level:"Master",q:"If A−B=A−C and A∩B=A∩C, what follows about the parts of B and C relative to A?",o:["They must be equal outside A only","Their intersections with A are equal and their exclusions from A are equal; hence B and C have the same membership behavior on A","B=C globally","A=B=C"],a:1,e:"A−B=A∩Bᶜ and A−C=A∩Cᶜ being equal, together with A∩B=A∩C, means B and C agree on every element of A. They may still differ outside A."}
];