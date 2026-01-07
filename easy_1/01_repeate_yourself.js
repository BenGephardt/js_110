/*
Prompt
Write a function that takes one integer argument, which may be positive, 
negative, or zero. This method returns true if the number's absolute value 
is odd. You may assume that the argument is a valid integer value.

Problem
  - Input: One integer
  - Output: Boolean

  - Rules:
    - Explicit:
      - Takes one integer as an argument
      - Integer can be positive, negative, or 0
      - Returns true if input number's absolute value is odd
      - Input will always be a valid integer

    - Implicit:
      - Function should be named isOdd
      - Use Math.abs() to determine absolute value
      - 0 is not considered odd

Examples / Test Cases
  - Given:
    console.log(isOdd(2)); // => false
    console.log(isOdd(5)); // => true
    console.log(isOdd(-17)); // => true
    console.log(isOdd(-8)); // => false
    console.log(isOdd(0)); // => false
    console.log(isOdd(7)); // => true

Data Structure
  - Input: Integer
  - Output: Boolean

Algorithm
  1. Define function isOdd with a single parameter, number.
  2. Determine number's absolute value with Math.abs(number).
  3. Use modulo to check if the absolute value divided by 2 is equal to 1.
  4. Return result.
*/

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true