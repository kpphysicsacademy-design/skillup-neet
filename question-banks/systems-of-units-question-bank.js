/* SkillUp NEET Physics — System of Units — Standard NEET MCQs — Deployment Sync */
(function(){
const questions=[
{q:'Which of the following is a system of units?',o:['Newton','CGS','Joule','Pascal'],a:1,e:'CGS is a system of units. Newton, joule and pascal are units of derived quantities.'},
{q:'CGS stands for:',o:['Centimetre-Gram-Second','Centimetre-Kilogram-Second','Centimetre-Gram-System','Centimetre-Gravitational-Second'],a:0,e:'CGS stands for centimetre, gram and second.'},
{q:'MKS stands for:',o:['Metre-Gram-Second','Metre-Kilogram-Second','Millimetre-Kilogram-Second','Metre-Kelvin-Second'],a:1,e:'MKS stands for metre, kilogram and second.'},
{q:'FPS stands for:',o:['Foot-Pound-Second','Foot-Pascal-Second','Force-Pound-Second','Foot-Pressure-Second'],a:0,e:'FPS stands for foot, pound and second.'},
{q:'Which system uses centimetre, gram and second as its basic units?',o:['SI','MKS','CGS','FPS'],a:2,e:'CGS is based on centimetre, gram and second.'},
{q:'Which system uses metre, kilogram and second as its basic units?',o:['CGS','MKS','FPS','British system'],a:1,e:'MKS is based on metre, kilogram and second.'},
{q:'Which system traditionally uses foot, pound and second as its basic units?',o:['CGS','SI','MKS','FPS'],a:3,e:'FPS traditionally uses foot, pound and second.'},
{q:'Which of the following is a metric system of units?',o:['FPS','CGS','British FPS','None of these'],a:1,e:'CGS is a metric system based on centimetre, gram and second.'},
{q:'Which pair represents the CGS and MKS systems respectively?',o:['cm-g-s and m-kg-s','m-kg-s and cm-g-s','ft-lb-s and m-kg-s','cm-kg-s and m-g-s'],a:0,e:'CGS uses cm-g-s, while MKS uses m-kg-s.'},
{q:'Which system is based on the metre, kilogram and second and was widely used before SI?',o:['CGS','MKS','FPS','British gravitational system'],a:1,e:'MKS is the metre-kilogram-second metric system that preceded the modern SI framework.'},
{q:'The SI system is best described as:',o:['A CGS system','A modern international system of units','An FPS system','A gravitational system'],a:1,e:'SI is the modern International System of Units.'},
{q:'Which system is based on centimetre, gram and second?',o:['MKS','FPS','CGS','SI'],a:2,e:'CGS is based on centimetre, gram and second.'},
{q:'Which system is based on metre, kilogram and second?',o:['CGS','MKS','FPS','CGS-MKS'],a:1,e:'MKS is based on metre, kilogram and second.'},
{q:'Which system traditionally uses foot for length?',o:['CGS','MKS','SI','FPS'],a:3,e:'The FPS system traditionally uses foot as its length unit.'},
{q:'Which system traditionally uses pound as its mass unit?',o:['CGS','MKS','SI','FPS'],a:3,e:'The traditional FPS system uses pound for mass.'},
{q:'Which system uses centimetre as its length unit?',o:['CGS','MKS','FPS','SI'],a:0,e:'Centimetre is the length unit of the CGS system.'},
{q:'Which system uses gram as its mass unit?',o:['MKS','CGS','FPS','SI'],a:1,e:'Gram is the mass unit of the CGS system.'},
{q:'Which system uses kilogram as its mass unit?',o:['CGS','FPS','MKS','British FPS'],a:2,e:'Kilogram is the mass unit of the MKS system.'},
{q:'Which statement correctly compares CGS and MKS?',o:['Both use metre and kilogram','CGS uses cm and g, while MKS uses m and kg','CGS uses m and kg, while MKS uses cm and g','Both use foot and pound'],a:1,e:'CGS uses centimetre and gram, whereas MKS uses metre and kilogram.'},
{q:'Which statement correctly compares MKS and SI?',o:['Both are FPS systems','MKS uses m-kg-s, while SI is the modern international system with seven base units','SI uses cm-g-s','MKS uses ft-lb-s'],a:1,e:'MKS is based on metre, kilogram and second; SI is the modern international system with seven base units.'},
{q:'Which sequence correctly matches the systems with their basic units?',o:['CGS—cm,g,s; MKS—m,kg,s; FPS—ft,lb,s','CGS—m,kg,s; MKS—cm,g,s; FPS—ft,kg,s','CGS—ft,lb,s; MKS—m,g,s; FPS—cm,g,s','CGS—cm,kg,s; MKS—m,g,s; FPS—ft,lb,s'],a:0,e:'CGS, MKS and FPS correspond to cm-g-s, m-kg-s and ft-lb-s respectively.'},
{q:'Which pair of systems is entirely metric?',o:['CGS and MKS','MKS and FPS','FPS and British gravitational','FPS and CGS'],a:0,e:'CGS and MKS are metric systems; FPS is based on foot and pound.'},
{q:'The main purpose of a system of units is to:',o:['Define only mass','Provide a consistent set of units for physical measurements','Replace physical quantities','Define only derived quantities'],a:1,e:'A system of units provides an agreed and consistent framework for measuring physical quantities.'},
{q:'Which of the following is NOT a system of units?',o:['CGS','MKS','FPS','Newton'],a:3,e:'Newton is a derived unit of force, not a system of units.'},
{q:'In the CGS system, the unit of force is:',o:['Newton','Dyne','Joule','Watt'],a:1,e:'Dyne is the CGS unit of force.'},
{q:'In the CGS system, the unit of work is:',o:['Joule','Newton','Erg','Watt'],a:2,e:'Erg is the CGS unit of work and energy.'},
{q:'In the CGS system, the unit of pressure is:',o:['Pascal','Dyne','Barye','Erg'],a:2,e:'Barye is the CGS unit of pressure.'},
{q:'One dyne is equal to:',o:['10⁻⁵ N','10⁵ N','10⁻³ N','10³ N'],a:0,e:'One dyne equals 10⁻⁵ newton.'},
{q:'One erg is equal to:',o:['10⁻⁵ J','10⁻⁷ J','10⁷ J','10³ J'],a:1,e:'One erg equals 10⁻⁷ joule.'},
{q:'Which statement correctly identifies the relationship between MKS and SI?',o:['SI is based on CGS units','MKS and SI have no connection','MKS forms the mechanical core of SI, but SI contains seven base quantities','SI is an FPS system'],a:2,e:'MKS provides metre, kilogram and second, which are also SI base units for length, mass and time; SI extends the base system to seven quantities.'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};
window.SkillUpMCQBanks['system of units']=questions;
window.SkillUpMCQBanks['systems of units']=questions;
})();