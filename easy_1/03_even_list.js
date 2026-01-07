/*
Prompt
Log all even numbers from 1 to 99, inclusive, to the console, with each number 
on a separate line.

Problem
  - Input: None
  - Output: Even numbers (1 through 99 inclusive) to console

  - Rules:
    - Explicit:
      - Log all even numbers from 1 to 99 inclusive
      - Each number logged on a separate line

    - Implicit:
      - Only even numbers between 1 and 99 (inclusive) are output.

Examples / Test Cases
  - console output:
    2
    4
    ...
    98

Data Structure
  - Numbers

Algorithm
  1. for loop:
     - initialize a counter equal to 1
     - continue while counter <= 99
     - increment counter by 1
  2. If the current number is evenly divisible by 2:
     - log the current number to the console
**/

for (let number = 1; number <= 99; number += 1) {
  if (number % 2 === 0) {
    console.log(number);
  }
}