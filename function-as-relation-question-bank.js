/* SkillUp Mathematics — Function as a Relation | Basic → Master */
window.SkillUpFunctionAsRelationQuestions=[
{level:"Basic",q:"A function from A to B is a relation in which:",o:["Every element of A is related to exactly one element of B","Every element of B is related to exactly one element of A","Every element has two images","No element of A has an image"],a:0,e:"A function assigns exactly one output in B to every input in A."},
{level:"Basic",q:"Every function is a:",o:["Set only","Relation","Universal set","Cartesian product"],a:1,e:"A function is a special type of relation."},
{level:"Basic",q:"If f:A→B is a function, then its relation is a subset of:",o:["A∪B","A×B","B×A only","A∩B"],a:1,e:"The graph of f is a subset of A×B."},
{level:"Basic",q:"In a function, one input can have:",o:["No output","Exactly one output","Exactly two outputs","Any number of outputs"],a:1,e:"The defining condition is exactly one output for every input."},
{level:"Basic",q:"Can two different inputs have the same output in a function?",o:["No, never","Yes","Only for identity functions","Only for finite sets"],a:1,e:"Many inputs may map to the same output; such a function is many-one."},
{level:"Basic",q:"If f(2)=5, which ordered pair belongs to the graph of f?",o:["(5,2)","(2,5)","(2,2)","(5,5)"],a:1,e:"The graph contains (input, output), so (2,5)."},
{level:"Basic",q:"If f:A→B is a function, the first coordinates of its graph contain:",o:["Every element of A","Every element of B","Only elements outside A","No elements"],a:0,e:"Every input in A must have exactly one image."},
{level:"Basic",q:"If R={(1,a),(2,b),(3,b)}, is R a function from {1,2,3} to {a,b}?",o:["Yes","No","Only if a=b","Only if b=0"],a:0,e:"Each domain element appears exactly once as a first coordinate."},
{level:"Basic",q:"Is R={(1,a),(1,b),(2,c)} a function from {1,2} to {a,b,c}?",o:["Yes","No","Only if a=b","Only if c=a"],a:1,e:"Input 1 has two different outputs, so it is not a function."},
{level:"Basic",q:"The graph of a function cannot contain:",o:["Two pairs with different first coordinates","Two pairs with the same first coordinate and different second coordinates","A pair (a,b)","A repeated identical pair"],a:1,e:"A single input cannot have two distinct outputs."},

{level:"Developing",q:"Let A={1,2,3} and B={a,b}. Which relation is a function A→B?",o:["{(1,a),(2,b),(3,a)}","{(1,a),(1,b),(2,a)}","{(1,a),(2,b)}","{(1,a),(2,b),(3,a),(3,b)}"],a:0,e:"Each element 1,2,3 appears exactly once as a first coordinate."},
{level:"Developing",q:"How many functions are there from a 2-element set A to a 3-element set B?",o:["5","6","8","9"],a:3,e:"Each of the 2 inputs has 3 choices, giving 3²=9."},
{level:"Developing",q:"How many functions are there from a 3-element set A to a 2-element set B?",o:["6","8","9","12"],a:1,e:"Each of 3 inputs has 2 choices, giving 2³=8."},
{level:"Developing",q:"If f:A→B and |A|=4, |B|=3, the number of possible functions is:",o:["7","12","64","81"],a:3,e:"There are 3 choices for each of 4 inputs: 3⁴=81."},
{level:"Developing",q:"If f(x)=2x+1, then f(3) is:",o:["5","6","7","8"],a:2,e:"f(3)=2(3)+1=7."},
{level:"Developing",q:"If f(x)=x²−1, then f(4) is:",o:["12","15","16","17"],a:1,e:"f(4)=16−1=15."},
{level:"Developing",q:"If f(x)=3x−2 and f(x)=10, then x is:",o:["3","4","5","6"],a:1,e:"3x−2=10 gives x=4."},
{level:"Developing",q:"If f(x)=x+5 and f(a)=12, then a is:",o:["5","7","12","17"],a:1,e:"a+5=12, so a=7."},
{level:"Developing",q:"If f(1)=2 and f(2)=2, what type of behavior does this demonstrate?",o:["Two inputs sharing one output","One input having two outputs","No function","No domain"],a:0,e:"Different inputs may share the same output in a valid function."},
{level:"Developing",q:"If f:A→B is a function and |A|=5, what is the number of ordered pairs in its graph?",o:["3","4","5","At least 5"],a:2,e:"Every one of the 5 domain elements contributes exactly one ordered pair."},

{level:"Intermediate",q:"Let A={1,2,3} and B={4,5,6}. How many functions A→B have f(1)=4?",o:["3","6","9","27"],a:2,e:"The value at 1 is fixed; 2 and 3 each have 3 choices, giving 3²=9."},
{level:"Intermediate",q:"How many functions from a 3-element set to a 4-element set have exactly one specified input mapped to a specified output?",o:["4","8","16","64"],a:2,e:"One input is fixed; the other two have 4 choices each, giving 4²=16."},
{level:"Intermediate",q:"Let f:{1,2,3}→{a,b,c}. If f(1)=a, f(2)=a and f(3)=b, then the range is:",o:["{a}","{a,b}","{a,b,c}","{b,c}"],a:1,e:"The outputs actually attained are a and b."},
{level:"Intermediate",q:"If f:A→B is a function with |A|=4 and |B|=2, can its range contain 4 elements?",o:["Yes","No","Only if f is one-one","Only if A=B"],a:1,e:"The range is a subset of B, so it can contain at most 2 elements."},
{level:"Intermediate",q:"If f:A→B is a function and two different elements of A have the same image, then f is:",o:["One-one","Many-one","Not a function","Onto necessarily"],a:1,e:"A many-one function maps multiple inputs to one output."},

{level:"Advanced",q:"Let A={1,2,3,4} and B={a,b,c}. How many functions A→B use exactly two distinct values in their range?",o:["18","24","36","42"],a:3,e:"Choose 2 outputs from 3 and count onto maps to them: 3×(2⁴−2)=42."},
{level:"Advanced",q:"How many functions from a 4-element set to a 3-element set are not constant?",o:["3","27","78","81"],a:2,e:"Total functions=3⁴=81; constant functions=3; nonconstant=78."},
{level:"Advanced",q:"If f:A→B has |A|=3 and |B|=3 and f is one-one, how many possible functions f are there?",o:["3","6","9","27"],a:1,e:"A one-one function between equal 3-element sets is a permutation: 3!=6."},

{level:"Master",q:"How many functions from a 5-element set to a 3-element set have range containing exactly two elements?",o:["90","120","150","180"],a:0,e:"Choose 2 outputs and count onto maps: 3×(2⁵−2)=90."},
{level:"Master",q:"How many functions f:{1,2,3,4}→{a,b,c} have range equal to {a,b,c}?",o:["24","36","48","81"],a:1,e:"By inclusion-exclusion, onto functions=81−3(16)+3=36."}
];