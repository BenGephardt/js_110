/*
Prompt
Write a program that asks the user to enter an integer greater than 0, then asks if the user
wants to determine the sum or product of all numbers between 1 and the entered integer,
inclusive.

Problem
  - Input: Number (integer > 0), String ('s' or 'p')
  - Output: String (sum or product) logged to the console

  - Rules:
    - Explicit:
      - Prompt user for an integer greater than 0.
      - Prompt user to choose between sum ('s') or product ('p').
      - Perform calculation (either sum or product).
      - Calculation to include all integers, 1 through entered integer.
      - Log result to console.

    - Implicit:
      - range is 1 (inclusive) to the integer ().
      - Output string to match example format.

  - Mental Model:
      - User chooses 5 and 's': 1 + 2 + 3 + 4 + 5 = 15
      - User chooses 6 and 'p': 1 * 2 * 3 * 4 * 5 * 6 = 720

Examples / Test Cases
  - Given:
    Please enter an integer greater than 0: 5
    Enter "s" to compute the sum, or "p" to compute the product. s

    The sum of the integers between 1 and 5 is 15.

    Please enter an integer greater than 0: 6
    Enter "s" to compute the sum, or "p" to compute the product. p

    The product of the integers between 1 and 6 is 720.

Data Structure
  - Input: One Number and one String
  - Calculations: Numbers
  - Output: String.

Algorithm
  1.  Prompt user for an integer greater than 0.
  2.  Initialize a variable `integer` to store the user's input, converted to a number.
  3.  Prompt the user to enter 's' for sum or 'p' for product.
  4.  Initialize a variable `operation` to store the user's input.
  5.  Check the value of `operation`:
  6.  - If `operation` is 's':
        - Initialize a variable `sum` to 0.
        - Create a loop that iterates from 1 up to `integer`.
        - On each iteration, add the current number to `sum`.
        - After the loop finishes, log a string to the console displaying the final `sum`.
      - If `operation` is 'p':
        - Initialize a variable `product` to 1.
        - Create a loop that iterates from 1 up to `integer`.
        - On each iteration, multiply `product` by the current number.
        - After the loop finishes, log a string to the console displaying the final `product`.
*/

let readline = require('readline-sync');

function computeSum(targetNumber) {
  let total = 0;
  for (let num = 1; num <= targetNumber; num++) {
    total += num;
  }
  return total;
}

function computeProduct(targetNumber){
  let total = 1;
  for (let num = 1; num <= targetNumber; num++) {
    total *= num;
  }
  return total;
}

function calculateResult(letter, targetNumber) {
  if (letter === 's') return computeSum(targetNumber);
  if (letter === 'p') return computeProduct(targetNumber);
}

function askForInteger() {
  let targetNumber = Number(readline
    .question('Please enter an integer greater than 0: '));

  while (!Number.isInteger(targetNumber) || targetNumber <= 0) {
    console.log('Invalid input. Please enter an integer greater than 0.');
    targetNumber = Number(readline
      .question('Please enter an integer greater than 0: '));
  }

  return targetNumber;
}

function askForOperation() {
  let letter = readline
    .question('Enter "s" to compute the sum, or "p" to compute the product. ')
    .toLowerCase();

  while (letter !== 'p' && letter !== 's') {
    console.log('Invalid input. Please enter "s" or "p".');
    letter = readline
      .question('Enter "s" to compute the sum, or "p" to compute the product. ')
      .toLowerCase();
  }

  return letter;
}

let integer = askForInteger();
let operationLetter = askForOperation();
let result = calculateResult(operationLetter, integer);
let word = operationLetter === 's' ? 'sum' : 'product';

console.log(
  `The ${word} of the integers between 1 and ${integer} is ${result}.`
);