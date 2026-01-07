/*
Prompt
Write a function that determines and returns the UTF-16 string value of a string passed 
in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every 
character in the string. (You may use String.prototype.charCodeAt() to determine the 
UTF-16 value of a character.)

Problem
  - Restate: Write function with one parameter that accepts a string as an argument and 
    determines the UTF-16 string value (determine each UTF-16 of each character then add 
    together), then return the UTF-16 string value.
  - Input: String
  - Output: Number
  - Rules:
    - Explicit:
      - Accepts one string as argument
      - Use String.prototype.charCodeAt() for UTF-16 of each character
      - UTF-16 string value = sum of all UTF-16 characters
      - Return UTF-16 string value of input string
    - Implicit:
      - Input string can be empty, should return 0
      - Returns a Number value
  - Mental Model:
    - UTF-16 string value = str[0].charCodeAt() + str[1].charCodeAt() etc.
Examples / Test Cases
  - Given:
    utf16Value('Four score');         // 984
    utf16Value('Launch School');      // 1251
    utf16Value('a');                  // 97
    utf16Value('');                   // 0

    The next three lines demonstrate that the code
    works with non-ASCII characters from the UTF-16
    character set.
    const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
    utf16Value(OMEGA);                  // 937
    utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
        
Data Structure:
  - Input: Strings
  - Output: Number
Algorithm
  1. Initialize a function with a single parameter, string.
  3. Initialize sum to 0.
  2. Write a for Loop (initialize counter to 0; continue as long as counter is < than 
     string length; increment counter):
      - sum equals sum plus string.charCodeAt(counter)
  3. Return sum
*/

function utf16Value(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx++) {
    sum += string.charCodeAt(idx);
  }
  return sum;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811

/*
Alternative solution using higher-order functions (Method Chainging Practice)

Algorithm
1. Split the string into an array of characters
2. Map over array, transform each character to UTF-16 value with charCodeAt()
3. Reduce array of UTF-16 values to a single sum, starting from 0
4. Return resulting sum

function utf16Value(string) {
  return string
    .split('')
    .map(char => char.charCodeAt())
    .reduce((sum, currentNumber) => sum + currentNumber, 0);
}
*/