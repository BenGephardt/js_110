/*
Problem
- Input: String (at least two words)
- Output: String (2nd to last word)
- Rules: 
  - Words are any sequence of non-blank characters
  - Assume the input String will be two or more words
  - Write a function named `penultimate()` that accepts a single argument.
  - Return 2nd to last word as a string.
Examples
    - "last word" -> "last"
    - "Launch School is great!" -> "is"
Algorithm
  1. Declare function `penultimate` with a single parameter `text` 
  2. Split the string `text` into an array of words (.split' '). 
  3. Locate and return the second to last element (at(-2))
*/

let penultimate = text => text.split(' ').at(-2);

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true