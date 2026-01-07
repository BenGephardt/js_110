/*
Prompt
Build a program that asks the user to enter the length and width of a room in meters, and 
then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to 
collect user input.

Problem
  - Input:Numbers (length and width in m)
  - Output: String (area in sq m and sq ft) logged into console

  - Rules:
    - Explicit:
      - Prompt for length and width (in m)
      - Log area in sq m and sq ft to console
      - Conversion factor: 1 sq m = 10.7639 sq ft

    - Implicit:
      - Use readlineSync for user input
      - User to provide positive numbers
      - Area = length * width
      - Output formated to 2 decimal places
      - Match output format in example

Examples / Test Cases
  - Given:
      Enter the length of the room in meters:
      10
      Enter the width of the room in meters:
      7
      The area of the room is 70.00 square meters (753.47 square feet).

Data Structure
  - Input and calculations: Numbers
  - Output: String

Algorithm
  1. Initialize const `SQMETERS_TO_SQFEET` to 10.7639.
  2. Prompt user to enter room's length in meters.
  3. Read and store user's input in variable `length`.
  4. Convert the `length` to number.
  5. Prompt user to enter room's width in meters.
  6. Read and store user's input in variable `width`.
  7. Convert the `width` to number.
  8. Initialize variable `areaInMeters` to store area in sq m (length * width).
  9. Initialize variable `areaInFeet` to store area in sq ft (areaInMeters * SQMETERS_TO_SQFEET).
 10. Log string with template literals to console:
     - Use both `areaInMeters` and `areaInFeet` values, rounded to two decimal places.
*/

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);