/*
Prompt
Write a function that computes the sum of all numbers between 1 and some other number, 
inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the 
result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Problem
  - Restate: Write a function to compute sum of all numbers between 1 and targetNumber 
    (inclusive) in multiples of 3/5
  - Input: Number > 1
  - Output: Number
  - Rules:
    - Explicit:
      - Write a function
      - targetNumber is inclusive
      - only sum integers between 1 and targetNumber that are multiples of 3 or 5
      - targetNumber is greater than 1
    - Implicit:
      - Function is named multisum();
      - Function has one parameter that accepts a number
      - Function returns a single integer
  - Mental Model:
    - targetNumber = 20;
    - function adds (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20);
    - returns 98

Examples / Test Cases
  - Given:
    multisum(3);       // 3
    multisum(5);       // 8
    multisum(10);      // 33
    multisum(1000);    // 234168

Data Structure
  - Numbers

Algorithm
    1. Initialize integerSum to zero;
    2. Loop (Initialize loop counter to 1; the exit condition is when counter is greater
       than targetNumber; increment counter):
        - IF number is divisible by 3 OR number is divisible by 5:
        - integerSum equals integerSum plus counter.
    3. Return integerSum;
*/

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168