/* SkillUp Mathematics question bank — starter set */
window.SkillUpMathematicsQuestions = [
{q:"If A={1,2,3} and B={3,4,5}, how many elements are in A∪B?",o:["3","4","5","6"],a:2,e:"A∪B has the five elements 1,2,3,4,5."},
{q:"If f(x)=2x+3, what is f(4)?",o:["8","10","11","12"],a:2,e:"Substitution gives 2(4)+3=11."},
{q:"What is sin²θ+cos²θ for every real θ?",o:["0","1","sin θ","cos θ"],a:1,e:"The fundamental identity gives sin²θ+cos²θ=1."},
{q:"Solve 2x+5=17.",o:["5","6","7","8"],a:1,e:"Subtracting 5 gives 2x=12, hence x=6."},
{q:"What is the discriminant of x²−6x+5=0?",o:["4","16","25","36"],a:1,e:"b²−4ac=36−20=16."},
{q:"The 5th term of 3,7,11,… is:",o:["15","17","19","21"],a:2,e:"The common difference is 4, so a₅=3+4×4=19."},
{q:"The distance between (0,0) and (3,4) is:",o:["3","4","5","7"],a:2,e:"The distance is √(3²+4²)=5."},
{q:"The slope of y=3x−7 is:",o:["−7","−3","3","7"],a:2,e:"In y=mx+c, the slope is m=3."},
{q:"The centre of x²+y²−4x+6y−12=0 is:",o:["(2,−3)","(−2,3)","(4,−6)","(−4,6)"],a:0,e:"Completing squares gives (x−2)²+(y+3)²=25."},
{q:"lim(x→2) (x²−4)/(x−2) equals:",o:["2","3","4","5"],a:2,e:"Factor to x+2 after cancellation, giving 4."},
{q:"The derivative of x³ is:",o:["x²","2x²","3x²","3x"],a:2,e:"The power rule gives 3x²."},
{q:"If f'(x)>0 throughout an interval, f is:",o:["decreasing","constant","increasing","periodic"],a:2,e:"A positive derivative indicates increasing behaviour."},
{q:"∫2x dx equals:",o:["x²+C","2x²+C","x²/2+C","2+C"],a:0,e:"An antiderivative of 2x is x²+C."},
{q:"∫₀¹ x dx equals:",o:["1/4","1/2","1","2"],a:1,e:"Evaluating x²/2 from 0 to 1 gives 1/2."},
{q:"If P(A)=0.4 and P(B)=0.5 for independent events, P(A∩B) is:",o:["0.1","0.2","0.4","0.9"],a:1,e:"Independence gives P(A∩B)=0.4×0.5=0.2."},
{q:"The mean of 2,4,6,8 is:",o:["4","5","6","7"],a:1,e:"The sum is 20 and 20/4=5."},
{q:"The dot product of (1,2,3) and (2,0,1) is:",o:["3","5","7","9"],a:1,e:"1×2+2×0+3×1=5."},
{q:"A vector with magnitude 1 is called a:",o:["zero vector","unit vector","position vector","parallel vector"],a:1,e:"A unit vector has magnitude exactly 1."},
{q:"The determinant of [[2,1],[3,4]] is:",o:["3","5","6","8"],a:1,e:"The determinant is 2×4−1×3=5."},
{q:"A square matrix with determinant zero is:",o:["identity","orthogonal","singular","diagonal"],a:2,e:"A zero determinant means the square matrix is singular."},
{q:"Which expression is logically equivalent to p→q?",o:["p∧q","¬p∨q","p∨¬q","¬p∧q"],a:1,e:"An implication p→q is equivalent to ¬p∨q."},
{q:"For positive a and b, AM-GM gives:",o:["(a+b)/2 ≥ √ab","(a+b)/2 ≤ √ab","a+b=√ab","a−b≥√ab"],a:0,e:"For positive a and b, arithmetic mean is at least geometric mean."},
{q:"The solution of |x|=5 is:",o:["x=5 only","x=−5 only","x=±5","x=0"],a:2,e:"Both 5 and −5 have absolute value 5."},
{q:"If 2ˣ=16, x is:",o:["2","3","4","8"],a:2,e:"Since 16=2⁴, x=4."},
{q:"log₁₀(1000) equals:",o:["1","2","3","10"],a:2,e:"10³=1000, so the logarithm is 3."},
{q:"The number of subsets of a 4-element set is:",o:["4","8","12","16"],a:3,e:"A set with 4 elements has 2⁴=16 subsets."},
{q:"If tan θ=1 and θ is acute, θ equals:",o:["30°","45°","60°","90°"],a:1,e:"tan 45°=1 and 45° is acute."},
{q:"The probability of an even result on one fair die roll is:",o:["1/6","1/3","1/2","2/3"],a:2,e:"There are three even outcomes among six, so the probability is 1/2."},
{q:"The equation of the x-axis is:",o:["x=0","y=0","x=y","y=1"],a:1,e:"Every point on the x-axis has y-coordinate zero."},
{q:"If two nonzero vectors have dot product zero, they are:",o:["parallel","equal","perpendicular","opposite"],a:2,e:"Nonzero vectors with zero dot product are perpendicular."}
,{q:"If A={1,2,3,4}, how many proper subsets does A have?",o:["8","12","15","16"],a:2,e:"There are 2⁴=16 subsets including A itself, so 15 are proper subsets."}
,{q:"If f(x)=x²−1, then f(−3) is:",o:["−10","−8","8","10"],a:2,e:"f(−3)=9−1=8."}
,{q:"The principal value of sin⁻¹(1) is:",o:["0","π/4","π/2","π"],a:2,e:"The principal value of sin⁻¹(1) is π/2."}
,{q:"The roots of x²−5x+6=0 are:",o:["1,6","2,3","−2,−3","−1,−6"],a:1,e:"The equation factors as (x−2)(x−3)=0."}
,{q:"The sum of the first 10 positive integers is:",o:["45","50","55","60"],a:2,e:"10×11/2=55."}
,{q:"The common ratio of 2,6,18,54,… is:",o:["2","3","4","6"],a:1,e:"Each term is three times the preceding term."}
,{q:"The equation x²+y²=25 represents a circle with radius:",o:["3","4","5","25"],a:2,e:"Comparing with x²+y²=r² gives r=5."}
,{q:"The midpoint of (2,4) and (6,8) is:",o:["(3,5)","(4,6)","(5,7)","(8,12)"],a:1,e:"The midpoint is ((2+6)/2,(4+8)/2)=(4,6)."}
,{q:"The limit lim(x→0) sin x/x is:",o:["0","1","∞","does not exist"],a:1,e:"The standard trigonometric limit is 1."}
,{q:"The derivative of sin x is:",o:["−sin x","cos x","tan x","sec²x"],a:1,e:"d(sin x)/dx=cos x."}
,{q:"The derivative of ln x for x>0 is:",o:["x","1/x","ln x","eˣ"],a:1,e:"The derivative of ln x is 1/x."}
,{q:"A function continuous on [a,b] and differentiable on (a,b) satisfies Rolle's theorem when:",o:["f(a)=f(b)","f(a)>f(b)","f'(a)=f'(b)","a=b"],a:0,e:"Rolle's theorem requires equal endpoint values in addition to its continuity and differentiability conditions."}
,{q:"∫₀² 2x dx equals:",o:["2","4","6","8"],a:1,e:"The antiderivative is x², giving 4−0=4."}
,{q:"If F'(x)=f(x), then ∫ₐᵇ f(x)dx equals:",o:["F(a)+F(b)","F(b)−F(a)","F(a)−F(b)","F(a)F(b)"],a:1,e:"The fundamental theorem gives F(b)−F(a)."}
,{q:"If P(A)=0.3, then P(Aᶜ) is:",o:["0.3","0.5","0.7","1.3"],a:2,e:"Complementary probability is 1−0.3=0.7."}
,{q:"Two events with P(A∩B)=P(A)P(B) are:",o:["mutually exclusive","independent","exhaustive","complementary"],a:1,e:"That equality is the defining probability condition for independence."}
,{q:"The variance of the constant data set 5,5,5 is:",o:["0","1","5","25"],a:0,e:"Every value equals the mean, so every deviation is zero and the variance is zero."}
,{q:"The cross product of two parallel vectors is:",o:["a unit vector","zero vector","a scalar 1","undefined"],a:1,e:"Parallel vectors have angle 0 or π, so their cross product has magnitude zero."}
,{q:"The magnitude of vector (3,4) is:",o:["3","4","5","7"],a:2,e:"Magnitude is √(3²+4²)=5."}
,{q:"The determinant of [[1,2],[3,4]] is:",o:["−2","−1","2","10"],a:0,e:"The determinant is 1×4−2×3=−2."}
,{q:"The identity matrix of order 2 is:",o:["[[0,1],[1,0]]","[[1,0],[0,1]]","[[1,1],[0,1]]","[[0,0],[0,0]]"],a:1,e:"The identity matrix has ones on the main diagonal and zeros elsewhere."}
,{q:"If a matrix is invertible, its determinant is:",o:["always zero","nonzero","always one","negative"],a:1,e:"A square matrix is invertible only when its determinant is nonzero."}
,{q:"The negation of p∧q is:",o:["¬p∧¬q","¬p∨¬q","p∨q","p→q"],a:1,e:"De Morgan's law gives ¬(p∧q)=¬p∨¬q."}
,{q:"The statement p∨¬p is a:",o:["contradiction","tautology","conditional","biconditional"],a:1,e:"A proposition or its negation is always true, so it is a tautology."}
,{q:"For positive x and y, which is always true?",o:["x+y<2√xy","x+y≥2√xy","x+y=2√xy for all x,y","x−y≥2√xy"],a:1,e:"AM-GM gives (x+y)/2≥√xy, hence x+y≥2√xy."}
,{q:"The solution set of x²<9 is:",o:["x<−3","x>3","−3<x<3","x≤−3 or x≥3"],a:2,e:"Numbers whose square is less than 9 lie strictly between −3 and 3."}
,{q:"If log₂x=5, x equals:",o:["10","16","25","32"],a:3,e:"The logarithmic equation means x=2⁵=32."}
,{q:"The value of 2sin30° is:",o:["0","1","2","√3"],a:1,e:"sin30°=1/2, so 2sin30°=1."}
,{q:"If a line has slope 2, a perpendicular line has slope:",o:["2","−2","1/2","−1/2"],a:3,e:"For nonvertical perpendicular lines, the product of slopes is −1."}
,{q:"The angle between two vectors with positive dot product can be:",o:["obtuse only","right only","acute","always 180°"],a:2,e:"A positive dot product corresponds to an acute angle between nonzero vectors."}
,{q:"For the matrix [[1,0],[0,1]], its square is:",o:["zero matrix","itself","twice itself","undefined"],a:1,e:"The identity matrix multiplied by itself remains the identity matrix."}
];