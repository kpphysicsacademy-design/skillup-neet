window.SkillUpMixedRelationsFunctionsQuestions=[
{level:"Basic",q:"A relation from A to B is a subset of:",o:["A∪B","A×B","A−B","B×B"],a:1,e:"A relation from A to B is any subset of A×B."},
{level:"Basic",q:"A function from A to B assigns to each element of A:",o:["Exactly one element of B","At least two elements of B","No element of B","Exactly two elements of B"],a:0,e:"Every domain element must have exactly one image."},
{level:"Basic",q:"If |A|=2 and |B|=3, the number of functions A→B is:",o:["5","6","8","9"],a:3,e:"Each of 2 elements has 3 choices, so 3²=9."},
{level:"Basic",q:"If |A|=2 and |B|=3, the number of ordered pairs in A×B is:",o:["5","6","8","9"],a:1,e:"|A×B|=|A||B|=2·3=6."},
{level:"Basic",q:"The domain of a relation is the set of:",o:["Second components","First components","All codomain elements","Only fixed points"],a:1,e:"The domain consists of first components appearing in the relation."},
{level:"Basic",q:"The range of a function is always a subset of its:",o:["Domain","Codomain","Graph","Inverse"],a:1,e:"The range consists of actual outputs and is contained in the codomain."},
{level:"Basic",q:"A function that maps distinct inputs to distinct outputs is:",o:["Many-one","One-one","Into only","Constant"],a:1,e:"Distinct domain elements have distinct images in a one-one function."},
{level:"Basic",q:"A function is onto when:",o:["Range=domain","Range=codomain","Domain=codomain always","It is constant"],a:1,e:"Onto means every codomain element is attained."},
{level:"Basic",q:"If f(x)=x² on R, then f is:",o:["One-one","Many-one","Onto R","A bijection R→R"],a:1,e:"f(1)=f(−1)=1, so it is many-one."},
{level:"Basic",q:"The identity relation on A contains:",o:["Only (a,a) for a∈A","All pairs in A×A","No pairs","Only unequal pairs"],a:0,e:"The identity relation is {(a,a):a∈A}."},

{level:"Developing",q:"If R={(1,2),(2,3),(3,3)}, the domain of R is:",o:["{1,2}","{2,3}","{1,2,3}","{3}"],a:2,e:"The first components are 1,2,3."},
{level:"Developing",q:"For R={(1,2),(2,2),(3,1)}, the range is:",o:["{1,2,3}","{1,2}","{2,3}","{1,3}"],a:1,e:"The second components are 2,2,1, so the range is {1,2}."},
{level:"Developing",q:"If f:{1,2,3}→{a,b,c} is given by 1→a, 2→b, 3→a, then f is:",o:["One-one","Many-one","Onto","Bijective"],a:1,e:"1 and 3 have the same image a."},
{level:"Developing",q:"The function in the previous question is:",o:["Onto","Into","Bijective","Identity"],a:1,e:"Its range is {a,b}, which is a proper subset of {a,b,c}."},
{level:"Developing",q:"If f:A→B is both one-one and onto, f is:",o:["Into","Many-one","Bijective","Constant"],a:2,e:"A bijection is both injective and surjective."},
{level:"Developing",q:"If R on A satisfies (a,a)∈R for every a∈A, R is:",o:["Symmetric","Reflexive","Transitive","Antisymmetric"],a:1,e:"This is the definition of reflexivity."},
{level:"Developing",q:"If (a,b)∈R implies (b,a)∈R, R is:",o:["Reflexive","Symmetric","Transitive","Onto"],a:1,e:"This is the definition of symmetry."},
{level:"Developing",q:"If (a,b)∈R and (b,c)∈R imply (a,c)∈R, R is:",o:["Symmetric","Reflexive","Transitive","One-one"],a:2,e:"This is transitivity."},
{level:"Developing",q:"If f(x)=2x+1 on R, f is:",o:["Many-one","One-one","Constant","Not a function"],a:1,e:"A nonconstant linear function with nonzero slope is one-one on R."},
{level:"Developing",q:"If f(x)=x² on [0,∞), f is:",o:["One-one","Many-one","Not a function","Onto R"],a:0,e:"x² is strictly increasing on [0,∞), so it is one-one."},

{level:"Intermediate",q:"If |A|=3 and |B|=2, the number of functions A→B is:",o:["6","8","9","12"],a:1,e:"There are 2 choices for each of 3 domain elements: 2³=8."},
{level:"Intermediate",q:"If |A|=3 and |B|=2, the number of onto functions A→B is:",o:["2","4","6","8"],a:2,e:"Total functions 8; two constant functions are not onto, so 8−2=6."},
{level:"Intermediate",q:"If f(x)=x²−1 from R to R, its range is:",o:["R","[−1,∞)","(−1,∞)","[0,∞)"],a:1,e:"x²≥0, so x²−1≥−1 and −1 is attained."},
{level:"Intermediate",q:"Let R on Z be defined by aRb iff a−b is divisible by 3. R is:",o:["Only symmetric","An equivalence relation","Only reflexive","Not transitive"],a:1,e:"Congruence modulo 3 is reflexive, symmetric and transitive."},
{level:"Intermediate",q:"If f:A→B is onto and |A|=4, |B|=5, then:",o:["Such a function exists","Such a function cannot exist","It must be bijective","It must be constant"],a:1,e:"An onto function requires |A|≥|B| for finite sets."},

{level:"Advanced",q:"Let f(x)=x² on R and g(x)=x+1 on R. Which statement is correct?",o:["f is one-one and g is many-one","f is many-one and g is one-one","Both are many-one","Both are one-one"],a:1,e:"x² is many-one on R, while x+1 is one-one."},
{level:"Advanced",q:"If f:A→B is bijective and |A|=|B|=4, the number of possible bijections is:",o:["4","8","16","24"],a:3,e:"The number of bijections between two 4-element sets is 4!=24."},
{level:"Advanced",q:"For a finite set A with |A|=3, the number of equivalence relations on A is:",o:["3","5","6","9"],a:1,e:"Equivalence relations correspond to set partitions; the Bell number B₃=5."},

{level:"Master",q:"If f:A→B and g:B→C are both bijections, then g∘f is:",o:["Many-one","Into","Bijective","Constant"],a:2,e:"A composition of bijections is bijective."},
{level:"Master",q:"Let f:R→R be f(x)=x³−x. Which statement is correct?",o:["f is one-one on R","f is many-one on R","f is constant","f is not a function"],a:1,e:"f(−1)=0 and f(0)=0, so distinct inputs have the same output."}
];