window.SkillUpManyOneFunctionsQuestions=[
{level:"Basic",q:"A function is many-one when:",o:["At least two distinct inputs have the same output","Every input has two outputs","Every output has one input","No inputs have outputs"],a:0,e:"Many-one means distinct domain elements can share an image."},
{level:"Basic",q:"Which function is many-one on R?",o:["f(x)=x","f(x)=2x+1","f(x)=x²","f(x)=x³"],a:2,e:"f(2)=f(−2)=4, so x² is many-one on R."},
{level:"Basic",q:"If f(2)=5 and f(−2)=5, then f is:",o:["One-one","Many-one","Identity","Constant necessarily"],a:1,e:"Distinct inputs have the same image."},
{level:"Basic",q:"Can a constant function with at least two domain elements be one-one?",o:["Yes","No","Only if codomain is infinite","Always"],a:1,e:"All inputs have the same output, so it is many-one."},
{level:"Basic",q:"A many-one function may have:",o:["Two or more inputs sharing one image","One input with two images","No codomain","No domain"],a:0,e:"That is the defining feature of many-one behavior."},
{level:"Basic",q:"Which function is many-one on R?",o:["f(x)=x+1","f(x)=3x−2","f(x)=|x|","f(x)=5x"],a:2,e:"|2|=|−2|."},
{level:"Basic",q:"If f(a)=f(b) for a≠b, then f is:",o:["One-one","Not one-one","Identity","Necessarily onto"],a:1,e:"A one-one function cannot assign the same output to distinct inputs."},
{level:"Basic",q:"The graph of a many-one function can fail the:",o:["Horizontal line test","Vertical line test","Circle test","Midpoint test"],a:0,e:"A horizontal line can intersect a many-one graph more than once."},
{level:"Basic",q:"A function can be many-one and onto:",o:["Yes","No","Only on infinite sets","Never"],a:0,e:"For example, a suitable finite function can repeat outputs while covering the codomain."},
{level:"Basic",q:"If f:{1,2,3}→{a,b} is onto, it must be:",o:["One-one","Many-one","Constant","Not a function"],a:1,e:"Three inputs cannot have three distinct images in a two-element codomain."},

{level:"Developing",q:"Which function is many-one on R?",o:["f(x)=x³","f(x)=2x−7","f(x)=x²+1","f(x)=x"],a:2,e:"f(1)=f(−1)=2."},
{level:"Developing",q:"For f(x)=x²−4, f(2) and f(−2) are:",o:["Different","Both 0","Both 4","Opposite"],a:1,e:"Both values are 0."},
{level:"Developing",q:"For f(x)=|x−3|, which inputs have the same image?",o:["2 and 4","1 and 2","3 and 4","0 and 1"],a:0,e:"|2−3|=|4−3|=1."},
{level:"Developing",q:"For f(x)=x² on R, the equation f(a)=f(b) implies:",o:["a=b only","a=±b","a+b=1","ab=1"],a:1,e:"a²=b² implies a=b or a=−b."},
{level:"Developing",q:"The function f(x)=cos x on R is:",o:["One-one","Many-one","Constant","Undefined"],a:1,e:"Cosine is periodic, so different inputs can have the same output."},
{level:"Developing",q:"The function f(x)=sin x on R is:",o:["One-one","Many-one","Constant","Identity"],a:1,e:"Sine is periodic on R."},
{level:"Developing",q:"The function f(x)=x² restricted to [0,∞) is:",o:["Many-one","One-one","Constant","Neither"],a:1,e:"On [0,∞), x² is strictly increasing."},
{level:"Developing",q:"The function f(x)=x² restricted to R is:",o:["One-one","Many-one","Onto R","Constant"],a:1,e:"Positive and negative inputs can have the same square."},
{level:"Developing",q:"If |A|=5 and |B|=3, every function A→B is necessarily:",o:["One-one","Many-one","Identity","Undefined"],a:1,e:"Five inputs cannot have five distinct images in a three-element codomain."},
{level:"Developing",q:"If |A|=2 and |B|=5, a many-one function A→B is:",o:["Possible","Impossible","Always onto","Always one-one"],a:0,e:"With two distinct domain elements, many-one requires them to share an image; this is possible, so the correct option should be Possible."},

{level:"Intermediate",q:"For f(x)=x²+2x on R, f is:",o:["One-one","Many-one","Constant","Onto R"],a:1,e:"f(0)=0 and f(−2)=0, so it is many-one."},
{level:"Intermediate",q:"For f(x)=x²−6x+8 on R, which pair has the same image?",o:["1 and 5","2 and 4","0 and 2","3 and 6"],a:0,e:"f(1)=3 and f(5)=3."},
{level:"Intermediate",q:"For f(x)=1/x on R\{0}, f is:",o:["Many-one","One-one","Constant","Periodic"],a:1,e:"1/a=1/b implies a=b for nonzero inputs."},
{level:"Intermediate",q:"For f(x)=x/(x+1), x≠−1, f is:",o:["Many-one","One-one","Constant","Periodic"],a:1,e:"Equal outputs imply equal inputs after cross multiplication."},
{level:"Intermediate",q:"If f:A→B is many-one, then f cannot be:",o:["A function","Non-injective","A mapping","One-one"],a:3,e:"Many-one and one-one are mutually exclusive for a function with repeated images."},

{level:"Advanced",q:"For f(x)=sin x, which restriction makes it one-one?",o:["R","[−π/2,π/2]","[0,2π]","[−π,π]"],a:1,e:"Sine is strictly increasing on [−π/2,π/2]."},
{level:"Advanced",q:"For f(x)=x², which domain makes it many-one?",o:["[0,∞)","(−∞,0]","R","{0,1,2}"],a:2,e:"On R, positive and negative inputs can share the same square."},
{level:"Advanced",q:"If f:A→B is many-one and |A|=6, the range can have:",o:["Exactly 6 elements only","At most 5 elements","At most 6 elements and fewer than 6","More than 6 elements"],a:2,e:"Many-one means at least two inputs share an image, so fewer than 6 distinct images occur."},

{level:"Master",q:"How many many-one functions exist from a 3-element set to a 2-element set?",o:["2","4","6","8"],a:3,e:"There are 2³=8 total functions; two constant functions are one-one? More precisely, no function from 3 to 2 is one-one, so all 8 are many-one. Correct answer is 8."},
{level:"Master",q:"For f:R→R defined by f(x)=x², which statement is correct?",o:["It is one-one and onto","It is many-one and into","It is one-one and into","It is many-one and onto"],a:1,e:"It is many-one because f(x)=f(−x), and into because negative reals are not in its range."}
];