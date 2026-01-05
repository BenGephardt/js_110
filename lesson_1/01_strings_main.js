// JS110 / Lesson 1
// Strings
// - Primitive values (immutable)
// - Accessing characters by index; length property
// - Iterating over characters (for, for...of, forEach via split)
// - Common string methods: toUpperCase / toLowerCase / includes / indexOf
// - Extracting substrings: slice / substring
// - Trimming whitespace: trim
// - Converting between strings and arrays: split / join
// - String concatenation vs template literals

// ----------------------------------------------
// Strings as Primitive, Immutable Values
// ----------------------------------------------

let greeting = 'hello';

console.log(typeof greeting);      // "string"
console.log(greeting.length);      // 5

// Strings are immutable: you cannot change them in-place
greeting[0] = 'H';                 // does nothing
console.log(greeting);             // "hello" (unchanged)

// To "change" a string, you must create a new one
greeting = 'H' + greeting.slice(1);
console.log(greeting);             // "Hello"

// ----------------------------------------------
// Accessing Characters, Indexing, and length
// ----------------------------------------------

let word = 'Launch';

console.log(word[0]);              // "L"
console.log(word[1]);              // "a"
console.log(word[word.length - 1]); // "h"

// Out-of-bounds index → undefined
console.log(word[100]);            // undefined

// Strings are array-like (have indices and length), but not arrays:
console.log(Array.isArray(word));  // false

// ----------------------------------------------
// Iterating Over Characters
// ----------------------------------------------

let message = 'Hi!';

// Classic for loop with indices
for (let i = 0; i < message.length; i += 1) {
  // console.log(i, message[i]);
}

// for...of iterates directly over characters
for (let char of message) {
  // console.log(char);
}

// forEach by converting to an array of characters
message.split('').forEach((char, idx) => {
  // console.log(idx, char);
});

// ----------------------------------------------
// Common String Methods
// ----------------------------------------------

let phrase = 'Launch School';

// Case conversion (return new strings)
console.log(phrase.toUpperCase()); // "LAUNCH SCHOOL"
console.log(phrase.toLowerCase()); // "launch school"
console.log(phrase);               // original unchanged

// includes: substring check (case-sensitive)
console.log(phrase.includes('Launch')); // true
console.log(phrase.includes('launch')); // false

// indexOf: position of first occurrence (or -1)
console.log(phrase.indexOf('School'));  // 7
console.log(phrase.indexOf('JS'));      // -1

// startsWith / endsWith (if covered)
console.log(phrase.startsWith('Lau'));  // true
console.log(phrase.endsWith('chool'));  // true

// ----------------------------------------------
// Extracting Substrings: slice vs substring
// ----------------------------------------------

let title = 'JavaScript';

// slice(start, end): end is non-inclusive
console.log(title.slice(0, 4));  // "Java"
console.log(title.slice(4));     // "Script" (to end)
console.log(title.slice(-3));    // "ipt" (negative index from end)

// substring(start, end): similar, but no negative indices
console.log(title.substring(0, 4)); // "Java"
console.log(title.substring(4));    // "Script"

// ----------------------------------------------
// Trimming Whitespace
// ----------------------------------------------

let spaced = '   hello world   ';

console.log(spaced.length);          // includes spaces
let trimmed = spaced.trim();
console.log(trimmed);               // "hello world"
console.log(trimmed.length);        // shorter

// ----------------------------------------------
// Strings and Arrays: split / join
// ----------------------------------------------

let sentence = 'Launch School teaches JS';

// split: string → array
let words = sentence.split(' ');
console.log(words);                 // ["Launch", "School", "teaches", "JS"]

// Split into characters
let chars = sentence.split('');
console.log(chars.length);          // number of characters

// join: array → string
let rejoined = words.join(' ');
console.log(rejoined);              // "Launch School teaches JS"

// ----------------------------------------------
// String Concatenation and Template Literals
// ----------------------------------------------

let firstName = 'Ben';
let lastName  = 'Gephardt';

// Concatenation with +
let fullName1 = firstName + ' ' + lastName;
console.log(fullName1);

// Template literals (backticks)
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

// Template literals can embed expressions
let score = 95;
let report = `Student: ${fullName2}, Score: ${score}, Passed: ${score >= 70}`;
console.log(report);

// ----------------------------------------------
// Transforming Strings with Array Methods
// ----------------------------------------------

let sample = 'Hello, World!';

// Example: keep only lowercase letters
let onlyLowercase = sample
  .split('')
  .filter(char => char >= 'a' && char <= 'z')
  .join('');

console.log(onlyLowercase); // "elloorld"

// Example: map each character to its char code
let charCodes = sample
  .split('')
  .map(char => char.charCodeAt(0));

console.log(charCodes);

// Note: all of these operations create NEW strings/arrays
// and never mutate the original string in-place.