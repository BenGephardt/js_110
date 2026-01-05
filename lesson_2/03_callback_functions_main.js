// JS110 / Lesson 2
// Working with Callback Functions
// - Functions as first-class values; higher-order functions
// - Array iteration methods that take callbacks: forEach, map, filter, every, some
// - Return values vs side effects in callbacks and methods
// - How each method uses (or ignores) the callback’s return value
// - Working with nested collections using callbacks
// - Importance of tracking types (array, number, object) inside nested structures
// - Avoid mutating the collection while iterating over it
// - Using a systematic, step-by-step approach to understand complex callback code

// ----------------------------------------------
// Functions as First-Class Values & HOFs
// ----------------------------------------------

// Functions are *values*:
// - can be stored in variables
// - can be passed as arguments
// - can be returned from functions

function add(a, b) {
  return a + b;
}

let fn = add;               // assign a function to a variable
// console.log(fn(2, 3));   // 5

// Higher-Order Function (HOF): takes a function as an argument or returns a function
function applyTwice(func, value) {
  return func(func(value));
}

function double(n) {
  return n * 2;
}

// console.log(applyTwice(double, 3)); // 12

// Array methods like forEach / map / filter are HOFs: they take *callbacks*.

// ----------------------------------------------
// forEach – for Side Effects, Ignores Return Value
// ----------------------------------------------

let nums = [1, 2, 3];

nums.forEach((num, idx) => {
  // Common use: logging, mutating external state, etc.
  // console.log(idx, num);
  return num * 2; // return value is IGNORED by forEach
});

// forEach itself always returns undefined:
let resultForEach = nums.forEach(n => n * 2);
// console.log(resultForEach); // undefined

// Example from assignment (nested array + forEach):
[[1, 2], [3, 4]].forEach(arr => {
  // console.log(arr[0]); // 1 then 3
});
// Overall return value of forEach: undefined

// ----------------------------------------------
// map – Uses Callback Return Value for Transformation
// ----------------------------------------------

let numbers = [1, 2, 3, 4, 5];

let squared = numbers.map(num => num * num);
// console.log(squared); // [1, 4, 9, 16, 25]
// console.log(numbers); // original unchanged

// With nested arrays:
let nested1 = [[1, 2], [3, 4]];

let firstElements = nested1.map(arr => arr[0]);
// console.log(firstElements); // [1, 3]

// map callback with *block* body must explicitly return:
let maybeUndefined = nested1.map(arr => {
  arr[0];            // expression has a value, but we don't return it
});
// console.log(maybeUndefined); // [undefined, undefined]

let correctMap = nested1.map(arr => {
  return arr[0];     // now callback returns a number
});
// console.log(correctMap); // [1, 3]

// ----------------------------------------------
// filter – Uses Truthiness of Callback Return Value
// ----------------------------------------------

let mix = [1, 2, 3, 4, 5, 6];

let evens = mix.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4, 6]

// filter with nested arrays / objects:
// Example (from assignment): keep objects where every key
// matches the first letter of its value.
let animals = [
  { a: 'ant', b: 'elephant' },
  { c: 'cat', d: 'dog' },
];

let matching = animals.filter(object => {
  return Object
    .keys(object)
    .every(key => object[key][0] === key);
});

// console.log(matching); // [ { c: 'cat', d: 'dog' } ]

// ----------------------------------------------
// every and some – Booleans from Callbacks
// ----------------------------------------------

let arr = [2, 4, 6];

let allEven = arr.every(num => num % 2 === 0);  // true
let someEven = arr.some(num => num % 2 === 0);  // true

// These are useful *inside* other callbacks (e.g., inside filter)
// because they return booleans, which filter expects.

// ----------------------------------------------
// Return Values vs Side Effects in Nested Callbacks
// ----------------------------------------------

// Example: forEach outside, map inside
let myArr = [[18, 7], [3, 12]].forEach(subArr => {
  return subArr.map(num => {
    if (num > 5) {
      // console.log(num); // 18, 7, 12
      return console.log(num); // console.log returns undefined
    }
  });
});

// forEach ignores callback’s return value → overall result is undefined.
// console.log(myArr); // undefined

// Example: map of map – nested transformation
let doubledNested = [[1, 2], [3, 4]].map(subArr => {
  return subArr.map(num => num * 2);
});

// console.log(doubledNested); // [ [2, 4], [6, 8] ]

// Key ideas:
// - Inner map returns a NEW transformed sub-array.
// - Outer map uses that returned sub-array as each element in the result.

// ----------------------------------------------
// Working with Nested Collections
// ----------------------------------------------

// Example: transform all numbers in a nested uneven structure
let complex = [
  [[1, 2], [3, 4]],
  [5, 6],
];

let incremented = complex.map(arrOrNum => {
  return arrOrNum.map(elem => {
    if (typeof elem === 'number') {
      return elem + 1;
    } else {
      // elem is an array (e.g., [1, 2])
      return elem.map(number => number + 1);
    }
  });
});

// console.log(incremented); // [ [ [2, 3], [4, 5] ], [6, 7] ]

// Another nested example: different rules per type
let mixedNested = [
  [8, 13, 27],
  ['apple', 'banana', 'cantaloupe'],
];

let selected = mixedNested.map(arrInner => {
  return arrInner.filter(item => {
    if (typeof item === 'number') {
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});

// console.log(selected); // [ [27], ['apple'] ]

// ----------------------------------------------
// Avoid Mutating the Collection During Iteration
// ----------------------------------------------

let arrToMutate = [1, 2];

let weird = arrToMutate.map(element => arrToMutate.pop());
// console.log(weird);         // [2, <1 empty item> ]
// console.log(arrToMutate);   // [1] (length changed during map)

// Another example with nested mutation:
let nestedToMutate = [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]];

let popped = nestedToMutate.map(subArr => subArr.pop());
// console.log(popped);          // [ [4], ['c'] ]
// console.log(nestedToMutate);  // [ [ [1], [2], [3] ], [ ['a'], ['b'] ] ]

// Lesson: do NOT mutate (push, pop, splice, etc.) the array
// you're iterating over with map / forEach / filter.
// It makes behavior surprising and code harder to reason about.

// ----------------------------------------------
// Analyzing Complex Callback Code Systematically
// ----------------------------------------------

// When reading code with nested callbacks, ask for each action:
// - What type of action is this? (method call, callback, condition, expression)
// - On what value is it performed?
// - Does it have side effects? (e.g., console.log, mutation)
// - What is its return value?
// - Is that return value used by the caller?

// Example to analyze:
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// Key observations:
// - Inner filter returns arrays, but forEach ignores its callback return value.
// - forEach itself returns undefined for each top-level element.
// - Therefore, map returns [undefined, undefined].

// This kind of step-by-step reasoning is the main skill this assignment builds.