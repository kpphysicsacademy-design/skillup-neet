/* SkillUp Mathematics — Cartesian Product of Finite Sets | Basic → Master */
window.SkillUpCartesianProductFiniteSetsQuestions=[
{level:"Basic",q:"If A={1,2} and B={a,b}, how many ordered pairs are in A×B?",o:["2","3","4","6"],a:2,e:"n(A×B)=n(A)n(B)=2×2=4."},
{level:"Basic",q:"If n(A)=3 and n(B)=5, then n(A×B) is:",o:["8","15","25","30"],a:1,e:"The Cartesian product has 3×5=15 ordered pairs."},
{level:"Basic",q:"An element of A×B has the form:",o:["{a,b}","(a,b)","a+b","a∩b"],a:1,e:"Cartesian products consist of ordered pairs (a,b), with a∈A and b∈B."},
{level:"Basic",q:"If A={1,2} and B={3}, then A×B is:",o:["{(1,3),(2,3)}","{(3,1),(3,2)}","{1,2,3}","{(1,2),(3)}"],a:0,e:"The first coordinate comes from A and the second from B."},
{level:"Basic",q:"If A=∅ and B is nonempty, then A×B is:",o:["B","A","∅","U"],a:2,e:"No first coordinate can be selected from the empty set."},
{level:"Basic",q:"If n(A)=4 and n(B)=0, then n(A×B) is:",o:["4","1","0","8"],a:2,e:"A Cartesian product with an empty factor is empty."},
{level:"Basic",q:"If A={1,2} and B={x,y,z}, n(B×A) is:",o:["5","6","8","9"],a:1,e:"n(B×A)=3×2=6."},
{level:"Basic",q:"Are (1,2) and (2,1) generally the same ordered pair?",o:["Yes, always","No, unless 1=2","Only in A×B","Only when sets are finite"],a:1,e:"Ordered pairs depend on coordinate order."},
{level:"Basic",q:"If n(A)=m and n(B)=n, then n(A×B) equals:",o:["m+n","mn","m−n","m/n"],a:1,e:"Each of m choices can be paired with each of n choices."},
{level:"Basic",q:"If A={1,2} and B={2,3}, how many elements are in A×B?",o:["2","3","4","5"],a:2,e:"There are 2×2=4 ordered pairs."},

{level:"Developing",q:"If A={1,2} and B={a,b,c}, which is A×B?",o:["{(1,a),(1,b),(1,c),(2,a),(2,b),(2,c)}","{(a,1),(b,1),(c,1),(a,2),(b,2),(c,2)}","{1,2,a,b,c}","{(1,2),(a,b),(c)}"],a:0,e:"Each element of A is paired with every element of B."},
{level:"Developing",q:"If n(A×B)=24 and n(A)=4, find n(B).",o:["4","5","6","8"],a:2,e:"n(B)=24/4=6."},
{level:"Developing",q:"If A has 5 elements and B has 2 elements, how many ordered pairs have first coordinate in A and second in B?",o:["7","10","25","3"],a:1,e:"There are 5×2=10 pairs."},
{level:"Developing",q:"If (x,5)∈A×B, which must be true?",o:["x∈B and 5∈A","x∈A and 5∈B","x∈A∩B","x=5"],a:1,e:"The first coordinate belongs to A and the second to B."},
{level:"Developing",q:"If A={1,2,3} and B={2,4}, how many pairs in A×B have equal coordinates?",o:["0","1","2","3"],a:1,e:"Only (2,2) has equal coordinates."},
{level:"Developing",q:"If A has 3 elements and B has 4 elements, then B×A has:",o:["12 elements","7 elements","1 element","16 elements"],a:0,e:"3×4=12."},
{level:"Developing",q:"Which statement is always true for nonempty finite A and B?",o:["A×B=B×A","n(A×B)=n(B×A)","A×B=A∪B","A×B=A∩B"],a:1,e:"The products need not be equal as sets, but their cardinalities are equal."},
{level:"Developing",q:"If A={1,2} and B={a,b}, how many elements are in (A×B)∪(B×A) when A and B are disjoint?",o:["4","6","8","2"],a:2,e:"Each product has 4 pairs and they are disjoint, giving 8."},
{level:"Developing",q:"If A={1,2} and B={2,3}, how many pairs belong to both A×B and B×A?",o:["0","1","2","4"],a:1,e:"The common pair is (2,2)." },
{level:"Developing",q:"If A×B contains 15 pairs and B has 5 elements, n(A) is:",o:["2","3","4","5"],a:1,e:"n(A)=15/5=3."},

{level:"Intermediate",q:"If n(A)=4 and n(B)=3, how many ordered pairs in A×B have distinct coordinates when A and B share exactly 2 elements?",o:["8","10","12","6"],a:1,e:"There are 12 total pairs; equal-coordinate pairs are the 2 common elements, so 12−2=10."},
{level:"Intermediate",q:"If A={1,2,3} and B={2,3,4}, which is A×B∩B×A?",o:["{(2,2),(3,3)}","{(2,3),(3,2)}","A×B","∅"],a:0,e:"A pair belongs to both products only when both coordinates belong to A∩B; hence (A∩B)×(A∩B)."},
{level:"Intermediate",q:"If n(A)=5, n(B)=4 and n(A∩B)=2, how many pairs are in (A×B)∩(B×A)?",o:["2","4","6","8"],a:1,e:"The intersection is (A∩B)×(A∩B), with 2×2=4 pairs."},
{level:"Intermediate",q:"If A={1,2} and B={2,3,4}, how many pairs in A×B have first coordinate less than second coordinate?",o:["3","4","5","6"],a:2,e:"Pairs are (1,2),(1,3),(1,4),(2,3),(2,4), giving 5."},
{level:"Intermediate",q:"If n(A×B)=36 and n(A)=n(B), then n(A)=:",o:["4","5","6","9"],a:2,e:"If n(A)=n(B)=n, then n²=36, so n=6."},

{level:"Advanced",q:"If A×B=B×A for nonempty sets A and B, which conclusion follows?",o:["A=B","A∩B=∅","A and B have equal cardinality only","A∪B=∅"],a:0,e:"For nonempty sets, equality of the Cartesian products forces A=B."},
{level:"Advanced",q:"If A×B has 20 elements and A has one more element than B, which possible cardinalities are n(A),n(B)?",o:["5 and 4","4 and 3","6 and 5","10 and 2"],a:0,e:"The product 5×4=20 and 5 is one more than 4."},
{level:"Advanced",q:"If n(A)=4, n(B)=5 and n(A∩B)=2, how many ordered pairs are in (A×B)∪(B×A)?",o:["32","36","40","44"],a:1,e:"Each product has 20 pairs and their intersection has 2²=4 pairs. Hence the union has 20+20−4=36 pairs."},

{level:"Master",q:"Let A and B be finite sets with n(A)=4, n(B)=5, and n(A∩B)=2. How many elements are in (A×B)\(B×A)?",o:["14","16","18","20"],a:1,e:"A×B has 20 pairs; its intersection with B×A has 2²=4 pairs. Difference has 20−4=16."},
{level:"Master",q:"If A and B are finite sets with n(A)=3, n(B)=4 and n(A×B∩B×A)=9, what is n(A∩B)?",o:["2","3","4","6"],a:1,e:"The intersection equals (A∩B)×(A∩B), so n(A∩B)²=9 and n(A∩B)=3."}
];