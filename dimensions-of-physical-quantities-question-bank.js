(function(){
const questions=[
{q:'What is meant by the dimensions of a physical quantity?',o:['Its numerical value in SI units','Its dependence on fundamental quantities expressed by powers','Its measuring instrument','Its unit symbol only'],a:1,e:'Dimensions show how a physical quantity depends on fundamental quantities such as mass, length and time.'},
{q:'The dimensions of velocity are:',o:['[L T⁻¹]','[L T⁻²]','[M L T⁻¹]','[M L⁻¹ T⁻¹]'],a:0,e:'Velocity = displacement/time, so its dimensions are [L T⁻¹].'},
{q:'The dimensional formula of acceleration is:',o:['[L T⁻¹]','[L T⁻²]','[M L T⁻²]','[M L² T⁻²]'],a:1,e:'Acceleration = velocity/time, giving [L T⁻²].'},
{q:'The dimensional formula of force is:',o:['[M L T⁻²]','[M L² T⁻²]','[M L⁻¹ T⁻²]','[L T⁻²]'],a:0,e:'Force = mass × acceleration, so [F] = [M L T⁻²].'},
{q:'The dimensions of work are:',o:['[M L T⁻²]','[M L² T⁻²]','[M L² T⁻¹]','[M L⁻¹ T⁻²]'],a:1,e:'Work = force × displacement, giving [M L² T⁻²].'},
{q:'The dimensional formula of power is:',o:['[M L² T⁻³]','[M L² T⁻²]','[M L T⁻³]','[M L⁻¹ T⁻²]'],a:0,e:'Power = work/time, so [M L² T⁻³].'},
{q:'The dimensions of pressure are:',o:['[M L T⁻²]','[M L⁻¹ T⁻²]','[M L² T⁻²]','[M L⁻² T⁻²]'],a:1,e:'Pressure = force/area, so [M L T⁻²]/[L²] = [M L⁻¹ T⁻²].'},
{q:'The dimensional formula of momentum is:',o:['[M L T⁻¹]','[M L T⁻²]','[M L² T⁻¹]','[M T⁻¹]'],a:0,e:'Momentum = mass × velocity, giving [M L T⁻¹].'},
{q:'Which pair has the same dimensions?',o:['Work and torque','Force and pressure','Momentum and energy','Power and impulse'],a:0,e:'Both work and torque have dimensions [M L² T⁻²].'},
{q:'The dimensions of impulse are:',o:['[M L T⁻¹]','[M L T⁻²]','[M L² T⁻²]','[M L² T⁻¹]'],a:0,e:'Impulse = force × time = [M L T⁻²][T] = [M L T⁻¹].'},
{q:'The dimensional formula of density is:',o:['[M L⁻³]','[M L³]','[M L⁻²]','[M⁻¹ L³]'],a:0,e:'Density = mass/volume, so [M L⁻³].'},
{q:'The dimensions of frequency are:',o:['[T]','[T⁻¹]','[L T⁻¹]','[M T⁻¹]'],a:1,e:'Frequency is the reciprocal of time, so its dimensions are [T⁻¹].'},
{q:'The dimensional formula of angular velocity is:',o:['[T⁻¹]','[L T⁻¹]','[L T⁻²]','[M T⁻¹]'],a:0,e:'Angular displacement is dimensionless, so angular velocity has dimensions [T⁻¹].'},
{q:'The dimensions of gravitational constant G are:',o:['[M⁻¹ L³ T⁻²]','[M L³ T⁻²]','[M⁻¹ L² T⁻²]','[M L⁻² T⁻²]'],a:0,e:'From F = Gm₁m₂/r², G = Fr²/(m₁m₂), giving [M⁻¹ L³ T⁻²].'},
{q:'The dimensional formula of Planck constant h is:',o:['[M L² T⁻¹]','[M L² T⁻²]','[M L T⁻¹]','[M L³ T⁻²]'],a:0,e:'From E = hν, h = E/ν, giving [M L² T⁻¹].'},
{q:'The dimensions of surface tension are:',o:['[M T⁻²]','[M L T⁻²]','[M L⁻¹ T⁻²]','[M L² T⁻²]'],a:0,e:'Surface tension = force/length, so [M L T⁻²]/[L] = [M T⁻²].'},
{q:'The dimensional formula of coefficient of viscosity is:',o:['[M L⁻¹ T⁻¹]','[M L T⁻¹]','[M L⁻¹ T⁻²]','[M L T⁻²]'],a:0,e:'Dynamic viscosity has dimensions [M L⁻¹ T⁻¹].'},
{q:'Which physical quantity is dimensionless?',o:['Pressure','Strain','Force','Energy'],a:1,e:'Strain is a ratio of two lengths, so it is dimensionless.'},
{q:'The dimensions of Young modulus are the same as those of:',o:['Pressure','Energy','Momentum','Power'],a:0,e:'Young modulus = stress/strain; strain is dimensionless, so its dimensions equal pressure.'},
{q:'Which quantity has dimensions [M L² T⁻²]?',o:['Energy','Power','Force','Momentum'],a:0,e:'Energy and work have dimensions [M L² T⁻²].'},
{q:'If x = at², where x is length and t is time, the dimensions of a are:',o:['[L T⁻²]','[L T⁻¹]','[L T²]','[L⁻¹ T⁻²]'],a:0,e:'a = x/t², so [a] = [L T⁻²].'},
{q:'For the equation v² = u² + 2as, the dimensions of 2as are:',o:['[L² T⁻²]','[L T⁻²]','[L² T⁻¹]','[L T⁻¹]'],a:0,e:'Acceleration times displacement has dimensions [L T⁻²][L] = [L² T⁻²], matching velocity squared.'},
{q:'Which expression is dimensionally valid for adding to a length L?',o:['L + vt','L + at','L + v/t','L + a/v'],a:0,e:'Velocity × time has dimensions [L], so it can be added to length.'},
{q:'If force F = kx, the dimensions of spring constant k are:',o:['[M T⁻²]','[M L T⁻²]','[M L⁻¹ T⁻²]','[M L² T⁻²]'],a:0,e:'k = F/x, so [k] = [M L T⁻²]/[L] = [M T⁻²].'},
{q:'The dimensions of energy density are:',o:['[M L⁻¹ T⁻²]','[M L² T⁻²]','[M L⁻² T⁻²]','[M T⁻²]'],a:0,e:'Energy density = energy/volume = [M L² T⁻²]/[L³] = [M L⁻¹ T⁻²].'},
{q:'Dimensional analysis can be used to:',o:['Determine numerical constants exactly','Check dimensional consistency of equations','Determine the direction of a vector','Measure an unknown quantity directly'],a:1,e:'Dimensional analysis can test whether terms in a physical equation have compatible dimensions.'},
{q:'Which statement about a dimensionally correct equation is true?',o:['It must always be physically correct','It may still be physically incorrect','It cannot contain numerical constants','It must use SI units only'],a:1,e:'Dimensional consistency is necessary but not sufficient for complete physical correctness.'},
{q:'The dimensions of electric charge are:',o:['[I T]','[I T⁻¹]','[M L T⁻¹]','[M T⁻²]'],a:0,e:'Charge = current × time, so its dimensions are [I T].'},
{q:'The dimensions of potential difference are:',o:['[M L² T⁻³ I⁻¹]','[M L² T⁻² I⁻¹]','[M L T⁻³ I⁻¹]','[M L² T⁻¹ I⁻¹]'],a:0,e:'Potential difference = power/current, giving [M L² T⁻³ I⁻¹].'},
{q:'The dimensions of resistance are:',o:['[M L² T⁻³ I⁻²]','[M L² T⁻² I⁻¹]','[M L T⁻³ I⁻²]','[M L² T⁻³ I⁻¹]'],a:0,e:'Resistance = potential difference/current = [M L² T⁻³ I⁻¹]/[I] = [M L² T⁻³ I⁻²].'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};window.SkillUpMCQBanks['dimensions of physical quantities']=questions;
/* The main router initializes SkillUpPhysicsBanks after this file loads. Patch the resolver after all scripts finish so this dedicated 30-MCQ bank is selected instead of the generic Physics and Measurement bank. */
setTimeout(()=>{if(window.SkillUpPhysicsBanks){window.SkillUpPhysicsBanks['Dimensions of Physical Quantities']=questions;const old=window.SkillUpPhysicsBanks.resolve;window.SkillUpPhysicsBanks.resolve=function(topic){const n=String(topic||'').toLowerCase().replace(/[–—]/g,'-').replace(/&/g,'and').replace(/[\s_]+/g,'-').replace(/[^a-z0-9-]+/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'');if(n==='dimensions-of-physical-quantities')return 'Dimensions of Physical Quantities';return old?old.call(this,topic):null;};}},0);
})();