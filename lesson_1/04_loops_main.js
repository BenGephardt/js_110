// JS110 / Lesson 1
// Loops (while, for, do/while) and Control Flow (break, continue)
// - Basic counted while loops
// - while (true) + break
// - Iterating over strings and arrays
// - Iterating over objects (Object.keys + while, for...in)
// - do/while vs while
// - Using break (exit early) and continue (skip to next iteration)
// - Off-by-one safety: use < length, not <=

// ----------------------------------------------
// Basic while loops
// ----------------------------------------------

// Simple counter with while
let count = 0;

while (count < 3) {
  console.log('count is:', count);
  count += 1;
}

// ----------------------------------------------
// while (true) with break
// ----------------------------------------------

// Single iteration using break
while (true) {
  console.log('Hello once!');
  break; // exits immediately after first iteration
}

// while(true) with conditional break using random numbers
while (true) {
  let number = Math.floor(10 * Math.random());
  console.log('Random number:', number);

  if (number === 5) {
    console.log('Exiting on 5...');
    break;
  }
}

// ----------------------------------------------
// Iterating over strings (while and for)
// ----------------------------------------------

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// while loop over string characters
let idx = 0;

while (idx < alphabet.length) {
  console.log('while string char:', alphabet[idx]);
  idx += 1;
}

// for loop over string characters
for (let i = 0; i < alphabet.length; i += 1) {
  console.log('for string char:', alphabet[i]);
}

// Spaces are characters too
let spaced = 'a b c';

for (let i = 0; i < spaced.length; i += 1) {
  console.log('spaced string char:', JSON.stringify(spaced[i]));
}

// ----------------------------------------------
// Iterating over arrays with for
// ----------------------------------------------

let colors = ['green', 'blue', 'purple', 'orange'];

for (let i = 0; i < colors.length; i += 1) {
  console.log(`I'm the color ${colors[i]}!`);
}

let mixed = ['hello', 10, undefined];

for (let i = 0; i < mixed.length; i += 1) {
  console.log('type of mixed element:', typeof mixed[i]);
}

// ----------------------------------------------
// Iterating over objects
// ----------------------------------------------

// Using Object.keys + while
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1,
};

let pets = Object.keys(numberOfPets);
let petIndex = 0;

while (petIndex < pets.length) {
  let currentPet = pets[petIndex];                 // key
  let currentPetNumber = numberOfPets[currentPet]; // value

  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  petIndex += 1;
}

// Using for...in
for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`(for...in) I have ${currentPetNumber} ${currentPet}!`);
}

// ----------------------------------------------
// do/while vs while (position of the condition)
// ----------------------------------------------

// do/while style: body runs at least once
let num;

do {
  num = Math.floor(10 * Math.random());
  console.log('do/while style number:', num);
} while (num !== 5);

console.log('Exiting do/while style...');

// while style: condition checked before each iteration
let str = '';

while (str.length < 5) {
  str += '*';
  console.log('growing string:', str);
}

// while(true) with break at top mimics while condition
let starStr = '';

while (true) {
  if (starStr.length >= 5) {
    break; // exit when condition is met
  }

  starStr += '#';
  console.log('growing starStr:', starStr);
}

// ----------------------------------------------
// Using break to exit early
// ----------------------------------------------

// break from middle of loop (don’t log the terminating value)
while (true) {
  let randomNum = Math.floor(10 * Math.random());

  if (randomNum === 5) {
    console.log('Got 5, exiting before log...');
    break; // exit before logging 5
  }

  console.log('random (not 5):', randomNum);
}

// break in a while loop over an array
let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
let nameIndex = 0;

while (nameIndex < names.length) {
  if (names[nameIndex][0] === 'E') {
    console.log('Found a name starting with E, stopping:', names[nameIndex]);
    break; // stop when we find a name starting with 'E'
  }

  console.log('name:', names[nameIndex]);
  nameIndex += 1;
}

// ----------------------------------------------
// continue and guard clauses
// ----------------------------------------------

let numbers = [1, 4, 3, 7, 6, 5, 2, 1];

// Without guard clause (nested logic)
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 1) { // even numbers
    let square = numbers[i] * numbers[i];
    console.log('square of even (nested):', square);
  }
}

// With guard clause and continue (simpler body)
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 1) continue; // skip odd numbers

  let square = numbers[i] * numbers[i];
  console.log('square of even (guard clause):', square);
}

// Demonstrating that continue skips to next iteration
for (let i = 0; i < 5; i += 1) {
  if (i === 2) {
    console.log('skipping i = 2');
    continue;
  }

  console.log('i is:', i);
}

// ----------------------------------------------
// Off-by-one safety with length
// ----------------------------------------------

let letters = ['a', 'b', 'c'];

// Correct: use < length
for (let i = 0; i < letters.length; i += 1) {
  console.log('letter:', letters[i]); // i = 0, 1, 2
}

// If we mistakenly used <=, we’d attempt to access letters[3], which is undefined:
// for (let i = 0; i <= letters.length; i += 1) {
//   console.log('possible undefined:', letters[i]);
// }