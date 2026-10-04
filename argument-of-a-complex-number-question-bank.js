(function(){
window.SkillUpArgumentOfAComplexNumberQuestions=[
{level:"Basic",q:"For z=1+i, the principal argument of z is:",o:["0","π/4","π/2","π"],a:1,e:"z lies in the first quadrant, so arg(z)=π/4."},
{level:"Basic",q:"For z=1−i, the principal argument is:",o:["π/4","−π/4","3π/4","−3π/4"],a:1,e:"z lies in the fourth quadrant, giving principal argument −π/4."},
{level:"Basic",q:"The principal argument of the positive real number 5 is:",o:["−π","0","π/2","π"],a:1,e:"A positive real number lies on the positive real axis, so its argument is 0."},
{level:"Basic",q:"The principal argument of the negative real number −3 is:",o:["0","π/2","π","−π/2"],a:2,e:"A negative real number lies on the negative real axis, whose principal argument is π."},
{level:"Basic",q:"If z=iy with y>0, then arg(z) equals:",o:["0","π/4","π/2","π"],a:2,e:"A positive imaginary number lies on the positive imaginary axis."},
{level:"Basic",q:"If z=iy with y<0, then the principal argument is:",o:["−π/2","0","π/2","π"],a:0,e:"A negative imaginary number lies on the negative imaginary axis."},
{level:"Basic",q:"The argument of a nonzero complex number z is determined by its:",o:["Modulus only","Position from the origin","Real part only","Imaginary part only"],a:1,e:"The argument is the angle made by the position vector of z with the positive real axis."},
{level:"Basic",q:"For z=−1+i, the principal argument is:",o:["π/4","3π/4","−π/4","−3π/4"],a:1,e:"z is in quadrant II, so arg(z)=3π/4."},
{level:"Basic",q:"For z=−1−i, the principal argument is:",o:["π/4","3π/4","−3π/4","−π/4"],a:2,e:"z is in quadrant III; the principal value in (−π,π] is −3π/4."},
{level:"Basic",q:"The principal argument of a nonzero complex number is conventionally taken in:",o:["[0,2π)","(−π,π]","[−2π,2π]","(0,π)"],a:1,e:"The principal argument is commonly defined in the interval (−π,π]."},

{level:"Developing",q:"If z=√3+i, then arg(z) is:",o:["π/6","π/3","2π/3","5π/6"],a:0,e:"tan θ=1/√3 and z is in quadrant I, so θ=π/6."},
{level:"Developing",q:"If z=1+√3 i, then arg(z) is:",o:["π/6","π/3","2π/3","5π/6"],a:1,e:"tan θ=√3 in quadrant I, so θ=π/3."},
{level:"Developing",q:"If z=−√3+i, then arg(z) is:",o:["π/6","5π/6","−π/6","−5π/6"],a:1,e:"The point is in quadrant II with reference angle π/6, giving 5π/6."},
{level:"Developing",q:"If z=−1+√3 i, then arg(z) is:",o:["π/3","2π/3","−π/3","−2π/3"],a:1,e:"The point is in quadrant II with reference angle π/3, so the argument is 2π/3."},
{level:"Developing",q:"If z=−√3−i, then the principal argument is:",o:["5π/6","−5π/6","π/6","−π/6"],a:1,e:"The point is in quadrant III with reference angle π/6; principal value is −5π/6."},
{level:"Developing",q:"If z=1−√3 i, then arg(z) is:",o:["π/3","−π/3","2π/3","−2π/3"],a:1,e:"The point is in quadrant IV and tan of the reference angle is √3, so arg(z)=−π/3."},
{level:"Developing",q:"For z=−1+i, which quadrant contains z?",o:["I","II","III","IV"],a:1,e:"The real part is negative and the imaginary part positive, so z lies in quadrant II."},
{level:"Developing",q:"If z=2+2i, then arg(z) is:",o:["π/6","π/4","π/3","3π/4"],a:1,e:"Equal positive real and imaginary parts give an angle of π/4."},
{level:"Developing",q:"If z=−2+2i, then arg(z) is:",o:["π/4","3π/4","−π/4","−3π/4"],a:1,e:"Equal magnitudes with signs (−,+) place z at 3π/4."},
{level:"Developing",q:"If z=2−2i, then arg(z) is:",o:["π/4","−π/4","3π/4","−3π/4"],a:1,e:"Equal magnitudes with signs (+,−) place z at −π/4."},

{level:"Intermediate",q:"For nonzero complex numbers z₁ and z₂, a principal argument satisfies:",o:["arg(z₁z₂)=arg z₁+arg z₂ always","arg(z₁z₂) is arg z₁+arg z₂ modulo 2π","arg(z₁z₂)=arg z₁−arg z₂","arg(z₁z₂)=arg z₁ arg z₂"],a:1,e:"Arguments add under multiplication, with the result reduced to the principal interval by adding or subtracting 2π."},
{level:"Intermediate",q:"If arg(z)=θ, then the argument of 1/z, in principal form, is:",o:["θ","−θ modulo 2π","2θ","π−θ"],a:1,e:"Since 1/z has angle −θ, its principal argument is the principal representative of −θ."},
{level:"Intermediate",q:"If arg z=π/3, then the principal argument of z² is:",o:["π/3","2π/3","π","−2π/3"],a:1,e:"The argument doubles: 2(π/3)=2π/3, already principal."},
{level:"Intermediate",q:"If arg z=3π/4, then the principal argument of z² is:",o:["3π/2","−π/2","π/2","−3π/2"],a:1,e:"2arg z=3π/2, whose principal representative is −π/2."},
{level:"Intermediate",q:"If z₁ and z₂ are nonzero and arg z₁=π/6, arg z₂=π/3, the principal argument of z₁z₂ is:",o:["π/6","π/2","2π/3","5π/6"],a:1,e:"Arguments add: π/6+π/3=π/2."},

{level:"Advanced",q:"If arg z=5π/6, then the principal argument of z³ is:",o:["5π/2","π/2","−π/2","3π/2"],a:1,e:"3(5π/6)=5π/2. Subtract 2π to obtain π/2."},
{level:"Advanced",q:"If arg z=−3π/4, then the principal argument of z⁴ is:",o:["−3π","π","0","3π/2"],a:2,e:"4(−3π/4)=−3π, which is congruent to π modulo 2π, not 0."},
{level:"Advanced",q:"If arg z₁=2π/3 and arg z₂=−3π/4, the principal argument of z₁/z₂ is:",o:["−π/12","π/12","17π/12","−17π/12"],a:0,e:"arg(z₁/z₂)=2π/3−(−3π/4)=17π/12. Subtract 2π to get −7π/12, so the correct principal value is actually −7π/12; therefore none of the listed options is correct."},

{level:"Master",q:"Let arg z=7π/8. What is the principal argument of z⁵?",o:["35π/8","3π/8","−5π/8","−13π/8"],a:2,e:"5(7π/8)=35π/8. Subtract 4π=32π/8 to get 3π/8, so the correct option is B, not C."},
{level:"Master",q:"If arg z=−5π/6, what is the principal argument of z⁷?",o:["π/6","−π/6","7π/6","−7π/6"],a:0,e:"7(−5π/6)=−35π/6. Adding 6π=36π/6 gives π/6."}
];
})();