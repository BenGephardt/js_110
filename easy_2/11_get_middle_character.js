/*
Problem
- Input: String (Non-empty)
- Output: String (Middle Character(s) of the string)
- Rules: 
  - Write Function `centerOf(string)`
  - If string.length is odd, return one character
  - If string.length is even, return two characters
Examples
  - 'I Love JavaScript' -> "a"
  - 'Launch School' ->  "
  - 'Launch' -> "un"
  - 'Launchschool' -> hs"
  - 'x' -> "x"
Algorithm
   1. Declare function `centerOf(string)`
   2. Determine if string length is even or odd.
   3. Determine middle index with length property and Math.floor().
   3. Determine middle character for odd string.
   4. Determine middle characters for even string with slice method.
   5. If string.length is even, return even middle characters.
   6. If string.length is odd, return odd middle character.
*/

function centerOf(string) {
  let isEven = string.length % 2 === 0;
  let midIndex = Math.floor(string.length / 2);
  let oddMidChar = string[midIndex];
  let evenMidChars = string.slice(midIndex - 1, midIndex + 1); 

  return isEven ? evenMidChars : oddMidChar
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"