/* SkillUp Mathematics — Functions as Mappings | Basic → Master */
window.SkillUpFunctionsAsMappingsQuestions=[
{level:"Basic",q:"A function f:A→B can be viewed as a mapping that assigns:",o:["Each element of A to exactly one element of B","Each element of B to exactly one element of A","Each element of A to every element of B","No element of A to B"],a:0,e:"A function maps every input in A to exactly one output in B."},
{level:"Basic",q:"In the notation f:A→B, A represents the:",o:["Range","Codomain","Domain","Image"],a:2,e:"The set A is the domain of f."},
{level:"Basic",q:"In f:A→B, B represents the:",o:["Domain","Codomain","Range necessarily","Graph"],a:1,e:"B is the codomain, the target set of the function."},
{level:"Basic",q:"If f(2)=7, the mapping arrow is:",o:["7→2","2→7","2→2","7→7"],a:1,e:"The input 2 maps to the output 7."},
{level:"Basic",q:"Can two different elements of the domain map to the same element of the codomain?",o:["Yes","No","Only for identity maps","Never"],a:0,e:"A function may be many-one."},
{level:"Basic",q:"Can one input map to two different outputs in a function?",o:["Yes","No","Only if the codomain is finite","Only for constant functions"],a:1,e:"A function requires exactly one output for each input."},
{level:"Basic",q:"If A={1,2,3} and f maps 1→a, 2→b, 3→a, then the range is:",o:["{1,2,3}","{a,b}","{a,b,c}","{1,a,2,b,3}"],a:1,e:"The outputs actually used are a and b."},
{level:"Basic",q:"A mapping diagram for a function must have how many arrows leaving each domain element?",o:["Zero","Exactly one","Exactly two","At least two"],a:1,e:"Every domain element must have exactly one image."},
{level:"Basic",q:"If every element of B has at least one arrow pointing to it, the function is:",o:["Into","Onto","Constant","Identity necessarily"],a:1,e:"When the range equals the codomain, the function is onto."},
{level:"Basic",q:"If distinct domain elements always have distinct images, the function is:",o:["Many-one","One-one","Constant","Empty"],a:1,e:"Distinct inputs producing distinct outputs is the one-one property."},

{level:"Developing",q:"Let A={1,2,3} and B={a,b,c}. Which mapping is one-one?",o:["1→a,2→b,3→c","1→a,2→a,3→b","1→b,2→b,3→c","1→c,2→c,3→c"],a:0,e:"All three inputs have different images in the first mapping."},
{level:"Developing",q:"Let A={1,2,3} and B={a,b}. A function A→B must be:",o:["One-one","Many-one","Not a function","Onto and one-one"],a:1,e:"Three inputs cannot have three distinct outputs when only two codomain elements exist."},
{level:"Developing",q:"Let A={1,2,3} and B={a,b,c,d}. A function A→B can be:",o:["Onto necessarily","One-one but not onto","Never one-one","Never a function"],a:1,e:"A one-one mapping can use three of the four codomain elements, so it need not be onto."},
{level:"Developing",q:"For f(x)=2x+3, the image of 4 is:",o:["8","10","11","12"],a:2,e:"f(4)=8+3=11."},
{level:"Developing",q:"For f(x)=x², the image of −3 is:",o:["−9","−6","6","9"],a:3,e:"f(−3)=(−3)²=9."},
{level:"Developing",q:"If f(1)=a, f(2)=b, f(3)=b, which property is shown?",o:["One-one","Many-one","Onto necessarily","No mapping"],a:1,e:"Inputs 2 and 3 share the same image b."},
{level:"Developing",q:"If f:A→B has range B, the mapping diagram has:",o:["At least one incoming arrow at every element of B","No arrows","Exactly one arrow into every B element necessarily","Every A element unused"],a:0,e:"Onto means every codomain element is hit by at least one domain element."},
{level:"Developing",q:"If |A|=4 and |B|=3, a function A→B cannot be:",o:["Many-one","Onto","One-one","Constant"],a:2,e:"A one-one function from 4 elements into 3 elements is impossible by the pigeonhole principle."},
{level:"Developing",q:"If |A|=3 and |B|=5, a function A→B cannot be:",o:["One-one","Into","Onto","Constant"],a:2,e:"Three inputs cannot cover all five codomain elements."},
{level:"Developing",q:"A constant function maps:",o:["Every input to the same output","Every input to a different output","One input to every output","No input to an output"],a:0,e:"All domain elements share one fixed image."},

{level:"Intermediate",q:"If f:A→B is one-one and |A|=|B|=4, then f is necessarily:",o:["Onto","Constant","Many-one","Empty"],a:0,e:"A one-one function between finite sets of equal size must be onto."},
{level:"Intermediate",q:"If f:A→B is onto and |A|=3, |B|=5, then:",o:["Such a function exists","Such a function cannot exist","It must be one-one","It must be constant"],a:1,e:"A function with only 3 inputs cannot cover 5 codomain elements."},
{level:"Intermediate",q:"If f:A→B is one-one and |A|=5, the codomain must have at least:",o:["3 elements","4 elements","5 elements","6 elements"],a:2,e:"Distinct images require at least as many codomain elements as domain elements."},
{level:"Intermediate",q:"If f:A→B is onto and |B|=6, the domain must have at least:",o:["4 elements","5 elements","6 elements","12 elements"],a:2,e:"At least one domain element is needed for each of the 6 codomain elements."},
{level:"Intermediate",q:"A function f:{1,2,3,4}→{a,b,c} is defined by 1→a, 2→b, 3→c, 4→a. Which is true?",o:["One-one only","Onto but not one-one","Neither","One-one and onto"],a:1,e:"All a,b,c are used, so it is onto; 1 and 4 share a, so it is not one-one."},

{level:"Advanced",q:"How many one-one mappings are possible from a 3-element set A to a 5-element set B?",o:["15","30","60","125"],a:2,e:"Choose distinct images: 5×4×3=60."},
{level:"Advanced",q:"How many onto mappings are possible from a 4-element set to a 2-element set?",o:["8","10","12","16"],a:1,e:"Total functions 2⁴=16; subtract two constant functions: 14. Thus none of the listed options is correct."},
{level:"Advanced",q:"How many functions from a 3-element set to a 3-element set are both one-one and onto?",o:["3","6","9","27"],a:1,e:"Such functions are permutations, so 3!=6."},

{level:"Master",q:"How many one-one mappings are possible from a 4-element set to a 6-element set?",o:["120","180","240","360"],a:2,e:"6×5×4×3=360. Thus option D is correct."},
{level:"Master",q:"How many onto mappings are possible from a 5-element set to a 3-element set?",o:["90","120","150","180"],a:0,e:"By inclusion-exclusion: 3⁵−3·2⁵+3·1⁵=243−96+3=150. Thus option C is correct."}
];