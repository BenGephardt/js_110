// JS110 / Lesson 2
// Sorting Practice

// ----------------------------------------------
// 1. Default sort: String Coercion + UTF-16
// ----------------------------------------------

// Show how default sort behaves with numbers
function defaultSortDemo(array) {
  let copy = array.slice(); // avoid mutating caller's array
  console.log('Original:', copy);
  console.log('Default sort:', copy.sort());
}

defaultSortDemo([2, 11, 9, 4, 107, 21, 1]);
// Notice the "string-like" order, not true numeric order

// Show how mixed types behave (and undefined at the end)
function mixedTypeSortDemo() {
  let arr1 = [null, 'a', true, 1];
  let arr2 = [undefined, 11, 'z', 'x', 'y', undefined];

  console.log(arr1.sort()); // coerces to strings (except undefined)
  console.log(arr2.sort()); // undefined values at the end
}

mixedTypeSortDemo();

// ----------------------------------------------
// 2. Avoiding Mutation: Sorting Copies
// ----------------------------------------------

// Return a NEW sorted array, leaving the original intact
function sortedCopy(array) {
  return array.slice().sort(); // default sort on a shallow copy
}

let letters = ['c', 'a', 'e', 'b', 'd'];
let sortedLetters = sortedCopy(letters);

console.log('original letters:', letters);        // unchanged
console.log('sorted copy    :', sortedLetters);   // sorted

// ----------------------------------------------
// 3. Numeric Sorting Helpers (Using a Callback)
// ----------------------------------------------

// Sort an array of numbers in ascending numeric order (mutates array)
function sortNumericAscending(numbers) {
  return numbers.sort((a, b) => a - b);
}

// Sort an array of numbers in descending numeric order (mutates array)
function sortNumericDescending(numbers) {
  return numbers.sort((a, b) => b - a);
}

let nums1 = [2, 11, 9, 4, 107, 21, 1];
let nums2 = [2, 11, 9, 4, 107, 21, 1];

console.log(sortNumericAscending(nums1)); // [1, 2, 4, 9, 11, 21, 107]
console.log(sortNumericDescending(nums2)); // [107, 21, 11, 9, 4, 2, 1]

// ----------------------------------------------
// 4. Exploring the Comparison Callback (a, b)
// ----------------------------------------------

// Log how sort compares elements (engine-dependent)
function traceNumericSort(array) {
  let copy = array.slice();

  copy.sort((a, b) => {
    console.log(`Comparing a=${a}, b=${b}`);
    return a - b;
  });

  console.log('Result:', copy);
}

traceNumericSort([2, 11, 9, 4]);

// In each callback call:
// - a and b are two elements from the array
// - return < 0 → a comes before b
// - return > 0 → b comes before a
// - return 0 → keep their relative order

// ----------------------------------------------
// 5. Sorting Strings Alphabetically and UTF-16
// ----------------------------------------------

// Default sort is good for basic alphabetical ordering
function sortWordsAlphabetically(words) {
  return words.slice().sort(); // sort a copy
}

console.log(sortWordsAlphabetically(['arc', 'bat', 'cape', 'ants', 'cap']));
// ["ants", "arc", "bat", "cap", "cape"]

// Show how uppercase / lowercase affect order (UTF-16)
function compareStrings(a, b) {
  console.log(`${a} < ${b}?`, a < b);
}

compareStrings('A', 'a'); // true (uppercase comes before lowercase)
compareStrings('Z', 'a'); // true
compareStrings('!', 'A'); // true (punctuation/digits often before letters)

// ----------------------------------------------
// 6. Sorting by String Length
// ----------------------------------------------

// Sort an array of strings by increasing length
function sortByLength(words) {
  // returns a new sorted array, does not mutate input
  return words.slice().sort((a, b) => a.length - b.length);
}

let phrases = ['go', 'ahead', 'and', 'jump'];
console.log(sortByLength(phrases)); // ["go", "and", "jump", "ahead"]
console.log(phrases);               // original unchanged

// ----------------------------------------------
// 7. Sorting Nested Arrays by a Computed Total
// ----------------------------------------------

// Given an array of score arrays, sort players by their total score
function sortByTotalScore(scores) {
  // scores: [ [3, 6, 4], [6, 8, 9], [1, 4, 2] ]
  return scores.slice().sort((a, b) => {
    let totalA = a.reduce((sum, value) => sum + value);
    let totalB = b.reduce((sum, value) => sum + value);
    return totalA - totalB;
  });
}

let scores = [
  [3, 6, 4],  // total 13
  [6, 8, 9],  // total 23
  [1, 4, 2],  // total 7
];

let sortedScores = sortByTotalScore(scores);
console.log(sortedScores);
// [[1, 4, 2], [3, 6, 4], [6, 8, 9]]
console.log(scores); // original unchanged

// ----------------------------------------------
// 8. Helper: General "safeSort" That Avoids Mutation
// ----------------------------------------------

// Takes an array and a compare function, returns a new sorted array
function safeSort(array, compareFn) {
  return array.slice().sort(compareFn);
}

let data = [2, 11, 9, 4, 107, 21, 1];

let asc = safeSort(data, (a, b) => a - b);
let desc = safeSort(data, (a, b) => b - a);

console.log('original:', data); // unchanged
console.log('asc     :', asc);
console.log('desc    :', desc);

// ----------------------------------------------
// 9. Practicing Custom Sorts
// ----------------------------------------------

// Sort words by:
// 1. Length (shortest first)
// 2. Alphabetical order for words of the same length
function sortByLengthThenAlpha(words) {
  return words.slice().sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length; // shorter first
    }

    // If same length, fall back to default string comparison
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}

let mixedWords = ['go', 'at', 'bat', 'apple', 'bee', 'a'];
console.log(sortByLengthThenAlpha(mixedWords));
// ["a", "at", "go", "bee", "bat", "apple"]

// ----------------------------------------------
// 10. Summary Helper: Inspect Sort Behavior
// ----------------------------------------------

// Quick helper to print before/after for a given sort callback
function demoSort(label, array, compareFn) {
  let copy = array.slice();
  copy.sort(compareFn);

  console.log(`\n${label}`);
  console.log('  original:', array);
  console.log('  sorted  :', copy);
}

let demoArray = [2, 11, 9, 4, 107, 21, 1];

demoSort('Default (string) sort', demoArray, undefined);
demoSort('Numeric ascending', demoArray, (a, b) => a - b);
demoSort('Numeric descending', demoArray, (a, b) => b - a);