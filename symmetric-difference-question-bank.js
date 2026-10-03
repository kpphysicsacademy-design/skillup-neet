/* SkillUp Mathematics — Symmetric Difference | Basic → Master */
window.SkillUpSymmetricDifferenceQuestions=[
{level:"Basic",q:"The symmetric difference A△B contains elements that are:",o:["In both A and B","In exactly one of A and B","In neither A nor B","Only in A"],a:1,e:"A△B contains elements belonging to A or B, but not to both."},
{level:"Basic",q:"Which expression defines A△B?",o:["A∩B","A∪B","(A−B)∪(B−A)","A−B"],a:2,e:"Symmetric difference is the union of the two one-sided differences."},
{level:"Basic",q:"If A={1,2,3} and B={3,4,5}, then A△B is:",o:["{3}","{1,2,4,5}","{1,2,3,4,5}","∅"],a:1,e:"The common element 3 is excluded; 1,2,4,5 remain."},
{level:"Basic",q:"If A and B are disjoint, then A△B equals:",o:["A∩B","A∪B","∅","A−B"],a:1,e:"For disjoint sets, all elements of the union belong to exactly one set."},
{level:"Basic",q:"For any set A, A△A equals:",o:["A","U","∅","Aᶜ"],a:2,e:"Every element belongs to both copies, so none belongs to exactly one."},
{level:"Basic",q:"For any set A, A△∅ equals:",o:["∅","A","U","Aᶜ"],a:1,e:"Every element of A belongs to exactly one of A and ∅."},
{level:"Basic",q:"Which operation removes the common elements from A∪B?",o:["A∩B","A△B","A−B","Aᶜ"],a:1,e:"Symmetric difference contains the union after excluding the intersection."},
{level:"Basic",q:"If A={a,b} and B={b,c}, then A△B is:",o:["{b}","{a,c}","{a,b,c}","∅"],a:1,e:"b is common and removed; a and c remain."},
{level:"Basic",q:"Is A△B equal to B△A?",o:["Always","Never","Only if A=B","Only if A∩B=∅"],a:0,e:"Symmetric difference is commutative."},
{level:"Basic",q:"Which symbol is commonly used for symmetric difference?",o:["∩","∪","△","⊆"],a:2,e:"△ is commonly used to denote symmetric difference."},

{level:"Developing",q:"Which identity is correct?",o:["A△B=(A∪B)−(A∩B)","A△B=A∩B","A△B=A∪B","A△B=A−B"],a:0,e:"Symmetric difference consists of the union minus the common part."},
{level:"Developing",q:"Which identity is correct?",o:["A△B=(A−B)∪(B−A)","A△B=(A−B)∩(B−A)","A△B=A∩B","A△B=A−B"],a:0,e:"The two one-sided differences are disjoint and their union is the symmetric difference."},
{level:"Developing",q:"If A⊆B, then A△B equals:",o:["A","B","B−A","A∩B"],a:2,e:"Since A has no elements outside B, the elements in exactly one set are B−A."},
{level:"Developing",q:"If A△B=∅, then:",o:["A and B are disjoint","A=B","A⊆B only","B⊆A only"],a:1,e:"No element belongs to exactly one set, so the sets have identical elements."},
{level:"Developing",q:"If A△B=A, then what must be true?",o:["A⊆B","A∩B=∅","A=B","B⊆A"],a:1,e:"For the symmetric difference to equal A, B can share no element with A and cannot add elements outside A; hence A∩B=∅ and B=∅ is stronger, so this option alone is insufficient."},
{level:"Developing",q:"If A△B=B, then which condition is necessary?",o:["A∩B=∅ and A=∅","A⊆B","B⊆A","A=B"],a:0,e:"A△B=B forces A to contribute no elements and share none with B, so A=∅; thus the stated condition holds."},
{level:"Developing",q:"If n(A)=12, n(B)=10 and n(A∩B)=4, then n(A△B) is:",o:["6","14","18","26"],a:1,e:"n(A△B)=n(A)+n(B)−2n(A∩B)=12+10−8=14."},
{level:"Developing",q:"If A and B have 7 common elements, which elements are excluded from A△B?",o:["Elements only in A","Elements only in B","Elements common to A and B","All elements"],a:2,e:"Common elements do not belong to the symmetric difference."},
{level:"Developing",q:"Which relation is always true?",o:["A△B⊆A∪B","A△B⊆A∩B","A∪B⊆A△B","A△B=A∩B"],a:0,e:"Every symmetric-difference element is in A or B, so it is in A∪B."},
{level:"Developing",q:"If A={1,2,3,4} and B={2,4,6}, then A△B is:",o:["{2,4}","{1,3,6}","{1,2,3,4,6}","{6}"],a:1,e:"Remove common elements 2 and 4 from the union; the result is {1,3,6}."},

{level:"Intermediate",q:"Which expression is equivalent to A△B using union, intersection and complement?",o:["(A∪B)∩(A∩B)ᶜ","(A∩B)∪(A∪B)ᶜ","A∩B","A∪B"],a:0,e:"Take the union and remove the intersection."},
{level:"Intermediate",q:"Which property does symmetric difference satisfy?",o:["A△B=B△A","A△B=A∩B","A△A=A","A△∅=∅"],a:0,e:"Symmetric difference is commutative."},
{level:"Intermediate",q:"Which statement is true for every A and B?",o:["(A△B)△B=A","(A△B)△B=B","(A△B)△B=∅","(A△B)△B=A∩B"],a:0,e:"Symmetric difference toggles membership; applying △B twice cancels B and returns A."},
{level:"Intermediate",q:"If A△B=C and A∩B=∅, then:",o:["C=A∪B","C=A∩B","C=∅","C=A−B"],a:0,e:"When A and B are disjoint, their symmetric difference equals their union."},
{level:"Intermediate",q:"If A△B=A∪B, what follows?",o:["A∩B=∅","A=B","A⊆B","B⊆A"],a:0,e:"The symmetric difference equals the union exactly when there are no common elements."},

{level:"Advanced",q:"If n(A)=20, n(B)=15 and n(A△B)=25, then n(A∩B) is:",o:["0","5","10","15"],a:1,e:"25=20+15−2n(A∩B), so 2n(A∩B)=10 and the intersection has 5 elements."},
{level:"Advanced",q:"If A△B=A△C, what must be true?",o:["B=C always","B△C=∅","A△B△C=∅","B and C are equal"],a:0,e:"Symmetric difference with A is cancellative: A△B=A△C implies B=C."},
{level:"Advanced",q:"For three sets, which identity is correct?",o:["A△B△C=(A△B)△C","A△B△C=A∩B∩C","A△B△C=A∪B∪C always","A△B△C=A△B"],a:0,e:"Symmetric difference is associative, so grouping does not affect the result."},

{level:"Master",q:"If A△B△C=∅, what does this mean about element membership?",o:["Every element is in all three sets","Every element belongs to an even number of the three sets","Every element belongs to exactly one set","A,B,C must all be empty"],a:1,e:"An element is in the symmetric difference exactly when it belongs to an odd number of the participating sets. An empty result therefore means every element has even membership count."},
{level:"Master",q:"If A△B=C, A△C=B, and B△C=A, which structural relation holds?",o:["A,B,C are pairwise disjoint","A△B△C=∅","A=B=C","A∩B∩C=U"],a:1,e:"Substituting C=A△B gives A△C=A△(A△B)=B. Then B△C=A follows automatically, and A△B△C=∅."}
];