// JS110 / Lesson 3
// More Node Debugger Commands
//
// - Evaluate expressions / call functions while paused: `exec`, `repl`
// - Set / clear breakpoints from inside the debugger: `sb`, `cb`
// - Step over, into, and out of function calls: `next`, `step`, `out`
// - Show more source lines around current position: `list`
// - Discover available commands: `help`
//
// This file is meant as a quick reference while using `node inspect`.

// ----------------------------------------------
// Example Program to Debug
// ----------------------------------------------

function add(num1, num2) {
  return num1 + num2;
}

let a = 1;
let b = 2;

let sum = add(a, b); // Pause here in the debugger
console.log('sum:', sum);

// ----------------------------------------------
// Using `exec` to Inspect and Evaluate
// ----------------------------------------------
//
// 1. Run the debugger:
//    node inspect more-node-debugger.js
//
// 2. When paused, you can run:
//
//    debug> exec a          // -> 1
//    debug> exec b          // -> 2
//    debug> exec a + b      // -> 3
//    debug> exec add(10, 5) // -> 15
//
// Note: To execute a function with `exec`, the function must exist in your code
// (you can't invent new function definitions only inside `exec`).

// ----------------------------------------------
// Using `repl` for In-Debugger Experiments
// ----------------------------------------------
//
// Instead of prefixing everything with `exec`, you can enter the debugger REPL:
//
//    debug> repl
//    Press Ctrl + C to leave debug repl
//
//    > a           // -> 1
//    > b           // -> 2
//    > a + b       // -> 3
//    > add(a, b)   // -> 3
//
// Exit the REPL with:
//    Ctrl + C  (or Ctrl + Shift + C on some systems)

// ----------------------------------------------
// Setting and Clearing Breakpoints: `sb` and `cb`
// ----------------------------------------------
//
// You can set breakpoints from inside the debugger UI instead of editing
// the source file and adding `debugger` statements.
//
// Set breakpoint on the *current* line:
//    debug> sb()
//    debug> setBreakpoint()
//
// Set breakpoint on a *specific line*:
//    debug> sb(5)          // set breakpoint at line 5 in this file
//    debug> setBreakpoint(10)
//
// Clear a breakpoint (needs file name and line number):
//    debug> cb('more-node-debugger.js', 5)
//    debug> clearBreakpoint('more-node-debugger.js', 10)
//
// Note: Any breakpoints set with `sb` are cleared when you exit the debugger.

// ----------------------------------------------
// Stepping: `next`, `step`, `out`
// ----------------------------------------------
//
// Given:
//
//    function square(num) {
//      return num * num;
//    }
//
//    let nums = [1, 2, 3];
//    let squares = nums.map(num => square(num));
//    console.log(squares);
//
// Typical stepping pattern:
//
//    debug> n        // `next`: step over to the next statement
//    debug> s        // `step`: step *into* a function call
//    debug> o        // `out`: step out of the current function
//
// - `n` / `next` moves over calls (executes them but does not enter them).
// - `s` / `step` moves into the called function (e.g., into the callback).
// - `o` / `out` finishes the current function and returns to its caller.

// ----------------------------------------------
// Showing More Code: `list`
// ----------------------------------------------
//
// By default, the debugger shows only a few lines around the current location.
// Use `list` to see more:
//
//    debug> list()
//    // shows 5 lines above and 5 below the current line
//
//    debug> list(8)
//    // shows 8 lines above and 8 below the current line

// ----------------------------------------------
// Discovering Commands: `help`
// ----------------------------------------------
//
// Use `help` to see available debugger commands:
//
//    debug> help
//
// This will list commands such as:
//    - exec
//    - repl
//    - run
//    - cont / c       (continue execution)
//    - next / n
//    - step / s
//    - out / o
//    - setBreakpoint / sb
//    - clearBreakpoint / cb
//    - list
//    - restart
//    - quit / exit