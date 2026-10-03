window.SkillUpCodomainOfFunctionQuestions=[
{level:"Basic",q:"The codomain of a function f:A→B is:",o:["A","B","The set of inputs only","The graph"],a:1,e:"In f:A→B, B is the codomain."},
{level:"Basic",q:"If f:{1,2,3}→{a,b,c,d}, the codomain is:",o:["{1,2,3}","{a,b,c,d}","The actual outputs only","{a,b}"],a:1,e:"The codomain is the specified target set."},
{level:"Basic",q:"The range of a function is always:",o:["Equal to its domain","A subset of its codomain","Larger than its codomain","Disjoint from its codomain"],a:1,e:"Every actual output belongs to the codomain."},
{level:"Basic",q:"If f:A→B and f(1)=b, then b belongs to:",o:["A only","B","Neither A nor B","The domain only"],a:1,e:"Every image of f lies in B."},
{level:"Basic",q:"Can the codomain contain elements that are never outputs?",o:["Yes","No","Only for one-one functions","Only for constant functions"],a:0,e:"Yes. Such elements belong to the codomain but not the range."},
{level:"Basic",q:"If f:R→R is f(x)=x², its codomain is:",o:["[0,∞)","R","(−∞,0]","{0}"],a:1,e:"The stated target set R is the codomain."},
{level:"Basic",q:"For f:R→R, f(x)=x², its range is:",o:["R","[0,∞)","(−∞,0)","{1}"],a:1,e:"Squares of real numbers are non-negative."},
{level:"Basic",q:"If f:A→B is onto, then:",o:["Range=B","Range=A","Domain=B","Codomain=A"],a:0,e:"Onto means every codomain element is attained."},
{level:"Basic",q:"If f:A→B is not onto, then:",o:["Range is a proper subset of B","Range equals B","Domain is empty necessarily","It is not a function"],a:0,e:"At least one codomain element is not attained."},
{level:"Basic",q:"For f:{1,2,3}→{4,5}, with 1→4,2→4,3→5, the codomain is:",o:["{1,2,3}","{4,5}","{4}","{5}"],a:1,e:"The codomain is the specified target set {4,5}."},

{level:"Developing",q:"Let f:{1,2,3}→{a,b,c,d} with 1→a,2→b,3→a. The range is:",o:["{a,b}","{a,b,c,d}","{1,2,3}","{c,d}"],a:0,e:"Only a and b occur as actual outputs."},
{level:"Developing",q:"In the same mapping, which codomain elements are not in the range?",o:["a,b","c,d","a,c","b,d"],a:1,e:"c and d are in the codomain but are never attained."},
{level:"Developing",q:"If f:R→R is f(x)=2x+1, the range is:",o:["R","[1,∞)","(1,∞)","{1}"],a:0,e:"For every real y, x=(y−1)/2 is real."},
{level:"Developing",q:"If f:R→R is f(x)=x²+1, the range is:",o:["R","[1,∞)","(1,∞)","(−∞,1]"],a:1,e:"x²≥0, so x²+1≥1."},
{level:"Developing",q:"If f:R→[0,∞) is f(x)=x², then f is:",o:["Onto","Not onto","Not a function","One-one"],a:0,e:"Every non-negative real has a real square root."},
{level:"Developing",q:"If f:R→R is f(x)=x², then f is:",o:["Onto","Not onto","Both one-one and onto","Constant"],a:1,e:"Negative real numbers are not outputs."},
{level:"Developing",q:"If the range of f:A→B has 4 elements while B has 6 elements, f is:",o:["Onto","Not onto","One-one necessarily","Constant"],a:1,e:"The range does not equal the codomain."},
{level:"Developing",q:"If |B|=5 and f:A→B is onto, the range has:",o:["3 elements","4 elements","5 elements","At most 4 elements"],a:2,e:"For an onto function, range and codomain are equal."},
{level:"Developing",q:"If |B|=7 and the range of f:A→B has 7 elements, then f is:",o:["Into","Onto","Constant","Undefined"],a:1,e:"The range equals the codomain."},
{level:"Developing",q:"If f:{1,2,3,4}→{a,b,c} has outputs a,b,c,a, the number of range elements is:",o:["1","2","3","4"],a:2,e:"The distinct outputs are a,b,c."},

{level:"Intermediate",q:"Let f:R→R be f(x)=x²−4. Its range is:",o:["[−4,∞)","(−4,∞)","R","(−∞,−4]"],a:0,e:"x²≥0, so x²−4≥−4."},
{level:"Intermediate",q:"Let f:R→[−4,∞) be f(x)=x²−4. Then f is:",o:["Onto","Not onto","Constant","Not a function"],a:0,e:"Every y≥−4 has x=±√(y+4)."},
{level:"Intermediate",q:"If f:A→B is one-one and |A|=|B|=n for finite n, then the range contains:",o:["Exactly n elements","Fewer than n","More than n","Zero"],a:0,e:"One-one gives n distinct images, all in B."},
{level:"Intermediate",q:"If |A|=4 and |B|=6, an onto function A→B is:",o:["Possible","Impossible","Always one-one","Always constant"],a:1,e:"Four inputs cannot cover six distinct codomain elements."},
{level:"Intermediate",q:"If |A|=6 and |B|=4, an onto function A→B can exist. Its range size is:",o:["2","3","4","6"],a:2,e:"Onto requires the range to contain all 4 codomain elements."},

{level:"Advanced",q:"Let f:R→R be f(x)=x²+2x+5. Its range is:",o:["[4,∞)","[5,∞)","R","(4,∞)"],a:0,e:"Complete the square: (x+1)²+4, so the minimum is 4."},
{level:"Advanced",q:"For f:R→[4,∞), f(x)=x²+2x+5, f is:",o:["Onto","Not onto","Constant","One-one"],a:0,e:"Its range is exactly [4,∞)."},
{level:"Advanced",q:"If f:A→B has range with 5 elements and codomain with 8 elements, how many codomain elements are definitely not attained?",o:["3","5","8","13"],a:0,e:"8−5=3 codomain elements are outside the range."},

{level:"Master",q:"Let f:R→R be f(x)=x²−6x+11. Its range is:",o:["[2,∞)","[11,∞)","R","(2,∞)"],a:0,e:"f(x)=(x−3)²+2, so the minimum is 2."},
{level:"Master",q:"Suppose f:A→B is onto with |A|=7 and |B|=4. What is the exact number of elements of A that are not forced to have distinct images?",o:["3","4","7","Cannot be determined exactly"],a:0,e:"An onto map needs at least one preimage for each of 4 codomain elements; the remaining 3 domain elements must repeat some images."}
];