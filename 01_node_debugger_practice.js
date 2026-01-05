// JS110 / Lesson 3
// Debugger Practice

// Run with:
//   node inspect debugger_practice.js
//
// Then use the debugger commands: exec, repl, sb, cb, n, s, o, list, help

// ----------------------------------------------
// 1. Simple Values to Inspect with `exec` / `repl`
// ----------------------------------------------

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

let x = 3;
let y = 4;

let sum = add(x, y);
let product = multiply(x, y);

console.log('sum:', sum);
console.log('product:', product);

// Practice (in debugger, when paused around here):
//   exec x
//   exec y
//   exec sum
//   exec add(10, 5)
//   repl → then type: x + y, multiply(x, y)

// ----------------------------------------------
// 2. Using `exec` / `repl` with Functions and State
// ----------------------------------------------

function applyDiscount(price, discountPercent) {
  let discountAmount = price * (discountPercent / 100);
  let finalPrice = price - discountAmount;
  return finalPrice;
}

let originalPrice = 50;
let discount = 10; // 10%

let discountedPrice = applyDiscount(originalPrice, discount);
console.log('discountedPrice:', discountedPrice);

// Practice (pause before or after applyDiscount call):
//   exec originalPrice
//   exec discount
//   exec applyDiscount(100, 25)
//   repl → inspect discountAmount, finalPrice by stepping into function

// ----------------------------------------------
// 3. Breakpoint Practice with `sb` / `cb`
// ----------------------------------------------

let counter = 1;

while (counter <= 5) {
  console.log('counter:', counter);
  counter += 1; // <-- good line for a breakpoint
}

// Practice (in debugger):
//   - When inside the loop but before increment:
//       sb()                  // set breakpoint on current line
//       c                     // continue; watch it stop each time
//   - Or set by line number:
//       sb(53)                // (update number to match this line in your file)
//   - Clear the breakpoint:
//       cb('debugger_practice.js', 53)

// ----------------------------------------------
// 4. Stepping Into and Out of Functions (`n`, `s`, `o`)
// ----------------------------------------------

function square(num) {
  return num * num;
}

function sumOfSquares(numbers) {
  let total = 0;

  numbers.forEach(num => {
    let squared = square(num);
    total += squared;
  });

  return total;
}

let nums = [1, 2, 3, 4];
let totalSquares = sumOfSquares(nums);
console.log('totalSquares:', totalSquares);

// Practice stepping:
//
//   - Pause on the line with `sumOfSquares(nums)`
//   - Use:
//       n   // step over the call (does NOT go inside sumOfSquares)
//   - Restart, pause on that line again, then:
//       s   // step into sumOfSquares
//       s   // step into the callback for forEach
//       s   // step into square
//   - Once inside square, use:
//       o   // step out of square back to the callback
//       o   // step out of the callback back to sumOfSquares
//
// Use `exec` or `repl` while inside these functions to inspect:
//   num, squared, total

// ----------------------------------------------
// 5. Using `list()` to See More Code
// ----------------------------------------------

function sayHello(name) {
  let greeting = `Hello, ${name}!`;
  console.log(greeting);
}

sayHello('Launch School');

// Practice (when paused anywhere in this file):
//   list()      // see 5 lines above and below current location
//   list(8)     // see 8 lines above and below

// ----------------------------------------------
// 6. Using `help` to Discover Commands
// ----------------------------------------------
//
// In the debugger:
//   help
//
// Look through the output and practice a few commands:
//   - n / next
//   - s / step
//   - o / out
//   - c / cont (continue)
//   - run / restart
//   - sb / setBreakpoint
//   - cb / clearBreakpoint
//   - repl
//   - exec
//
// Try combining these commands while experimenting with the code above to
// get comfortable navigating and inspecting your programs in `node inspect`.