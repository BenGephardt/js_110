// JS110 / Lesson 1
// Arrays and Array Methods
// - forEach: iteration / side effects
// - filter: selection
// - map: transformation
// - Working with strings via split/join
// - Working with objects via Object.*
// - Additional array methods: some, every, find, findIndex, reverse, includes
// - Array elements vs other properties; sparse arrays

// ----------------------------------------------
// Array Methods (forEach, filter, map)
// ----------------------------------------------

// forEach: iteration over each element

// Basic iteration
[1, 2, 3].forEach(num => {
  console.log(num);
});

// Using index with forEach
['a', 'b', 'c'].forEach((char, idx) => {
  console.log(`${idx}: ${char}`);
});

// Side effects: building up an external result
let sum = 0;
[1, 2, 3, 4].forEach(num => {
  sum += num;
});
console.log('sum:', sum); // 10

// forEach ignores the callback’s return value
let val = [1, 2, 3].forEach(num => num * 2);
console.log('forEach return value:', val); // undefined


// filter: selection based on a condition

// Basic filtering: keep odd numbers
let numbers = [1, 2, 3, 4, 5, 6];
let oddNumbers = numbers.filter(num => num % 2 === 1);
console.log('oddNumbers:', oddNumbers); // [1, 3, 5]

// filter with a truthy callback (keeps everything)
let allNumbers = [1, 2, 3].filter(num => num + 1); // num + 1 is always truthy
console.log('allNumbers:', allNumbers); // [1, 2, 3]

// filter with missing return (callback returns undefined → falsy)
let empty = [1, 2, 3].filter(num => {
  num + 1; // no return!
});
console.log('empty from filter:', empty); // []


// map: transformation (one-to-one, same length as original)

// Basic transformation: double each number
let doubled = [1, 2, 3].map(num => num * 2);
console.log('doubled:', doubled); // [2, 4, 6]

// Map to booleans: is the number odd?
let isOddArr = [1, 2, 3].map(num => num % 2 === 1);
console.log('isOddArr:', isOddArr); // [true, false, true]

// map with missing return (callback returns undefined)
let undefinedArr = [1, 2, 3].map(num => {
  num * 2; // no return!
});
console.log('undefinedArr:', undefinedArr); // [undefined, undefined, undefined]


// ----------------------------------------------
// Strings with split / join
// ----------------------------------------------

let str = "What's up, Doc?";

// forEach over characters
str.split('').forEach(char => {
  // console.log(char);
});

// filter: keep only vowels
let vowelsOnly = str
  .split('')
  .filter(char => 'aeiou'.includes(char.toLowerCase()))
  .join('');
console.log('vowelsOnly:', vowelsOnly); // 'auo'

// map: duplicate each character
let doubledChars = str
  .split('')
  .map(char => char + char)
  .join('');
console.log('doubledChars:', doubledChars);


// ----------------------------------------------
// Objects with Object.*
// ----------------------------------------------

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable',
};

// forEach over values
Object.values(produce).forEach(value => {
  // console.log(value);
});

// forEach over keys
Object.keys(produce).forEach(key => {
  // console.log(key);
});

// forEach over entries with destructuring
Object.entries(produce).forEach(([key, value]) => {
  console.log(`${key} is a ${value}`);
});

// "Filter" object values using forEach + condition
let onlyVegetables = {};

Object.entries(produce).forEach(([key, value]) => {
  if (value === 'Vegetable') {
    onlyVegetables[key] = value;
  }
});

console.log('onlyVegetables:', onlyVegetables);
// { carrot: 'Vegetable', broccoli: 'Vegetable' }


// ----------------------------------------------
// More Array Methods
// ----------------------------------------------

// some: does at least one element match?
[1, 2, 3].some(num => num > 2); // true

// every: do all elements match?
[3, 4, 5].every(num => num > 2); // true

// find: first matching element (or undefined)
[2, 1, 4, 3, 5].find(num => num > 2); // 4

