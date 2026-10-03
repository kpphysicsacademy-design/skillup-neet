/* SkillUp Mathematics — Algebraic Properties of Sets | Basic → Master */
window.SkillUpAlgebraicPropertiesOfSetsQuestions=[
{level:"Basic",q:"Which law states A∪B=B∪A?",o:["Associative law","Commutative law","Distributive law","Identity law"],a:1,e:"Changing the order of sets does not change their union."},
{level:"Basic",q:"Which law states A∩B=B∩A?",o:["Commutative law","Associative law","Absorption law","Complement law"],a:0,e:"Intersection is commutative."},
{level:"Basic",q:"Which identity is correct?",o:["A∪∅=∅","A∪∅=A","A∪U=∅","A∩∅=A"],a:1,e:"The empty set is the identity element for union."},
{level:"Basic",q:"Which identity is correct?",o:["A∩U=A","A∩U=U","A∩∅=A","A∪U=A"],a:0,e:"The universal set is the identity element for intersection."},
{level:"Basic",q:"Which statement is always true?",o:["A∪U=A","A∩∅=A","A∪U=U","A∩Aᶜ=U"],a:2,e:"Union with the universal set gives the universal set."},
{level:"Basic",q:"Which statement is always true?",o:["A∩∅=∅","A∩∅=A","A∪∅=∅","Aᶜ∩A=U"],a:0,e:"No element can belong to the empty set."},
{level:"Basic",q:"Which is an idempotent law?",o:["A∪A=A","A∪A=U","A∩A=∅","A∩A=U"],a:0,e:"Union of a set with itself is the same set; similarly A∩A=A."},
{level:"Basic",q:"Which is a complement law?",o:["A∪Aᶜ=U","A∪Aᶜ=A","A∩Aᶜ=A","Aᶜ=A"],a:0,e:"A set together with its complement gives U."},
{level:"Basic",q:"Which is another complement law?",o:["A∩Aᶜ=U","A∩Aᶜ=∅","A∪Aᶜ=∅","Aᶜ∩Aᶜ=U"],a:1,e:"A and its complement are disjoint."},
{level:"Basic",q:"Which law is represented by A∪(B∪C)=(A∪B)∪C?",o:["Associative law","Commutative law","Distributive law","Absorption law"],a:0,e:"Grouping changes but the order remains the same, so this is associative."},

{level:"Developing",q:"Simplify A∪(A∩B):",o:["A","B","A∩B","U"],a:0,e:"This is the first absorption law."},
{level:"Developing",q:"Simplify A∩(A∪B):",o:["A","B","A∪B","∅"],a:0,e:"This is the second absorption law."},
{level:"Developing",q:"Simplify A∪Aᶜ:",o:["A","∅","U","Aᶜ"],a:2,e:"A set union its complement equals U."},
{level:"Developing",q:"Simplify A∩Aᶜ:",o:["A","U","Aᶜ","∅"],a:3,e:"A and Aᶜ have no common elements."},
{level:"Developing",q:"Simplify (Aᶜ)ᶜ:",o:["A","Aᶜ","U","∅"],a:0,e:"Taking the complement twice returns the original set."},
{level:"Developing",q:"Which distributive law is correct?",o:["A∩(B∪C)=(A∩B)∪(A∩C)","A∩(B∪C)=A∪B∪C","A∪(B∩C)=(A∩B)∪(A∩C)","A∩(B∪C)=A∩B∩C"],a:0,e:"Intersection distributes over union."},
{level:"Developing",q:"Which distributive law is correct?",o:["A∪(B∩C)=(A∪B)∩(A∪C)","A∪(B∩C)=A∩B∩C","A∪(B∩C)=(A∪B)∪(A∪C)","A∪(B∩C)=A∩(B∪C)"],a:0,e:"Union distributes over intersection."},
{level:"Developing",q:"Simplify A∪(A∪B):",o:["A","B","A∪B","U"],a:2,e:"By associativity and idempotence, this is A∪B."},
{level:"Developing",q:"Simplify A∩(A∩B):",o:["A∩B","A","B","U"],a:0,e:"By associativity and idempotence, this is A∩B."},
{level:"Developing",q:"If A⊆B, which identity follows?",o:["A∪B=A","A∩B=A","A∩B=∅","A∪B=∅"],a:1,e:"When A is a subset of B, their intersection is A."},

{level:"Intermediate",q:"Simplify (A∪B)∩A:",o:["A","B","A∪B","∅"],a:0,e:"By absorption, A∩(A∪B)=A."},
{level:"Intermediate",q:"Simplify (A∩B)∪A:",o:["A","B","A∩B","U"],a:0,e:"By absorption, A∪(A∩B)=A."},
{level:"Intermediate",q:"Simplify (A∪B)∩(Aᶜ∪B):",o:["B","A","A∩B","U"],a:0,e:"Using distributivity gives B∪(A∩Aᶜ)=B."},
{level:"Intermediate",q:"Simplify (A∩B)∪(Aᶜ∩B):",o:["A","B","A∪B","∅"],a:1,e:"Factor B: B∩(A∪Aᶜ)=B."},
{level:"Intermediate",q:"If A∪B=A, what relation follows?",o:["A⊆B","B⊆A","A=B necessarily","A∩B=∅"],a:1,e:"A∪B=A means every element of B is already in A, so B⊆A."},

{level:"Advanced",q:"Simplify (A∪B)∩(Aᶜ∪Bᶜ):",o:["A∩B","A∪B","A△B","U"],a:2,e:"Distributing gives (A∩Bᶜ)∪(Aᶜ∩B), which is the symmetric difference."},
{level:"Advanced",q:"Simplify (A∩B)∪(A∩Bᶜ)∪(Aᶜ∩B):",o:["A∪B","A△B","U","A∩B"],a:0,e:"The first two terms combine to A; A∪(Aᶜ∩B)=A∪B."},
{level:"Advanced",q:"If A∩B=A∪B, what must be true?",o:["A=B","A=U","B=∅","A∩B=∅"],a:0,e:"Always A∩B⊆A⊆A∪B. Equality forces A=B."},

{level:"Master",q:"Simplify [A∪(B∩C)]∩[A∪(B∩Cᶜ)]:",o:["A","B","A∪B","A∩B"],a:0,e:"Use (A∪X)∩(A∪Y)=A∪(X∩Y); here X∩Y=B∩C∩Cᶜ=∅."},
{level:"Master",q:"If A∪B=A∩B, what follows?",o:["A=B=U","A=B=∅","A=B","A∩B=∅"],a:1,e:"Since A∩B⊆A∪B, equality requires A∪B=A∩B. This can occur only when both are empty, so A=B=∅."}
];