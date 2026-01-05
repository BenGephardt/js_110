// JS110 / Lesson 2
// Nested Data Structures Practice

// ----------------------------------------------
// 1. Accessing Nested Arrays and Objects
// ----------------------------------------------

// Return the element at [outerIndex][innerIndex] from a nested array
function getNestedElement(nestedArr, outerIndex, innerIndex) {
  let inner = nestedArr[outerIndex]; // may be an array or something else
  if (!Array.isArray(inner)) return undefined;
  return inner[innerIndex];
}

let numbers = [[1, 3], [5, 7], [9]];
console.log(getNestedElement(numbers, 0, 1)); // 3
console.log(getNestedElement(numbers, 1, 0)); // 5
console.log(getNestedElement(numbers, 2, 1)); // undefined

// Safely get a deeply nested value: arr[0][1][0], if all levels exist
function getDeepValue(structure) {
  // expecting something like: [['a', ['b']]]
  if (!Array.isArray(structure)) return undefined;
  if (!Array.isArray(structure[0])) return undefined;
  if (!Array.isArray(structure[0][1])) return undefined;

  return structure[0][1][0];
}

let deep = [['a', ['b']]];
console.log(getDeepValue(deep)); // 'b'

// ----------------------------------------------
// 2. Updating Nested Values (Destructive)
// ----------------------------------------------

// Replace the second element of the first inner array with a new value
function updateFirstInnerSecondElement(nestedArr, newValue) {
  if (!Array.isArray(nestedArr[0])) return; // nothing to do
  nestedArr[0][1] = newValue; // destructive update
}

let data = [[1, 3], [2]];
updateFirstInnerSecondElement(data, 99);
console.log(data); // [ [1, 99], [2] ]

// Add a new key/value to an object nested in an array
function addPropertyToFirstObject(arrOfObjects, key, value) {
  let first = arrOfObjects[0];
  if (typeof first !== 'object' || first === null) return;

  first[key] = value; // mutates the nested object
}

let animals = [{ a: 'ant' }, { b: 'bear' }];
addPropertyToFirstObject(animals, 'c', 'cat');
console.log(animals);
// [ { a: 'ant', c: 'cat' }, { b: 'bear' } ]

// ----------------------------------------------
// 3. Variables as Pointers (Shared References)
// ----------------------------------------------

// Show how mutating via one reference affects all references
function demoSharedReferences() {
  let a = [1, 3];
  let b = [2];
  let outer = [a, b];

  console.log('Initial:', outer); // [ [1, 3], [2] ]

  // Mutate via 'a'
  a[1] = 5;
  console.log('After a[1] = 5:', outer); // [ [1, 5], [2] ]

  // Mutate via nested reference
  outer[0][0] = 9; // same underlying array
  console.log('After outer[0][0] = 9:', a);    // [9, 5]
  console.log('Outer now:', outer);           // [ [9, 5], [2] ]
}

demoSharedReferences();

// Practice: add a number to all elements of the first nested array
// (mutates in place)
function addToFirstNestedArray(outerArr, increment) {
  let first = outerArr[0];
  if (!Array.isArray(first)) return;

  for (let i = 0; i < first.length; i += 1) {
    first[i] += increment;
  }
}

let pointerDemo = [];
let base = [10, 20];
pointerDemo.push(base);
pointerDemo.push([30]);

addToFirstNestedArray(pointerDemo, 5);
console.log(base);        // [15, 25]  (mutated through pointerDemo)
console.log(pointerDemo); // [ [15, 25], [30] ]

// ----------------------------------------------
// 4. Shallow Copying Arrays
// ----------------------------------------------

// Make a shallow copy of an array and modify only the outer structure
function addElementToCopy(originalArr, newElement) {
  let copy = originalArr.slice(); // or [...originalArr]
  copy.push(newElement);
  return copy;
}

let letters = ['a', 'b', 'c'];
let lettersCopy = addElementToCopy(letters, 'd');

console.log(letters);     // [ 'a', 'b', 'c' ]
console.log(lettersCopy); // [ 'a', 'b', 'c', 'd' ]

// Show how shallow copy shares nested arrays
function demoShallowCopyWithNestedArrays() {
  let nested = [['a'], ['b'], ['c']];
  let copy = nested.slice(); // shallow copy of outer array

  // Mutate an inner array through the copy
  copy[1].push('d');

  console.log('Original:', nested); // [ ['a'], ['b', 'd'], ['c'] ]
  console.log('Copy:    ', copy);   // [ ['a'], ['b', 'd'], ['c'] ]
}

demoShallowCopyWithNestedArrays();

