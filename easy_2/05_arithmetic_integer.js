/*
Problem
- Input: Two positive integers (through prompts)
- Output: Strings of numbers and operators 
- Rules: 
  - Prompt user for two positive integers.
  - Preform and print six different operations on the two integers.
  - Operations:
      - addition
      - subtraction
      - product
      - quotient
      - remainder
      - power
  - Include the results of all operations in their respective operation rows.
  - Assume all input is valid.
  - Match output format in example:
  - Division result is truncated to an integer using Math.floor
  - Power result is a floating-point value 
Examples
  - Given
    - 23, 17 -> 
        23 + 17 = 40
        23 - 17 = 6
        23 * 17 = 391
        23 / 17 = 1
        23 % 17 = 6
        23 ** 17 = 1.4105003956066297e+23
Algorithm
  1. prompt user for first operand, store in variable `firstNumber`
  2. Prompt user for second operand, store in variable `secondNumber`
  3. Define and Execute Operations:
     - Create an object with keys of operator symbols and values of functions that perform their corresponding key operations.
     - Convert to an array with Object.entries()
     - Iterate, for each operator-function pair:
     - Execute the property value function with `firstNumber` and `secondNumber` as arguments.
     - Log a string with template literals displaying both numbers, the full operation (including the operator) equals the result in the same format as the example.
*/

const readline = require('readline-sync');

const firstNumber = Number(readline.question('==> Enter the first number:\n'));
const secondNumber = Number(readline.question('==> Enter the second number:\n'));

function printOperations(operand1, operand2) {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.floor(a / b),
    '%': (a, b) => a % b,
    '**': (a, b) => a ** b,
  };

  Object.entries(operations).forEach(([operator, operation]) => {
  console.log(
    `==> ${operand1} ${operator} ${operand2} = ${operation(operand1, operand2)}`
    );
    
  });
}

printOperations(firstNumber, secondNumber);