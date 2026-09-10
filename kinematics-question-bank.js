/* SkillUp NEET Physics — Kinematics: 30 MCQs with explanations */
(function(){
const questions=[
{q:'A particle moves from x = 2 m to x = 10 m in 4 s. What is its average velocity?',o:['2 m/s','8 m/s','0.5 m/s','12 m/s'],a:0,e:'Average velocity = displacement/time = (10 − 2)/4 = 2 m/s.'},
{q:'The slope of a position-time graph represents:',o:['velocity','acceleration','displacement','force'],a:0,e:'The slope is change in position divided by change in time, which is velocity.'},
{q:'The area under a velocity-time graph represents:',o:['displacement','acceleration','force','jerk'],a:0,e:'The area is velocity × time, giving displacement.'},
{q:'A body moving with constant velocity has:',o:['zero acceleration','constant acceleration','increasing acceleration','variable displacement only'],a:0,e:'Constant velocity means velocity does not change with time, so acceleration is zero.'},
{q:'If a body starts from rest and accelerates uniformly at 2 m/s² for 5 s, its final velocity is:',o:['10 m/s','5 m/s','7 m/s','20 m/s'],a:0,e:'Using v = u + at, v = 0 + 2 × 5 = 10 m/s.'},
{q:'For uniform acceleration, which equation is correct?',o:['v = u + at','v = u − a/t','v = at/u','v = u + a/t'],a:0,e:'For constant acceleration, the first equation of motion is v = u + at.'},
{q:'A particle has initial velocity 5 m/s and acceleration 3 m/s². Its velocity after 4 s is:',o:['17 m/s','12 m/s','8 m/s','20 m/s'],a:0,e:'v = u + at = 5 + 3 × 4 = 17 m/s.'},
{q:'A body starts from rest with acceleration 4 m/s². Its displacement in 3 s is:',o:['18 m','12 m','6 m','36 m'],a:0,e:'s = ut + ½at² = 0 + ½ × 4 × 9 = 18 m.'},
{q:'Which quantity is the rate of change of velocity?',o:['acceleration','speed','displacement','distance'],a:0,e:'Acceleration is defined as the rate of change of velocity with time.'},
{q:'If acceleration is constant, the velocity-time graph is:',o:['a straight line','a parabola','a circle','a horizontal line always'],a:0,e:'For constant acceleration, v = u + at, which is a linear relation between v and t.'},
{q:'A freely falling body near Earth, neglecting air resistance, has:',o:['constant acceleration g','zero acceleration','constant velocity','decreasing acceleration'],a:0,e:'Near Earth’s surface, gravitational acceleration is approximately constant at g.'},
{q:'At the highest point of a vertically thrown body:',o:['velocity is zero and acceleration is g downward','velocity and acceleration are both zero','velocity is maximum','acceleration is upward'],a:0,e:'At the highest point, instantaneous velocity is zero, but gravitational acceleration remains g downward.'},
{q:'A projectile is launched horizontally. Its initial vertical velocity is:',o:['zero','equal to horizontal velocity','g','maximum'],a:0,e:'For horizontal projection, the initial velocity has only a horizontal component, so vertical velocity is zero.'},
{q:'At the highest point of projectile motion:',o:['vertical component of velocity is zero','horizontal component of velocity is zero','acceleration is zero','speed is necessarily zero'],a:0,e:'Only the vertical component becomes zero; horizontal velocity remains constant and acceleration is g downward.'},
{q:'The horizontal component of velocity of an ideal projectile is:',o:['constant','zero throughout','increasing','decreasing'],a:0,e:'Ignoring air resistance, there is no horizontal acceleration, so horizontal velocity remains constant.'},
{q:'The range of a projectile on level ground is maximum when the angle of projection is:',o:['45°','30°','60°','90°'],a:0,e:'Range R = u² sin 2θ/g. It is maximum when sin 2θ = 1, giving θ = 45°.'},
{q:'The time of flight of a projectile projected with speed u at angle θ is:',o:['2u sinθ/g','u sinθ/g','2u cosθ/g','u² sinθ/g'],a:0,e:'For a projectile returning to the same level, T = 2u sinθ/g.'},
{q:'Two bodies have the same displacement in the same time interval. They have the same:',o:['average velocity','instantaneous velocity','acceleration','speed at every instant'],a:0,e:'Average velocity is displacement divided by the time interval, so equal displacement in equal time gives equal average velocity.'},
{q:'Distance travelled by a body can never be:',o:['negative','zero','positive','greater than displacement magnitude'],a:0,e:'Distance is a scalar path length and cannot be negative.'},
{q:'The magnitude of displacement is always:',o:['less than or equal to distance','greater than distance','equal to distance only for circular motion','negative'],a:0,e:'The shortest distance between initial and final positions cannot exceed the actual path length.'},
{q:'A body travels equal distances with speeds v and 2v. Its average speed is:',o:['4v/3','3v/2','v','2v'],a:0,e:'For equal distances, average speed = 2v₁v₂/(v₁+v₂) = 4v/3.'},
{q:'A body moves in a circle of radius r with speed v. Its centripetal acceleration is:',o:['v²/r','vr','r/v²','v/r²'],a:0,e:'Centripetal acceleration is a = v²/r and is directed toward the centre.'},
{q:'In uniform circular motion, which quantity continuously changes?',o:['velocity','speed','mass','radius'],a:0,e:'Speed may remain constant, but velocity changes continuously because its direction changes.'},
{q:'The centripetal acceleration in uniform circular motion is directed:',o:['towards the centre','away from the centre','along the tangent','vertically upward'],a:0,e:'Centripetal acceleration always points radially inward toward the centre.'},
{q:'The relation between linear speed v and angular speed ω for circular motion is:',o:['v = rω','v = r/ω','v = ω/r','v = rω²'],a:0,e:'Linear speed is related to angular speed by v = rω.'},
{q:'If a body completes one revolution in time T, its angular speed is:',o:['2π/T','T/2π','πT','2πT'],a:0,e:'One revolution corresponds to 2π radians, so ω = 2π/T.'},
{q:'A particle moving with uniform velocity has a position-time graph that is:',o:['a straight line with constant slope','a parabola','a circle','a vertical line always'],a:0,e:'Uniform velocity means position changes linearly with time, producing a straight line with constant slope.'},
{q:'If a velocity-time graph is a horizontal line above the time axis, the body has:',o:['constant positive velocity','constant positive acceleration','zero displacement','increasing speed'],a:0,e:'A horizontal v-t graph means velocity is constant. Above the time axis means it is positive.'},
{q:'For a body starting from rest with uniform acceleration, displacement varies with time as:',o:['t²','t','1/t','constant'],a:0,e:'With u = 0, s = ½at², so displacement is proportional to t².'},
{q:'Which equation connects final velocity, initial velocity, acceleration and displacement?',o:['v² = u² + 2as','v = u + at','s = ut + ½at²','s = vt'],a:0,e:'The third equation of motion is v² = u² + 2as and does not contain time.'},
{q:'A car slows from 20 m/s to 5 m/s in 3 s. Its acceleration is:',o:['−5 m/s²','5 m/s²','15 m/s²','25 m/s²'],a:0,e:'a = (v − u)/t = (5 − 20)/3 = −5 m/s². The negative sign indicates retardation.'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};
window.SkillUpMCQBanks['kinematics']=questions;
})();