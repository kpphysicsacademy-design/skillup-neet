window.SkillUpIntoFunctionsQuestions=[
{level:"Basic",q:"A function f:A→B is called into when:",o:["Range is a proper subset of B","Range equals B","Every input has two outputs","Domain is empty"],a:0,e:"Into means at least one codomain element is not attained."},
{level:"Basic",q:"If f:A→B is onto, can it also be called into?",o:["No","Yes, always","Only when A is finite","Only when B is empty"],a:0,e:"Onto means the range equals the codomain, so it is not into."},
{level:"Basic",q:"If f:R→R is f(x)=x², then f is:",o:["Into","Onto","One-one and onto","Identity"],a:0,e:"Negative real numbers are not in the range [0,∞)."},
{level:"Basic",q:"For f:R→R, f(x)=2x+1 is:",o:["Into","Onto","Constant","Neither a function nor a mapping"],a:1,e:"Every real y has x=(y−1)/2, so the range is R."},
{level:"Basic",q:"If at least one element of the codomain has no preimage, the function is:",o:["Into","Onto","Identity","Constant necessarily"],a:0,e:"An unattained codomain element makes the function into."},
{level:"Basic",q:"For f:{1,2,3}→{a,b,c,d} with outputs a,b,a, f is:",o:["Into","Onto","One-one","Not a function"],a:0,e:"c and d are not attained, so the range is a proper subset of the codomain."},
{level:"Basic",q:"For f:{1,2,3}→{a,b} with outputs a,b,a, f is:",o:["Into","Onto","One-one","Not a function"],a:1,e:"Both codomain elements a and b are attained."},
{level:"Basic",q:"The range of an into function is:",o:["A proper subset of the codomain","Always equal to the codomain","Always the domain","Empty"],a:0,e:"This is the defining condition for an into function."},
{level:"Basic",q:"If f:A→B has range B, then f is:",o:["Onto","Into","Many-one necessarily","Constant"],a:0,e:"Range equal to codomain means onto."},
{level:"Basic",q:"A function can be many-one and into:",o:["Yes","No","Only if domain has one element","Never"],a:0,e:"For example, x²:R→R is both many-one and into."},

{level:"Developing",q:"For f:R→R, f(x)=x²+1, f is:",o:["Onto","Into","One-one and onto","Identity"],a:1,e:"Its range is [1,∞), a proper subset of R."},
{level:"Developing",q:"For f:R→R, f(x)=|x|, f is:",o:["Onto","Into","One-one","Identity"],a:1,e:"Its range is [0,∞), not all real numbers."},
{level:"Developing",q:"For f:R→R, f(x)=x³, f is:",o:["Into","Onto","Many-one","Constant"],a:1,e:"Every real y has the real cube root x=∛y."},
{level:"Developing",q:"For f:R→R, f(x)=e^x, f is:",o:["Onto","Into","Many-one and onto","Constant"],a:1,e:"Its range is (0,∞), so negative and zero values are not attained."},
{level:"Developing",q:"For f:R→[0,∞), f(x)=x², f is:",o:["Into","Onto","Neither","Not a function"],a:1,e:"Every non-negative codomain value has a square-root preimage."},
{level:"Developing",q:"For f:R→[1,∞), f(x)=x²+1, f is:",o:["Into","Onto","Constant","Not defined"],a:1,e:"Its range is exactly [1,∞)."},
{level:"Developing",q:"For f:{1,2,3,4}→{a,b,c,d,e} with range {a,b,c}, f is:",o:["Onto","Into","One-one and onto","Identity"],a:1,e:"Two codomain elements are not attained."},
{level:"Developing",q:"If |A|=3 and |B|=5, every function A→B is necessarily:",o:["Onto","Into","Constant","One-one"],a:1,e:"At most three codomain elements can be attained, so five cannot all be covered."},
{level:"Developing",q:"If |A|=5 and |B|=3, can an into function A→B exist?",o:["Yes","No","Only if one-one","Only if constant"],a:0,e:"An into function requires the range to have fewer than 3 elements; this is possible, so the correct answer is Yes."},
{level:"Developing",q:"If f:A→B is one-one but not onto, then f is:",o:["Into","Onto","Constant","Identity"],a:0,e:"Not onto means its range is a proper subset of B, so it is into."},

{level:"Intermediate",q:"Let f:R→R be f(x)=x²−4. Then f is:",o:["Onto","Into","One-one and onto","Identity"],a:1,e:"Its range is [−4,∞), which is a proper subset of R."},
{level:"Intermediate",q:"Let f:R→R be f(x)=x²−4. Is it one-one?",o:["Yes","No","Only for x>0","Only for x<0"],a:1,e:"f(2)=f(−2)=0, so it is many-one."},
{level:"Intermediate",q:"For f:R→R, f(x)=1/(x²+1), f is:",o:["Onto","Into","One-one","Identity"],a:1,e:"Its range is (0,1], a proper subset of R."},
{level:"Intermediate",q:"For f:R→R, f(x)=2x−7, f is:",o:["Into","Onto","Many-one","Constant"],a:1,e:"It is a nonconstant linear function with range R."},
{level:"Intermediate",q:"If f:A→B is into and |B|=6, the range can contain:",o:["Exactly 6 elements","At most 5 elements","More than 6 elements","No elements only"],a:1,e:"Into requires a proper subset of B."},

{level:"Advanced",q:"For f:R→R, f(x)=x/(x²+1), f is:",o:["Onto","Into","One-one and onto","Constant"],a:1,e:"Its range is bounded between −1/2 and 1/2, so it is not onto R."},
{level:"Advanced",q:"For f:R→R, f(x)=x³−x, f is:",o:["Onto and one-one","Onto but not one-one","Into and one-one","Into but not a function"],a:1,e:"It is continuous with opposite infinite limits, so its range is R; but f(−1)=f(0)=f(1)=0, so it is not one-one."},
{level:"Advanced",q:"If |A|=5 and |B|=4, an into function A→B must have range size:",o:["Exactly 4","At most 3","Exactly 5","At least 4"],a:1,e:"Into means the range is a proper subset of B, so it has at most 3 elements."},

{level:"Master",q:"How many into functions are there from a 3-element set to a 2-element set?",o:["0","2","6","8"],a:1,e:"There are 8 total functions; 6 are onto, leaving 2 constant functions that are into."},
{level:"Master",q:"How many into functions are there from a 2-element set to a 3-element set?",o:["3","6","9","0"],a:2,e:"Every function from 2 elements to 3 elements is automatically into. There are 3²=9 functions."}
];