(function(){
const questions=[
{q:'Which physical quantity has SI unit metre per second?',o:['Acceleration','Velocity','Force','Momentum'],a:1,e:'Velocity is displacement per unit time, with SI unit m s⁻¹.'},
{q:'The SI base unit of electric current is:',o:['Volt','Coulomb','Ampere','Ohm'],a:2,e:'Ampere (A) is an SI base unit.'},
{q:'Which is an SI base quantity?',o:['Force','Energy','Length','Pressure'],a:2,e:'Length is a base quantity; force, energy and pressure are derived.'},
{q:'A physical quantity expressed as 5.0 has how many significant figures?',o:['1','2','3','4'],a:1,e:'The zero after the decimal point is significant, so 5.0 has two significant figures.'},
{q:'The dimensional formula of force is:',o:['[MLT⁻¹]','[MLT⁻²]','[ML²T⁻²]','[ML⁻¹T⁻²]'],a:1,e:'Force = mass × acceleration = [M][LT⁻²] = [MLT⁻²].'},
{q:'Which pair has the same dimensions?',o:['Work and torque','Pressure and force','Momentum and energy','Power and force'],a:0,e:'Both work and torque have dimensions [ML²T⁻²].'},
{q:'The dimensional formula of pressure is:',o:['[ML⁻¹T⁻²]','[MLT⁻²]','[ML²T⁻²]','[M⁰L⁻¹T⁻¹]'],a:0,e:'Pressure = force/area = [MLT⁻²]/[L²] = [ML⁻¹T⁻²].'},
{q:'Which quantity is dimensionless?',o:['Velocity','Strain','Force','Energy'],a:1,e:'Strain is a ratio of two lengths and is dimensionless.'},
{q:'The number 0.00450 contains how many significant figures?',o:['2','3','4','5'],a:1,e:'Leading zeros are not significant; 4, 5 and the trailing zero are significant.'},
{q:'Which instrument is generally used to measure very small lengths accurately?',o:['Metre scale','Vernier calipers','Stopwatch','Spring balance'],a:1,e:'Vernier calipers provide greater length precision than a metre scale.'},
{q:'The least count of an instrument represents:',o:['Maximum reading','Smallest measurable interval','Average reading','Zero error'],a:1,e:'Least count is the smallest value that can be measured reliably by an instrument.'},
{q:'If x = 2.0 m and y = 3.0 m, x + y should be reported as:',o:['5 m','5.0 m','5.00 m','5.000 m'],a:1,e:'For addition, retain the least number of decimal places: one decimal place.'},
{q:'Which equation is dimensionally consistent?',o:['v=u+at','v=u+at²','s=ut+a','F=mv'],a:0,e:'u and at both have dimensions of velocity.'},
{q:'Dimensional analysis cannot determine:',o:['Dimensional consistency','Units of a quantity','Numerical dimensionless constants','Relation among variables'],a:2,e:'Pure numerical constants such as 2 or π cannot be obtained by dimensional analysis.'},
{q:'The SI unit of luminous intensity is:',o:['Lux','Candela','Lumen','Watt'],a:1,e:'Candela (cd) is the SI base unit of luminous intensity.'},
{q:'The SI unit of thermodynamic temperature is:',o:['Degree Celsius','Kelvin','Fahrenheit','Joule'],a:1,e:'Kelvin (K) is the SI base unit of thermodynamic temperature.'},
{q:'One nanometre equals:',o:['10⁻⁶ m','10⁻⁹ m','10⁻¹² m','10⁻³ m'],a:1,e:'Nano denotes 10⁻⁹.'},
{q:'Which prefix represents 10⁻⁶?',o:['milli','micro','nano','pico'],a:1,e:'Micro (µ) represents 10⁻⁶.'},
{q:'The dimensional formula of momentum is:',o:['[MLT⁻¹]','[MLT⁻²]','[ML²T⁻¹]','[M⁰LT⁻¹]'],a:0,e:'Momentum = mass × velocity = [MLT⁻¹].'},
{q:'The dimensional formula of power is:',o:['[ML²T⁻²]','[ML²T⁻³]','[MLT⁻²]','[MLT⁻¹]'],a:1,e:'Power = work/time = [ML²T⁻²]/T = [ML²T⁻³].'},
{q:'If a measured length is 2.50 cm, its significant figures are:',o:['1','2','3','4'],a:2,e:'All three digits 2, 5 and 0 are significant.'},
{q:'Which error is reduced by taking repeated measurements and averaging?',o:['Random error','Unit error','Dimensional error','Definition error'],a:0,e:'Averaging repeated observations helps reduce random error.'},
{q:'Zero error is associated with:',o:['Incorrect unit conversion','Instrument reading when true value is zero','Random motion','Significant figures'],a:1,e:'Zero error is a systematic offset shown by an instrument when the actual quantity is zero.'},
{q:'Which is a derived SI unit?',o:['Second','Kelvin','Newton','Mole'],a:2,e:'Newton is derived from kg, m and s.'},
{q:'The SI base unit of amount of substance is:',o:['Gram','Mole','Kilogram','Number'],a:1,e:'Mole (mol) is the SI base unit of amount of substance.'},
{q:'The dimensional formula of density is:',o:['[ML⁻³]','[ML³]','[M⁻¹L³]','[ML⁻²T⁻¹]'],a:0,e:'Density = mass/volume = [M]/[L³] = [ML⁻³].'},
{q:'Which quantity has the same dimensions as energy?',o:['Force','Torque','Pressure','Impulse'],a:1,e:'Torque has dimensions [ML²T⁻²], the same as energy.'},
{q:'A result 12.0 + 0.35 should be reported as:',o:['12.35','12.4','12.350','12'],a:1,e:'For addition, the result is limited to the least decimal places: one decimal place.'},
{q:'The number 1000, without a decimal point or notation, has:',o:['Always 1 significant figure','Always 4 significant figures','Ambiguous significant figures','Zero significant figures'],a:2,e:'Trailing zeros in an integer without notation can make the intended precision ambiguous.'},
{q:'Which measurement has the greatest precision?',o:['2 m','2.0 m','2.00 m','2.000 m'],a:3,e:'More reported significant digits indicate finer stated precision.'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};window.SkillUpMCQBanks['physics and measurement']=questions;
if(window.SKILLUP_UNIFIED_MCQ)return;
})();