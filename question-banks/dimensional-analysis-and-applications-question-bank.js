(function(){
const questions=[
{q:'Dimensional analysis is primarily based on the principle of:',o:['Conservation of dimensions','Principle of homogeneity','Conservation of energy','Newton’s first law'],a:1,e:'Every term added or equated in a physical equation must have the same dimensions.'},
{q:'Which equation is dimensionally homogeneous?',o:['s=ut+at²','s=ut+(1/2)at²','v=u+at','Both B and C'],a:3,e:'Both s=ut+(1/2)at² and v=u+at are dimensionally homogeneous.'},
{q:'Dimensional analysis can be used to:',o:['Check dimensional consistency','Derive relations among physical quantities','Convert between compatible unit systems','All of these'],a:3,e:'Dimensional analysis has all three uses listed.'},
{q:'Dimensional analysis cannot determine:',o:['Dimensions of a quantity','Unit relationships','Dimensionless numerical constants','Dimensional consistency'],a:2,e:'Pure numerical constants such as 2 or π cannot generally be obtained by dimensional analysis.'},
{q:'If y=At², the dimensions of A are:',o:['[L]','[LT⁻¹]','[LT⁻²]','[L²T⁻²]'],a:2,e:'A=y/t², so [A]=[LT⁻²].'},
{q:'If F=Av², the dimensions of A are:',o:['[ML⁻¹]','[ML]','[ML⁻²]','[M⁻¹L]'],a:0,e:'A=F/v²=[MLT⁻²]/[L²T⁻²]=[ML⁻¹].'},
{q:'If E=Ax², the dimensions of A are:',o:['[MT⁻²]','[MLT⁻²]','[ML²T⁻²]','[ML⁻¹T⁻²]'],a:0,e:'A=E/x²=[ML²T⁻²]/L²=[MT⁻²].'},
{q:'If v=A√x, the dimensions of A are:',o:['[L^1/2T⁻¹]','[L⁻1/2T⁻¹]','[LT⁻¹]','[T⁻¹]'],a:0,e:'A=v/√x=[LT⁻¹]/L^1/2=[L^1/2T⁻¹].'},
{q:'Which quantity can be added to a length?',o:['Area','Velocity','Another length','Force'],a:2,e:'Addition requires identical dimensions, so another length can be added.'},
{q:'If x=a+bt+ct², the dimensions of a are:',o:['[L]','[LT⁻¹]','[LT⁻²]','dimensionless'],a:0,e:'Each term must have dimensions of x, so [a]=[L].'},
{q:'For x=a+bt+ct², the dimensions of b are:',o:['[L]','[LT⁻¹]','[LT⁻²]','[T⁻¹]'],a:1,e:'bt has dimensions L, hence [b]=[LT⁻¹].'},
{q:'For x=a+bt+ct², the dimensions of c are:',o:['[L]','[LT⁻¹]','[LT⁻²]','[L²T⁻²]'],a:2,e:'ct² has dimensions L, hence [c]=[LT⁻²].'},
{q:'Which expression is dimensionally invalid?',o:['v²=u²+2as','s=ut+(1/2)at²','F=ma','v=u+at²'],a:3,e:'at² has dimensions of length, whereas v and u have dimensions of velocity.'},
{q:'If T=2π√(l/g), the dimensions of l/g are:',o:['[T]','[T²]','[LT⁻¹]','dimensionless'],a:1,e:'l/g=[L]/[LT⁻²]=[T²].'},
{q:'Dimensional analysis can be used to relate:',o:['km and m','joule and erg','newton and dyne','All of these'],a:3,e:'Dimensional relationships allow conversion between compatible unit systems.'},
{q:'Which pair cannot be added?',o:['Energy and work','Pressure and pressure','Velocity and acceleration','Momentum and impulse'],a:2,e:'Velocity has dimensions [LT⁻¹], while acceleration has [LT⁻²].'},
{q:'The dimensions of c in E=mc² are:',o:['[1]','[LT⁻¹]','[LT⁻²]','[ML²T⁻²]'],a:1,e:'c²=E/m has dimensions [L²T⁻²], so c=[LT⁻¹].'},
{q:'If P=Aρv³, where P is power, the dimensions of A are:',o:['[L²]','[L]','[T]','[ML⁻¹]'],a:0,e:'[P]=[ML²T⁻³] and [ρv³]=[ML⁻³][L³T⁻³]=[MT⁻³], so [A]=[L²].'},
{q:'Which of the following is dimensionless?',o:['Gravitational constant G','Planck constant h','Coefficient of friction','Boltzmann constant'],a:2,e:'Coefficient of friction is a ratio of frictional force to normal force, so it is dimensionless.'},
{q:'If Q=Av and Q has dimensions of volume/time, the dimensions of A are:',o:['[L²]','[L³]','[LT⁻¹]','[L²T⁻¹]'],a:0,e:'A=Q/v=[L³T⁻¹]/[LT⁻¹]=[L²].'},
{q:'If z=x/y and x and y have the same dimensions, z is:',o:['A length','A force','Dimensionless','A time'],a:2,e:'The ratio of two quantities with identical dimensions is dimensionless.'},
{q:'Which statement about dimensional consistency is correct?',o:['It guarantees physical correctness','It is necessary but not sufficient for physical correctness','It determines all numerical constants','It replaces experimental verification'],a:1,e:'A physically valid equation must be dimensionally consistent, but dimensional consistency alone cannot prove the equation is physically correct.'},
{q:'Dimensional analysis is least useful for finding:',o:['Dimensions of variables','Relations between units','Dimensionless numerical constants','Dimensional consistency'],a:2,e:'Dimensionless constants such as 2 or π are not fixed by dimensions alone.'},
{q:'If momentum p=At+B, the dimensions of A are:',o:['[MLT⁻²]','[MLT⁻¹]','[ML²T⁻²]','[MT⁻¹]'],a:0,e:'A=p/t=[MLT⁻¹]/T=[MLT⁻²].'},
{q:'In p=At+B, the dimensions of B are:',o:['[MLT⁻¹]','[MLT⁻²]','[ML²T⁻²]','dimensionless'],a:0,e:'B is added directly to momentum, so it must have dimensions [MLT⁻¹].'},
{q:'If v=A/t+B, the dimensions of A are:',o:['[L]','[LT⁻¹]','[LT]','[T⁻¹]'],a:0,e:'A/t has dimensions of velocity, so [A]=[LT⁻¹][T]=[L].'},
{q:'For a physically meaningful equation, terms connected by addition must have:',o:['Different dimensions','The same dimensions','Only the same numerical value','No units'],a:1,e:'The principle of homogeneity requires all added terms to have identical dimensions.'},
{q:'Which operation is not generally meaningful between quantities of different dimensions?',o:['Addition','Subtraction','Equality','All of these'],a:3,e:'Addition, subtraction and equality require compatible dimensions.'},
{q:'Dimensional analysis is especially effective for detecting:',o:['Wrong dimensions or powers','Random experimental error','Instrument zero error','Observer bias'],a:0,e:'Dimensional analysis can reveal incorrect dimensions or powers in a proposed relation.'},
{q:'If a quantity X has dimensions [M L² T⁻²], which physical quantity has the same dimensions?',o:['Force','Energy','Power','Pressure'],a:1,e:'Energy and work have dimensions [ML²T⁻²].'},
{q:'If v=√(P/ρ), where P is pressure and ρ is density, the dimensions of v are:',o:['[LT⁻¹]','[L²T⁻¹]','[LT⁻²]','[MLT⁻¹]'],a:0,e:'P/ρ=[ML⁻¹T⁻²]/[ML⁻³]=[L²T⁻²], whose square root is [LT⁻¹].'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};window.SkillUpMCQBanks['dimensional analysis and applications']=questions;
const dedicated=window.SkillUpMCQBanks['dimensions of physical quantities'];
if(dedicated){const original=Object.getOwnPropertyDescriptor(window,'SkillUpPhysicsBanks');if(!original){Object.defineProperty(window,'SkillUpPhysicsBanks',{configurable:true,set(v){v['Dimensions of Physical Quantities']=dedicated;Object.defineProperty(window,'SkillUpPhysicsBanks',{value:v,writable:true,configurable:true,enumerable:true});},get(){return undefined;}});}}
if(window.SKILLUP_UNIFIED_MCQ)return;
})();