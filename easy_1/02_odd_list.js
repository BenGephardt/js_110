/* 
Prompt
Log all odd numbers from 1 to 99, inclusive, to the console, with each number
on a separate line.

Problem
  - Input: None
  - Output: Odd numbers (1 through 99 inclusive) to console

  - Rules:
    - Explicit:
      - Log all odd numbers from 1 to 99 inclusive
      - Each number logged on a separate line

    - Implicit:
      - All numbers should be odd, positive integers

Examples / Test Cases
  - console output:
    1
    3
    ...
    99

Data Structure
  - Numbers

Algorithm
  1. for loop:
     - initialize a counter equal to 1
     - continue while counter <= 99
     - increment counter by 2
  2. In each iteration, log current counter to console
**/

for (let number = 1; number <= 99; number += 2) {
  console.log(number);
}