// JS110 / Lesson 1
// Practice using while, for, do/while, break, and continue
// - Counted while loops
// - while (true) + break
// - Iterating over strings and arrays
// - Iterating over objects (Object.keys + while, for...in)
// - Using break to exit early
// - Using continue as a guard clause

// ----------------------------------------------
// 1. Basic while loops with counters
// ----------------------------------------------

// Increment all numbers in an array by 1 using while
let numbers = [1, 2, 3, 4];
let idx = 0;

while (idx < numbers.length) {
  numbers[idx] += 1;
  idx += 1;
}

console.log('Incremented numbers:', numbers); // [2, 3, 4, 5]

// Count up from 0 to 4 using while
let count = 0;

while (count < 5) {
  console.log('count:', count);
  count += 1;
}

// ----------------------------------------------
// 2. while (true) with break
// ----------------------------------------------

// Generic while(true) with conditional break
while (true) {
  let number = Math.floor(10 * Math.random());
  console.log('Random number:', number);

  if (number === 5) {
    console.log('Exiting on 5...');
    break;
  }
}

// while(true) that only runs once (break immediately)
while (true) {
  console.log('Hello once via while(true)!');
  break;
}

// ----------------------------------------------
// 3. Iterating over strings (while and for)
// ----------------------------------------------

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Iterate over a string with while
let counter = 0;

while (counter < alphabet.length) {
  console.log('Letter (while):', alphabet[counter]);
  counter += 1;
}

// Iterate over a string with for
for (let i = 0; i < alphabet.length; i += 1) {
  console.log('Letter (for):', alphabet[i]);
}

// Show that spaces are characters too
let spaced = 'a b c';

for (let i = 0; i < spaced.length; i += 1) {
  console.log('spaced char:', JSON.stringify(spaced[i]));
}

// ----------------------------------------------
// 4. Iterating over arrays with for
// ----------------------------------------------

let colors = ['green', 'blue', 'purple', 'orange'];

// Basic for loop over array
for (let i = 0; i < colors.length; i += 1) {
  console.log(`I'm the color ${colors[i]}!`);
}

// Mixed array: log value and typeof each element
let mixed = ['hello', 10, undefined];

for (let i = 0; i < mixed.length; i += 1) {
  console.log(`Value: ${mixed[i]}, Type: ${typeof mixed[i]}`);
}

// ----------------------------------------------
// 5. Iterating over objects
// ----------------------------------------------

// Object.keys + while
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1,
};

let pets = Object.keys(numberOfPets);
let petIndex = 0;

while (petIndex < pets.length) {
  let currentPet = pets[petIndex];                  // key
  let currentPetNumber = numberOfPets[currentPet];  // value

  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  petIndex += 1;
}

// for...in over object
for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`(for...in) I have ${currentPetNumber} ${currentPet}!`);
}

// ----------------------------------------------
// 6. Practice with break
// ----------------------------------------------

// break in a while loop over an array
let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
let nameIndex = 0;

while (nameIndex < names.length) {
  if (names[nameIndex][0] === 'E') {
    console.log('Found a name starting with E, breaking:', names[nameIndex]);
    break;
  }

  console.log('Name:', names[nameIndex]);
  nameIndex += 1;
}

// break in a loop of random numbers (stop on 0)
while (true) {
  let rand = Math.floor(10 * Math.random());

  if (rand === 0) {
    console.log('Hit 0, exiting loop...');
    break;
  }

  console.log('Random (non-zero):', rand);
}

// ----------------------------------------------
// 7. Practice with continue and guard clauses
// ----------------------------------------------

let nums = [1, 4, 3, 7, 6, 5, 2, 1];

// With guard clause (skip odd numbers)
for (let i = 0; i < nums.length; i += 1) {
  if (nums[i] % 2 === 1) continue; // guard: skip odd numbers

  let square = nums[i] * nums[i];
  console.log('Square of even number:', square);
}

// Show continue skipping a specific value
for (let i = 0; i < 5; i += 1) {
  if (i === 2) {
    console.log('Skipping i = 2');
    continue;
  }

  console.log('i is:', i);
}