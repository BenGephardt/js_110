/*
Prompt
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 
1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year 
that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years
both before and after 1752.

Problem
  - Restate: Is year before/after/on 1752 to determine leap years from both the Julian and
    Gregorian calendar
  - Input: year > 0
  - Output: Boolean
  - Rules:
    - Explicit:
      - A year is a leap year if:
        - it is less than 1752 and is divisible by 4
        - Or it is on/after 1752 and divisible by 4
          - except if it is also divisible by 100 (then it is not)
          - except if it is also divisible by 400 (then it is)
        - Assume the rules apply to any year > 0

    - Implicit:
      - Function should return a boolean value.
      - Function still should be named `isLeapYear`.
      - Years on/after 1752 are Gregorian
      - Years before 1752 are Julian

  - Mental Model:
    - years < 1752 are leap years when divisible by 4
    - years >= 1752 are leap years when divisible by 4, except divisible by 100 (not leap) 
      unless divisible by 400 (leap)

Examples / Test Cases
  - Given:
    isLeapYear(1900);      // false
    isLeapYear(1752);      // true
    isLeapYear(1700);      // true
    isLeapYear(1);         // false
    isLeapYear(100);       // true
    isLeapYear(400);       // true
    isLeapYear(1600);      // true
    isLeapYear(1751);      // false
    isLeapYear(1753);      // false


Data Structure
  - Just numbers and booleans; no collections needed.

Algorithm
1.  If the year is less than 1752:
   •   Return the result of checking if year is divisible by 4.
2.  Else (the year is 1752 or later):
   •   Return the result of the standard Gregorian leap year calculation: 
        (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0).
*/

function isLeapYear(year) {
  const divisibleBy4   = year % 4 === 0;
  const divisibleBy100 = year % 100 === 0;
  const divisibleBy400 = year % 400 === 0;
  return year < 1752 ? divisibleBy4 
    : divisibleBy400 
    || (divisibleBy4 && !divisibleBy100);
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
console.log(isLeapYear(1700));   // true
console.log(isLeapYear(1));      // false
console.log(isLeapYear(100));    // true
console.log(isLeapYear(400));    // true
console.log(isLeapYear(1600));   // true
console.log(isLeapYear(1751));   // false
console.log(isLeapYear(1753));   // false