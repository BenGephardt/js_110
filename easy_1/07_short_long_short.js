/*
Prompt
Write a function that takes two strings as arguments, determines the length of 
the two strings, and then returns the result of concatenating the shorter 
string, the longer string, and the shorter string once again. You may assume 
that the strings are of different lengths.
*/

/*
Problem
- Inputs​: Two strings.
- ​Output​: A new string.

- ​Rules​:
  - ​Explicit​:
    - The two input strings will have different lengths.
    - The final string must be formed by concatenating the shorter string, then the longer
      string, then the shorter string again.
   - ​Implicit​:
    - The case of the characters in the strings should be preserved.
    - If one string is empty, it is the "shorter" string.

- ​Mental Model​:
  - Given two strings, I need to compare their lengths to determine which is the shorter 
    one and which is the longer one. Once identified, I will build a new string by joining 
    them in the order: shorter, longer, shorter.

Examples
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

Data type: String

Algorithm
- First Mental Model:
    Initialize a function that accepts two strings as arguments.
    Compare the strings in length to determin order.
    Concatenate them together (short + long +short)
    Return new string.

- Final Algorithm:
    1. Compare the lengths of the two input strings, string1 and string2.
    2. If the length of string1 is less than the length of string2:
      - Return a new string created by concatenating string1 + string2 + string1.
    3. Else (meaning string2 is shorter):
      -  Return a new string created by concatenating string2 + string1 + string2.
*/

function shortLongShort(string1, string2) {
  return string1.length < string2.length
    ? string1 + string2 + string1
    : string2 + string1 + string2;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"