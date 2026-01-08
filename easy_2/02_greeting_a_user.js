/*
Problem
- Input: String (a name).
- Output: String (a greeting).
- Rules: 
  - If the input string ends with !: 
    - format the output as an uppercase, "yelled" response. 
    - Otherwise, format it as a normal greeting.
Examples
    - Bob -> Hello Bob.
    - Bob! -> HELLO BOB. WHY ARE WE SCREAMING?
Algorithm
   1. Prompt the user for their name.
   2. Check if the name string endsWith('!').
   3. If true: Remove the !, convert the name to uppercase, and log the yelling response.
   4. If false: Log the standard response.
*/

let readline = require('readline-sync');

let name = readline.question('What is your name? ');
let response = `Hello ${name}.`;

if (name.endsWith('!')) {
  name = name.slice(0, -1);
  response = `HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`;
}

console.log(response);