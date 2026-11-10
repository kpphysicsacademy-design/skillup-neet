(function(){
const questions=[
{q:'The dimensional formula of velocity is:',o:['[LT^-1]','[LT^-2]','[MLT^-1]','[ML^0T]'],a:0,e:'Velocity = displacement/time = [LT^-1].'},
{q:'The dimensional formula of acceleration is:',o:['[LT^-1]','[LT^-2]','[MLT^-2]','[L^2T^-2]'],a:1,e:'Acceleration = change in velocity/time = [LT^-2].'},
{q:'The dimensional formula of force is:',o:['[MLT^-1]','[MLT^-2]','[ML^2T^-2]','[M^0LT^-2]'],a:1,e:'Force = mass × acceleration = [MLT^-2].'},
{q:'The dimensional formula of work is:',o:['[MLT^-2]','[ML^2T^-2]','[ML^2T^-3]','[ML^-1T^-2]'],a:1,e:'Work = force × displacement = [ML^2T^-2].'},
{q:'The dimensional formula of power is:',o:['[ML^2T^-2]','[MLT^-2]','[ML^2T^-3]','[MLT^-1]'],a:2,e:'Power = work/time = [ML^2T^-3].'},
{q:'The dimensional formula of pressure is:',o:['[ML^-1T^-2]','[MLT^-2]','[ML^2T^-2]','[ML^-2T^-2]'],a:0,e:'Pressure = force/area = [ML^-1T^-2].'},
{q:'The dimensional formula of momentum is:',o:['[MLT^-1]','[MLT^-2]','[ML^2T^-1]','[M^0LT^-1]'],a:0,e:'Momentum = mass × velocity.'},
{q:'The dimensional formula of impulse is:',o:['[MLT^-1]','[MLT^-2]','[ML^2T^-2]','[MT^-1]'],a:0,e:'Impulse = force × time = momentum.'},
{q:'The dimensional formula of density is:',o:['[ML^-3]','[ML^3]','[M^-1L^3]','[ML^-2]'],a:0,e:'Density = mass/volume.'},
{q:'The dimensional formula of frequency is:',o:['[T]','[T^-1]','[LT^-1]','[MLT^-1]'],a:1,e:'Frequency is reciprocal of time.'},
{q:'The dimensional formula of angular velocity is:',o:['[T^-1]','[LT^-1]','[LT^-2]','[MLT^-1]'],a:0,e:'Radian is dimensionless, so angular velocity has T^-1.'},
{q:'The dimensional formula of gravitational constant G is:',o:['[M^-1L^3T^-2]','[ML^3T^-2]','[M^-1L^2T^-2]','[ML^-2T^-2]'],a:0,e:'From F = Gm1m2/r^2, G = Fr^2/(m1m2).'},
{q:'The dimensional formula of Planck constant is:',o:['[ML^2T^-1]','[MLT^-1]','[ML^2T^-2]','[ML^-1T^-1]'],a:0,e:'From E = hν, h = E/ν = [ML^2T^-1].'},
{q:'The dimensional formula of surface tension is:',o:['[MT^-2]','[MLT^-2]','[ML^2T^-2]','[ML^-1T^-2]'],a:0,e:'Surface tension = force/length = [MT^-2].'},
{q:'The dimensional formula of coefficient of viscosity is:',o:['[ML^-1T^-1]','[MLT^-1]','[ML^-1T^-2]','[MLT^-2]'],a:0,e:'Dynamic viscosity has dimensions [ML^-1T^-1].'},
{q:'The dimensional formula of Young modulus is:',o:['[ML^-1T^-2]','[MLT^-2]','[ML^2T^-2]','[MT^-2]'],a:0,e:'Young modulus = stress/strain; strain is dimensionless.'},
{q:'The dimensional formula of spring constant is:',o:['[MT^-2]','[MLT^-2]','[ML^-1T^-2]','[ML^2T^-2]'],a:0,e:'From F = kx, k = F/x = [MT^-2].'},
{q:'The dimensional formula of energy density is:',o:['[ML^-1T^-2]','[MLT^-2]','[ML^2T^-2]','[MT^-2]'],a:0,e:'Energy density = energy/volume = [ML^-1T^-2].'},
{q:'Which pair has identical dimensions?',o:['Pressure and energy','Work and torque','Power and energy','Force and pressure'],a:1,e:'Work and torque both have [ML^2T^-2].'},
{q:'Which pair has identical dimensions?',o:['Impulse and momentum','Force and momentum','Power and work','Pressure and force'],a:0,e:'Both impulse and momentum have [MLT^-1].'},
{q:'Which physical quantity is dimensionless?',o:['Strain','Force','Pressure','Momentum'],a:0,e:'Strain is a ratio of two lengths.'},
{q:'Which quantity has dimensions of [ML^-1T^-2]?',o:['Pressure','Force','Power','Momentum'],a:0,e:'Pressure has [ML^-1T^-2].'},
{q:'Which quantity has dimensions of [ML^2T^-3]?',o:['Energy','Power','Force','Pressure'],a:1,e:'Power = energy/time.'},
{q:'Dimensional analysis can be used to:',o:['Find a numerical constant like 2π','Check dimensional consistency','Determine the exact value of every constant','Replace all experiments'],a:1,e:'Dimensional analysis is useful for checking dimensional consistency.'},
{q:'A dimensionally correct equation is necessarily:',o:['Physically correct','Dimensionally consistent','Numerically exact','Experimentally verified'],a:1,e:'Dimensional consistency is necessary but not sufficient for physical correctness.'},
{q:'If x = at^2, the dimensions of a are:',o:['[L]','[LT^-1]','[LT^-2]','[L^2T^-2]'],a:2,e:'a = x/t^2 = [LT^-2].'},
{q:'If E = mc^2, the dimensions of E are:',o:['[ML^2T^-2]','[MLT^-2]','[ML^2T^-3]','[MLT^-1]'],a:0,e:'Mass times velocity squared gives energy dimensions.'},
{q:'The dimensions of coefficient of friction are:',o:['[M]','[L]','[T]','dimensionless'],a:3,e:'Coefficient of friction is a ratio of forces.'},
{q:'The dimensions of relative density are:',o:['[M]','[L]','[T^-1]','dimensionless'],a:3,e:'Relative density is a ratio of densities.'},
{q:'Which cannot be determined by dimensional analysis?',o:['Dimensions of a quantity','Unit conversion','Numerical dimensionless constants','Dimensional consistency'],a:2,e:'Pure numerical constants cannot be obtained from dimensions alone.'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};window.SkillUpMCQBanks['dimensions and dimensional formulae']=questions;
if(window.SKILLUP_UNIFIED_MCQ)return;
})();