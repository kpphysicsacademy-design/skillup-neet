/* SkillUp Mathematics — Intersection of Sets | Basic → Master */
window.SkillUpIntersectionOfSetsQuestions=[
/* BASIC — 1 to 10 */
{level:"Basic",q:"If A={1,2,3} and B={2,3,4}, then A∩B is:",o:["{1}","{2,3}","{4}","∅"],a:1,e:"Intersection contains elements common to both sets, so A∩B={2,3}."},
{level:"Basic",q:"If A={a,b,c} and B={c,d,e}, then A∩B is:",o:["{a,b}","{c}","{d,e}","∅"],a:1,e:"The only common element is c."},
{level:"Basic",q:"For any set A, A∩A equals:",o:["∅","A","U","Aᶜ"],a:1,e:"A set has all its own elements in common with itself."},
{level:"Basic",q:"For any set A, A∩∅ equals:",o:["A","U","Aᶜ","∅"],a:3,e:"The empty set has no elements, so no common element is possible."},
{level:"Basic",q:"For any set A contained in universal set U, A∩U equals:",o:["∅","A","U","Aᶜ"],a:1,e:"Every element of A belongs to U."},
{level:"Basic",q:"If A and B are disjoint, then A∩B is:",o:["A","B","U","∅"],a:3,e:"Disjoint sets have no common elements."},
{level:"Basic",q:"If A={1,2,3,4} and B={3,4,5}, how many elements are in A∩B?",o:["1","2","3","4"],a:1,e:"A∩B={3,4}, so it has 2 elements."},
{level:"Basic",q:"Which statement describes A∩B?",o:["Elements in A or B","Elements in A but not B","Elements common to A and B","Elements outside both A and B"],a:2,e:"Intersection means common membership in both sets."},
{level:"Basic",q:"If A⊆B, then A∩B equals:",o:["A","B","∅","U"],a:0,e:"Every element of A is already in B, so the common part is A."},
{level:"Basic",q:"Which symbol represents intersection of sets?",o:["∪","∩","⊆","∈"],a:1,e:"The symbol ∩ denotes set intersection."},

/* DEVELOPING — 11 to 20 */
{level:"Developing",q:"Which law states A∩B=B∩A?",o:["Associative law","Commutative law","Distributive law","Absorption law"],a:1,e:"Changing the order of the sets does not change their intersection; this is the commutative law."},
{level:"Developing",q:"Which is the associative law for intersection?",o:["A∩(B∩C)=(A∩B)∩C","A∩(B∩C)=A∪B∪C","A∩(B∩C)=A−B−C","A∩(B∩C)=B∩C"],a:0,e:"Intersection can be grouped in either order."},
{level:"Developing",q:"Which is the identity law for intersection?",o:["A∩U=A","A∩∅=A","A∩Aᶜ=A","A∩U=U"],a:0,e:"Intersecting A with the universal set leaves A unchanged."},
{level:"Developing",q:"Which is the complement law involving intersection?",o:["A∩Aᶜ=U","A∩Aᶜ=A","A∩Aᶜ=∅","A∩Aᶜ=Aᶜ"],a:2,e:"A and its complement have no common elements."},
{level:"Developing",q:"Which is the distributive law of intersection over union?",o:["A∩(B∪C)=(A∩B)∪(A∩C)","A∩(B∪C)=(A∪B)∩C","A∩(B∪C)=A∪B∪C","A∩(B∪C)=A∩B∩C"],a:0,e:"Intersection distributes over union."},
{level:"Developing",q:"Which is the absorption law involving intersection?",o:["A∩(A∪B)=A","A∩∅=U","A∩U=∅","A∩B=A∪B"],a:0,e:"The absorption identity is A∩(A∪B)=A."},
{level:"Developing",q:"If A∩B=A, then:",o:["A⊆B","B⊆A","A and B are disjoint","A=B necessarily"],a:0,e:"Every element of A is common to A and B, so every element of A belongs to B."},
{level:"Developing",q:"If A∩B=B, then:",o:["A⊆B","B⊆A","A and B are disjoint","A=B necessarily"],a:1,e:"Every element of B belongs to A, so B⊆A."},
{level:"Developing",q:"If A={1,2,3} and B={2,3,4}, then A∩Bᶜ relative to U={1,2,3,4,5} is:",o:["{1}","{2,3}","{1,5}","{4,5}"],a:0,e:"Bᶜ={1,5}; intersecting with A={1,2,3} gives {1}."},
{level:"Developing",q:"If n(A)=18, n(B)=12 and n(A∩B)=5, then n(A∪B) is:",o:["25","30","35","7"],a:0,e:"Using n(A∪B)=n(A)+n(B)−n(A∩B), the answer is 18+12−5=25."},

/* INTERMEDIATE — 21 to 25 */
{level:"Intermediate",q:"De Morgan's law for the complement of an intersection is:",o:["(A∩B)ᶜ=Aᶜ∪Bᶜ","(A∩B)ᶜ=Aᶜ∩Bᶜ","(A∩B)ᶜ=A∩B","(A∩B)ᶜ=A∪B"],a:0,e:"The complement of an intersection equals the union of the complements."},
{level:"Intermediate",q:"If A={1,2,3,4} and B={3,4,5,6}, then (A∩B)∪A is:",o:["{3,4}","{1,2,3,4}","{3,4,5,6}","{1,2,3,4,5,6}"],a:1,e:"A∩B={3,4}; unioning this with A adds nothing because {3,4} is already inside A."},
{level:"Intermediate",q:"If A={1,2,3} and B={2,3,4}, then (A∩B)∩A is:",o:["{1,2,3}","{2,3}","{4}","∅"],a:1,e:"A∩B={2,3}, and both elements are already in A."},
{level:"Intermediate",q:"If A∩B∩C=∅, what does this mean?",o:["A,B,C are all empty","No element belongs to all three sets simultaneously","A and B are disjoint","A∪B∪C is empty"],a:1,e:"The three-way intersection being empty means there is no element common to all three sets."},
{level:"Intermediate",q:"Which expression gives elements common to A and B but not C?",o:["A∩B∩C","(A∩B)−C","A∪B−C","A∩(B∪C)"],a:1,e:"First select elements common to A and B, then remove elements belonging to C."},

/* ADVANCED — 26 to 28 */
{level:"Advanced",q:"If A∩B=A and B∩C=B, which chain must hold?",o:["A⊆B⊆C","C⊆B⊆A","A⊆C⊆B","B⊆A⊆C"],a:0,e:"A∩B=A gives A⊆B, while B∩C=B gives B⊆C."},
{level:"Advanced",q:"If A∩B=A∪B, then:",o:["A and B are disjoint","A=B","A and B are complements","A∩B=∅"],a:1,e:"The intersection is always contained in the union. Equality occurs only when both sets have exactly the same elements."},
{level:"Advanced",q:"If n(U)=50, n(A)=30, n(B)=28 and n(A∪B)=45, then n(A∩B) is:",o:["10","13","15","17"],a:1,e:"n(A∩B)=n(A)+n(B)−n(A∪B)=30+28−45=13."},

/* MASTER — 29 to 30 */
{level:"Master",q:"Let A,B,C be sets. If A∩B=A, B∩C=B, and n(A)=5, n(C)=12, which value of n(A∩C) is forced?",o:["0","5","12","Cannot be determined from the given information"],a:1,e:"A⊆B and B⊆C imply A⊆C. Hence A∩C=A, so n(A∩C)=5."},
{level:"Master",q:"Let U be a universal set. If (A∩B)∪(A∩Bᶜ)=A, which principle does this demonstrate?",o:["A is disjoint from B","A is partitioned by its parts inside and outside B","A=B","B=U"],a:1,e:"Every element of A is either in B or outside B, so A=(A∩B)∪(A∩Bᶜ). These two parts are disjoint."}
];