// JS110 / Lesson 2
// Sorting
// - Sorting collections (mainly arrays) into a defined order
// - Default Array.prototype.sort behavior (string coercion, UTF-16)
// - Sorting strings alphabetically
// - sort is destructive (mutates the original array)
// - Using a comparison callback to sort numerically
// - Understanding a / b in the comparison callback
// - Custom sort criteria: length, computed totals, etc.

// ----------------------------------------------
// What is Sorting?
// ----------------------------------------------

let numbers = [2, 11, 9, 4, 107, 21, 1];
// We want: [1, 2, 4, 9, 11, 21, 107]

// Sorting means putting collection elements into a defined order
// (e.g., numeric order, alphabetical order, etc.)

// ----------------------------------------------
// Default sort: String Coercion + UTF-16 Order
// ----------------------------------------------

let mixedNumbers = [2, 11, 9, 4, 107, 21, 1];

console.log(mixedNumbers.sort());
// [1, 107, 11, 2, 21, 4, 9]

// Default sort:
// - Converts elements (except undefined) to strings
// - Compares those strings using UTF-16 code point order
// - Result: not true numeric ordering for numbers

console.log([null, 'a', true, 1].sort());
// [1, 'a', null, true]

console.log([undefined, 11, 'z', 'x', 'y', undefined].sort());
// [11, 'x', 'y', 'z', undefined, undefined]
// undefined values always go to the end

// ----------------------------------------------
// Sorting Arrays of Strings (Alphabetical)
// ----------------------------------------------

let letters = ['c', 'a', 'e', 'b', 'd'];
console.log(letters.sort());
// ['a', 'b', 'c', 'd', 'e']

let words = ['arc', 'bat', 'cape', 'ants', 'cap'];
console.log(words.sort());
// ['ants', 'arc', 'bat', 'cap', 'cape']
//
// Multi-character strings are compared character by character.
// If all compared characters are equal and one string is shorter,
// the shorter string comes first ('cap' before 'cape').

// ----------------------------------------------
// sort is Destructive (Mutates the Original Array)
// ----------------------------------------------

let vowels = ['u', 'i', 'a', 'e', 'o'];

let sortedVowels = vowels.sort();
console.log(sortedVowels); // ['a', 'e', 'i', 'o', 'u']
console.log(vowels);       // ['a', 'e', 'i', 'o', 'u'] (mutated)

// To avoid mutation, sort a copy:
let vowels2 = ['u', 'i', 'a', 'e', 'o'];
let sortedCopy = vowels2.slice().sort();

console.log(sortedCopy); // ['a', 'e', 'i', 'o', 'u']
console.log(vowels2);    // ['u', 'i', 'a', 'e', 'o'] (original intact)

// ----------------------------------------------
// UTF-16 and String Comparison
// ----------------------------------------------

// String comparisons use UTF-16 code points
console.log('+'.charCodeAt(0)); // 43
console.log('3'.charCodeAt(0)); // 51
console.log('+' < '3');         // true (43 < 51)

console.log('A' < 'a'); // true (uppercase before lowercase)
console.log('Z' < 'a'); // true
console.log('!' < 'A'); // true (most punctuation/digits before letters)

// Useful rough rules:
// - Uppercase letters come before lowercase
// - Digits and most punctuation come before letters

// ----------------------------------------------
// Numeric Sorting with a Comparison Callback
// ----------------------------------------------

let nums = [2, 11, 9, 4, 107, 21, 1];

// sort(callback) where callback receives (a, b)
// and must return a number:
// - < 0: a comes before b
// - > 0: b comes before a
// - 0: keep a and b in the same relative order

nums.sort((a, b) => {
  if (a < b) {
    return -1; // a before b
  } else if (a > b) {
    return 1;  // b before a
  } else {
    return 0;  // no change in relative order
  }
});

console.log(nums); // [1, 2, 4, 9, 11, 21, 107]

// Same logic, shorter:
let nums2 = [2, 11, 9, 4, 107, 21, 1];
nums2.sort((a, b) => a - b); // ascending numeric
console.log(nums2);          // [1, 2, 4, 9, 11, 21, 107]

// Descending numeric:
let nums3 = [2, 11, 9, 4, 107, 21, 1];
nums3.sort((a, b) => b - a);
console.log(nums3); // [107, 21, 11, 9, 4, 2, 1]

// You can add extra logic, as long as the callback returns a number:
let nums4 = [2, 11, 9, 4];
nums4.sort((a, b) => {
  console.log(`Comparing a=${a}, b=${b}`);
  return a - b;
});
console.log(nums4);

// ----------------------------------------------
// Custom Sort Criteria
// ----------------------------------------------

// 1) Sort strings by length
let wordList = ['go', 'ahead', 'and', 'jump'];

wordList.sort((a, b) => a.length - b.length);
console.log(wordList);
// ['go', 'and', 'jump', 'ahead']

// 2) Sort nested arrays by their total (e.g., scores per player)
let scores = [
  [3, 6, 4],  // total 13
  [6, 8, 9],  // total 23
  [1, 4, 2],  // total 7
];

scores.sort((a, b) => {
  let totalA = a.reduce((sum, value) => sum + value);
  let totalB = b.reduce((sum, value) => sum + value);
  return totalA - totalB;
});

console.log(scores);
// [[1, 4, 2], [3, 6, 4], [6, 8, 9]]

// Note: In all these callbacks, "a" and "b" represent two
// elements from the array that sort is comparing on each step.

// ----------------------------------------------
// Summary
// ----------------------------------------------

// - Sorting is about ordering collection elements by some rule.
// - Default Array.prototype.sort:
//   - Coerces values to strings (except undefined).
//   - Compares with UTF-16 order → not true numeric order.
//   - Places undefined values at the end.
// - sort mutates the original array (in-place).
// - To customize ordering, pass a comparison callback (a, b) => number.
// - Use comparison callbacks to:
//   - Sort numbers numerically.
//   - Sort strings by length.
//   - Sort nested structures by computed values (e.g., sums).