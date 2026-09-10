/* SkillUp NEET Physics — SI Units / Systems of Units: 30 NEET MCQs with explanations */
(function(){
const questions=[
{q:'How many SI base quantities are there?',o:['6','7','8','5'],a:1,e:'The SI has seven base quantities: length, mass, time, electric current, thermodynamic temperature, amount of substance and luminous intensity.'},
{q:'Which of the following is an SI base unit?',o:['newton','joule','candela','watt'],a:2,e:'Candela (cd) is the SI base unit of luminous intensity. Newton, joule and watt are derived units.'},
{q:'The SI base unit of thermodynamic temperature is:',o:['kelvin','degree Celsius','joule','calorie'],a:0,e:'Kelvin (K) is the SI base unit of thermodynamic temperature.'},
{q:'Which pair contains only SI base units?',o:['newton and metre','kilogram and ampere','joule and second','pascal and kelvin'],a:1,e:'Kilogram and ampere are both SI base units; newton, joule and pascal are derived units.'},
{q:'Which of the following is a derived SI unit?',o:['mole','metre','pascal','kelvin'],a:2,e:'Pascal is derived from the base units kilogram, metre and second: Pa = kg m⁻¹ s⁻².'},
{q:'The CGS system is based on:',o:['centimetre, gram, second','metre, kilogram, second','foot, pound, second','centimetre, kilogram, second'],a:0,e:'CGS stands for centimetre-gram-second.'},
{q:'The MKS system uses:',o:['metre, gram, second','millimetre, kilogram, second','metre, kilogram, second','metre, kilogram, minute'],a:2,e:'MKS stands for metre-kilogram-second.'},
{q:'The FPS system is based on:',o:['foot, pascal, second','force, pound, second','foot, pound, metre','foot, pound, second'],a:3,e:'FPS stands for foot-pound-second.'},
{q:'A coherent system of units is one in which:',o:['all quantities are dimensionless','derived units are formed without extra numerical factors','only fundamental units are used','only SI units are allowed'],a:1,e:'In a coherent system, derived units are obtained from base units without additional numerical conversion factors.'},
{q:'The SI unit of force in base units is:',o:['kg m² s⁻²','kg m s⁻¹','kg m s⁻²','kg s⁻²'],a:2,e:'Force = mass × acceleration, so N = kg × m s⁻² = kg m s⁻².'},
{q:'The SI unit of work in base units is:',o:['kg m² s⁻²','kg m s⁻²','kg m² s⁻¹','kg s⁻²'],a:0,e:'Work = force × displacement = (kg m s⁻²)m = kg m² s⁻².'},
{q:'The SI unit of power in base units is:',o:['kg m² s⁻²','kg m s⁻²','kg m⁻¹ s⁻²','kg m² s⁻³'],a:3,e:'Power = work/time, so W = kg m² s⁻²/s = kg m² s⁻³.'},
{q:'The SI unit of pressure in base units is:',o:['kg m s⁻²','kg m⁻¹ s⁻²','kg m² s⁻²','kg m⁻² s⁻²'],a:1,e:'Pressure = force/area = (kg m s⁻²)/m² = kg m⁻¹ s⁻².'},
{q:'Which relation is correct for one coulomb?',o:['1 C = 1 V/A','1 C = 1 J/s','1 C = 1 A s','1 C = 1 A/s'],a:2,e:'Charge Q = current × time, hence 1 C = 1 A s.'},
{q:'Which relation correctly represents one volt?',o:['1 V = 1 J/C','1 V = 1 C/J','1 V = 1 A s','1 V = 1 J s'],a:0,e:'Potential difference is work done per unit charge: V = W/Q = J/C.'},
{q:'Which relation correctly represents one ohm?',o:['1 Ω = 1 J/C','1 Ω = 1 V/A','1 Ω = 1 C/V','1 Ω = 1 A/V'],a:1,e:'Resistance is R = V/I, so 1 Ω = 1 V/A.'},
{q:'The SI unit of frequency is equivalent to:',o:['s','m s⁻¹','s⁻¹','rad s⁻¹'],a:2,e:'Hertz means cycles per second, so Hz = s⁻¹.'},
{q:'The SI unit of magnetic flux is:',o:['tesla','weber','henry','ampere'],a:1,e:'Magnetic flux is measured in weber (Wb). Tesla is the unit of magnetic flux density.'},
{q:'The SI unit of magnetic flux density is:',o:['weber','volt','tesla','henry'],a:2,e:'Magnetic flux density B is measured in tesla (T), where 1 T = 1 Wb m⁻².'},
{q:'The SI unit of inductance is:',o:['farad','ohm','weber','henry'],a:3,e:'Inductance is measured in henry (H).'},
{q:'The SI unit of capacitance is:',o:['farad','henry','weber','tesla'],a:0,e:'Capacitance is measured in farad (F), with C = Q/V.'},
{q:'The SI unit of absorbed dose of ionising radiation is:',o:['sievert','becquerel','gray','tesla'],a:2,e:'Gray (Gy) is the SI unit of absorbed dose, equal to joule per kilogram.'},
{q:'The SI unit of activity of a radioactive source is:',o:['gray','becquerel','sievert','joule'],a:1,e:'Becquerel (Bq) is the SI unit of radioactive activity and corresponds to one decay per second.'},
{q:'The SI unit of plane angle is:',o:['degree','steradian','revolution','radian'],a:3,e:'Radian (rad) is the SI unit of plane angle.'},
{q:'The SI unit of solid angle is:',o:['steradian','degree','radian','candela'],a:0,e:'Steradian (sr) is the SI unit of solid angle.'},
{q:'Which of the following is dimensionless?',o:['force','pressure','plane angle','energy'],a:2,e:'Plane angle is the ratio of arc length to radius, so it has no dimensions.'},
{q:'The SI prefix micro (μ) represents:',o:['10⁻³','10⁶','10⁻⁹','10⁻⁶'],a:3,e:'The prefix micro denotes 10⁻⁶.'},
{q:'The SI prefix nano (n) represents:',o:['10⁻⁶','10⁻³','10⁹','10⁻⁹'],a:3,e:'The prefix nano denotes 10⁻⁹.'},
{q:'The SI prefix mega (M) represents:',o:['10³','10⁻⁶','10⁶','10⁹'],a:2,e:'The prefix mega denotes 10⁶.'},
{q:'A length of 2.5 km is equal to:',o:['2.5 × 10² m','2.5 × 10⁶ m','2.5 × 10⁻³ m','2.5 × 10³ m'],a:3,e:'Since 1 km = 10³ m, 2.5 km = 2.5 × 10³ m.'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};
window.SkillUpMCQBanks['systems of units']=questions;
})();