window.SkillUpInvertibleFunctionsQuestions=[
{level:"Basic",q:"A function is invertible when it has:",o:["An inverse function","Two outputs for each input","No codomain","Only one input"],a:0,e:"An invertible function has a function as its inverse."},
{level:"Basic",q:"A function f:A→B is invertible if it is:",o:["Bijective","Constant","Many-one only","Into only"],a:0,e:"For a function between sets, invertibility requires it to be both one-one and onto."},
{level:"Basic",q:"If f is invertible, then f⁻¹ maps:",o:["A to B","B to A","A to A only","B to B only"],a:1,e:"If f:A→B, then f⁻¹:B→A."},
{level:"Basic",q:"For an invertible function, f⁻¹(f(x)) equals:",o:["0","1","x","f(x)"],a:2,e:"Applying f and then its inverse returns the original input."},
{level:"Basic",q:"For an invertible function, f(f⁻¹(y)) equals:",o:["y","0","1","f(y)"],a:0,e:"Applying the function after its inverse returns the original codomain value."},
{level:"Basic",q:"Which function is invertible on R?",o:["f(x)=x²","f(x)=|x|","f(x)=2x+3","f(x)=5"],a:2,e:"2x+3 is bijective from R to R."},
{level:"Basic",q:"The inverse of f(x)=x+4 is:",o:["f⁻¹(x)=x−4","f⁻¹(x)=x+4","f⁻¹(x)=4−x","f⁻¹(x)=1/(x+4)"],a:0,e:"Solve y=x+4 for x to get x=y−4."},
{level:"Basic",q:"The graph of an inverse function is the reflection of the original graph in:",o:["x-axis","y-axis","line y=x","line y=−x"],a:2,e:"Inverse graphs are reflections across y=x."},
{level:"Basic",q:"If f is one-one but not onto B, then f:A→B is:",o:["Invertible as a function B→A","Not invertible with codomain B","Always constant","Onto"],a:1,e:"A one-one but non-onto function has no inverse function defined on all of B."},
{level:"Basic",q:"If f is onto but not one-one, then its inverse relation is:",o:["A function","Not a function","Identity","Constant"],a:1,e:"Different inputs share an output, so the inverse assigns multiple inputs to that output."},

{level:"Developing",q:"If f(x)=3x−5, then f⁻¹(x) is:",o:["(x−5)/3","(x+5)/3","3x+5","5−3x"],a:1,e:"y=3x−5 gives x=(y+5)/3."},
{level:"Developing",q:"If f(x)=2x+7, then f⁻¹(9) is:",o:["1","2","8","16"],a:0,e:"2x+7=9 gives x=1."},
{level:"Developing",q:"If f(x)=x³, its inverse on R is:",o:["√x","∛x","x²","1/x"],a:1,e:"The inverse of x³ is the real cube-root function."},
{level:"Developing",q:"If f(x)=e^x, its inverse is:",o:["ln x","log₁₀x","x²","1/x"],a:0,e:"The inverse of the exponential function is the natural logarithm."},
{level:"Developing",q:"If f(x)=ln x on (0,∞), its inverse is:",o:["e^x","x²","1/x","log x"],a:0,e:"The inverse of ln x is e^x."},
{level:"Developing",q:"If f(x)=x² with domain [0,∞), its inverse is:",o:["√x","−√x","x²","|x|"],a:0,e:"Restricting x² to [0,∞) makes it bijective onto [0,∞), with inverse √x."},
{level:"Developing",q:"If f(x)=x² with domain R, it is:",o:["Invertible from R to R","Not one-one, hence not invertible as R→R","Onto R","Identity"],a:1,e:"f(1)=f(−1), so it is not one-one."},
{level:"Developing",q:"If f:A→B is bijective, then f⁻¹:",o:["Exists as a function B→A","Cannot exist","Is constant","Has the same domain as f"],a:0,e:"Bijectivity guarantees a unique inverse function."},
{level:"Developing",q:"If f⁻¹(3)=7, then:",o:["f(3)=7","f(7)=3","f(3)=3","f(7)=7"],a:1,e:"Inverse notation means f(7)=3."},
{level:"Developing",q:"If f(2)=9, then f⁻¹(9) equals:",o:["2","9","11","7"],a:0,e:"The inverse reverses the mapping 2→9."},

{level:"Intermediate",q:"If f(x)=5x−2, then f⁻¹(x) is:",o:["(x−2)/5","(x+2)/5","5x+2","(2−x)/5"],a:1,e:"y=5x−2 gives x=(y+2)/5."},
{level:"Intermediate",q:"If f(x)=(x−1)/(x+2), x≠−2, then f⁻¹(x) is:",o:["(1+2x)/(1−x)","(x−1)/(x+2)","(x+1)/(2−x)","(1−2x)/(x−1)"],a:0,e:"Solving y=(x−1)/(x+2) gives x=(1+2y)/(1−y)."},
{level:"Intermediate",q:"If f(x)=2x/(x+1), x≠−1, its inverse is:",o:["x/(2−x)","2x/(x−1)","x/(x+2)","(x−1)/2x"],a:0,e:"y=2x/(x+1) gives x=y/(2−y)."},
{level:"Intermediate",q:"If f:A→B is invertible, then |A| and |B| for finite sets are:",o:["Equal","Always different","Unrelated","One is zero"],a:0,e:"A bijection pairs each element of A with exactly one distinct element of B."},
{level:"Intermediate",q:"If f and g are inverse functions, then:",o:["f∘g=I and g∘f=I","f+g=I","fg=I only","f−g=I"],a:0,e:"Each composition returns the identity on the appropriate set."},

{level:"Advanced",q:"If f(x)=x³+2, then f⁻¹(x) is:",o:["∛(x−2)","∛(x+2)","x³−2","(x−2)³"],a:0,e:"y=x³+2 gives x=∛(y−2)."},
{level:"Advanced",q:"The inverse of f(x)=e^{2x} is:",o:["ln x/2","2ln x","e^{x/2}","ln(2x)"],a:0,e:"y=e^{2x} gives ln y=2x, so x=(ln y)/2."},
{level:"Advanced",q:"For f(x)=x²−4x+7 restricted to [2,∞), the inverse is:",o:["2+√(x−3)","2−√(x−3)","√(x−7)+2","x²−4x+7"],a:0,e:"f(x)=(x−2)²+3 and x≥2, so the inverse is 2+√(x−3)."},

{level:"Master",q:"If f(x)=(3x+1)/(x−2), then f⁻¹(x) is:",o:["(2x+1)/(x−3)","(2x−1)/(x−3)","(x+2)/(3x−1)","(3x−1)/(x+2)"],a:0,e:"y=(3x+1)/(x−2) gives x=(2y+1)/(y−3)."},
{level:"Master",q:"If f:A→B and g:B→A satisfy g∘f=I_A and f∘g=I_B, then:",o:["f and g are inverse functions","f is constant","g is many-one","Neither is a function"],a:0,e:"The two identity compositions are the defining inverse relationship."}
];