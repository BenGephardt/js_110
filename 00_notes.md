# Lesson Summary

## Node Debugger Summary

- What the Debugger Does:
  - Lets you pause your program while it’s running.
  - Allows you to inspect variable values at specific points in time.

- Starting the Debugger:
  - Run your program with: `node inspect file.js` (for example, `node inspect debug.js`).
  - Execution automatically pauses at the first executable line of your code.

- Core Debugger Commands:
  - `n` / `next` – run the next expression, then pause again.
  - `exec <expression>` – evaluate something in the current context (for example, `exec counter`).
  - `c` / `cont` – continue execution until the program ends or hits another pause.

- Breakpoints:
  - A breakpoint is a point in the program where execution will automatically pause.
  - Set a breakpoint in Node by inserting `debugger;` in your code.
  - Using `c` from the debugger will run until it reaches a `debugger;` line, then pause there.

- Debugging Loops:
  - Placing `debugger;` inside a loop lets you pause on every iteration.
  - This is useful for checking how values change on each pass through the loop.

- Debugger vs `console.log`:
  - Debugger: lets you pause, inspect any variable, and step through code line by line or iteration by iteration.
  - `console.log`: only prints values; you can’t pause or explore the state interactively.

- Advanced Features:
  - Node’s debugger has more advanced features (such as stepping into functions).
  - This assignment only introduces the basic commands and concepts.

## More Node Debugger

- Evaluate Code While Paused:
  - `exec <expression>` – evaluate expressions or call functions in the current scope.
  - `repl` – enter the debugger REPL to run code directly (exit with `Ctrl + C`).

- Breakpoints
  - `sb()` / `setBreakpoint()` – set a breakpoint on the current line.
  - `sb(<line>)` – set a breakpoint on a specific line.
  - `cb(<file>, <line>)` / `clearBreakpoint(<file>, <line>)` – clear a breakpoint.

- Stepping Through Code
  - `n` / `next` – step over the next statement.
  - `s` / `step` – step into a function call.
  - `o` / `out` – step out of the current function.

- Other Helpful Commands
  - `list()` – show 5 lines above and below the current line.
  - `list(<n>)` – show `n` lines above and below.
  - `help` – list all debugger commands.

## Summary

- Building complex programs:  
  - Start from a small, working version.
  - Add features iteratively.
  - Keep logic in clear steps.
  - Use functions to separate concerns; test frequently as you go.

- Mapping program logic and flow:  
  - Work in plain language first: describe inputs, outputs, and main steps.
  - Use numbered lists, pseudocode, or flow descriptions before writing code.

- Holding application logic in mind:  
  - Keep functions small and well-named.
  - Reduce duplication.
  - Follow a clear flow.
  - Reread / trace your program often so the structure stays familiar.

- Chunking code into functions:  
  - Look for repeated patterns or distinct tasks.
  - Give each task a function with a clear purpose, 
  - Pass in only what it needs.
  - Return clear results.

- Writing single-responsibility functions:  
  - Make each function do exactly one thing.
  - Give it a descriptive name.
  - Keep its interface simple (few parameters).
  - Avoid hidden side effects when possible.

- Key variable scoping rules:  
  - `let` / `const` are block-scoped.
  - Variables defined inside a block or function are not accessible outside
  - Inner scopes can access outer scope, not vice versa; avoid relying on implicit globals.

- Detecting argument mutation:  
  - Look for methods or operations that change objects/arrays/strings in place.
  - Trace where the same object/array is used before and after the call
  - Test by logging values before and after calling the function.

- Debugging with the Node debugger:  
  - Run with `node inspect` or the `--inspect` flag.
  - Set breakpoints (`debugger;` or via the tool).
  - Step through code line by line, and inspect variable values at each step.

- Breaking down complex problems:  
  - Clarify the overall goal.
  - Identify inputs and outputs.
  - Break the problem into smaller subproblems.
  - Solve each subproblem with simple steps, then connect the pieces.

- Searching for answers online:  
  - Use specific error messages or keywords, include “javascript” and key APIs.
  - Check reputable sources (MDN, Node docs, Launch School). 
  - Verify solutions by testing them in small, focused examples.