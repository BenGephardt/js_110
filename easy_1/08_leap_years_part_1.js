/*
Prompt
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly 
divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 
100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any 
year greater than 0 as input and returns true if the year is a leap year, or false if it is 
not a leap year.

Problem
  - Input: integer year > 0
  - Output: boolean — true if year is a leap year, otherwise false
  - Rules:
    - Explicit:
      - A year is a leap year if:
        - it is divisible by 4
        - except if it is also divisible by 100 (then it is not a leap year)
        - except if it is also divisible by 400 (then it is a leap year again)
      - Assume the rules apply to any year > 0
    - Implicit:
      - The function should return a boolean value.
      - The function should be named `isLeapYear`.
  
Examples / Test Cases
  - Given:
    isLeapYear(2016) // true
    isLeapYear(2015) // false
    isLeapYear(2100) // false
    isLeapYear(2400) // true

Data Structure
  - Just numbers and booleans; no collections needed.

Algorithm
  - Determine whether year is divisible by 400, 100, and 4.
  - Return true if:
    - year is divisible by 400
    - OR (year is divisible by 4 AND not divisible by 100)
  - Otherwise, return false.
*/

function isLeapYear(year) {
  const divisibleBy4   = year % 4 === 0;
  const divisibleBy100 = year % 100 === 0;
  const divisibleBy400 = year % 400 === 0;

  return divisibleBy400 || (divisibleBy4 && !divisibleBy100);
}

console.log(isLeapYear(2016));   // true
console.log(isLeapYear(2015));   // false
console.log(isLeapYear(2100));   // false
console.log(isLeapYear(2400));   // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000));   // true
console.log(isLeapYear(1900));   // false
console.log(isLeapYear(1752));   // true
console.log(isLeapYear(1700));   // false
console.log(isLeapYear(1));      // false
console.log(isLeapYear(100));    // false
console.log(isLeapYear(400));    // true