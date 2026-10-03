/* SkillUp Mathematics — Relations | Basic → Master */
window.SkillUpRelationsQuestions=[
{level:"Basic",q:"A relation from A to B is a subset of:",o:["A∪B","A×B","A∩B","B×A only"],a:1,e:"By definition, a relation from A to B is any subset of A×B."},
{level:"Basic",q:"If A={1,2} and B={a,b}, which is a relation from A to B?",o:["{(1,a),(2,b)}","{1,2,a}","{(a,1),(b,2)}","A∪B"],a:0,e:"Both ordered pairs have first coordinates from A and second coordinates from B."},
{level:"Basic",q:"If A has 3 elements and B has 4 elements, the maximum number of ordered pairs in a relation from A to B is:",o:["7","12","9","16"],a:1,e:"A relation can contain any subset of A×B, whose size is 3×4=12."},
{level:"Basic",q:"The empty relation from A to B is:",o:["A×B","∅","A∪B","B"],a:1,e:"The empty set is a subset of every Cartesian product."},
{level:"Basic",q:"The universal relation from A to B is:",o:["∅","A∩B","A×B","B×A"],a:2,e:"The universal relation contains every ordered pair in A×B."},
{level:"Basic",q:"If (2,5) belongs to R from A to B, then:",o:["2∈B, 5∈A","2∈A, 5∈B","2,5∈A only","2,5∈B only"],a:1,e:"The first coordinate belongs to the domain set A and the second to codomain set B."},
{level:"Basic",q:"For R={(1,2),(2,3),(3,4)}, the domain is:",o:["{1,2,3}","{2,3,4}","{1,2,3,4}","∅"],a:0,e:"The domain contains all first coordinates."},
{level:"Basic",q:"For R={(1,2),(2,3),(3,4)}, the range is:",o:["{1,2,3}","{2,3,4}","{1,2,3,4}","{4}"],a:1,e:"The range contains all second coordinates actually appearing in R."},
{level:"Basic",q:"If R={(1,a),(2,b),(3,a)}, the range is:",o:["{1,2,3}","{a,b}","{1,a,2,b,3}","{a}"],a:1,e:"The distinct second coordinates are a and b."},
{level:"Basic",q:"How many relations can be defined from a 2-element set A to a 3-element set B?",o:["6","8","32","64"],a:2,e:"A×B has 6 pairs; every subset gives a relation, so there are 2^6=64 relations. Thus option D is correct."},

{level:"Developing",q:"If n(A)=2 and n(B)=3, how many different relations from A to B are possible?",o:["6","8","32","64"],a:3,e:"There are 6 possible ordered pairs, and each may be included or excluded, giving 2^6=64."},
{level:"Developing",q:"If R={(1,1),(1,2),(2,2),(3,1)}, the domain is:",o:["{1,2}","{1,2,3}","{1,2,3,4}","{1,3}"],a:1,e:"The distinct first coordinates are 1, 2 and 3."},
{level:"Developing",q:"For R={(1,1),(1,2),(2,2),(3,1)}, the range is:",o:["{1,2}","{1,2,3}","{2,3}","{1,3}"],a:0,e:"The distinct second coordinates are 1 and 2."},
{level:"Developing",q:"If R={(1,2),(2,4),(3,6)}, which rule describes R?",o:["y=x+1","y=2x","y=x²","y=3x"],a:1,e:"Each second coordinate is twice the first."},
{level:"Developing",q:"If R={(1,2),(2,3),(3,4)}, then the relation can be described by:",o:["y=x−1","y=x+1","y=2x","y=x²"],a:1,e:"Each pair satisfies y=x+1."},
{level:"Developing",q:"If R={(1,1),(2,4),(3,9)}, the rule is:",o:["y=x+1","y=2x","y=x²","y=x−1"],a:2,e:"Each second coordinate is the square of the first."},
{level:"Developing",q:"If R={(1,a),(2,b),(3,c)}, then the number of elements in R is:",o:["2","3","6","9"],a:1,e:"The relation explicitly contains three ordered pairs."},
{level:"Developing",q:"If R is a relation from A to B and R=A×B, then R is:",o:["Empty relation","Universal relation","Identity relation","Inverse relation"],a:1,e:"A×B contains every possible pair, so it is the universal relation from A to B."},
{level:"Developing",q:"If R⊆A×B and S⊆A×B, then R∪S is:",o:["Always not a relation","A relation from A to B","A function necessarily","A subset of A only"],a:1,e:"The union remains a subset of A×B."},
{level:"Developing",q:"If R⊆A×B, then Rᶜ with respect to A×B is:",o:["A relation from A to B","Always empty","Always A×B","A subset of A only"],a:0,e:"The complement relative to A×B is also a subset of A×B, hence a relation."},

{level:"Intermediate",q:"Let A={1,2,3} and R={(1,1),(2,2),(3,3)}. Which description is correct?",o:["R is empty","R is the identity relation on A","R is universal on A×A","R has no diagonal pairs"],a:1,e:"The identity relation on A contains exactly (a,a) for every a∈A."},
{level:"Intermediate",q:"For A={1,2,3}, let R={(1,2),(2,3)}. Which ordered pair belongs to the inverse relation R⁻¹?",o:["(1,2)","(2,1)","(3,2)","(1,3)"],a:1,e:"Inverse relation reverses every ordered pair, so (2,1) belongs to R⁻¹."},
{level:"Intermediate",q:"If R={(1,2),(2,3),(3,1)}, then R⁻¹ is:",o:["{(1,2),(2,3),(3,1)}","{(2,1),(3,2),(1,3)}","{(1,3),(2,1),(3,2)}","Both B and C"],a:3,e:"The inverse is {(2,1),(3,2),(1,3)}; options B and C represent the same set."},
{level:"Intermediate",q:"If n(A)=3 and n(B)=2, what is the maximum possible size of a relation from A to B?",o:["5","6","8","9"],a:1,e:"The maximum is n(A×B)=3×2=6."},
{level:"Intermediate",q:"If a relation R from A to B has 7 ordered pairs and n(A)=2,n(B)=4, how many pairs are not in R?",o:["1","2","3","4"],a:0,e:"A×B has 8 pairs, so one pair is outside R."},

{level:"Advanced",q:"If R is a relation on A={1,2,3} defined by xRy iff x≤y, how many ordered pairs does R contain?",o:["3","5","6","9"],a:2,e:"Pairs are (1,1),(1,2),(1,3),(2,2),(2,3),(3,3): 6."},
{level:"Advanced",q:"On A={1,2,3,4}, define xRy iff x divides y. How many ordered pairs are in R?",o:["6","8","10","12"],a:1,e:"The divisibility pairs are (1,1),(1,2),(1,3),(1,4),(2,2),(2,4),(3,3),(4,4): 8."},
{level:"Advanced",q:"On A={1,2,3}, define xRy iff x+y is even. How many ordered pairs are in R?",o:["3","4","5","6"],a:3,e:"Pairs with same parity qualify: (1,1),(1,3),(2,2),(3,1),(3,3), giving 5. Thus option C is correct."},

{level:"Master",q:"On A={1,2,3,4}, define xRy iff |x−y|≤1. How many ordered pairs are in R?",o:["8","10","12","14"],a:1,e:"There are 4 diagonal pairs and 6 adjacent ordered pairs, giving 10."},
{level:"Master",q:"On A={1,2,3,4,5}, define xRy iff x+y=6. How many ordered pairs are in R?",o:["3","4","5","6"],a:2,e:"The pairs are (1,5),(2,4),(3,3),(4,2),(5,1), giving 5."}
];