/* SkillUp Mathematics — Cartesian Product of Three Sets | 30-MCQ Bank */
window.SkillUpCartesianProductThreeSetsQuestions=[
{level:"Basic",q:"If |A|=2, |B|=3 and |C|=4, then |A×B×C| is:",o:["9","12","24","36"],a:2,e:"For finite sets, |A×B×C|=|A||B||C|=2×3×4=24."},
{level:"Basic",q:"An element of A×B×C has the form:",o:["(a,b,c)","{a,b,c}","a+b+c","(a,c,b) only"],a:0,e:"A Cartesian product of three sets contains ordered triples (a,b,c)."},
{level:"Basic",q:"If A=∅, then A×B×C is:",o:["B×C","∅","A∪B∪C","C"],a:1,e:"A Cartesian product is empty when any factor is empty."},
{level:"Basic",q:"If |A|=5, |B|=2 and |C|=1, then |A×B×C| is:",o:["8","10","12","15"],a:1,e:"5×2×1=10."},
{level:"Basic",q:"If (x,y,z)∈A×B×C, then:",o:["x∈B,y∈C,z∈A","x∈A,y∈B,z∈C","x,y,z∈A","x∈A∪B∪C only"],a:1,e:"Each coordinate belongs to the corresponding factor set."},
{level:"Basic",q:"If A={1,2}, B={a} and C={x,y}, how many triples are in A×B×C?",o:["2","3","4","5"],a:2,e:"2×1×2=4."},
{level:"Basic",q:"For finite sets, |A×B×C| equals:",o:["|A|+|B|+|C|","|A||B||C|","|A|−|B|−|C|","|A|/|B||C|"],a:1,e:"The multiplication principle gives the product of the three cardinalities."},
{level:"Basic",q:"If |A|=3, |B|=4 and |C|=2, then |C×A×B| is:",o:["9","12","24","48"],a:2,e:"The order of factors does not change the number of triples: 2×3×4=24."},
{level:"Basic",q:"Which is an element of {1,2}×{3}×{4,5}?",o:["(1,3,4)","(3,1,4)","(1,4,3)","(4,1,3)"],a:0,e:"The first coordinate must come from {1,2}, the second from {3}, and the third from {4,5}."},
{level:"Basic",q:"If |A|=4 and |B|=0, then |A×B×C| is:",o:["4|C|","|C|","0","4+|C|"],a:2,e:"Because B is empty, the entire Cartesian product is empty."},

{level:"Developing",q:"If |A×B×C|=60, |A|=3 and |B|=4, then |C| is:",o:["4","5","6","7"],a:1,e:"3×4×|C|=60, so |C|=5."},
{level:"Developing",q:"If A={1,2}, B={a,b}, C={x}, which list is A×B×C?",o:["{(1,a,x),(1,b,x),(2,a,x),(2,b,x)}","{(a,1,x),(b,1,x),(a,2,x),(b,2,x)}","{(1,a),(1,b),(2,a),(2,b)}","{1,2,a,b,x}"],a:0,e:"The first coordinate comes from A, second from B, and third from C."},
{level:"Developing",q:"If |A|=2, |B|=5 and |C|=3, how many triples have a fixed first coordinate?",o:["3","5","15","30"],a:2,e:"With the first coordinate fixed, there are 5×3=15 choices for the other two coordinates."},
{level:"Developing",q:"If |A|=4, |B|=3 and |C|=2, how many triples have a fixed second coordinate?",o:["6","8","12","24"],a:1,e:"Fixing the second coordinate leaves 4×2=8 choices."},
{level:"Developing",q:"If |A|=6, |B|=2 and |C|=5, how many triples have a fixed third coordinate?",o:["8","10","12","30"],a:2,e:"Fixing the third coordinate leaves 6×2=12 choices."},
{level:"Developing",q:"If |A×B×C|=36 and |A|=3, |B|=3, then |C| is:",o:["3","4","6","9"],a:1,e:"3×3×|C|=36, so |C|=4."},
{level:"Developing",q:"If A, B and C are pairwise disjoint with sizes 2, 3 and 4, how many triples are in A×B×C?",o:["9","24","36","48"],a:1,e:"The product has 2×3×4=24 triples; disjointness is not needed for this count."},
{level:"Developing",q:"If |A|=m, |B|=n and |C|=p, the number of triples in A×B×C is:",o:["m+n+p","mnp","mn+p","m+n p"],a:1,e:"There are m choices for the first coordinate, n for the second and p for the third."},
{level:"Developing",q:"If A={1,2}, B={2,3} and C={4}, how many triples have all coordinates equal?",o:["0","1","2","4"],a:0,e:"The third coordinate must be 4, while the first two coordinates come from sets containing only 1,2 and 2,3, so no common value exists across all three sets."},
{level:"Developing",q:"If |A|=2, |B|=3 and |C|=4, how many triples have first coordinate fixed and third coordinate fixed?",o:["2","3","4","6"],a:1,e:"Only the second coordinate varies, giving |B|=3 choices."},

{level:"Intermediate",q:"If |A|=4, |B|=5 and |C|=6, how many triples have first coordinate different from the second coordinate, assuming A and B share exactly 2 elements?",o:["100","104","108","120"],a:1,e:"There are 4×5×6=120 triples. Equal first and second coordinates occur for 2 common values, each with 6 choices for the third coordinate: 12. Thus 120−12=108."},
{level:"Intermediate",q:"If |A|=3, |B|=4 and |C|=5, how many triples have second and third coordinates equal when |B∩C|=2?",o:["6","8","10","12"],a:1,e:"There are 3 choices for the first coordinate and 2 common choices for equal second and third coordinates: 3×2=6."},
{level:"Intermediate",q:"If |A|=5, |B|=4 and |C|=3, how many triples have first and third coordinates equal when |A∩C|=2?",o:["6","8","10","12"],a:1,e:"Choose one of the 2 common values for the first and third coordinates, and any of 4 values for the second: 2×4=8."},
{level:"Intermediate",q:"If |A|=2, |B|=3 and |C|=4, how many triples have pairwise distinct coordinates when A∩B has 1 element, B∩C has 1 element, A∩C is empty?",o:["12","18","20","24"],a:1,e:"Start with 24 triples. Equal first-second triples: 1×4=4. Equal second-third: 1×2=2. First-third equality contributes 0, and the three-way intersection is empty. Thus 24−4−2=18."},
{level:"Intermediate",q:"If |A×B×C|=120 and |A|=5, |B|=6, then |C| is:",o:["2","3","4","5"],a:1,e:"5×6×|C|=120, so |C|=4."},
{level:"Advanced",q:"If A, B and C are finite sets and |A×B×C|=|B×C×A|, what can be concluded about their cardinalities?",o:["Only |A|=|B|","Only |B|=|C|","The products have equal cardinality for every A,B,C","A, B and C must be equal sets"],a:2,e:"Both products contain |A||B||C| triples, regardless of factor order."},
{level:"Advanced",q:"If |A|=3, |B|=4 and |C|=5, how many triples have first and second coordinates equal when |A∩B|=2?",o:["8","10","12","15"],a:1,e:"There are 2 common choices for the first and second coordinates and 5 choices for the third: 2×5=10."},
{level:"Advanced",q:"If |A|=4, |B|=4, |C|=3 and |A∩B|=3, how many triples have first coordinate equal to second coordinate?",o:["6","9","12","16"],a:1,e:"There are 3 common values for the first two coordinates and 3 choices for the third: 3×3=9."},

{level:"Master",q:"If |A|=5, |B|=6, |C|=4 and the three sets have a common intersection of 2 elements, how many triples have all three coordinates equal?",o:["2","4","8","12"],a:0,e:"An all-equal triple requires a value common to all three sets. There are 2 such values."},
{level:"Master",q:"If |A|=4, |B|=5, |C|=6, |A∩B|=2, |B∩C|=3, |A∩C|=1 and |A∩B∩C|=1, how many triples have at least two equal coordinates?",o:["24","27","30","36"],a:1,e:"Equal first-second gives 2×6=12, equal second-third gives 3×4=12, and equal first-third gives 1×5=5. The all-three-equal triples are counted in all three groups, so subtract 2 once: 12+12+5−2=27."}
];