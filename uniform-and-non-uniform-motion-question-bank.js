window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};
window.SkillUpMCQBanks['uniform and non-uniform motion']=[
{q:'A body is said to be in uniform motion when it covers:',o:['Equal distances in equal intervals of time','Unequal distances in equal intervals of time','Equal distances in unequal intervals of time','Zero distance in equal intervals'],a:0,e:'Uniform motion means equal distances in equal intervals of time.'},
{q:'In uniform motion along a straight line, the velocity is:',o:['Variable','Constant','Zero','Infinite'],a:1,e:'Uniform rectilinear motion has constant velocity.'},
{q:'A body covers 10 m every second along a straight line. Its motion is:',o:['Non-uniform','Uniform','Circular','Random'],a:1,e:'Equal distances are covered in equal time intervals in the same direction.'},
{q:'A body covers 5 m in the first second, 10 m in the second second and 15 m in the third second. The motion is:',o:['Uniform','Non-uniform','At rest','Uniform velocity'],a:1,e:'Unequal distances in equal time intervals indicate non-uniform motion.'},
{q:'Which quantity remains constant in uniform rectilinear motion?',o:['Position','Velocity','Displacement','Distance from origin'],a:1,e:'Both speed and direction remain constant, so velocity is constant.'},
{q:'For uniform motion, the position-time graph is:',o:['A straight line','A parabola','A circle','A hyperbola'],a:0,e:'Constant velocity gives a constant slope, hence a straight position-time graph.'},
{q:'The slope of a position-time graph represents:',o:['Acceleration','Velocity','Distance','Force'],a:1,e:'Slope of a position-time graph gives instantaneous velocity.'},
{q:'A horizontal position-time graph represents:',o:['Uniform velocity','Constant acceleration','Rest','Non-uniform motion'],a:2,e:'Constant position means the body is at rest.'},
{q:'A straight position-time graph with positive slope represents:',o:['Constant positive velocity','Constant negative velocity','Zero velocity','Increasing velocity'],a:0,e:'A positive constant slope corresponds to constant positive velocity.'},
{q:'A straight position-time graph with negative slope represents:',o:['Constant positive velocity','Constant negative velocity','Zero velocity','Increasing speed'],a:1,e:'A negative constant slope corresponds to constant negative velocity.'},
{q:'Non-uniform motion occurs when a body:',o:['Covers equal distances in equal time intervals','Has constant velocity','Covers unequal distances in equal time intervals','Remains at rest'],a:2,e:'Unequal distances in equal intervals indicate changing speed.'},
{q:'A car travels 20 m in the first second and 20 m in the next second along the same straight line. Its motion is:',o:['Uniform','Non-uniform','Accelerated necessarily','Circular'],a:0,e:'Equal distances in equal time intervals with unchanged direction indicate uniform motion.'},
{q:'A car travels 20 m in the first second and 30 m in the next second. Its motion is:',o:['Uniform','Non-uniform','At rest','Uniform velocity'],a:1,e:'Different distances in equal time intervals mean the motion is non-uniform.'},
{q:'A body can have uniform speed but non-uniform velocity when:',o:['It moves in a straight line','Its direction changes','It remains at rest','Its position is constant'],a:1,e:'Velocity depends on both speed and direction; changing direction changes velocity.'},
{q:'Uniform circular motion is:',o:['Uniform velocity motion','Uniform speed but non-uniform velocity motion','Non-uniform speed and uniform velocity motion','Motion with zero acceleration'],a:1,e:'Speed is constant, but velocity changes continuously because direction changes.'},
{q:'A particle moving with constant velocity has:',o:['Constant acceleration','Zero acceleration','Increasing acceleration','Variable acceleration'],a:1,e:'Constant velocity means there is no change in velocity, so acceleration is zero.'},
{q:'A particle moves with constant speed in a straight line without changing direction. Its velocity is:',o:['Constant','Variable','Zero','Infinite'],a:0,e:'Constant speed plus constant direction gives constant velocity.'},
{q:'Average speed is defined as:',o:['Total displacement/total time','Total distance/total time','Final velocity/initial velocity','Change in velocity/time'],a:1,e:'Average speed equals total distance divided by total time.'},
{q:'Average velocity is:',o:['Total distance/total time','Total displacement/total time','Total distance × total time','Speed × time'],a:1,e:'Average velocity equals total displacement divided by total time.'},
{q:'A particle travels 100 m in 10 s along a straight line in one direction. Its average speed is:',o:['5 m/s','10 m/s','20 m/s','100 m/s'],a:1,e:'Average speed = 100/10 = 10 m/s.'},
{q:'A body travels 60 m east and then 40 m west. The total distance is:',o:['20 m','40 m','60 m','100 m'],a:3,e:'Distance is total path length: 60 + 40 = 100 m.'},
{q:'For the motion in the previous question, the magnitude of displacement is:',o:['20 m','40 m','60 m','100 m'],a:0,e:'Net displacement = 60 - 40 = 20 m east.'},
{q:'A body completes a round trip and returns to its starting point. Its average velocity is:',o:['Equal to average speed','Zero','Maximum','Negative'],a:1,e:'Net displacement is zero, so average velocity is zero.'},
{q:'For a body moving in a straight line with constant speed, the distance-time graph is:',o:['A straight line','A parabola','A horizontal curve','A circle'],a:0,e:'Constant speed gives a constant slope on the distance-time graph.'},
{q:'The slope of a distance-time graph represents:',o:['Acceleration','Speed','Displacement','Force'],a:1,e:'Slope of a distance-time graph gives speed.'},
{q:'If the slope of a distance-time graph increases with time, the speed is:',o:['Constant','Decreasing','Increasing','Zero'],a:2,e:'A progressively steeper distance-time graph indicates increasing speed.'},
{q:'A body moves with velocities 10 m/s, 10 m/s and 10 m/s during three successive equal time intervals. Its motion is:',o:['Uniform','Non-uniform','Accelerated','Retarded'],a:0,e:'Constant velocity during equal intervals means uniform rectilinear motion.'},
{q:'A body moves with velocities 5 m/s, 10 m/s and 15 m/s during successive equal time intervals. Its motion is:',o:['Uniform','Non-uniform','At rest','Uniform velocity'],a:1,e:'Velocity changes between successive equal intervals, so motion is non-uniform.'},
{q:'Which statement is correct?',o:['Uniform speed always means uniform velocity','Uniform velocity requires both constant speed and constant direction','Non-uniform motion always has zero acceleration','A body at rest has nonzero velocity'],a:1,e:'Velocity is constant only when both magnitude and direction remain constant.'},
{q:'A body moves along a straight line with constant velocity 8 m/s. Its displacement in 5 s is:',o:['13 m','20 m','40 m','64 m'],a:2,e:'For constant velocity, displacement = vt = 8 × 5 = 40 m.'}
];
/* Allow the separately loaded Uniformly Accelerated Motion bank to participate in the existing Physics resolver. */
(()=>{
 const bank=window.SkillUpMCQBanks['uniformly accelerated motion'];
 if(!bank)return;
 let current=null;
 Object.defineProperty(window,'SkillUpPhysicsBanks',{configurable:true,get(){return current},set(v){current=v;if(current)current['Uniformly Accelerated Motion']=bank;}});
})();