// JS110 / Lesson 1
// String Practice

// ----------------------------------------------
// 1. Strings as Primitive, Immutable Values
// ----------------------------------------------

// Capitalize first letter of a word (returns a NEW string)
function capitalize(word) {
  if (word.length === 0) return word;

  let firstChar = word[0].toUpperCase();
  let rest = word.slice(1);
  return firstChar + rest;
}

console.log(capitalize('launch')); // "Launch"
console.log(capitalize(''));       // ""

// ----------------------------------------------
// 2. Accessing Characters and length
// ----------------------------------------------

// Get the last character of a string (or empty string if none)
function lastChar(str) {
  if (str.length === 0) return '';
  return str[str.length - 1];
}

console.log(lastChar('JavaScript')); // "t"
console.log(lastChar('a'));          // "a"
console.log(lastChar(''));           // ""

// Count how many times a character appears (case-sensitive)
function countChar(str, targetChar) {
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === targetChar) {
      count += 1;
    }
  }

  return count;
}

console.log(countChar('banana', 'a')); // 3
console.log(countChar('Launch', 'L')); // 1

// ----------------------------------------------
// 3. Iterating Over Characters
// ----------------------------------------------

// Collect all vowels from a string (in order)
function extractVowels(str) {
  let vowels = 'aeiou';
  let result = '';

  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      result += char;
    }
  }

  return result;
}

console.log(extractVowels('Launch School')); // "auoo"

// ----------------------------------------------
// 4. Common String Methods
// ----------------------------------------------

// Normalize user input: trim + lowercase
function normalizeInput(input) {
  return input.trim().toLowerCase();
}

console.log(normalizeInput('  HeLLo  ')); // "hello"

// Check if a sentence contains a word (case-insensitive)
function containsWord(sentence, word) {
  return sentence.toLowerCase().includes(word.toLowerCase());
}

console.log(containsWord('Welcome to Launch School', 'launch')); // true
console.log(containsWord('Welcome to Launch School', 'JS'));     // false

// Find the first index of a substring (case-insensitive)
function indexOfIgnoreCase(str, subStr) {
  let lowerStr = str.toLowerCase();
  let lowerSub = subStr.toLowerCase();
  return lowerStr.indexOf(lowerSub);
}

console.log(indexOfIgnoreCase('JavaScript', 'script')); // 4
console.log(indexOfIgnoreCase('JavaScript', 'JS'));     // 0
console.log(indexOfIgnoreCase('JavaScript', 'ruby'));   // -1

// ----------------------------------------------
// 5. Extracting Substrings: slice / substring
// ----------------------------------------------

// Get the first N characters of a string
function firstN(str, n) {
  return str.slice(0, n);
}

console.log(firstN('LaunchSchool', 6)); // "Launch"

// Get the last N characters of a string
function lastN(str, n) {
  return str.slice(-n);
}

console.log(lastN('LaunchSchool', 6)); // "School"

// Get the middle portion between two indices
function middleSection(str, start, end) {
  // uses slice; end is non-inclusive
  return str.slice(start, end);
}

console.log(middleSection('JavaScript', 4, 10)); // "Script"

// ----------------------------------------------
// 6. Trimming Whitespace
// ----------------------------------------------

// Clean up a line of input by trimming and collapsing inner spaces
function normalizeSpaces(line) {
  // Trim and split on spaces, then filter out empties and join with single space
  return line
    .trim()
    .split(' ')
    .filter(part => part !== '')
    .join(' ');
}

console.log(normalizeSpaces('   Launch   School   JS   ')); // "Launch School JS"

// ----------------------------------------------
// 7. Strings and Arrays: split / join
// ----------------------------------------------

// Turn a sentence into an array of words, normalized
function wordsFromSentence(sentence) {
  let cleaned = normalizeSpaces(sentence);
  if (cleaned === '') return [];
  return cleaned.split(' ');
}

console.log(wordsFromSentence('  Launch   School  teaches   JS '));
// ["Launch", "School", "teaches", "JS"]

// Reconstruct a sentence from an array of words
function sentenceFromWords(wordsArray) {
  return wordsArray.join(' ');
}

console.log(sentenceFromWords(['Launch', 'School', 'JS'])); // "Launch School JS"

// ----------------------------------------------
// 8. Concatenation and Template Literals
// ----------------------------------------------

// Build a simple report string with template literals
function buildReport(name, score) {
  let status = score >= 70 ? 'passed' : 'failed';
  return `Student: ${name}, Score: ${score}, Status: ${status}`;
}

console.log(buildReport('Ben', 95)); // "Student: Ben, Score: 95, Status: passed"
console.log(buildReport('Ben', 60)); // "Student: Ben, Score: 60, Status: failed"

// ----------------------------------------------
// 9. Transforming Strings with Array Methods
// ----------------------------------------------

// "Modify" a string by changing a character via array conversion
function replaceAt(str, index, newChar) {
  if (index < 0 || index >= str.length) return str;

  let chars = str.split('');
  chars[index] = newChar;
  return chars.join('');
}

console.log(replaceAt('cat', 0, 'r')); // "rat"

// Remove all non-letter characters
function lettersOnly(str) {
  return str
    .split('')
    .filter(char =>
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z')
    )
    .join('');
}

console.log(lettersOnly('H3ll0, W0rld!')); // "HllWrld"

// Double every character in a string
function doubleChars(str) {
  return str
    .split('')
    .map(char => char + char)
    .join('');
}

console.log(doubleChars('abc')); // "aabbcc"

// ----------------------------------------------
// 10. Case Conversion Helpers
// ----------------------------------------------

// Toggle case of each letter (a → A, A → a; others unchanged)
function toggleCase(str) {
  return str
    .split('')
    .map(char => {
      let lower = char.toLowerCase();
      let upper = char.toUpperCase();

      if (char === lower) {
        return upper;
      } else if (char === upper) {
        return lower;
      } else {
        return char;
      }
    })
    .join('');
}

console.log(toggleCase('Launch School 123!')); // "lAUNCH sCHOOL 123!"
