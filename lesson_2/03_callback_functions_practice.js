// JS110 / Lesson 2
// Callbacks Practice

// ----------------------------------------------
// 1. Basic Callbacks with forEach (Side Effects)
// ----------------------------------------------

// Log each element with its index (forEach → side effect only)
function logElements(arr) {
  arr.forEach((elem, idx) => {
    console.log(`Index ${idx}:`, elem);
  });
}

logElements(['a', 'b', 'c']);
// Index 0: a
// Index 1: b
// Index 2: c

// Sum numbers using forEach and external state
function sumWithForEach(numbers) {
  let total = 0;

  numbers.forEach(num => {
    total += num; // side effect on outer variable
  });

  return total;
}

console.log(sumWithForEach([1, 2, 3, 4])); // 10

// ----------------------------------------------
// 2. map – Transforming Values with Return Values
// ----------------------------------------------

// Double each number with map (pure transformation)
function doubleAll(numbers) {
  return numbers.map(num => num * 2);
}

console.log(doubleAll([1, 2, 3])); // [2, 4, 6]

// Extract first element from each sub-array
function firstElements(nested) {
  return nested.map(subArr => subArr[0]);
}

console.log(firstElements([[1, 2], [3, 4], [5, 6]])); // [1, 3, 5]

// ----------------------------------------------
// 3. filter – Selecting Elements by Predicate
// ----------------------------------------------

// Keep only numbers greater than a threshold
function greaterThan(numbers, threshold) {
  return numbers.filter(num => num > threshold);
}

console.log(greaterThan([1, 5, 10, 15], 9)); // [10, 15]

// Keep only strings shorter than N characters
function shorterThan(strings, maxLength) {
  return strings.filter(str => str.length < maxLength);
}

console.log(shorterThan(['cat', 'elephant', 'dog'], 4)); // ["cat", "dog"]

// ----------------------------------------------
// 4. every / some – Boolean Checks with Callbacks
// ----------------------------------------------

// Check if all numbers are even
function allEven(numbers) {
  return numbers.every(num => num % 2 === 0);
}

console.log(allEven([2, 4, 6]));    // true
console.log(allEven([2, 3, 4]));    // false

// Check if any number is negative
function anyNegative(numbers) {
  return numbers.some(num => num < 0);
}

console.log(anyNegative([1, 2, 3]));     // false
console.log(anyNegative([1, -2, 3]));    // true

// ----------------------------------------------
// 5. Nested map / filter – Working with Nested Arrays
// ----------------------------------------------

// Double all numbers in a 2D array
function doubleNested(nested) {
  return nested.map(innerArr => {
    return innerArr.map(num => num * 2);
  });
}

console.log(doubleNested([[1, 2], [3, 4]])); // [[2, 4], [6, 8]]

// Select numbers > 10 and strings < 5 chars in a 2D array
function selectMixed(nested) {
  return nested.map(innerArr => {
    return innerArr.filter(item => {
      if (typeof item === 'number') {
        return item > 10;
      } else {
        return item.length < 5;
      }
    });
  });
}

console.log(
  selectMixed([
    [5, 12, 30],
    ['apple', 'pear', 'kiwi'],
  ])
);
// [ [12, 30], ['pear', 'kiwi'] ]

// ----------------------------------------------
// 6. Objects + Callbacks (filter + every)
// ----------------------------------------------

// Keep only objects where every key equals first letter of value
function filterKeyMatchesFirstLetter(objects) {
  return objects.filter(obj => {
    return Object.keys(obj).every(key => obj[key][0] === key);
  });
}

let data = [
  { a: 'ant', b: 'bear' },
  { c: 'cat', d: 'dog' },
  { e: 'eel', f: 'shark' },
];

console.log(filterKeyMatchesFirstLetter(data));
// [ { c: 'cat', d: 'dog' } ]

// ----------------------------------------------
// 7. Return Values vs Side Effects in Nested Callbacks
// ----------------------------------------------

// forEach outside, map inside (return value of forEach is ignored)
function logIfGreaterThanFive(nested) {
  let result = nested.forEach(innerArr => {
    return innerArr.map(num => {
      if (num > 5) {
        console.log(num);      // side effect
        return num;            // unused by forEach
      }
    });
  });

  return result; // always undefined
}

console.log(
  logIfGreaterThanFive([
    [2, 7],
    [10, 3],
  ])
);
// Logs: 7, 10
// Returns: undefined

// map outside, map inside (all return values used)
function incrementAllNested(nested) {
  return nested.map(innerArr => {
    return innerArr.map(num => num + 1);
  });
}

console.log(incrementAllNested([[1, 2], [3, 4]])); // [[2, 3], [4, 5]]

// ----------------------------------------------
// 8. Avoid Mutating During Iteration
// ----------------------------------------------

// BAD: uses pop inside map → mutation + surprising result
function badPopDuringMap(arr) {
  return arr.map(() => arr.pop());
}

let original = [1, 2, 3];
let mutatedResult = badPopDuringMap(original);

console.log(mutatedResult); // [3, 2, <1 empty item> ] (or similar odd result)
console.log(original);      // [1] (mutated)

// GOOD: no mutation – build new array explicitly
function safeReverseCopy(arr) {
  // create a copy and reverse it (non-mutating version)
  let copy = [...arr].reverse();
  return copy;
}

let base = [1, 2, 3];
let reversedCopy = safeReverseCopy(base);

console.log(reversedCopy); // [3, 2, 1]
console.log(base);         // [1, 2, 3] (unchanged)

// ----------------------------------------------
// 9. Practice: Analyze and Predict Return Values
// ----------------------------------------------

// Try to predict output + return value before running:

function practice1() {
  let result = [[1, 2], [3, 4]].map(arr => {
    console.log(arr[0]);    // side effect
    return arr[0] * 10;     // used by map
  });

  return result;
}

console.log(practice1());
// Logs: 1, 3
// Returns: [10, 30]

function practice2() {
  let arr = [[1], [2, 3]];
  let result = arr.map(inner => {
    return inner.filter(num => num % 2 === 1);
  });

  return result;
}

console.log(practice2());
// [[1], [3]]

// ----------------------------------------------
// 10. Practice Helper: Generic Analyzer Pattern
// ----------------------------------------------

// A helper demonstrating how you *mentally* analyze a callback flow.
// Not a real analyzer, but shows the structure.

function processAndLog(arr) {
  return arr.map((elem, idx) => {
    // 1. Action: method call (map) on arr
    // 2. Callback on each elem
    console.log(`Processing index ${idx}:`, elem); // side effect

    let transformed = elem * 2; // expression with return value
    return transformed;         // used by map
  });
}

console.log(processAndLog([10, 20])); // [20, 40]