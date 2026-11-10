window.SkillUpCompositionOfFunctionsQuestions=[
{level:"Basic",q:"The composition (f∘g)(x) is defined as:",o:["f(x)+g(x)","f(g(x))","g(f(x))","f(x)g(x)"],a:1,e:"By definition, (f∘g)(x)=f(g(x))."},
{level:"Basic",q:"If f(x)=x+2 and g(x)=x−1, then (f∘g)(x) is:",o:["x−3","x+1","x+2","2x+1"],a:1,e:"f(g(x))=(x−1)+2=x+1."},
{level:"Basic",q:"If f(x)=2x and g(x)=x+3, then (f∘g)(x) is:",o:["2x+3","2x+6","x+6","2x²+6"],a:1,e:"f(g(x))=2(x+3)=2x+6."},
{level:"Basic",q:"If f(x)=x² and g(x)=x+1, then (f∘g)(x) is:",o:["x²+1","(x+1)²","x²+x+1","x²−1"],a:1,e:"f(g(x))=(x+1)²."},
{level:"Basic",q:"In general, f∘g and g∘f are:",o:["Always equal","Not necessarily equal","Always zero","Undefined"],a:1,e:"Function composition is generally not commutative."},
{level:"Basic",q:"If f(x)=x+1 and g(x)=2x, then (g∘f)(x) is:",o:["2x+1","2x+2","x+2","2x"],a:1,e:"g(f(x))=2(x+1)=2x+2."},
{level:"Basic",q:"If f(x)=3 and g(x)=x², then (f∘g)(x) is:",o:["3x²","9","3","x²+3"],a:2,e:"f is the constant function 3, so f(g(x))=3."},
{level:"Basic",q:"If f(x)=x and g(x)=x, then f∘g is:",o:["The zero function","The identity function","The constant 1","Undefined"],a:1,e:"f(g(x))=x."},
{level:"Basic",q:"If f(2)=5 and g(3)=2, then (f∘g)(3) equals:",o:["2","3","5","10"],a:2,e:"g(3)=2, then f(2)=5."},
{level:"Basic",q:"The identity function I(x)=x satisfies:",o:["f∘I=I","f∘I=f","f∘I=0","f∘I=f²"],a:1,e:"f(I(x))=f(x)."},

{level:"Developing",q:"If f(x)=x²+1 and g(x)=2x, then (f∘g)(x) is:",o:["2x²+1","4x²+1","(x²+1)2x","4x²+2"],a:1,e:"f(2x)=(2x)²+1=4x²+1."},
{level:"Developing",q:"If f(x)=2x+1 and g(x)=x², then (g∘f)(x) is:",o:["2x²+1","(2x+1)²","x²+2x+1","4x²+1"],a:1,e:"g(f(x))=(2x+1)²."},
{level:"Developing",q:"If f(x)=√x and g(x)=x², then (f∘g)(x) is:",o:["x²","|x|","x","√x²"],a:1,e:"√(x²)=|x| for real x."},
{level:"Developing",q:"If f(x)=1/x and g(x)=x+1, then (f∘g)(x) is:",o:["1/x+1","1/(x+1)","(x+1)/x","x/(x+1)"],a:1,e:"f(g(x))=1/(x+1), requiring x≠−1."},
{level:"Developing",q:"If f(x)=x−2 and g(x)=3x+1, then (f∘g)(2) is:",o:["3","5","4","7"],a:1,e:"g(2)=7 and f(7)=5."},
{level:"Developing",q:"If f(x)=2x and g(x)=x/2, then f∘g is:",o:["2x","x","x/2","4x"],a:1,e:"f(g(x))=2(x/2)=x."},
{level:"Developing",q:"If f(x)=x+1 and g(x)=x−1, then (f∘g)(x) is:",o:["x−2","x","x+2","x²−1"],a:1,e:"f(x−1)=x."},
{level:"Developing",q:"If f(x)=x² and g(x)=2x+1, then (f∘g)(1) is:",o:["4","9","16","25"],a:1,e:"g(1)=3 and f(3)=9."},
{level:"Developing",q:"If f∘g=I, then g is called a:",o:["Zero function","Right inverse of f","Constant function","Derivative of f"],a:1,e:"g is a right inverse of f when f∘g=I."},
{level:"Developing",q:"If f and g are both increasing functions on compatible domains, f∘g is:",o:["Always decreasing","Increasing","Constant","Undefined"],a:1,e:"The composition of increasing functions is increasing on its domain."},

{level:"Intermediate",q:"If f(x)=1/(x−1) and g(x)=x+2, then the domain of f∘g is:",o:["R\{1}","R\{−1}","R\{2}","R"],a:1,e:"g(x)−1=x+1 cannot be zero, so x≠−1."},
{level:"Intermediate",q:"If f(x)=√x and g(x)=x−3, then the domain of f∘g is:",o:["x≥0","x≥3","x>3","R"],a:1,e:"The input x−3 to √· must be nonnegative."},
{level:"Intermediate",q:"If f(x)=x² and g(x)=x+1, then (f∘g)(x)−(g∘f)(x) equals:",o:["2x","2x−1","2x+1","0"],a:0,e:"(x+1)²−(x²+1)=2x."},
{level:"Intermediate",q:"If f(x)=2x+3 and g(x)=x−2, then (f∘g)(x) is:",o:["2x−1","2x+1","2x+5","x+1"],a:0,e:"2(x−2)+3=2x−1."},
{level:"Intermediate",q:"If f∘g=I and f is injective, then g is:",o:["Not unique","A right inverse and unique","Constant","Zero"],a:1,e:"An injective function has at most one right inverse on the relevant codomain."},

{level:"Advanced",q:"If f(x)=x+1 and g(x)=x², then the equation (f∘g)(x)=(g∘f)(x) has solution:",o:["x=−1/2","x=0","x=1","All real x"],a:1,e:"x²+1=(x+1)² gives x=0."},
{level:"Advanced",q:"If f(x)=2x−1 and g(x)=3x+2, then (f∘g)(x) is:",o:["6x+3","6x−1","6x+2","5x+1"],a:0,e:"2(3x+2)−1=6x+3."},
{level:"Advanced",q:"If f(x)=x² and g(x)=√x for x≥0, then (f∘g)(x) equals:",o:["x","√x","x²","|x|"],a:0,e:"(√x)²=x for x≥0."},

{level:"Master",q:"If f(x)=ax+b and g(x)=cx+d, then f∘g is:",o:["acx+ad+b","(a+c)x+(b+d)","acx+bd","a(cx+d)"],a:0,e:"f(g(x))=a(cx+d)+b=acx+ad+b."},
{level:"Master",q:"If f(x)=x+2 and g(x)=1/(x−2), then (g∘f)(x) is:",o:["1/x","1/(x−2)","1/(x+2)","x/(x+2)"],a:0,e:"g(f(x))=1/((x+2)−2)=1/x, with x≠0."}
];