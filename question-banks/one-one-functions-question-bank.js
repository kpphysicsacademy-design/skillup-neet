window.SkillUpOneOneFunctionsQuestions=[
{level:"Basic",q:"A function is one-one if:",o:["Every two distinct inputs have distinct outputs","Every input has two outputs","Every codomain element has two preimages","All outputs are zero"],a:0,e:"One-one means distinct inputs cannot have the same image."},
{level:"Basic",q:"Which function is one-one on R?",o:["f(x)=x²","f(x)=|x|","f(x)=2x+1","f(x)=5"],a:2,e:"A nonconstant linear function with nonzero slope is one-one on R."},
{level:"Basic",q:"For a one-one function, f(a)=f(b) implies:",o:["a=b","a≠b","a=−b","ab=1"],a:0,e:"Equality of outputs forces equality of inputs."},
{level:"Basic",q:"Which is not one-one on R?",o:["f(x)=x","f(x)=3x−2","f(x)=x+7","f(x)=x²"],a:3,e:"x² has f(2)=f(−2)."},
{level:"Basic",q:"The graph of a one-one function passes the:",o:["Horizontal line test","Vertical line test only","Circle test","Midpoint test"],a:0,e:"A horizontal line intersects a one-one graph at most once."},
{level:"Basic",q:"The identity function f(x)=x on R is:",o:["One-one","Many-one","Constant","Not a function"],a:0,e:"Different inputs have different outputs."},
{level:"Basic",q:"A constant function on a domain with more than one element is:",o:["One-one","Not one-one","Always onto","Identity"],a:1,e:"Different inputs share the same output."},
{level:"Basic",q:"If f(1)=4 and f(2)=4, then f is:",o:["One-one","Not one-one","Onto necessarily","Identity"],a:1,e:"Distinct inputs 1 and 2 have the same image."},
{level:"Basic",q:"If f:A→B is one-one and |A|=4, then its range has:",o:["At most 3 elements","Exactly 4 elements","Exactly 2 elements","Zero elements"],a:1,e:"Four distinct inputs require four distinct images."},
{level:"Basic",q:"A one-one function is also called:",o:["Injective","Surjective","Constant","Periodic"],a:0,e:"Injective is the standard synonym for one-one."},

{level:"Developing",q:"Which function is one-one on R?",o:["x²","x³","|x|","cos x"],a:1,e:"x³ is strictly increasing on R."},
{level:"Developing",q:"Which function is one-one on R?",o:["2x−5","x²+1","sin x","|x−1|"],a:0,e:"2x−5 is strictly increasing."},
{level:"Developing",q:"For f(x)=3x+4, if f(a)=f(b), then:",o:["a=b","a=−b","a+b=4","ab=0"],a:0,e:"3a+4=3b+4 gives a=b."},
{level:"Developing",q:"For f(x)=x² restricted to [0,∞), f is:",o:["One-one","Not one-one","Constant","Undefined"],a:0,e:"x² is strictly increasing on [0,∞)."},
{level:"Developing",q:"For f(x)=x² restricted to (−∞,0], f is:",o:["One-one","Not one-one","Constant","Onto R"],a:0,e:"x² is strictly decreasing on (−∞,0]."},
{level:"Developing",q:"The function f(x)=1/x on R\{0} is:",o:["One-one","Not one-one","Constant","Periodic"],a:0,e:"1/a=1/b implies a=b for nonzero a,b."},
{level:"Developing",q:"The function f(x)=x/(x+1), x≠−1, is:",o:["One-one","Not one-one","Constant","Periodic"],a:0,e:"Equal outputs lead to equal inputs after cross multiplication."},
{level:"Developing",q:"If f:A→B is one-one, two different elements of A:",o:["Must have different images","Must have the same image","Have no images","Must map outside B"],a:0,e:"This is the defining property of injectivity."},
{level:"Developing",q:"If |A|=5 and |B|=3, a function A→B can be one-one?",o:["Yes","No","Only if constant","Only if onto"],a:1,e:"Five distinct inputs cannot have distinct images in a three-element codomain."},
{level:"Developing",q:"If |A|=3 and |B|=5, a one-one function A→B is:",o:["Impossible","Possible","Always onto","Always constant"],a:1,e:"There are enough codomain elements for three distinct images."},

{level:"Intermediate",q:"For f(x)=x²−4x on R, is f one-one?",o:["Yes","No","Only at x=0","Only for positive outputs"],a:1,e:"f(0)=0 and f(4)=0, so it is not one-one."},
{level:"Intermediate",q:"For f(x)=x³−x on R, is f one-one?",o:["Yes","No","Only for x>0","Only at x=0"],a:1,e:"For example, f(−1)=0=f(0)=f(1)."},
{level:"Intermediate",q:"For f(x)=e^x on R, f is:",o:["One-one","Not one-one","Constant","Periodic"],a:0,e:"e^x is strictly increasing."},
{level:"Intermediate",q:"For f(x)=ln x on (0,∞), f is:",o:["One-one","Not one-one","Constant","Periodic"],a:0,e:"ln x is strictly increasing on its domain."},
{level:"Intermediate",q:"If f:A→B is one-one and A,B are finite with |A|=|B|, then f is:",o:["Onto","Constant","Many-one","Undefined"],a:0,e:"A one-one map between equal finite cardinalities is onto."},

{level:"Advanced",q:"For f(x)=x², which interval is a one-one restriction of f?",o:["[−1,1]","[0,∞)","R","(−∞,∞)"],a:1,e:"On [0,∞), x² is strictly increasing."},
{level:"Advanced",q:"For f(x)=sin x, which interval gives a one-one restriction?",o:["[−π/2,π/2]","[0,2π]","R","[−π,π]"],a:0,e:"sin x is strictly increasing on [−π/2,π/2]."},
{level:"Advanced",q:"For f(x)=x+1/x on (0,∞), f is:",o:["One-one","Not one-one","Constant","Periodic"],a:1,e:"f(1/2)=2.5=f(2), with distinct inputs."},

{level:"Master",q:"How many one-one functions exist from a 4-element set to a 6-element set?",o:["120","240","360","720"],a:2,e:"The number is 6P4=6×5×4×3=360."},
{level:"Master",q:"If f:A→B is one-one, |A|=n and |B|=n, then the inverse relation is:",o:["A function from B to A","Never a function","A constant function","Empty"],a:0,e:"Every element of B is hit exactly once when a one-one map has equal finite domain and codomain sizes."}
];