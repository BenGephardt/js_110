/*
Problem
- Input: Numbers (age in years from user)
- Output: Two Strings (stating years)
- Rules: 
  - Prompt user for current age and retirement age
  - Assume user will enter whole, reasonable, postive numbers
  - Determine remaining years, current year and retirement year
  - Log current year and retirement year
  - Log remaining Years
  - Match output string to example format, stating years:
    - Current
    - retirement
    - Remaining
Examples
    - 30, 70 -> It's 2017. You will retire in 2057.
                You have only 40 years of work to go!
    - 35, 70 -> It's 2025. You will retire in 2061
                You have only 35 years of work to go!
Algorithm
   1. Variables `currentAge` and `retirementAge` set to return value from user prompts, converted to numbers.
   2. Determine remaining years (`retirementAge` - `currentAge`)
   3. Determine current year.
   4. Log current year and retirement year in example format
   5. Log years left to work in example format
*/

const readline = require('readline-sync');

const currentAge = Number(readline.question('What is your age? '));
const retirementAge = Number(readline.question('At what age would you like to retire? '));

const remainingYears = retirementAge - currentAge;
const currentYear = new Date().getFullYear();
const retirementYear = currentYear + remainingYears;

console.log();
console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${remainingYears} years of work to go!`);