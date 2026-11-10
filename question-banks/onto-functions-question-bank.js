window.SkillUpOntoFunctionsQuestions=[
{level:"Basic",q:"A function f:A→B is onto if:",o:["Range equals codomain","Range is a proper subset of codomain","Every input has two outputs","Domain equals codomain"],a:0,e:"Onto means every element of the codomain is attained."},
{level:"Basic",q:"An onto function is also called:",o:["Injective","Surjective","Constant","Identity"],a:1,e:"Surjective is the standard term for onto."},
{level:"Basic",q:"If f:A→B is onto, every element of B has:",o:["At least one preimage in A","No preimage","Exactly two preimages","A negative preimage"],a:0,e:"Every codomain element must be the image of at least one domain element."},
{level:"Basic",q:"If f:R→R is f(x)=2x+3, then f is:",o:["Into","Onto","Constant","Neither"],a:1,e:"For any y∈R, x=(y−3)/2 is real."},
{level:"Basic",q:"If f:R→R is f(x)=x², then f is:",o:["Onto","Not onto","One-one and onto","Identity"],a:1,e:"Negative real numbers are not squares of real numbers."},
{level:"Basic",q:"If f:{1,2,3}→{a,b} has outputs a,b,a, it is:",o:["Onto","Into","One-one","Not a function"],a:0,e:"Both a and b are attained."},
{level:"Basic",q:"If f:{1,2,3}→{a,b,c,d} has outputs a,b,c, it is:",o:["Onto","Into","Identity","Undefined"],a:1,e:"d is not attained, so the function is not onto."},
{level:"Basic",q:"For an onto function, the range is:",o:["The domain","The codomain","Always empty","A proper subset of codomain"],a:1,e:"Range equals codomain for an onto function."},
{level:"Basic",q:"Can an onto function be many-one?",o:["Yes","No","Never","Only for infinite sets"],a:0,e:"For example, a function from 3 elements onto 2 elements must be many-one."},
{level:"Basic",q:"If |A|<|B| for finite sets, an onto function A→B is:",o:["Possible","Impossible","Always one-one","Constant"],a:1,e:"There are not enough domain elements to cover every codomain element."},

{level:"Developing",q:"Which function R→R is onto?",o:["x²","|x|","x³","e^x"],a:2,e:"Every real number has a real cube root."},
{level:"Developing",q:"The function f:R→R, f(x)=x+7, is:",o:["Into","Onto","Many-one","Constant"],a:1,e:"Every real y is obtained using x=y−7."},
{level:"Developing",q:"The function f:R→[0,∞), f(x)=x², is:",o:["Onto","Into","Not a function","One-one"],a:0,e:"Every non-negative value has a real square-root preimage."},
{level:"Developing",q:"The function f:R→R, f(x)=x²+1, is:",o:["Onto","Into","Identity","One-one and onto"],a:1,e:"Its range is [1,∞), not all of R."},
{level:"Developing",q:"The function f:R→R, f(x)=x³−1, is:",o:["Into","Onto","Constant","Many-one"],a:1,e:"For any y, x=∛(y+1) is real."},
{level:"Developing",q:"If f:A→B has range {a,b,c} and B={a,b,c}, then f is:",o:["Into","Onto","Not a function","Constant"],a:1,e:"Range equals codomain."},
{level:"Developing",q:"If f:A→B has range {a,b} and B={a,b,c}, then f is:",o:["Onto","Into","Identity","One-one necessarily"],a:1,e:"c is not attained."},
{level:"Developing",q:"If |A|=5 and |B|=3, an onto function A→B is:",o:["Possible","Impossible","Always one-one","Never a function"],a:0,e:"There can be repeated images while all three codomain elements are covered."},
{level:"Developing",q:"If |A|=3 and |B|=5, an onto function A→B is:",o:["Possible","Impossible","Always constant","Always many-one"],a:1,e:"Three inputs cannot cover five distinct codomain elements."},
{level:"Developing",q:"If f:A→B is one-one and onto, then f is called:",o:["Bijective","Constant","Into","Periodic"],a:0,e:"A function that is both injective and surjective is bijective."},

{level:"Intermediate",q:"For f:R→R, f(x)=x³+2x, f is:",o:["Onto","Into","Constant","Many-one only"],a:0,e:"It is continuous and strictly increasing, with limits ±∞, so its range is R."},
{level:"Intermediate",q:"For f:R→R, f(x)=x²−4, f is:",o:["Onto","Into","Bijective","Identity"],a:1,e:"Its range is [−4,∞), a proper subset of R."},
{level:"Intermediate",q:"For f:R→R, f(x)=x/(x²+1), f is:",o:["Onto","Into","Constant","Bijective"],a:1,e:"Its range is bounded, so it cannot cover R."},
{level:"Intermediate",q:"For f:R→(0,∞), f(x)=e^x, f is:",o:["Onto","Into","Not a function","Constant"],a:0,e:"Every positive y has x=ln y."},
{level:"Intermediate",q:"If f:A→B is onto and |B|=4, the range has:",o:["2 elements","3 elements","4 elements","At most 3 elements"],a:2,e:"Onto requires the range to equal B."},

{level:"Advanced",q:"For f:R→R, f(x)=x³−x, f is:",o:["Onto but not one-one","Into and one-one","Not onto","Constant"],a:0,e:"Its range is R, but f(−1)=f(0)=f(1)=0, so it is not one-one."},
{level:"Advanced",q:"For f:R→[2,∞), f(x)=x²+2, f is:",o:["Onto","Into","Not a function","Constant"],a:0,e:"Its range is exactly [2,∞)."},
{level:"Advanced",q:"If f:A→B is onto and |A|=7, |B|=4, what is the minimum number of domain elements that must share an image with another domain element?",o:["0","1","2","3"],a:3,e:"Four codomain values each need one preimage; the remaining 3 domain elements must repeat existing images."},

{level:"Master",q:"How many onto functions exist from a 3-element set to a 2-element set?",o:["2","4","6","8"],a:2,e:"There are 2³=8 total functions; subtract the two constant functions: 6."},
{level:"Master",q:"How many onto functions exist from a 4-element set to a 2-element set?",o:["8","10","12","14"],a:3,e:"2⁴−2=16−2=14."}
];