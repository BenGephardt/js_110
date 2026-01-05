// JS110 / Lesson 1
// Array Practice

// ----------------------------------------------
// 1. forEach practice: iteration / side effects
// ----------------------------------------------

// Log each element
function logEach(arr) {
  arr.forEach(element => {
    console.log('element:', element);
  });
}

logEach([1, 2, 3]); // logs 1, then 2, then 3

// Sum numbers using a side effect
function sumArray(arr) {
  let sum = 0;

  arr.forEach(num => {
    sum += num;
  });

  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10

// Show that forEach ignores return values
function forEachReturn(arr) {
  let result = arr.forEach(num => num * 2);
  return result;
}

console.log(forEachReturn([1, 2, 3])); // undefined

// ----------------------------------------------
// 2. filter practice: selection
// ----------------------------------------------

// Keep only even numbers
function evensOnly(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(evensOnly([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// Keep only "truthy" values
function truthyValues(arr) {
  return arr.filter(value => value);
}

console.log(truthyValues([0, 1, '', 'a', null, 'hello'])); // [1, 'a', 'hello']

// Mistake: missing return → empty array
function badFilter(arr) {
  return arr.filter(num => {
    num > 2; // no return!
  });
}

console.log(badFilter([1, 2, 3, 4])); // []

// ----------------------------------------------
// 3. map practice: transformation
// ----------------------------------------------

// Double all numbers
function doubleAll(arr) {
  return arr.map(num => num * 2);
}

console.log(doubleAll([1, 2, 3])); // [2, 4, 6]

// Convert numbers to booleans (is odd?)
function isOddArray(arr) {
  return arr.map(num => num % 2 === 1);
}

console.log(isOddArray([1, 2, 3, 4])); // [true, false, true, false]

// Mistake: missing return → all undefined
function badMap(arr) {
  return arr.map(num => {
    num * 2; // no return!
  });
}

console.log(badMap([1, 2, 3])); // [undefined, undefined, undefined]

// ----------------------------------------------
// 4. Strings with split / join
// ----------------------------------------------

// Get only vowels from a string
function extractVowels(str) {
  return str
    .split('')
    .filter(char => 'aeiou'.includes(char.toLowerCase()))
    .join('');
}

console.log(extractVowels("What's up, Doc?")); // 'auo'

// Duplicate each character
function doubleChars(str) {
  return str
    .split('')
    .map(char => char + char)
    .join('');
}

console.log(doubleChars('abc')); // 'aabbcc'

// Remove all spaces from a string
function removeSpaces(str) {
  return str
    .split(' ')
    .filter(word => word.length > 0)
    .join('');
}

console.log(removeSpaces('  a b   c  ')); // 'abc'

// ----------------------------------------------
// 5. More array methods: some, every, find, findIndex, reverse, includes
// ----------------------------------------------

// some: does at least one element match?
function hasNegative(arr) {
  return arr.some(num => num < 0);
}

console.log(hasNegative([1, 2, 3])); // false
console.log(hasNegative([1, -2, 3])); // true

// every: do all elements match?
function allPositive(arr) {
  return arr.every(num => num > 0);
}

console.log(allPositive([1, 2, 3])); // true
console.log(allPositive([1, 0, 3])); // false

// find: first number greater than target
function firstGreaterThan(arr, target) {
  return arr.find(num => num > target);
}

console.log(firstGreaterThan([1, 4, 2, 5], 3)); // 4
console.log(firstGreaterThan([1, 2], 5)); // undefined

// findIndex: index of first match (or -1)
function indexOfFirstEven(arr) {
  return arr.findIndex(num => num % 2 === 0);
}

console.log(indexOfFirstEven([1, 3, 5, 6, 8])); // 3
console.log(indexOfFirstEven([1, 3, 5])); // -1

// reverse: show mutation vs non-mutation
function reversedCopy(arr) {
  return arr.slice().reverse();
}

let a1 = [1, 2, 3];
let a2 = reversedCopy(a1);

console.log(a1); // [1, 2, 3]
console.log(a2); // [3, 2, 1]

let a3 = [1, 2, 3];
a3.reverse();
console.log(a3); // [3, 2, 1]

// includes: element existence (including NaN)
function containsNaN(arr) {
  return arr.includes(NaN);
}

console.log(containsNaN([1, NaN, 3])); // true
console.log(containsNaN([1, 2, 3])); // false

// ----------------------------------------------
// 6. Arrays vs properties / sparse arrays
// ----------------------------------------------

// Inspect array keys vs length
function inspectArray(arr) {
  console.log('array:', arr);
  console.log('length:', arr.length);
  console.log('keys:', Object.keys(arr));
}

inspectArray([]);
// array: []
// length: 0
// keys: []

inspectArray([2, 4, 6]);
// array: [2, 4, 6]
// length: 3
// keys: ['0', '1', '2']

// Add non-element properties
let arrWithProps = [2, 4, 6];
arrWithProps[-3] = 'minus three';
arrWithProps.foo = 'bar';

inspectArray(arrWithProps);
// array: [2, 4, 6, '-3': 'minus three', foo: 'bar']
// length: 3
// keys: ['0', '1', '2', '-3', 'foo']

// Show that array methods ignore non-element properties
let mappedProps = arrWithProps.map(num => num * 10);
console.log(mappedProps); // [20, 40, 60]

// Create a sparse array by assigning to a high index
let sparse1 = [10];
sparse1[3] = 40;

inspectArray(sparse1);
// array: [10, <2 empty items>, 40]
// length: 4
// keys: ['0', '3']

console.log(1 in sparse1); // false (gap)
console.log(3 in sparse1); // true

// Create sparse array by setting length
let sparse2 = [2, 4, 6];
sparse2.length = 5;

inspectArray(sparse2);
// array: [2, 4, 6, <2 empty items>]
// length: 5
// keys: ['0', '1', '2']

console.log(sparse2[3]); // undefined (but does NOT exist as a property)

// Difference: gap vs explicit undefined
let gapVsUndefined = [2, 4, 6];
gapVsUndefined.length = 5;  // create gaps at 3 and 4
gapVsUndefined[4] = undefined; // now 4 is a real element

inspectArray(gapVsUndefined);
// array: [2, 4, 6, <1 empty item>, undefined]
// length: 5
// keys: ['0', '1', '2', '4']

console.log(3 in gapVsUndefined); // false (gap)
console.log(4 in gapVsUndefined); // true  (real element with value undefined)

// ----------------------------------------------
// 7. Helper: check if an array has any real elements
// ----------------------------------------------

// "Empty" in the sense of: no real element properties
function hasAnyElements(arr) {
  return Object.keys(arr).length > 0;
}

let emptyByLength = [];
emptyByLength.length = 3;

console.log(emptyByLength.length); // 3
console.log(hasAnyElements(emptyByLength)); // false (no element keys)

let nonEmpty = [];
nonEmpty[5] = 'x';

console.log(nonEmpty.length); // 6
console.log(hasAnyElements(nonEmpty)); // true (key '5')