// findIndex: index of first match (or -1)
[2, 1, 4, 3, 5].findIndex(num => num > 2); // 2

// reverse: in-place reversal (mutates the array)
let nums = [1, 2, 3];
nums.reverse(); // [3, 2, 1]

// reverse without mutation (use slice to copy first)
let nums2 = [1, 2, 3];
let reversed = nums2.slice().reverse(); // [3, 2, 1], nums2 stays [1, 2, 3]

// includes: check if an element exists (handles NaN)
[2, 1, 3].includes(1); // true
[2, NaN, 3].includes(NaN); // true


// ----------------------------------------------
// Arrays: What is an Element?
// ----------------------------------------------

// - Arrays are objects; indices are property names (as strings).
// - Not all properties on an array object are *elements*.
// - A property is treated as an element only if its key is a non-negative integer
//   (0, 1, 2, ... as strings under the hood).

// Basic empty vs non-empty
let arr1 = [];
console.log(arr1);                 // []
console.log(arr1.length);          // 0
console.log(Object.keys(arr1));    // []

let arr2 = [2, 4, 6];
console.log(arr2);                 // [2, 4, 6]
console.log(arr2.length);          // 3
console.log(Object.keys(arr2));    // ['0', '1', '2']

// Adding non-element properties
let arr3 = [2, 4, 6];

// These keys are NOT non-negative integers:
arr3[-3] = 5;        // property with key "-3"
arr3['foo'] = 'a';   // property with key "foo"

console.log(arr3);              // [ 2, 4, 6, '-3': 5, foo: 'a' ]
console.log(arr3.length);       // 3  (only counts indices 0, 1, 2)
console.log(Object.keys(arr3)); // ['0', '1', '2', '-3', 'foo']

// Array methods ignore non-element properties:
let mappedArr3 = arr3.map(num => num + 1);
console.log(mappedArr3);        // [3, 5, 7]  (no effect from '-3' or 'foo')

// Using non-negative integer keys (real elements)
let arr4 = [10];
arr4[1] = 20;        // key "1" is a non-negative integer -> element
arr4[3] = 40;        // key "3" is also an element; creates a sparse array
console.log(arr4);              // [10, 20, <1 empty item>, 40]
console.log(arr4.length);       // 4
console.log(Object.keys(arr4)); // ['0', '1', '3']

// "Is this array empty?" ambiguity with non-element props
let arr5 = [];
arr5[-3] = 5;
arr5['foo'] = 'a';

console.log(arr5.length);       // 0        -> looks empty if you only check length
console.log(Object.keys(arr5)); // ['-3', 'foo'] -> not empty if you count all props

// Sparse arrays via length
let arr6 = [2, 4, 6];
arr6.length = 5;     // increases length, creates "gaps" at indices 3 and 4

console.log(arr6);               // [2, 4, 6, <2 empty items>]
console.log(arr6.length);        // 5
console.log(Object.keys(arr6));  // ['0', '1', '2']

console.log(arr6[3]);            // undefined
// but arr6[3] does NOT exist as a property; it's just a gap.

// Difference between "gap" and explicit undefined
let arr7 = [2, 4, 6];
arr7.length = 5;     // create gaps at 3 and 4
arr7[4] = undefined; // now index 4 is a real element with value undefined

console.log(arr7);               // [2, 4, 6, <1 empty item>, undefined]
console.log(arr7.length);        // 5
console.log(Object.keys(arr7));  // ['0', '1', '2', '4']

console.log(3 in arr7);          // false (gap, no property)
console.log(4 in arr7);          // true  (real property set to undefined)

// "Is this array empty?" ambiguity with sparse arrays
let arr8 = [];
arr8.length = 3;     // no actual elements, just length set

console.log(arr8);               // [ <3 empty items> ]
console.log(arr8.length);        // 3       -> not empty if you only look at length
console.log(Object.keys(arr8));  // []      -> empty if you only count real keys

// Which check you use (length vs Object.keys / element presence)
// depends on what "empty" should mean in your program.