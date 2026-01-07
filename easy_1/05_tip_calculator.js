/*
Prompt
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill
to the console. You can ignore input validation and assume that the user will enter valid 
positive numbers.

Problem
  - Input: Numbers (bill amount and tip rate)
  - Output: String (tip amount and total bill) logged into console

  - Rules:
    - Explicit:
      - Prompt bill amount and tip rate (percentage)
      - Compute tip amount and total bill
      - Log tip amount and total bill into console

    - Implicit:
      - Use readlineSync for user input
      - Bill amount: dollars/cents
      - Output formated to 2 decimal places
      - Match output format in example

  - Mental Model:
      - Tip amount = bill amount * (tip rate / 100)
      - Total bill = bill amount + tip amount

Examples / Test Cases
  - Given:
    What is the bill? 200
    What is the tip percentage? 15

    The tip is $30.00
    The total is $230.00

Data Structure
  - Input and calculations: Numbers
  - Output: String

Algorithm
  1. Prompt user for the bill amount (dollars/cents).
  2. Initialize variable `bill` to store user input, converted to a number.
  3. Prompt the user for the tip percentage (%).
  4. Initialize variable `tipPercentage` to store user input, converted to a number.
  5. Initialize variable `tipMultiplier` to store calculated tip multiplier,(`tipPercentage / 100`).
  6. Initialize variable `tip` to store calculated tip amount (`bill` * `tipMultiplier`).
  7. Initialize variable `total` to store calculated total bill (bill + tip).
  8. Log string with template literals to console:
     - Display calculated tip and total, each formatted to two decimal places/prefixed with dollar signs.
*/

let readline = require('readline-sync');

let bill = Number(readline.question('What is the bill? '));
let tipPercentage = Number(readline.question('What is the tip percentage? '));

let tipMultiplier = tipPercentage / 100;
let tip = bill * tipMultiplier;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)} \n The total is $${total.toFixed(2)}`);