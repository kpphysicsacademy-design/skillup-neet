(function(){
const questions=[
{q:'A length is measured several times as 10.1 cm, 10.2 cm and 10.3 cm. What is the mean value?',o:['10.1 cm','10.2 cm','10.3 cm','10.6 cm'],a:1,e:'Mean = (10.1 + 10.2 + 10.3)/3 = 10.2 cm.'},
{q:'If measured values are x₁, x₂, …, xₙ with mean x̄, the absolute error in one reading is:',o:['xᵢ + x̄','|xᵢ − x̄|','xᵢ/x̄','xᵢx̄'],a:1,e:'Absolute error of a reading is the magnitude of its deviation from the mean: |xᵢ − x̄|.'},
{q:'The mean absolute error is obtained by:',o:['Adding all readings','Averaging the absolute errors','Multiplying all absolute errors','Dividing the mean by n'],a:1,e:'Mean absolute error is the sum of absolute errors divided by the number of readings.'},
{q:'A measured value is 20.0 cm with absolute uncertainty 0.2 cm. Its relative uncertainty is:',o:['0.001','0.01','0.1','1'],a:1,e:'Relative uncertainty = 0.2/20.0 = 0.01.'},
{q:'For the measurement 20.0 cm ± 0.2 cm, the percentage uncertainty is:',o:['0.1%','1%','2%','10%'],a:1,e:'Percentage uncertainty = (0.2/20.0) × 100 = 1%.'},
{q:'A metre scale has its smallest division equal to 1 mm. Taking half the smallest division as instrumental uncertainty, the uncertainty is:',o:['±0.05 mm','±0.5 mm','±1 mm','±2 mm'],a:1,e:'Half of 1 mm is 0.5 mm.'},
{q:'Which statement best distinguishes accuracy from precision?',o:['Accuracy is closeness to true value; precision is closeness among repeated readings','Accuracy and precision always mean the same thing','Accuracy means more significant figures; precision means larger values','Accuracy is the unit used; precision is the instrument range'],a:0,e:'Accuracy concerns closeness to the true value, while precision concerns consistency of repeated measurements.'},
{q:'Random errors can generally be reduced by:',o:['Repeating measurements and taking the mean','Changing the unit system','Ignoring all readings','Using fewer measurements'],a:0,e:'Repeated measurements with averaging help reduce the effect of random errors.'},
{q:'A zero error that remains constant in the same direction is classified as:',o:['Random error','Systematic error','Gross error','Percentage error'],a:1,e:'A consistent offset is a systematic error.'},
{q:'If a scale reads 0.2 cm when the true zero should be 0.0 cm, its zero error is:',o:['+0.2 cm','−0.2 cm','0.0 cm','+2.0 cm'],a:0,e:'Zero error is the indicated reading at true zero, so it is +0.2 cm.'},
{q:'A length is measured as 5.0 cm while the accepted value is 5.2 cm. The absolute error is:',o:['0.02 cm','0.2 cm','2 cm','10.2 cm'],a:1,e:'Absolute error = |5.0 − 5.2| = 0.2 cm.'},
{q:'For the values 5.0 cm measured and 5.2 cm accepted, the percentage error is approximately:',o:['0.38%','3.85%','38.5%','385%'],a:1,e:'Percentage error = (0.2/5.2) × 100 ≈ 3.85%.'},
{q:'If Z = A + B and the absolute uncertainties are ΔA and ΔB, the maximum uncertainty in Z is:',o:['ΔA − ΔB','ΔA + ΔB','ΔAΔB','ΔA/ΔB'],a:1,e:'For addition, maximum absolute uncertainties add: ΔZ = ΔA + ΔB.'},
{q:'If Z = A − B, the maximum absolute uncertainty in Z is:',o:['ΔA − ΔB','ΔA + ΔB','ΔAΔB','ΔA/ΔB'],a:1,e:'For subtraction, maximum absolute uncertainties also add.'},
{q:'If Z = AB, the maximum fractional uncertainty is:',o:['ΔA + ΔB','ΔA/A + ΔB/B','ΔA/A − ΔB/B','AB/(ΔAΔB)'],a:1,e:'For a product, fractional uncertainties add.'},
{q:'If Z = A/B, the maximum fractional uncertainty is:',o:['ΔA/A + ΔB/B','ΔA/A − ΔB/B','ΔAΔB','A/B'],a:0,e:'For a quotient, fractional uncertainties add.'},
{q:'If Z = A², then the fractional uncertainty in Z is:',o:['ΔA/A','2ΔA/A','(ΔA/A)²','A/(2ΔA)'],a:1,e:'For a power, fractional uncertainty is multiplied by the magnitude of the exponent: ΔZ/Z = 2ΔA/A.'},
{q:'A = 10.0 ± 0.2 and B = 5.0 ± 0.1. For Z = A + B, ΔZ is:',o:['0.1','0.2','0.3','0.4'],a:2,e:'Absolute uncertainties add: ΔZ = 0.2 + 0.1 = 0.3.'},
{q:'A = 10.0 ± 0.2 and B = 5.0 ± 0.1. For Z = AB, the fractional uncertainty is:',o:['0.01','0.02','0.04','0.06'],a:2,e:'ΔZ/Z = 0.2/10.0 + 0.1/5.0 = 0.02 + 0.02 = 0.04.'},
{q:'A quantity is reported as (25.0 ± 0.5) m. Its percentage uncertainty is:',o:['0.2%','2%','5%','20%'],a:1,e:'(0.5/25.0) × 100 = 2%.'},
{q:'A measured time is 2.00 s ± 0.02 s. The relative uncertainty is:',o:['0.001','0.01','0.02','0.1'],a:0,e:'Relative uncertainty = 0.02/2.00 = 0.01? Wait: 0.02/2.00 = 0.01, so the correct option is 0.01.'},
{q:'Which type of error is most likely caused by parallax when reading a scale?',o:['Systematic error','Random error only','Unit error','Dimensional error'],a:0,e:'A consistent viewing-position bias can produce a systematic reading error.'},
{q:'An instrument with smaller least count generally has:',o:['Lower resolution','Higher resolution','No uncertainty','No possible systematic error'],a:1,e:'A smaller least count allows finer changes to be resolved.'},
{q:'Two sets of readings are taken: Set P is tightly grouped but far from the accepted value; Set Q is spread out but centered near the accepted value. Which is correct?',o:['P is precise; Q is accurate on average','P is accurate and precise; Q is neither','P is neither; Q is precise only','P and Q are equally precise and accurate'],a:0,e:'P has strong repeatability, while Q has an average near the accepted value.'},
{q:'If x = (12.0 ± 0.3) cm, the possible measured interval is:',o:['11.7 to 12.3 cm','11.0 to 13.0 cm','11.97 to 12.03 cm','12.3 to 12.6 cm'],a:0,e:'The interval is x ± Δx = 12.0 ± 0.3 cm, giving 11.7 to 12.3 cm.'},
{q:'A measured quantity is 50.025 g with absolute uncertainty 0.0025 g. Its relative uncertainty is:',o:['5 × 10⁻⁵','5 × 10⁻⁴','5 × 10⁻³','5 × 10⁻²'],a:0,e:'0.0025/50.025 ≈ 5 × 10⁻⁵.'},
{q:'For a quantity Z = A³B², the maximum fractional uncertainty is:',o:['3ΔA/A + 2ΔB/B','ΔA/A + ΔB/B','3ΔA/A − 2ΔB/B','(ΔA/A)³ + (ΔB/B)²'],a:0,e:'For powers and products, the fractional uncertainties are multiplied by the powers and then added.'},
{q:'If A has 1% uncertainty and B has 2% uncertainty, the maximum percentage uncertainty in AB is:',o:['1%','2%','3%','4%'],a:2,e:'For multiplication, percentage uncertainties add: 1% + 2% = 3%.'},
{q:'If A has 2% uncertainty, the maximum percentage uncertainty in A³ is:',o:['2%','3%','6%','8%'],a:2,e:'For A³, percentage uncertainty is 3 × 2% = 6%.'},
{q:'Which practice best reduces gross or human errors in measurement?',o:['Careful observation and repeating suspicious readings','Using fewer readings','Ignoring instrument calibration','Changing units after every reading'],a:0,e:'Careful observation and checking/repeating doubtful readings help prevent avoidable human mistakes.'}
];
questions[20].o=['0.001','0.01','0.02','0.1'];questions[20].a=1;
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};window.SkillUpMCQBanks['errors in measurements']=questions;
})();