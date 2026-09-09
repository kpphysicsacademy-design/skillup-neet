(function(){
const questions=[
{q:'The SI base unit of mass is:',o:['gram','kilogram','milligram','tonne'],a:1,e:'Kilogram (kg) is the SI base unit of mass.'},
{q:'The SI base unit of time is:',o:['minute','hour','second','day'],a:2,e:'Second (s) is an SI base unit.'},
{q:'Which is NOT an SI base quantity?',o:['Length','Mass','Force','Temperature'],a:2,e:'Force is a derived quantity.'},
{q:'The SI unit of amount of substance is:',o:['molecule','mole','gram','litre'],a:1,e:'Mole (mol) is the SI base unit.'},
{q:'The SI base unit of length is:',o:['centimetre','metre','kilometre','millimetre'],a:1,e:'Metre (m) is the SI base unit of length.'},
{q:'The SI unit of plane angle is:',o:['degree','radian','steradian','revolution'],a:1,e:'Radian (rad) is the SI derived unit for plane angle.'},
{q:'The SI unit of solid angle is:',o:['radian','degree','steradian','candela'],a:2,e:'Steradian (sr) is the SI derived unit for solid angle.'},
{q:'Which SI prefix represents 10^3?',o:['micro','milli','kilo','mega'],a:2,e:'Kilo denotes 10^3.'},
{q:'Which SI prefix represents 10^6?',o:['kilo','mega','giga','nano'],a:1,e:'Mega denotes 10^6.'},
{q:'Which SI prefix represents 10^9?',o:['mega','giga','tera','pico'],a:1,e:'Giga denotes 10^9.'},
{q:'Which SI prefix represents 10^-3?',o:['micro','milli','nano','centi'],a:1,e:'Milli denotes 10^-3.'},
{q:'Which SI prefix represents 10^-9?',o:['micro','nano','pico','femto'],a:1,e:'Nano denotes 10^-9.'},
{q:'The SI unit of force is:',o:['joule','newton','pascal','watt'],a:1,e:'Force is measured in newtons (N).'},
{q:'The SI unit of energy is:',o:['newton','joule','watt','pascal'],a:1,e:'Energy is measured in joules (J).'},
{q:'The SI unit of power is:',o:['joule','watt','newton','volt'],a:1,e:'Power is measured in watts (W).'},
{q:'The SI unit of pressure is:',o:['newton','joule','pascal','watt'],a:2,e:'Pressure is measured in pascals (Pa).'},
{q:'The SI unit of electric charge is:',o:['ampere','volt','coulomb','ohm'],a:2,e:'Electric charge is measured in coulombs (C).'},
{q:'The SI unit of potential difference is:',o:['ampere','volt','coulomb','tesla'],a:1,e:'Potential difference is measured in volts (V).'},
{q:'The SI unit of resistance is:',o:['ohm','volt','ampere','farad'],a:0,e:'Resistance is measured in ohms (Ω).'},
{q:'The SI unit of capacitance is:',o:['henry','farad','tesla','weber'],a:1,e:'Capacitance is measured in farads (F).'},
{q:'The SI unit of magnetic flux density is:',o:['weber','tesla','henry','gauss'],a:1,e:'Magnetic flux density is measured in tesla (T).'},
{q:'The SI unit of magnetic flux is:',o:['tesla','weber','henry','ampere'],a:1,e:'Magnetic flux is measured in webers (Wb).'},
{q:'The SI unit of inductance is:',o:['farad','henry','weber','tesla'],a:1,e:'Inductance is measured in henrys (H).'},
{q:'The SI unit of frequency is:',o:['second','hertz','radian','cycle'],a:1,e:'Frequency is measured in hertz (Hz), equal to s^-1.'},
{q:'The SI unit of activity of a radioactive source is:',o:['gray','sievert','becquerel','curie'],a:2,e:'Becquerel (Bq) is the SI unit of activity.'},
{q:'The SI unit of absorbed dose is:',o:['gray','sievert','becquerel','roentgen'],a:0,e:'Gray (Gy) is the SI unit of absorbed dose.'},
{q:'The SI unit of equivalent dose is:',o:['gray','sievert','becquerel','joule'],a:1,e:'Sievert (Sv) is the SI unit of equivalent dose.'},
{q:'Which is a derived SI unit expressed in base units?',o:['N = kg m s^-2','kg = base unit','s = base unit','K = base unit'],a:0,e:'Newton is derived: kg m s^-2.'},
{q:'1 litre is equal to:',o:['10^-3 m^3','10^3 m^3','10^-6 m^3','1 m^3'],a:0,e:'One litre equals 10^-3 cubic metre.'},
{q:'1 angstrom is equal to:',o:['10^-8 m','10^-10 m','10^-12 m','10^-6 m'],a:1,e:'One angstrom is 10^-10 m.'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};window.SkillUpMCQBanks['systems of units']=questions;
if(window.SKILLUP_UNIFIED_MCQ)return;
})();