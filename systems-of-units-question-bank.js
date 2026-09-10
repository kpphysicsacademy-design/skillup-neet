/* SkillUp NEET Physics — Systems of Units: SI, CGS, MKS, FPS and related systems — 30 NEET MCQs */
(function(){
const questions=[
{q:'Which system of units is internationally accepted as the modern standard system?',o:['CGS','FPS','SI','MKS'],a:2,e:'The International System of Units (SI) is the internationally accepted modern system of units.'},
{q:'The SI system is based on how many base quantities?',o:['5','6','7','8'],a:2,e:'SI has seven base quantities: length, mass, time, electric current, thermodynamic temperature, amount of substance and luminous intensity.'},
{q:'The SI base units of length, mass and time are:',o:['cm, g, s','m, kg, s','ft, lb, s','m, g, s'],a:1,e:'The SI base units for length, mass and time are metre, kilogram and second.'},
{q:'The CGS system is based on:',o:['metre, kilogram, second','foot, pound, second','centimetre, gram, second','centimetre, kilogram, second'],a:2,e:'CGS stands for centimetre-gram-second.'},
{q:'The MKS system is based on:',o:['metre, kilogram, second','metre, gram, second','millimetre, kilogram, second','foot, pound, second'],a:0,e:'MKS stands for metre-kilogram-second.'},
{q:'The FPS system is based on:',o:['foot, pound, second','foot, pascal, second','metre, pound, second','foot, kilogram, second'],a:0,e:'FPS stands for foot-pound-second.'},
{q:'Which system uses centimetre, gram and second as fundamental units?',o:['MKS','CGS','FPS','SI'],a:1,e:'CGS uses centimetre, gram and second as its fundamental units.'},
{q:'Which system uses metre, kilogram and second as fundamental units?',o:['CGS','FPS','MKS','British gravitational system'],a:2,e:'MKS uses metre, kilogram and second as fundamental units.'},
{q:'Which system traditionally uses foot, pound and second?',o:['CGS','MKS','SI','FPS'],a:3,e:'FPS uses foot, pound and second as its fundamental units.'},
{q:'In the CGS system, the unit of length is:',o:['metre','foot','centimetre','kilometre'],a:2,e:'Centimetre is the fundamental unit of length in CGS.'},
{q:'In the CGS system, the unit of mass is:',o:['gram','kilogram','pound','milligram'],a:0,e:'Gram is the fundamental unit of mass in CGS.'},
{q:'In the MKS system, the unit of length is:',o:['centimetre','metre','foot','inch'],a:1,e:'Metre is the fundamental unit of length in MKS.'},
{q:'In the MKS system, the unit of mass is:',o:['gram','pound','kilogram','tonne'],a:2,e:'Kilogram is the fundamental unit of mass in MKS.'},
{q:'In the FPS system, the unit of length is:',o:['foot','metre','inch only','yard'],a:0,e:'Foot is the fundamental length unit traditionally used in the FPS system.'},
{q:'Which system is a metric system based on centimetre, gram and second?',o:['FPS','CGS','MKS','SI'],a:1,e:'CGS is a metric system based on centimetre, gram and second.'},
{q:'Which of the following is a coherent system of units?',o:['A system where conversion factors are needed for every derived unit','A system where derived units are formed from base units without extra numerical factors','A system containing only non-SI units','A system containing only dimensionless units'],a:1,e:'In a coherent system, derived units are formed from base units without additional numerical conversion factors.'},
{q:'In the SI system, the derived unit of force is:',o:['joule','newton','watt','pascal'],a:1,e:'The SI derived unit of force is newton (N), equal to kg m s⁻².'},
{q:'In the CGS system, the unit of force is:',o:['dyne','erg','poise','gauss'],a:0,e:'Dyne is the CGS unit of force.'},
{q:'In the CGS system, the unit of work or energy is:',o:['joule','dyne','erg','watt'],a:2,e:'Erg is the CGS unit of work and energy.'},
{q:'One dyne is equal to:',o:['10⁻⁵ N','10⁵ N','10⁻³ N','10³ N'],a:0,e:'One dyne equals 10⁻⁵ newton.'},
{q:'One erg is equal to:',o:['10⁷ J','10⁻⁷ J','10⁻⁵ J','10⁵ J'],a:1,e:'One erg equals 10⁻⁷ joule.'},
{q:'In the SI system, the unit of pressure is:',o:['bar','dyne cm⁻²','pascal','barye'],a:2,e:'Pascal (Pa) is the SI unit of pressure.'},
{q:'In the CGS system, pressure is commonly expressed in:',o:['pascal','barye','newton','joule'],a:1,e:'Barye (also called bary) is the CGS unit of pressure, equal to dyne per square centimetre.'},
{q:'Which pair correctly represents SI and CGS units of force?',o:['newton and dyne','joule and erg','watt and poise','pascal and barye'],a:0,e:'Newton is the SI unit of force, while dyne is the CGS unit of force.'},
{q:'Which pair correctly represents SI and CGS units of energy?',o:['newton and dyne','watt and poise','joule and erg','pascal and barye'],a:2,e:'Joule is the SI unit of energy, while erg is the CGS unit of energy.'},
{q:'The gravitational system of units uses force as a fundamental quantity instead of:',o:['length','mass','time','temperature'],a:1,e:'In gravitational systems, force is treated as fundamental and mass becomes a derived quantity.'},
{q:'In the British gravitational system, a commonly used unit of force is:',o:['pound-force','dyne','newton','joule'],a:0,e:'Pound-force (lbf) is a force unit used in the British gravitational system.'},
{q:'The unit kilogram-force belongs primarily to:',o:['CGS absolute system','MKS absolute system','gravitational system','SI base system'],a:2,e:'Kilogram-force is a gravitational unit of force rather than an SI base unit.'},
{q:'Which statement about SI and MKS is correct?',o:['MKS is based on foot, pound and second','SI has replaced MKS as the internationally preferred system','MKS is identical to CGS','SI uses gram as its base unit of mass'],a:1,e:'SI evolved from metric systems including MKS and is now the internationally preferred system.'},
{q:'Which system is best matched with its fundamental units?',o:['CGS — cm, g, s','MKS — cm, g, s','FPS — m, kg, s','SI — ft, lb, s'],a:0,e:'CGS is correctly matched with centimetre, gram and second.'},
{q:'Which sequence correctly orders these systems by their fundamental length unit?',o:['CGS: cm; MKS: m; FPS: ft','CGS: m; MKS: cm; FPS: ft','CGS: ft; MKS: m; FPS: cm','CGS: cm; MKS: ft; FPS: m'],a:0,e:'CGS uses centimetre, MKS uses metre, and FPS uses foot as the traditional fundamental length units.'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};
window.SkillUpMCQBanks['systems of units']=questions;
})();