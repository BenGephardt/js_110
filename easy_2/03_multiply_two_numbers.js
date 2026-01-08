/*
Problem
- Input: Two Numbers
- Output: One Number
- Rules: 
  - Create function called multiply() that accepts two arguments (numbers)
  - Multiply the number together 
  - Return the result
Examples
    - 5, 3 -> 15
    - 2, 8 -> 16
    - 4, 6 -> 24
Algorithm
   1. Declare a function `multiply()` with two parameters `factor1`, `factor2`.
   2. Multiply `factor1` and `factor2` together
   3. Return result.
*/

function multiply(factor1, factor2) {
  return factor1 * factor2;
}

console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(2, 8) === 16); // logs true
console.log(multiply(4, 6) === 24); // logs true