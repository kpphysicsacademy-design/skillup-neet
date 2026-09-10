/* SkillUp NEET Physics — Systems of Units: 30 replacement MCQs */
(function(){
const questions=[
{q:'The SI system is based on how many fundamental quantities?',o:['6','7','5','8'],a:1,e:'The SI system has seven base quantities: length, mass, time, electric current, thermodynamic temperature, amount of substance and luminous intensity.'},
{q:'Which of the following is an SI base unit?',o:['newton','joule','candela','watt'],a:2,e:'Candela (cd) is the SI base unit of luminous intensity.'},
{q:'Which quantity is measured in kelvin in the SI system?',o:['heat energy','specific heat','thermodynamic temperature','thermal conductivity'],a:2,e:'Kelvin (K) is the SI base unit of thermodynamic temperature.'},
{q:'Which pair contains only SI base units?',o:['newton and metre','kilogram and ampere','joule and second','pascal and kelvin'],a:1,e:'Kilogram and ampere are both SI base units.'},
{q:'Which one is a derived SI unit?',o:['metre','kilogram','mole','pascal'],a:3,e:'Pascal is derived from kg, m and s: Pa = kg m⁻¹ s⁻².'},
{q:'The CGS system uses which three fundamental units?',o:['metre, gram, second','foot, pound, second','centimetre, gram, second','centimetre, kilogram, second'],a:2,e:'CGS stands for centimetre-gram-second.'},
{q:'The MKS system uses:',o:['metre, gram, second','metre, kilogram, second','millimetre, kilogram, second','metre, kilogram, minute'],a:1,e:'MKS stands for metre-kilogram-second.'},
{q:'The FPS system is based on:',o:['foot, pascal, second','force, pound, second','foot, pound, metre','foot, pound, second'],a:3,e:'FPS stands for foot-pound-second.'},
{q:'A coherent system of units is one in which:',o:['derived units contain no additional numerical factors','all units are fundamental','only SI units are used','all quantities are dimensionless'],a:0,e:'In a coherent system, derived units are formed from base units without extra numerical conversion factors.'},
{q:'The SI unit of force expressed in base units is:',o:['kg m² s⁻²','kg m s⁻¹','kg m s⁻²','kg s⁻²'],a:2,e:'Newton = mass × acceleration = kg m s⁻².'},
{q:'The SI unit of work expressed in base units is:',o:['kg m s⁻²','kg m² s⁻¹','kg s⁻²','kg m² s⁻²'],a:3,e:'Joule = newton × metre = kg m² s⁻².'},
{q:'The SI unit of power expressed in base units is:',o:['kg m² s⁻²','kg m² s⁻³','kg m s⁻²','kg m⁻¹ s⁻²'],a:1,e:'Watt = joule/second = kg m² s⁻³.'},
{q:'The SI unit of pressure expressed in base units is:',o:['kg m s⁻²','kg m⁻¹ s⁻²','kg m² s⁻²','kg m⁻² s⁻²'],a:1,e:'Pascal = newton/m² = kg m⁻¹ s⁻².'},
{q:'Which relation is correct for one coulomb?',o:['1 C = 1 V/A','1 C = 1 J/s','1 C = 1 A s','1 C = 1 A/s'],a:2,e:'Electric charge Q = current × time, so 1 C = 1 A s.'},
{q:'Which relation correctly represents one volt?',o:['1 V = 1 J/C','1 V = 1 C/J','1 V = 1 A s','1 V = 1 J s'],a:0,e:'Potential difference is work done per unit charge: V = J/C.'},
{q:'Which relation correctly represents one ohm?',o:['1 Ω = 1 J/C','1 Ω = 1 V/A','1 Ω = 1 C/V','1 Ω = 1 A/V'],a:1,e:'Resistance R = V/I, so 1 Ω = 1 V/A.'},
{q:'The SI unit of frequency is equivalent to:',o:['m s⁻¹','s⁻¹','rad s⁻¹','s'],a:1,e:'Hertz is defined as one cycle per second, so Hz = s⁻¹.'},
{q:'Which is the SI unit of magnetic flux?',o:['tesla','ampere','weber','henry'],a:2,e:'Magnetic flux is measured in weber (Wb).'},
{q:'Which is the SI unit of magnetic flux density?',o:['weber','volt','tesla','henry'],a:2,e:'Magnetic flux density is measured in tesla (T).'},
{q:'The SI unit of inductance is:',o:['farad','weber','henry','tesla'],a:2,e:'Inductance is measured in henry (H).'},
{q:'The SI unit of capacitance is:',o:['henry','ohm','weber','farad'],a:3,e:'Capacitance is measured in farad (F).'},
{q:'Which SI unit is used for absorbed dose of ionising radiation?',o:['sievert','becquerel','gray','tesla'],a:2,e:'Gray (Gy) is the SI unit of absorbed dose.'},
{q:'Which SI unit is used for activity of a radioactive source?',o:['gray','becquerel','sievert','joule'],a:1,e:'Becquerel (Bq) is the SI unit of radioactive activity.'},
{q:'The SI unit of plane angle is:',o:['degree','revolution','steradian','radian'],a:3,e:'Radian (rad) is the SI unit of plane angle.'},
{q:'The SI unit of solid angle is:',o:['degree','steradian','radian','candela'],a:1,e:'Steradian (sr) is the SI unit of solid angle.'},
{q:'Which of the following is dimensionless?',o:['force','plane angle','pressure','energy'],a:1,e:'Plane angle is the ratio of arc length to radius, so it is dimensionless.'},
{q:'The SI prefix micro (μ) represents:',o:['10⁻³','10⁶','10⁻⁹','10⁻⁶'],a:3,e:'Micro denotes 10⁻⁶.'},
{q:'The SI prefix nano (n) represents:',o:['10⁻⁶','10⁻³','10⁹','10⁻⁹'],a:3,e:'Nano denotes 10⁻⁹.'},
{q:'The SI prefix mega (M) represents:',o:['10³','10⁻⁶','10⁶','10⁹'],a:2,e:'Mega denotes 10⁶.'},
{q:'If 1 km = 10³ m, then 2.5 km equals:',o:['2.5 × 10² m','2.5 × 10⁶ m','2.5 × 10⁻³ m','2.5 × 10³ m'],a:3,e:'Multiplying 2.5 by 10³ gives 2.5 × 10³ m.'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};
window.SkillUpMCQBanks['systems of units']=questions;
})();