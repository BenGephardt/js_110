// JS110 / Lesson 1
// Objects and Object Helpers (Object.keys / values / entries)
// - Objects as key/value collections
// - Dot vs bracket notation
// - Iterating objects via Object.keys / Object.values / Object.entries
// - Using array methods (forEach, map, filter, reduce) on those results
// - Building objects from arrays (e.g., lookup tables)
// - Aggregating data from objects (sums, minimums)
// - Counting frequencies (e.g., character counts)

// ----------------------------------------------
// Object Basics
// ----------------------------------------------

let person = {
  name: 'Fred',
  age: 32,
  job: 'Engineer',
};

// Dot notation (when you know the property name literally)
console.log(person.name); // 'Fred'
console.log(person.age);  // 32

// Bracket notation (when property name is in a variable or not a valid identifier)
let key = 'job';
console.log(person[key]);   // 'Engineer'

// Adding / updating properties
person.city = 'Bedrock';    // add new property
person.age = 33;            // update existing property

// Deleting a property
delete person.job;

// ----------------------------------------------
// Iterating Over Objects with Object.*
// ----------------------------------------------

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable',
};

// Object.keys: array of keys
let produceKeys = Object.keys(produce); // ['apple', 'carrot', 'pear', 'broccoli']

// Object.values: array of values
let produceValues = Object.values(produce); // ['Fruit', 'Vegetable', 'Fruit', 'Vegetable']

// Object.entries: array of [key, value] pairs
let produceEntries = Object.entries(produce);
// [ ['apple', 'Fruit'], ['carrot', 'Vegetable'], ... ]


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

// ----------------------------------------------
// “Filtering” an Object (by building a new one)
// ----------------------------------------------

let onlyVegetables = {};

Object.entries(produce).forEach(([key, value]) => {
  if (value === 'Vegetable') {
    onlyVegetables[key] = value; // include only vegetables
  }
});

console.log('onlyVegetables:', onlyVegetables);
// { carrot: 'Vegetable', broccoli: 'Vegetable' }

// ----------------------------------------------
// Building an Object from an Array (Lookup Table)
// ----------------------------------------------

// From the Flintstones practice problem

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Create { Fred: 0, Barney: 1, ... }
let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

console.log(flintstonesObj);
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// ----------------------------------------------
// Summing Values in an Object
// ----------------------------------------------

// From the Munsters ages practice problem

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// Using forEach + external accumulator
let totalAges = 0;

Object.values(ages).forEach(age => {
  totalAges += age;
});

console.log('totalAges (forEach):', totalAges); // 6174

// Using reduce directly on Object.values
let totalAgesWithReduce = Object.values(ages).reduce((sum, currAge) => {
  return sum + currAge;
}, 0);

console.log('totalAges (reduce):', totalAgesWithReduce); // 6174

// ----------------------------------------------
// Picking Out the Minimum Value in an Object
// ----------------------------------------------

// Using Object.values + Math.min + spread syntax

let agesArr = Object.values(ages);       // [32, 30, 5843, 10, 22, 237]
let minAge = Math.min(...agesArr);      // 10

console.log('minAge:', minAge);

// ----------------------------------------------
// Counting Character Frequency (Letter Counts)
// ----------------------------------------------

// From the "The Flintstones Rock" practice problem

let statement = "The Flintstones Rock";

// Convert to array of characters and remove spaces
let charsInStatement = statement
  .split('')
  .filter(char => char !== ' ');

let freq = {};

charsInStatement.forEach(char => {
  // Initialize to 0 if this is the first time we see the char
  freq[char] = freq[char] || 0;
  // Then increment
  freq[char] += 1;
});

console.log(freq);
// Example shape: { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// Same idea, but written a bit more explicitly (no short-circuiting):
let freq2 = {};

charsInStatement.forEach(char => {
  if (Object.keys(freq2).includes(char)) {
    freq2[char] += 1;
  } else {
    freq2[char] = 1;
  }
});

console.log(freq2);

// ----------------------------------------------
// Objects vs Arrays in This Lesson
// ----------------------------------------------

// - Arrays: ordered list-like collections; element positions are indices (0, 1, 2, ...).
// - Objects: key/value collections; keys are usually strings.
// - To use array iteration helpers (forEach, map, filter, reduce) with objects,
//   we first convert the object into an array via Object.keys / values / entries.
// - Many “object problems” in this lesson are solved by:
//     1) Turning the object into an array (of keys/values/entries).
//     2) Using array methods to process that array.
//     3) Optionally building a new object as the result.