/*
Problem
- Input: Two arguments of any type
- Output: Boolean
- Rules: 
  - Write A function called `xor` that accepts two arguments of any type.
  - Returns true if only one argument is truthy, otherwise return false.
  - Return value must be a boolean.
Examples
    - 5, 0 -> true
    - false, true -> true
    - 1, 1 -> false
    - true, true -> false
    - 0, false -> false
    - 0, 0 -> false
Algorithm
   1. Declare function `xor` with two parameters, `value1` and `value2`
   2. Explicitly convert both values to booleans.
   3. Use the strict not equal operator to compair inequality of both values.
   4. Return result.
*/

function xor(value1, value2) {
  return Boolean(value1) !== Boolean(value2)
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true