/*
Problem
- Input: None
- Output: String (with random age)
- Rules: 
  - Build program that generates an age
  - Age is between 20 and 120 (inclusive)
  - Log string that matches the example format
Examples
  - Given: Teddy is 69 years old!
Algorithm
   1. Declare function `randomBetween`:
      - Find random number (min to max range inclusive).
      - Round random number down to nearest whole integer.
   2. Declare function `printTeddysAge`:
      - Set age variable to randomBetween result
      - Log string with template literals matching example format.
*/

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function printTeddysAge(minAge, maxAge) {
  const age = randomBetween(minAge, maxAge);
  
  console.log(`Teddy is ${age} years old!`);
}

printTeddysAge(20, 120);