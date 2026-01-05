// JS110 / Lesson 1
// Object Practice

// ----------------------------------------------
// 1. Basic object access / update
// ----------------------------------------------

// Create a simple person object
let person = {
  name: 'Wilma',
  age: 29,
  city: 'Bedrock',
};

console.log(person.name); // 'Wilma'
console.log(person['city']); // 'Bedrock'

// Update and add properties
person.age = 30;
person.job = 'Engineer';

console.log(person.age); // 30
console.log(person.job); // 'Engineer'

// Delete a property
delete person.city;
console.log(person.city); // undefined

// ----------------------------------------------
// 2. Practice with Object.keys / values / entries
// ----------------------------------------------

let pets = {
  Dino: 'Dog',
  Hoppy: 'Kangaroo',
  BabyPuss: 'Saber-toothed cat',
};

// List all pet names (keys)
Object.keys(pets).forEach(name => {
  console.log('Pet name:', name);
});

// List all pet types (values)
Object.values(pets).forEach(type => {
  console.log('Pet type:', type);
});

// List "name is a type" (entries)
Object.entries(pets).forEach(([name, type]) => {
  console.log(`${name} is a ${type}`);
});

// ----------------------------------------------
// 3. "Filter" an object into a new object
// ----------------------------------------------

// Keep only pets that are "Dog"
function filterByType(sourceObj, desiredType) {
  let result = {};

  Object.entries(sourceObj).forEach(([name, type]) => {
    if (type === desiredType) {
      result[name] = type;
    }
  });

  return result;
}

let onlyDogs = filterByType(pets, 'Dog');
console.log(onlyDogs); // { Dino: 'Dog' }

// ----------------------------------------------
// 4. Build an index object from an array
// ----------------------------------------------

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Convert an array of names into { name: index } pairs
function indexByName(names) {
  let result = {};

  names.forEach((name, index) => {
    result[name] = index;
  });

  return result;
}

let flintstonesIndex = indexByName(flintstones);
console.log(flintstonesIndex);
// { Fred: 0, Barney: 1, Wilma: 2, ... }

// ----------------------------------------------
// 5. Sum numeric values in an object
// ----------------------------------------------

// Munster ages
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

// Sum ages with forEach
function sumObjectValues(obj) {
  let total = 0;

  Object.values(obj).forEach(value => {
    total += value;
  });

  return total;
}

console.log(sumObjectValues(ages)); // 6174

// Sum ages with reduce
function sumObjectValuesWithReduce(obj) {
  return Object.values(obj).reduce((sum, value) => sum + value, 0);
}

console.log(sumObjectValuesWithReduce(ages)); // 6174

// ----------------------------------------------
// 6. Find minimum numeric value in an object
// ----------------------------------------------

// Get minimum value from an object of numbers
function minObjectValue(obj) {
  let values = Object.values(obj);
  return Math.min(...values);
}

console.log(minObjectValue(ages)); // 10

// ----------------------------------------------
// 7. Character frequency counter
// ----------------------------------------------

// Count character frequencies in a string (ignoring spaces)
function charFrequency(str) {
  let chars = str
    .split('')
    .filter(char => char !== ' ');

  let freq = {};

  chars.forEach(char => {
    freq[char] = freq[char] || 0;
    freq[char] += 1;
  });

  return freq;
}

console.log(charFrequency('The Flintstones Rock'));
// Example: { T: 1, h: 1, e: 2, F: 1, ... }

// Same thing but without using "||" trick
function charFrequencyExplicit(str) {
  let chars = str
    .split('')
    .filter(char => char !== ' ');

  let freq = {};

  chars.forEach(char => {
    if (Object.keys(freq).includes(char)) {
      freq[char] += 1;
    } else {
      freq[char] = 1;
    }
  });

  return freq;
}

console.log(charFrequencyExplicit('The Flintstones Rock'));

// ----------------------------------------------
// 8. Practice: convert object -> array of messages
// ----------------------------------------------

// Turn { name: role } into an array of "name is a role"
function describeRoles(rolesObj) {
  return Object.entries(rolesObj).map(([name, role]) => {
    return `${name} is a ${role}`;
  });
}

let roles = {
  Fred: 'Engineer',
  Barney: 'Manager',
  Wilma: 'Designer',
};

console.log(describeRoles(roles));
// [ 'Fred is an Engineer', 'Barney is a Manager', 'Wilma is a Designer' ]