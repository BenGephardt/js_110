/*
Problem
- Input: An array (can be empty)
- Output: An array (containing every other element of previous)
- Rules: 
  - Write a function named `oddities` that accepts one argument
  - Determine every other element in the array and push into new array
  - Return new array
- Mental Model
  - Return array[0], array[2], array[4] ...
  - Return 1st element, 3rd element, 5th element ...
Examples
    - [2, 3, 4, 5, 6] -> [2, 4, 6]
    - [1, 2, 3, 4, 5, 6] -> [1, 3, 5]
    - ["abc", "def"] -> ['abc']
    - [123] -> [123]
    - [] -> []
    - [0, 2, -1, 2, 0, 4] -> [0, -1, 0]
Algorithm
   1. Declare function `oddities` with a single parameter `array`
   2. Create new array with filter():
      - Add only every element with an even index.
   3. Return result.
*/

function oddities(array) {
  return array.filter((_, index) => index % 2 === 0);
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
console.log(oddities([0, 2, -1, 2, 0, 4])); // logs [0, -1, 0]