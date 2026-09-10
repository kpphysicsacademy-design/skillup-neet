/* SkillUp NEET Physics — Systems of Units — Standard NEET MCQs */
(function(){
const questions=[
{q:'A system of units is called a system of fundamental units when its basic units are chosen for:',o:['Derived quantities only','Fundamental physical quantities','Only mechanical quantities','Only SI quantities'],a:1,e:'Fundamental units are independently selected for fundamental physical quantities; derived units are obtained from them.'},
{q:'Which of the following is a fundamental quantity in the SI system?',o:['Force','Energy','Length','Pressure'],a:2,e:'Length is an SI base quantity. Force, energy and pressure are derived quantities.'},
{q:'The number of fundamental quantities in the SI system is:',o:['3','5','7','9'],a:2,e:'The SI system has seven base quantities.'},
{q:'The SI fundamental unit of length is:',o:['Centimetre','Metre','Kilometre','Foot'],a:1,e:'The metre (m) is the SI base unit of length.'},
{q:'The SI fundamental unit of mass is:',o:['Gram','Kilogram','Pound','Tonne'],a:1,e:'The kilogram (kg) is the SI base unit of mass.'},
{q:'The SI fundamental unit of time is:',o:['Minute','Hour','Second','Day'],a:2,e:'The second (s) is the SI base unit of time.'},
{q:'Which set represents the fundamental units of the CGS system?',o:['m, kg, s','cm, g, s','ft, lb, s','m, g, s'],a:1,e:'CGS stands for centimetre-gram-second.'},
{q:'Which set represents the fundamental units of the MKS system?',o:['cm, g, s','m, kg, s','ft, lb, s','m, g, s'],a:1,e:'MKS stands for metre-kilogram-second.'},
{q:'Which set represents the traditional fundamental units of the FPS system?',o:['cm, g, s','m, kg, s','ft, lb, s','m, g, s'],a:2,e:'FPS stands for foot-pound-second.'},
{q:'Which one of the following is a derived quantity?',o:['Length','Mass','Time','Force'],a:3,e:'Force is derived from mass, length and time through F = ma.'},
{q:'The SI derived unit of force is:',o:['Joule','Newton','Watt','Pascal'],a:1,e:'Force has SI unit newton (N), where 1 N = 1 kg m s⁻².'},
{q:'The SI derived unit of work is:',o:['Newton','Joule','Watt','Pascal'],a:1,e:'Work has SI unit joule (J), where 1 J = 1 N m.'},
{q:'The SI derived unit of power is:',o:['Joule','Newton','Watt','Pascal'],a:2,e:'Power has SI unit watt (W), where 1 W = 1 J s⁻¹.'},
{q:'The SI derived unit of pressure is:',o:['Joule','Watt','Pascal','Newton'],a:2,e:'Pressure has SI unit pascal (Pa), where 1 Pa = 1 N m⁻².'},
{q:'The dimensional expression of the SI unit of force in terms of base units is:',o:['kg m s⁻²','kg m² s⁻¹','kg m² s⁻²','kg m⁻¹ s⁻²'],a:0,e:'Since F = ma, the SI unit is kg × m × s⁻².'},
{q:'The SI unit of density expressed in fundamental units is:',o:['kg m⁻¹','kg m⁻²','kg m⁻³','kg m³'],a:2,e:'Density = mass/volume, so its SI unit is kg m⁻³.'},
{q:'The SI unit of acceleration expressed in fundamental units is:',o:['m s⁻¹','m s⁻²','kg m s⁻²','m² s⁻²'],a:1,e:'Acceleration is change in velocity per unit time, giving m s⁻².'},
{q:'The SI unit of momentum expressed in fundamental units is:',o:['kg m s⁻¹','kg m s⁻²','kg m² s⁻¹','kg m² s⁻²'],a:0,e:'Momentum p = mv, so its SI unit is kg m s⁻¹.'},
{q:'The CGS unit of force is:',o:['Erg','Dyne','Barye','Poise'],a:1,e:'Dyne is the CGS unit of force.'},
{q:'The CGS unit of work or energy is:',o:['Dyne','Erg','Watt','Barye'],a:1,e:'Erg is the CGS unit of work and energy.'},
{q:'The CGS unit of pressure is:',o:['Pascal','Dyne','Barye','Erg'],a:2,e:'Barye (Ba) is the CGS unit of pressure.'},
{q:'One dyne is equal to:',o:['10⁻⁵ N','10⁵ N','10⁻³ N','10³ N'],a:0,e:'1 dyne = 1 g cm s⁻² = 10⁻⁵ N.'},
{q:'One erg is equal to:',o:['10⁻⁵ J','10⁻⁷ J','10⁷ J','10⁻³ J'],a:1,e:'1 erg = 1 dyne cm = 10⁻⁷ J.'},
{q:'A force of 5 N is equal to how many dynes?',o:['5 × 10⁴','5 × 10⁵','5 × 10⁶','5 × 10⁷'],a:1,e:'Since 1 N = 10⁵ dyne, 5 N = 5 × 10⁵ dyne.'},
{q:'An energy of 2 J is equal to:',o:['2 × 10⁵ erg','2 × 10⁶ erg','2 × 10⁷ erg','2 × 10⁸ erg'],a:2,e:'Since 1 J = 10⁷ erg, 2 J = 2 × 10⁷ erg.'},
{q:'Which statement correctly distinguishes a fundamental unit from a derived unit?',o:['A fundamental unit is obtained from other units','A derived unit is independently defined','A fundamental unit is independently chosen, while a derived unit is obtained from fundamental units','There is no difference'],a:2,e:'Fundamental units are independently defined; derived units are expressed in terms of fundamental units.'},
{q:'In a coherent system of units, the numerical factor in a derived unit relation is:',o:['Always 10','Always 100','Always 1','Always 0'],a:2,e:'In a coherent system, derived units are formed from base units without an additional numerical conversion factor.'},
{q:'Which pair contains only derived SI units?',o:['Metre and second','Kilogram and ampere','Newton and joule','Kelvin and mole'],a:2,e:'Newton and joule are derived SI units; metre, second, kilogram, ampere, kelvin and mole are base units.'},
{q:'Which sequence correctly matches system and fundamental units?',o:['CGS—cm,g,s; MKS—m,kg,s; FPS—ft,lb,s','CGS—m,kg,s; MKS—cm,g,s; FPS—ft,kg,s','CGS—ft,lb,s; MKS—m,g,s; FPS—cm,g,s','CGS—cm,kg,s; MKS—m,g,s; FPS—ft,lb,s'],a:0,e:'CGS uses cm-g-s, MKS uses m-kg-s, and FPS traditionally uses ft-lb-s.'},
{q:'Which statement is correct about MKS and SI?',o:['MKS and SI are completely unrelated systems','MKS uses metre, kilogram and second, while SI is the modern international system containing these as base units','SI uses centimetre, gram and second as its base units','MKS is an FPS system'],a:1,e:'MKS is a metric system based on metre, kilogram and second; SI developed into the internationally accepted system with seven base units.'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};
window.SkillUpMCQBanks['systems of units']=questions;
})();