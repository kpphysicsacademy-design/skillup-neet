/* SkillUp Mathematics — Cartesian Product of Finite Sets | Recreated 30-MCQ Bank */
window.SkillUpCartesianProductFiniteSetsQuestions=[
{level:"Basic",q:"If A={1,2} and B={a,b}, how many ordered pairs are in A×B?",o:["2","3","4","6"],a:2,e:"|A×B|=|A||B|=2×2=4."},
{level:"Basic",q:"If |A|=3 and |B|=5, then |A×B| is:",o:["8","15","25","30"],a:1,e:"There are 3 choices for the first coordinate and 5 for the second, giving 15."},
{level:"Basic",q:"An element of A×B has the form:",o:["{a,b}","(a,b)","a+b","a∩b"],a:1,e:"Every element of A×B is an ordered pair (a,b) with a∈A and b∈B."},
{level:"Basic",q:"If A={1,2} and B={3}, then A×B is:",o:["{(1,3),(2,3)}","{(3,1),(3,2)}","{1,2,3}","{(1,2),(3,3)}"],a:0,e:"The first coordinate comes from A and the second from B."},
{level:"Basic",q:"If A=∅ and B is nonempty, then A×B is:",o:["A","B","∅","A∪B"],a:2,e:"No ordered pair can have its first coordinate in the empty set."},
{level:"Basic",q:"If |A|=4 and |B|=0, then |A×B| is:",o:["4","1","0","8"],a:2,e:"Any Cartesian product with an empty factor is empty."},
{level:"Basic",q:"If |A|=4 and |B|=3, then |B×A| is:",o:["7","12","16","1"],a:1,e:"|B×A|=|B||A|=3×4=12."},
{level:"Basic",q:"Are (1,2) and (2,1) the same ordered pair?",o:["Yes, always","No, because the coordinates are reversed","Only when sets are finite","Only when both numbers are positive"],a:1,e:"Ordered pairs depend on coordinate order; (1,2)≠(2,1)."},
{level:"Basic",q:"If |A|=m and |B|=n for finite sets, then |A×B| equals:",o:["m+n","mn","m−n","m/n"],a:1,e:"The multiplication principle gives m choices for the first coordinate and n for the second."},
{level:"Basic",q:"If A={1,2} and B={2,3}, how many elements are in A×B?",o:["2","3","4","5"],a:2,e:"|A×B|=2×2=4."},

{level:"Developing",q:"If A={1,2} and B={a,b,c}, which is A×B?",o:["{(1,a),(1,b),(1,c),(2,a),(2,b),(2,c)}","{(a,1),(b,1),(c,1),(a,2),(b,2),(c,2)}","{1,2,a,b,c}","{(1,2),(a,b),(c)}"],a:0,e:"Every element of A is paired with every element of B in that order."},
{level:"Developing",q:"If |A×B|=24 and |A|=4, then |B| is:",o:["4","5","6","8"],a:2,e:"24=4|B|, so |B|=6."},
{level:"Developing",q:"If A has 5 elements and B has 2 elements, how many ordered pairs are in A×B?",o:["7","10","25","3"],a:1,e:"5×2=10 ordered pairs."},
{level:"Developing",q:"If (x,5)∈A×B, which statement must be true?",o:["x∈B and 5∈A","x∈A and 5∈B","x∈A∩B","x=5"],a:1,e:"In A×B the first coordinate belongs to A and the second belongs to B."},
{level:"Developing",q:"If A={1,2,3} and B={2,4}, how many pairs in A×B have equal coordinates?",o:["0","1","2","3"],a:1,e:"Only (2,2) has equal coordinates."},
{level:"Developing",q:"If |A|=3 and |B|=4, then |B×A| is:",o:["7","12","16","1"],a:1,e:"|B×A|=4×3=12."},
{level:"Developing",q:"For nonempty finite sets A and B, which statement is always true?",o:["A×B=B×A as sets","|A×B|=|B×A|","A×B=A∪B","A×B=A∩B"],a:1,e:"Both products contain |A||B| ordered pairs, although their elements need not be the same."},
{level:"Developing",q:"If A and B are disjoint with |A|=2 and |B|=3, how many elements are in (A×B)∪(B×A)?",o:["5","6","12","18"],a:2,e:"Each product has 2×3=6 pairs, and disjointness makes the two products disjoint, so the union has 12."},
{level:"Developing",q:"If A={1,2} and B={2,3}, how many pairs belong to both A×B and B×A?",o:["0","1","2","4"],a:1,e:"The intersection is (A∩B)×(A∩B)={ (2,2) }, so it has 1 pair."},
{level:"Developing",q:"If |A×B|=15 and |B|=5, then |A| is:",o:["2","3","4","5"],a:1,e:"15=|A|×5, so |A|=3."},

{level:"Intermediate",q:"If |A|=4, |B|=3, and |A∩B|=2, how many pairs in A×B have equal coordinates?",o:["0","2","3","12"],a:1,e:"An equal-coordinate pair must be (x,x) with x∈A∩B. There are 2 such elements."},
{level:"Intermediate",q:"If A={1,2,3} and B={2,3,4}, then (A×B)∩(B×A) equals:",o:["{(2,2),(2,3),(3,2),(3,3)}","{(2,2),(3,3)}","{(2,3),(3,2)}","∅"],a:0,e:"The intersection is (A∩B)×(A∩B)={2,3}×{2,3}, which contains all four ordered pairs shown in option A."},
{level:"Intermediate",q:"If |A|=5, |B|=4, and |A∩B|=2, then |(A×B)∩(B×A)| is:",o:["2","4","8","20"],a:1,e:"The intersection is (A∩B)×(A∩B), so its size is 2²=4."},
{level:"Intermediate",q:"If A={1,2} and B={2,3,4}, how many pairs in A×B have first coordinate less than the second?",o:["3","4","5","6"],a:2,e:"The pairs are (1,2),(1,3),(1,4),(2,3),(2,4), giving 5."},
{level:"Intermediate",q:"If |A×B|=36 and |A|=|B|, then |A| is:",o:["4","5","6","9"],a:2,e:"Let |A|=|B|=n. Then n²=36, so n=6."},

{level:"Advanced",q:"If A and B are nonempty sets and A×B=B×A, which conclusion follows?",o:["A=B","A∩B=∅","|A|=|B| only","A∪B=∅"],a:0,e:"For nonempty sets, equality of the Cartesian products implies that every element of A is in B and every element of B is in A, so A=B."},
{level:"Advanced",q:"If |A×B|=20 and |A| is one more than |B|, which pair (|A|,|B|) is possible?",o:["(5,4)","(4,3)","(6,5)","(10,2)"],a:0,e:"5×4=20 and 5 is exactly one more than 4."},
{level:"Advanced",q:"If |A|=4, |B|=5, and |A∩B|=2, then |(A×B)∪(B×A)| is:",o:["32","36","40","44"],a:1,e:"Each product has 20 pairs and their intersection has 2²=4 pairs. Thus 20+20−4=36."},

{level:"Master",q:"If |A|=4, |B|=5, and |A∩B|=2, how many elements are in (A×B)\(B×A)?",o:["14","16","18","20"],a:1,e:"A×B has 20 pairs. Its intersection with B×A has 2²=4 pairs, so the difference has 20−4=16."},
{level:"Master",q:"If |A|=3, |B|=4, and |(A×B)∩(B×A)|=9, then |A∩B| is:",o:["2","3","4","6"],a:1,e:"The intersection has size |A∩B|². Thus |A∩B|²=9, giving |A∩B|=3."}
];