// ----------------------------------------------
// 5. Shallow Copying Objects
// ----------------------------------------------

// Shallow-copy an object and add a top-level property to the copy
function copyObjectAndAdd(obj, key, value) {
  let copy = Object.assign({}, obj); // shallow copy
  copy[key] = value;
  return copy;
}

let person = { name: 'Ben', info: { city: 'Denver' } };
let personCopy = copyObjectAndAdd(person, 'role', 'student');

console.log(person);     // { name: 'Ben', info: { city: 'Denver' } }
console.log(personCopy); // { name: 'Ben', info: { city: 'Denver' }, role: 'student' }

// Show shared nested object in shallow copy
function demoShallowCopyWithNestedObjects() {
  let original = { a: { inner: 1 }, b: 2 };
  let copy = Object.assign({}, original);

  // Mutate nested object via original
  original.a.inner = 42;

  console.log('Original:', original); // { a: { inner: 42 }, b: 2 }
  console.log('Copy:    ', copy);     // { a: { inner: 42 }, b: 2 }
}

demoShallowCopyWithNestedObjects();

// ----------------------------------------------
// 6. Deep Copy with JSON (Plain Objects/Arrays)
// ----------------------------------------------

// Create a deep copy for plain objects/arrays using JSON
function deepCopyJSON(value) {
  let serialized = JSON.stringify(value);
  return JSON.parse(serialized);
}

let complex = [{ n: 1 }, ['x', 'y']];
let complexCopy = deepCopyJSON(complex);

// Mutate the deep copy
complexCopy[0].n = 99;
complexCopy[1].push('z');

console.log(complex);     // [ { n: 1 }, ['x', 'y'] ]
console.log(complexCopy); // [ { n: 99 }, ['x', 'y', 'z'] ]

// Practice: clone and update without mutating original
function cloneAndAddToNestedArray(structure, value) {
  let clone = deepCopyJSON(structure);
  if (Array.isArray(clone[1])) {
    clone[1].push(value);
  }
  return clone;
}

let originalNested = [[1], [2]];
let modifiedClone = cloneAndAddToNestedArray(originalNested, 3);

console.log(originalNested); // [ [1], [2] ]
console.log(modifiedClone);  // [ [1], [2, 3] ]

// ----------------------------------------------
// 7. Freezing Objects (and Nested Structures)
// ----------------------------------------------

// Try to mutate a frozen object
function demoFreezeObject() {
  let obj = Object.freeze({ a: 'foo' });

  obj.a = 'bar';   // fails silently (no change)
  obj.b = 'baz';   // fails silently

  console.log(obj); // { a: 'foo' }
}

demoFreezeObject();

// Show that nested objects of a frozen object are still mutable
function demoFreezeWithNested() {
  let nested = Object.freeze([[1], [2], [3]]);

  // outer array is frozen, but inner arrays are not
  nested[0].push(99);
  nested[2].push(4);

  console.log(nested); // [ [1, 99], [2], [3, 4] ]
}

demoFreezeWithNested();

// Practice: freeze an outer structure, then safely modify nested values
function freezeOuterAndModifyInner() {
  let users = Object.freeze([
    { name: 'Alice', tags: ['student'] },
    { name: 'Bob', tags: ['mentor'] },
  ]);

  // We can't reassign users[0] or users[1], but we can modify tags arrays
  users[0].tags.push('JS');
  users[1].tags.push('LS');

  console.log(users);
  // [
  //   { name: 'Alice', tags: ['student', 'JS'] },
  //   { name: 'Bob', tags: ['mentor', 'LS'] }
  // ]
}

freezeOuterAndModifyInner();

// ----------------------------------------------
// 8. Putting It Together: Transform Nested Data
// ----------------------------------------------

// Given an array of [ [name, [scores...]], ... ],
// return a NEW deep-copied structure with each score increased by 10.
// Original must not be mutated.
function boostScores(students) {
  let copy = deepCopyJSON(students); // deep copy so we don't share nested arrays

  for (let i = 0; i < copy.length; i += 1) {
    let record = copy[i];           // e.g., ['Ben', [80, 90]]
    let scores = record[1];

    for (let j = 0; j < scores.length; j += 1) {
      scores[j] += 10;
    }
  }

  return copy;
}

let studentScores = [
  ['Ben', [80, 90]],
  ['Alice', [70, 75]],
];

let boosted = boostScores(studentScores);

console.log(studentScores);
// [ ['Ben', [80, 90]], ['Alice', [70, 75]] ]  (unchanged)
console.log(boosted);
// [ ['Ben', [90, 100]], ['Alice', [80, 85]] ]