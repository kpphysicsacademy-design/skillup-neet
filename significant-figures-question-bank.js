(function(){
const questions=[
{q:'How many significant figures are in 0.00520?',o:['2','3','4','5'],a:1,e:'Leading zeros are not significant; 5, 2 and the final zero are significant.'},
{q:'How many significant figures are in 300.0?',o:['1','2','3','4'],a:3,e:'The decimal notation makes all four digits significant.'},
{q:'How many significant figures are in 3.040?',o:['2','3','4','5'],a:2,e:'Zeros between non-zero digits and the trailing decimal zero are significant.'},
{q:'How many significant figures are in 0.0007?',o:['1','2','3','4'],a:0,e:'Leading zeros are placeholders; only 7 is significant.'},
{q:'How many significant figures are in 7.00 × 10^3?',o:['1','2','3','4'],a:2,e:'The coefficient 7.00 has three significant figures.'},
{q:'Which zero is always significant?',o:['A leading zero','A zero between non-zero digits','A zero before the decimal point only','A placeholder zero'],a:1,e:'A captive zero between non-zero digits is significant.'},
{q:'The result of 12.11 + 0.3 should be:',o:['12.41','12.4','12.410','12'],a:1,e:'Addition is rounded to the least number of decimal places: one.'},
{q:'The result of 5.72 − 2.1 should be:',o:['3.62','3.6','3.620','4'],a:1,e:'Subtraction follows decimal-place rules, so the result is 3.6.'},
{q:'The result of 2.5 × 3.42 should have:',o:['2 significant figures','3 significant figures','4 significant figures','5 significant figures'],a:0,e:'Multiplication follows the least significant figures: 2.'},
{q:'The result of 8.40 ÷ 2.0 should have:',o:['1 significant figure','2 significant figures','3 significant figures','4 significant figures'],a:1,e:'The answer has the least number of significant figures: 2.'},
{q:'Which value has exactly four significant figures?',o:['0.0045','4.500','45.00','450'],a:2,e:'45.00 has four significant figures.'},
{q:'Which value has exactly two significant figures?',o:['0.050','5.0','50.0','500.0'],a:1,e:'5.0 has two significant figures.'},
{q:'In 2.030 × 10^5, the number of significant figures is:',o:['3','4','5','6'],a:1,e:'2, 0, 3 and 0 are all significant in the coefficient 2.030.'},
{q:'A measured value is 6.378 and must be rounded to three significant figures. It becomes:',o:['6.37','6.38','6.40','6.3'],a:1,e:'The fourth digit is 8, so 6.37 rounds to 6.38.'},
{q:'Round 0.009876 to two significant figures:',o:['0.0098','0.0099','0.010','0.098'],a:1,e:'The first two significant digits are 9 and 8; the next digit 7 rounds 8 upward.'},
{q:'Which statement about exact numbers is correct?',o:['They always have one significant figure','They have unlimited significant figures','They have zero significant figures','They cannot be used in calculations'],a:1,e:'Exact counted or defined numbers are treated as having unlimited significant figures.'},
{q:'The number of significant figures in 100 is:',o:['Always 1','Always 2','Always 3','Ambiguous without notation'],a:3,e:'Without a decimal point or scientific notation, trailing-zero precision is ambiguous.'},
{q:'Which notation clearly represents two significant figures for one hundred?',o:['100','1 × 10^2','1.0 × 10^2','1.00 × 10^2'],a:2,e:'1.0 × 10^2 clearly has two significant figures.'},
{q:'Which notation clearly represents three significant figures for one hundred?',o:['1 × 10^2','10 × 10^1','1.00 × 10^2','100'],a:2,e:'1.00 × 10^2 contains three significant figures.'},
{q:'When multiplying measured quantities, rounding should generally be done:',o:['To the largest decimal places','To the least significant figures','To the nearest integer always','Before every intermediate step'],a:1,e:'Products and quotients use the least number of significant figures.'},
{q:'When adding measured quantities, rounding should generally be done:',o:['To the least decimal places','To the least significant figures','To one decimal always','To the largest decimal places'],a:0,e:'Sums and differences use the least number of decimal places.'},
{q:'How many significant figures are in 1.000?',o:['1','2','3','4'],a:3,e:'All trailing zeros after the decimal point are significant.'},
{q:'How many significant figures are in 0.01020?',o:['2','3','4','5'],a:2,e:'The significant digits are 1, 0, 2, 0.'},
{q:'Which is the correctly rounded form of 9.995 to three significant figures?',o:['9.99','10.0','10.00','9.995'],a:1,e:'Rounding to three significant figures gives 10.0.'},
{q:'If a measurement is reported as 2.50 cm, the last digit indicates:',o:['Only the exact value','The measurement precision','Zero error only','The unit definition'],a:1,e:'The final reported digit communicates the measurement precision.'},
{q:'Which quantity has the greatest stated precision?',o:['5 m','5.0 m','5.00 m','5.000 m'],a:3,e:'5.000 m reports the finest stated resolution among these values.'},
{q:'Zeros between two non-zero digits are called:',o:['Leading zeros','Captive zeros','Terminal zeros','Random zeros'],a:1,e:'Captive zeros are significant.'},
{q:'In scientific notation, significant figures are determined by:',o:['The power of ten','The coefficient','The unit only','The exponent sign'],a:1,e:'The coefficient contains the significant figures; the power of ten only sets scale.'},
{q:'The value 4.56 × 10^2 + 1.2 × 10^2 should be reported as:',o:['5.76 × 10^2','5.8 × 10^2','5.760 × 10^2','576'],a:1,e:'Align decimal places in the same power of ten; 5.76 × 10^2 rounds to 5.8 × 10^2.'},
{q:'A result 10.0/4.00 should contain:',o:['1 significant figure','2 significant figures','3 significant figures','4 significant figures'],a:2,e:'Both values have three significant figures in the limiting measurement.'}
];
window.SkillUpMCQBanks=window.SkillUpMCQBanks||{};window.SkillUpMCQBanks['significant figures']=questions;
if(window.SKILLUP_UNIFIED_MCQ)return;
})();