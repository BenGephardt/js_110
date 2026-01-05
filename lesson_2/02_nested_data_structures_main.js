// JS110 / Lesson 2
// Nested Data Structures
// - Collections can contain other collections (arrays, objects)
// - Accessing nested values via chained references: arr[0][1], obj.a.b, arr[0].c
// - Updating nested values (destructive): arr[0][1] = 5, arr[0].c = 'cat'
// - Variables as pointers: multiple references to the same array/object
// - Shallow copying:
//     - Arrays: slice(), spread syntax [...arr]
//     - Objects: Object.assign({}, obj)
//   Only copies the top level; nested objects/arrays are shared
// - Deep copying (for plain objects/arrays): JSON.stringify + JSON.parse
// - Object.freeze: prevents mutation of that object, but not nested objects

// ----------------------------------------------
// Basic Nested Arrays and Chained Access
// ----------------------------------------------

let nestedArr = [[1, 3], [2]];

console.log(nestedArr[0]);    // [1, 3]  (first inner array)
console.log(nestedArr[0][1]); // 3      (second element of first inner array)

// Replacing a whole inner array (destructive)
nestedArr[1] = 'hi there';
console.log(nestedArr); // [ [1, 3], 'hi there' ]

// Reset for more examples
nestedArr = [[1, 3], [2]];

// Updating a value inside an inner array (destructive)
nestedArr[0][1] = 5;   // like: [1, 3][1] = 5
console.log(nestedArr); // [ [1, 5], [2] ]

// ----------------------------------------------
// Mutating Inner Arrays with Methods
// ----------------------------------------------

let arrOfArrs = [[1], [2]];

// Access inner array, then call a method on it
arrOfArrs[0].push(3);         // [1].push(3)
console.log(arrOfArrs);       // [ [1, 3], [2] ]

// Nest another array to get three levels
arrOfArrs[0].push([4]);       // [1, 3].push([4])
console.log(arrOfArrs);       // [ [1, 3, [4]], [2] ]

// ----------------------------------------------
// Arrays of Objects and Nested Access
// ----------------------------------------------

let animals = [{ a: 'ant' }, { b: 'bear' }];

// Add new key/value pairs to object nested in array
animals[0]['c'] = 'cat';      // bracket notation
animals[0].d = 'dog';         // dot notation
console.log(animals);
// [ { a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' } ]

// Mixed nested structure
let mixed = [['a', ['b']], { b: 'bear', c: 'cat' }, 'cab'];

console.log(mixed[0]);        // [ 'a', ['b'] ]
console.log(mixed[0][1][0]);  // 'b'   (3 levels deep)
console.log(mixed[1]);        // { b: 'bear', c: 'cat' }
console.log(mixed[1]['b']);   // 'bear'
console.log(mixed[1].b[1]);   // 'e'   (second char of 'bear')
console.log(mixed[2][1]);     // 'a'   (second char of 'cab')

// ----------------------------------------------
// Variables as Pointers (Shared References)
// ----------------------------------------------

let a = [1, 3];
let b = [2];
let outer = [a, b];

console.log(outer); // [ [1, 3], [2] ]

// Mutate via variable 'a'
a[1] = 5;
console.log(a);     // [1, 5]
console.log(outer); // [ [1, 5], [2] ]  (same underlying array)

// Mutate via nested reference
outer[0][1] = 8;    // equivalent to a[1] = 8
console.log(a);     // [1, 8]
console.log(outer); // [ [1, 8], [2] ]

// Key idea: a and outer[0] both point to the same array object.

// ----------------------------------------------
// Shallow Copying Arrays
// ----------------------------------------------

let letters = ['a', 'b', 'c'];
let lettersCopy1 = letters.slice(); // shallow copy
let lettersCopy2 = [...letters];    // shallow copy with spread

lettersCopy1.push('d');

console.log(letters);     // [ 'a', 'b', 'c' ]
console.log(lettersCopy1); // [ 'a', 'b', 'c', 'd' ]

// Shallow copy with nested arrays: only outer array is copied
let nestedLetters = [['a'], ['b'], ['c']];
let nestedCopy = nestedLetters.slice();

nestedCopy[1].push('d'); // mutate inner array at index 1

console.log(nestedLetters); // [ ['a'], ['b', 'd'], ['c'] ]
console.log(nestedCopy);    // [ ['a'], ['b', 'd'], ['c'] ]
// Both changed because they share the same inner arrays.

// Shallow copy with objects nested in an array
let objArr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
let objArrCopy = [...objArr];

objArrCopy[1].d = 'qux'; // add property to shared object

console.log(objArr);
// [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]
console.log(objArrCopy);
// [ { a: 'foo' }, { b: 'bar', d: 'qux' }, { c: 'baz' } ]

// ----------------------------------------------
// Shallow Copying Objects
// ----------------------------------------------

let obj = { a: 'foo', b: 'bar' };
let objCopy = Object.assign({}, obj); // shallow copy

objCopy.c = 'baz';

console.log(obj);     // { a: 'foo', b: 'bar' }
console.log(objCopy); // { a: 'foo', b: 'bar', c: 'baz' }

// Shallow copy with nested structures
let complexObj = { a: { b: 'foo' }, c: ['bar'] };
let complexCopy = Object.assign({}, complexObj);

// Mutate nested object in original
complexObj.a.d = 'baz';

console.log(complexObj);
// { a: { b: 'foo', d: 'baz' }, c: ['bar'] }
console.log(complexCopy);
// { a: { b: 'foo', d: 'baz' }, c: ['bar'] }
// Both show the change because they share the same nested objects.

// ----------------------------------------------
// Deep Copy with JSON (Plain Objects/Arrays Only)
// ----------------------------------------------

let deepSource = [{ b: 'foo' }, ['bar']];

// Serialize then parse to get a deep copy
let serialized = JSON.stringify(deepSource);
let deepCopy = JSON.parse(serialized);

// Mutate nested array in deep copy
deepCopy[1].push('baz');

console.log(deepSource); // [ { b: 'foo' }, ['bar'] ]
console.log(deepCopy);   // [ { b: 'foo' }, ['bar', 'baz'] ]
// Original is unchanged → nested structures were cloned.

// ----------------------------------------------
// Freezing Objects (Not Deep-Frozen)
// ----------------------------------------------

let frozenObj = Object.freeze({ a: 'foo' });
let frozenArr = Object.freeze(['a', 'b', 'c']);

// These assignments fail (no change to frozenObj / frozenArr)
frozenObj.b = 'bar';
frozenArr[3] = 'x';

console.log(frozenObj); // { a: 'foo' }
console.log(frozenArr); // [ 'a', 'b', 'c' ]

// Mutating via methods on a frozen array throws an error:
// frozenArr.push('d'); // TypeError in strict mode

// Freeze only affects the object passed in, not its nested objects
let partiallyFrozen = Object.freeze([[1], [2], [3]]);

// Inner arrays are still mutable
partiallyFrozen[2].push(4);

console.log(partiallyFrozen); // [ [1], [2], [3, 4] ]

// ----------------------------------------------
// Big Picture
// ----------------------------------------------

// - Always track what level you're changing: outer array/object vs nested value.
// - Shallow copies only protect the outer structure, not nested ones.
// - Variables and collection elements can point to the same underlying object.
// - Deep copying (via JSON) and freezing can help avoid accidental mutation,
//   but each has limitations and only affects what it directly touches.