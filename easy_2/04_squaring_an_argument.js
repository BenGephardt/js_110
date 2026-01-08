/*
Problem
- Input: One number
- Output: One number (now squared) 
- Rules: 
  - Use `multiply()` function from previous prompted
  - Write a function called `square()` that multiplies a number by itself
  - Return a single, positive number.
Examples
    - 5 -> 25
    - -8 -> 64
    - 0 -> 0
    - 12 -> 144
Algorithm
   1. Declare previous function `multiply`.
   2. Declare a function `square()` with one parameter `base`
   3. Inside `square()` call `multiply()` with `base` as both its arguments
   4. Return result.
*/

function multiply(factor1, factor2) {
  return factor1 * factor2;
}

function square(base) {
  return multiply(base, base);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(square(0) === 0); // logs true
console.log(square(12) === 144); // logs true