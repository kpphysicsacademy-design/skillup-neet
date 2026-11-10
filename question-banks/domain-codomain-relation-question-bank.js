/* SkillUp Mathematics — Domain and Codomain of a Relation | Basic → Master */
window.SkillUpDomainCodomainRelationQuestions=[
{level:"Basic",q:"For a relation R from A to B, the domain is the set of:",o:["Second coordinates only","First coordinates that occur in R","All elements of B","Elements outside A"],a:1,e:"The domain of a relation consists of the first coordinates appearing in its ordered pairs."},
{level:"Basic",q:"For a relation R from A to B, the codomain is:",o:["A only","The set B specified as the target set","The range only","The first coordinates"],a:1,e:"The codomain is the target set B, while the range is the subset of B actually attained."},
{level:"Basic",q:"If R={(1,a),(2,b),(3,a)}, the domain is:",o:["{a,b}","{1,2,3}","{1,2}","{a}"],a:1,e:"The distinct first coordinates are 1, 2 and 3."},
{level:"Basic",q:"For R={(1,a),(2,b),(3,a)}, the range is:",o:["{1,2,3}","{a,b}","{a}","{1,2,a,b}"],a:1,e:"The distinct second coordinates actually appearing are a and b."},
{level:"Basic",q:"If R is a relation from A={1,2,3} to B={a,b,c}, then its codomain is:",o:["{1,2,3}","{a,b,c}","The range of R","A×B"],a:1,e:"The codomain is the specified target set B."},
{level:"Basic",q:"If R={(2,4),(3,5),(2,6)}, how many elements are in its domain?",o:["2","3","4","5"],a:0,e:"The distinct first coordinates are 2 and 3."},
{level:"Basic",q:"If R={(2,4),(3,5),(2,6)}, how many elements are in its range?",o:["2","3","4","5"],a:1,e:"The distinct second coordinates are 4, 5 and 6."},
{level:"Basic",q:"If R is from A to B and R=∅, what is its domain?",o:["A","B","∅","A×B"],a:2,e:"No ordered pairs occur in the empty relation, so its domain is empty."},
{level:"Basic",q:"If R={(1,2),(2,3)} from A={1,2,3} to B={2,3,4}, which element of A is not in the domain?",o:["1","2","3","None"],a:2,e:"The first coordinates are 1 and 2, so 3 is not in the domain."},
{level:"Basic",q:"If R={(1,2),(2,3)} from A={1,2,3} to B={2,3,4}, which element of B is not in the range?",o:["2","3","4","None"],a:2,e:"The range is {2,3}, so 4 is not attained."},

{level:"Developing",q:"Let A={1,2,3,4}, B={a,b,c} and R={(1,a),(2,b),(4,b)}. The domain is:",o:["{1,2,3,4}","{1,2,4}","{a,b}","{1,2,3}"],a:1,e:"The first coordinates are 1, 2 and 4."},
{level:"Developing",q:"For the same relation, the range is:",o:["{a,b}","{a,b,c}","{1,2,4}","{b,c}"],a:0,e:"Only a and b occur as second coordinates."},
{level:"Developing",q:"For the same relation, the codomain is:",o:["{a,b}","{a,b,c}","{1,2,4}","{1,2,3,4}"],a:1,e:"The codomain is B={a,b,c}, regardless of whether every element is attained."},
{level:"Developing",q:"Which statement is always true?",o:["Domain = codomain","Range = codomain","Range ⊆ codomain","Codomain ⊆ domain"],a:2,e:"Every second coordinate belongs to the codomain, so the range is a subset of the codomain."},
{level:"Developing",q:"If the domain of R is {1,2,4}, which ordered pair could belong to R from A={1,2,3,4} to B={a,b}?",o:["(3,a)","(4,b)","(5,a)","(a,4)"],a:1,e:"The first coordinate must belong to the domain and the second to the codomain."},
{level:"Developing",q:"If R={(x,1),(y,2),(x,3)}, with x≠y, how many elements are in the domain?",o:["1","2","3","4"],a:1,e:"The distinct first coordinates are x and y."},
{level:"Developing",q:"If R={(x,1),(y,2),(x,3)}, how many elements are in the range?",o:["1","2","3","4"],a:2,e:"The distinct second coordinates are 1, 2 and 3."},
{level:"Developing",q:"If a relation from A to B has domain A, what does this mean?",o:["Every element of A occurs as a first coordinate","Every element of B occurs as a first coordinate","A=B","Range is empty"],a:0,e:"Domain A means every element of A participates as a first coordinate in at least one pair."},
{level:"Developing",q:"If a relation from A to B has range B, what does this mean?",o:["No element of B occurs","Every element of B occurs as a second coordinate","A=B","Domain is empty"],a:1,e:"Range B means every codomain element is actually attained."},
{level:"Developing",q:"If R is a relation from a 5-element A to a 4-element B and domain(R)=A, what is the minimum possible number of ordered pairs in R?",o:["4","5","9","20"],a:1,e:"At least one pair is needed for each of the 5 domain elements."},

{level:"Intermediate",q:"Let A={1,2,3}, B={2,4,6,8} and R={(1,2),(1,4),(2,4),(3,8)}. What is |domain(R)|+|range(R)|?",o:["5","6","7","8"],a:1,e:"Domain={1,2,3} has 3 elements and range={2,4,8} has 3, total 6."},
{level:"Intermediate",q:"If R={(1,a),(2,a),(3,b),(4,c)}, how many elements are in the range?",o:["2","3","4","5"],a:1,e:"The distinct second coordinates are a,b,c."},
{level:"Intermediate",q:"A relation R from A to B has |A|=4, |B|=5, |domain(R)|=3 and |range(R)|=4. Which statement is necessarily true?",o:["One element of A is unused","Every element of A is used","Every element of B is in the range","Range has 5 elements"],a:0,e:"A has 4 elements but the domain has only 3, so exactly one element of A is not used."},
{level:"Intermediate",q:"If R from A to B has domain A and range B, then R is called:",o:["A relation onto its codomain","An empty relation","A relation with no range","A relation from B to A"],a:0,e:"Its domain covers A and its range covers the entire codomain B."},
{level:"Intermediate",q:"If R={(x,y): x∈{1,2,3}, y∈{2,4}, y=2x}, what is the domain?",o:["{1}","{1,2,3}","{2,4}","{1,2}"],a:3,e:"The valid pairs are (1,2) and (2,4), so the domain is {1,2}."},

{level:"Advanced",q:"Let R={(x,y)∈Z×Z : y=x² and −2≤x≤2}. What are the domain and range?",o:["Domain={0,1,2}, range={0,1,4}","Domain={−2,−1,0,1,2}, range={0,1,4}","Domain={−4,−1,0,1,4}, range={−2,−1,0,1,2}","Domain=Z, range={0,1,4}"],a:1,e:"x takes −2,−1,0,1,2; their squares are 4,1,0,1,4, giving range {0,1,4}."},
{level:"Advanced",q:"Let A={1,2,3,4,5} and B={1,4,9,16,25,36}. If R={(x,y): y=x²}, with x∈A, then which statement is correct?",o:["Domain has 4 elements and range has 5","Domain has 5 elements and range has 5","Domain has 5 elements and range has 6","Domain has 6 elements and range has 5"],a:1,e:"Each of the five A-elements gives a distinct square in B, so both domain and range have 5 elements."},
{level:"Advanced",q:"Let A={1,2,3,4}, B={1,4,9,16,25} and R={(x,y): y=x²+1}. Which is the range?",o:["{2,5,10,17}","{1,4,9,16}","{2,4,10,17}","{1,5,10,17}"],a:0,e:"For x=1,2,3,4, y=2,5,10,17."},

{level:"Master",q:"A relation R from A to B has |A|=6 and |B|=5. Its domain has 4 elements and its range has 3 elements. What is the minimum possible number of ordered pairs in R?",o:["4","5","6","12"],a:2,e:"Each of the 4 domain elements needs at least one pair, and 3 range elements must all occur. Six pairs are sufficient, e.g. two domain elements can share a range value."},
{level:"Master",q:"A relation R from A to B has domain A and range B, where |A|=4 and |B|=3. What is the minimum possible number of ordered pairs in R?",o:["3","4","7","12"],a:1,e:"At least one pair is required for each of the 4 domain elements; the three range elements can be covered among those four pairs."}
];