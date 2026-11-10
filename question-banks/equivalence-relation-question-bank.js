/* SkillUp Mathematics — Equivalence Relations | Basic → Master */
window.SkillUpEquivalenceRelationQuestions=[
{level:"Basic",q:"A relation R on a set A is reflexive if:",o:["aRb for every a,b","aRa for every a∈A","aRb implies bRa","aRb and bRc imply aRc"],a:1,e:"Reflexivity requires every element to be related to itself."},
{level:"Basic",q:"A relation R is symmetric if:",o:["aRa always","aRb implies bRa","aRb and bRc imply aRc","aRb implies a=b"],a:1,e:"Symmetry means reversing an ordered pair preserves the relation."},
{level:"Basic",q:"A relation R is transitive if:",o:["aRb implies bRa","aRa always","aRb and bRc imply aRc","aRb implies a=b"],a:2,e:"Transitivity connects a to c whenever a is related to b and b to c."},
{level:"Basic",q:"An equivalence relation must be:",o:["Reflexive only","Symmetric only","Transitive only","Reflexive, symmetric and transitive"],a:3,e:"All three properties are required."},
{level:"Basic",q:"The identity relation on A is always:",o:["An equivalence relation","Never reflexive","Never symmetric","Never transitive"],a:0,e:"The identity relation is reflexive, symmetric and transitive."},
{level:"Basic",q:"On integers, the relation xRy iff x=y is:",o:["Reflexive only","An equivalence relation","Symmetric only","Not transitive"],a:1,e:"Equality has all three equivalence properties."},
{level:"Basic",q:"On integers, xRy iff x−y is divisible by 2 is:",o:["An equivalence relation","Only symmetric","Only transitive","Not reflexive"],a:0,e:"Congruence modulo 2 is reflexive, symmetric and transitive."},
{level:"Basic",q:"If a relation is not reflexive, it can be an equivalence relation:",o:["Yes","No","Only on finite sets","Only on integers"],a:1,e:"Reflexivity is mandatory."},
{level:"Basic",q:"If a relation is symmetric and transitive but not reflexive, it is:",o:["Always an equivalence relation","Not an equivalence relation","Always universal","Always identity"],a:1,e:"All three properties are necessary."},
{level:"Basic",q:"Equivalence classes arise naturally from:",o:["Equivalence relations","Empty relations only","Universal sets only","Cartesian products only"],a:0,e:"An equivalence relation partitions a set into equivalence classes."},

{level:"Developing",q:"On A={1,2,3}, R={(1,1),(2,2),(3,3)} is:",o:["Only symmetric","Only transitive","An equivalence relation","Not reflexive"],a:2,e:"It is the identity relation, so it has all three properties."},
{level:"Developing",q:"On A={1,2,3}, R=A×A is:",o:["An equivalence relation","Not reflexive","Not symmetric","Not transitive"],a:0,e:"The universal relation is reflexive, symmetric and transitive."},
{level:"Developing",q:"On A={1,2,3}, R={(1,1),(2,2),(3,3),(1,2),(2,1)} is:",o:["An equivalence relation","Not symmetric","Not reflexive","Not transitive"],a:0,e:"It separates {1,2} and {3} into equivalence classes."},
{level:"Developing",q:"For an equivalence relation, if aRb, then which must hold?",o:["bRa","a≠b","aRb is false","b is outside A"],a:0,e:"Symmetry gives bRa."},
{level:"Developing",q:"For an equivalence relation, if aRb and bRc, then:",o:["aRc","cRa only","a=b necessarily","aRc is false"],a:0,e:"Transitivity gives aRc."},
{level:"Developing",q:"For an equivalence relation, if aRb, then the equivalence classes [a] and [b] are:",o:["Disjoint","Equal","Always empty","Different"],a:1,e:"Related elements have identical equivalence classes."},
{level:"Developing",q:"If a relation partitions A into disjoint classes, the relation defined by belonging to the same class is:",o:["An equivalence relation","Never transitive","Never symmetric","Empty"],a:0,e:"Same-class membership defines a reflexive, symmetric and transitive relation."},
{level:"Developing",q:"On integers, xRy iff x−y is divisible by 3. The equivalence class of 1 is:",o:["All even integers","Integers congruent to 1 modulo 3","Multiples of 3 only","Positive integers"],a:1,e:"[1] consists of integers of the form 3k+1."},
{level:"Developing",q:"On integers, xRy iff x−y is divisible by 4. The equivalence class of 0 is:",o:["Odd integers","Integers divisible by 4","Integers congruent to 1 mod 4","All integers"],a:1,e:"[0] consists of multiples of 4."},
{level:"Developing",q:"The equivalence classes of an equivalence relation form a:",o:["Random collection","Partition of the set","Single universal pair","Cartesian product"],a:1,e:"Equivalence classes are nonempty, pairwise disjoint and cover the set."},

{level:"Intermediate",q:"On A={1,2,3,4}, define xRy iff x and y have the same parity. How many equivalence classes are there?",o:["1","2","3","4"],a:1,e:"The classes are {1,3} and {2,4}."},
{level:"Intermediate",q:"For the same relation on A={1,2,3,4}, the class of 3 is:",o:["{3}","{1,3}","{2,4}","{1,2,3}"],a:1,e:"3 is odd, so it shares its class with 1."},
{level:"Intermediate",q:"On A={1,2,3,4,5,6}, xRy iff x≡y (mod 3). How many equivalence classes occur?",o:["2","3","4","6"],a:1,e:"The classes are residues 0, 1 and 2 modulo 3."},
{level:"Intermediate",q:"On A={1,2,3,4,5,6}, under congruence modulo 3, [2] is:",o:["{1,4}","{2,5}","{3,6}","{2,3,5,6}"],a:1,e:"Elements congruent to 2 modulo 3 are 2 and 5."},
{level:"Intermediate",q:"If an equivalence relation on a finite set has 4 equivalence classes, can one element belong to two different classes?",o:["Yes, always","No","Only if classes are equal","Only for infinite sets"],a:1,e:"Distinct equivalence classes are disjoint."},

{level:"Advanced",q:"How many equivalence relations are there on a 3-element set?",o:["3","4","5","6"],a:2,e:"Equivalence relations correspond to partitions; a 3-element set has 5 partitions."},
{level:"Advanced",q:"On A={1,2,3,4}, let R have equivalence classes {1,2} and {3,4}. How many ordered pairs belong to R?",o:["4","6","8","10"],a:2,e:"Each class of size 2 contributes 2²=4 ordered pairs, total 8."},
{level:"Advanced",q:"An equivalence relation on a 5-element set has classes of sizes 2 and 3. How many ordered pairs belong to the relation?",o:["10","13","14","15"],a:1,e:"A class of size m contributes m² pairs: 2²+3²=4+9=13."},

{level:"Master",q:"An equivalence relation on a 7-element set has equivalence-class sizes 1,2 and 4. How many ordered pairs are in the relation?",o:["17","21","23","25"],a:1,e:"The relation contains 1²+2²+4²=21 pairs."},
{level:"Master",q:"An equivalence relation on a 6-element set has exactly 3 classes, and every class has the same size. How many ordered pairs are in the relation?",o:["6","8","12","18"],a:2,e:"Three equal classes have size 2. The relation contains 3×2²=12 ordered pairs."}
];