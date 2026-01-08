/*
Problem
- Input: Number (negative or positive)
- Output: Number (negative only)
- Rules: 
  - Write a function called `negative(number)`
  - If number is positive, return the negative of that number
  - If argument is negative, return as-is
Examples
    - 5 -> -5
    - -3 -> -3
    - 0 -> -0
    - -0 -> -0
Algorithm
   1. Declare function `negative(number)`
   2. Convert number to a positive number
   3. Return number as a negative;
*/

function negative(number) {
  return -Math.abs(number);
}

/*
Altertative Approach, for practice only
Algorithm
   1. Declare function `negative(number)`
   2. To check for a negative, use a boolean result of number is less than 0 OR -0
   3. If number is negative, return number
   4. If number is positive, return negative of that number

function negative(number) {
  let isNonPositive = number < 0 || Object.is(number, -0);
  return isNonPositive ? number : -number;
}
*/