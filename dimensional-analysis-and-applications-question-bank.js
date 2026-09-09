(function(){
const questions=[
{q:'Dimensional analysis is primarily based on the principle of:',o:['Conservation of dimensions','Principle of homogeneity','Conservation of energy','Newton’s first law'],a:1,e:'Every term added or equated in a physical equation must have the same dimensions.'},
{q:'Which equation is dimensionally homogeneous?',o:['s=ut+at²','s=ut+(1/2)at²','v=u+at','Both B and C'],a:3,e:'Both s=ut+(1/2)at² and v=u+at are dimensionally consistent.'},
{q:'Dimensional analysis can help to:',o:['Check an equation','Derive relations among quantities','Convert units','All of these'],a:3,e:'These are standard applications of dimensional analysis.'},
{q:'Dimensional analysis cannot determine:',o:['Dimensions','Unit conversion','Dimensionless numerical constants','Dimensional consistency'],a:2,e:'Pure numerical constants such as 2 or π cannot be obtained.'},
{q:'If y=At², the dimensions of A are:',o:['[L]','[LT⁻¹]','[LT⁻²]','[L²T⁻²]'],a:2,e:'A=y/t², so [A]=[LT⁻²].'},
{q:'If F=Av², the dimensions of A are:',o:['[ML⁻¹]','[ML]','[ML⁻²]','[M⁻¹L]'],a:0,e:'A=F/v²=[MLT⁻²]/[L²T⁻²]=[ML⁻¹].'},
{q:'If E=Ax², the dimensions of A are:',o:['[MT⁻²]','[MLT⁻²]','[ML²T⁻²]','[ML⁻¹T⁻²]'],a:0,e:'A=E/x²=[ML²T⁻²]/L²=[MT⁻²].'},
{q:'If v=A√x, the dimensions of A are:',o:['[L^1/2T⁻1]','[L⁻1/2T⁻1]','[LT⁻1]','[T⁻1]'],a:0,e:'A=v/√x=[LT⁻¹]/L^1/2=[L^1/2T⁻¹].'},
{q:'Which quantity can be added to length?',o:['Area','Velocity','Another length','Force'],a:2,e:'Only quantities with identical dimensions can be added.'},
{q:'If x=a+bt+ct², dimensions of a are:',o:['[L]','[LT⁻¹]','[LT⁻²]','dimensionless'],a:0,e:'Every term must have dimensions of x, so a has [L].'},
{q:'For x=a+bt+ct², dimensions of b are:',o:['[L]','[LT⁻¹]','[LT⁻²]','[T⁻¹]'],a:1,e:'bt has dimensions L, hence b=[LT⁻¹].'},
{q:'For x=a+bt+ct², dimensions of c are:',o:['[L]','[LT⁻¹]','[LT⁻²]','[L²T⁻²]'],a:2,e:'ct² has dimensions L, hence c=[LT⁻²].'},
{q:'Which expression is dimensionally invalid?',o:['v²=u²+2as','s=ut+(1/2)at²','F=ma','v=u+at²'],a:3,e:'at² has dimensions of length, not velocity.'},
{q:'If T=2π√(l/g), the dimensions of l/g are:',o:['[T]','[T²]','[LT⁻¹]','dimensionless'],a:1,e:'l/g=[L]/[LT⁻²]=[T²].'},
{q:'Dimensional analysis can convert:',o:['km to m','joule to erg','newton to dyne','All of these'],a:3,e:'Equivalent unit systems can be related using dimensions.'},
{q:'Which pair cannot be added?',o:['Energy and work','Pressure and pressure','Velocity and acceleration','Momentum and impulse'],a:2,e:'Velocity [LT⁻¹] and acceleration [LT⁻²] have different dimensions.'},
{q:'The dimensions of the constant in E=mc² are:',o:['[1]','[LT⁻¹]','[LT⁻²]','[ML²T⁻²]'],a:1,e:'Since E/m has dimensions L²T⁻², c has dimensions LT⁻¹.'},
{q:'If P=Aρv³, dimensions of A are:',o:['dimensionless','[L]','[T]','[ML⁻1]'],a:0,e:'ρv³ has [ML⁻3][L³T⁻3]=[MT⁻3], the same as power per volume relation gives A dimensionless.'},
{q:'A dimensionless quantity may be:',o:['A pure number','An angle in radians','A ratio of similar quantities','All of these'],a:3,e:'All can be dimensionless.'},
{q:'Which constant is dimensionless?',o:['Gravitational constant G','Planck constant h','Coefficient of friction','Boltzmann constant'],a:2,e:'Coefficient of friction is a ratio of frictional force to normal force.'},
{q:'If Q=Av, where Q has dimensions volume/time, dimensions of A are:',o:['[L²]','[L³]','[LT⁻¹]','[L²T⁻¹]'],a:0,e:'A=Q/v=[L³T⁻¹]/[LT⁻¹]=[L²].'},
{q:'If z=x/y, x and y have the same dimensions. Then z is:',o:['A length','A force','Dimensionless','A time'],a:2,e:'A ratio of identical dimensions is dimensionless.'},
{q:'Which statement is true?',o:['Dimensionally correct equations are always physically correct','Dimensional consistency is necessary but not sufficient','Dimensions determine numerical constants','Dimensions replace experiments'],a:1,e:'An equation can be dimensionally consistent yet physically incorrect.'},
{q:'The dimensional method is least useful when a relation contains:',o:['Only variables','Unknown numerical constants','Different physical quantities','Powers of variables'],a:1,e:'Numerical dimensionless constants cannot generally be determined.'},
{q:'If momentum p=At+B, dimensions of A are:',o:['[MLT⁻²]','[MLT⁻¹]','[ML²T⁻²]','[MT⁻¹]'],a:0,e:'A=p/t=[MLT⁻¹]/T=[MLT⁻²].'},
{q:'In p=At+B, dimensions of B are:',o:['[MLT⁻¹]','[MLT⁻²]','[ML²T⁻²]','dimensionless'],a:0,e:'B is added to momentum, so it has momentum dimensions.'},
{q:'If v=A/t+B, dimensions of A are:',o:['[L]','[LT⁻¹]','[LT]','[T⁻¹]'],a:2,e:'A/t must have velocity dimensions, so A=[LT⁻¹]×[T]=[L].'},
{q:'A useful check on any physical equation is that both sides have:',o:['Same numerical value only','Same dimensions','Same units only','Same number of terms'],a:1,e:'Dimensional homogeneity requires matching dimensions.'},
{q:'Which operation is not generally meaningful between quantities of different dimensions?',o:['Addition','Subtraction','Equality','All of these'],a:3,e:'Addition, subtraction and equality require compatible dimensions.'},
{q:'The dimensional approach is especially useful for detecting:',o:['Missing numerical constants','Wrong powers or dimensions','Experimental random errors','Instrument zero error'],a:1,e:'Dimensional checks readily expose incorrect dimensions or powers.'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};window.SkillUpMCQBanks['dimensional analysis and applications']=questions;
if(window.SKILLUP_UNIFIED_MCQ)return;
})();