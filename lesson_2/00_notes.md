# Lesson Summary

## Sorting

- `Array.prototype.sort` is the built-in way to sort arrays.

- Calling `sort()` with no arguments:
  - Converts elements (except `undefined`) to strings.
  - Compares them by UTF-16 code point order.
  - So numbers are **not** sorted numerically by default.

- Comparison Callback:
  - To control sorting, pass a callback `(a, b) => number`.
  - The return value controls order:
    - `< 0`: `a` comes before `b`
    - `> 0`: `b` comes before `a`
    - `0`: keep their relative order

- Common Patterns:
  - Numeric ascending: `(a, b) => a - b`
  - Numeric descending: `(a, b) => b - a`
  - Sort by string length: `(a, b) => a.length - b.length`

- Mutation and String Ordering:
  - `sort` mutates (changes) the original array.
  - To avoid mutation, sort a copy, e.g. `arr.slice().sort(...)`.
  - String order is based on UTF-16:
    - Uppercase letters come before lowercase letters.
    - Digits and most punctuation come before letters.

## Nested Data Structures

- Access nested values by chaining:
  - Arrays: `arr[0][1]`
  - Objects in arrays: `arr[0].c = 'cat'`

- Understand reference vs assignment:
  - `arr[0]` → reference to an inner collection
  - `arr[0][1] = 5` → destructive update of that inner collection

- Variables are pointers:
  - If `a` and `arr[0]` reference the same array, mutating one (`a[1] = 5`) affects the other.

- Shallow vs deep copy:
  - Shallow copies:
    - Arrays: `arr.slice()`, `[...arr]`
    - Objects: `Object.assign({}, obj)`
  - Only the outer object/array is copied; nested objects/arrays are still shared.
  - Deep copy for plain objects/arrays:  
    `JSON.parse(JSON.stringify(objOrArr))`

- Freezing:
  - `Object.freeze(obj)` prevents changes to that object/array.
  - It does *not* freeze nested objects/arrays.

- Always track the “level” you’re modifying:
  - Are you changing the outer collection or a nested object/array it contains?

# Working with Callback Functions

- Functions as values:  
  - Functions are first-class: you can assign them, pass them, and return them.  
  - This enables higher-order functions like `map`, `filter`, and `forEach`.

- Know what each array method does with the callback’s return value: 
  - `map` – builds a new array from the callback’s return values.  
  - `filter` – keeps elements whose callback returns a truthy value.  
  - `forEach` – ignores the callback’s return value; use it for side effects only.  
  - `every` / `some` – return booleans; useful inside other callbacks (e.g., within `filter`).

- Always track return values and side effects:  
  - With block-bodied callbacks (`{ ... }`), you must use `return` explicitly.  
  - Forgetting `return` usually leads to `undefined` and unexpected results.

- Handling nested collections:  
  - Work layer by layer (e.g., `outerArray.map(innerArr => innerArr.filter(...))`).  
  - Be clear about the type at each step (array vs number vs object).

- Avoid mutation during iteration:  
  - Don’t change the array (or nested arrays) you’re iterating (e.g., via `pop`, `push`, `splice`).  
  - Mutation during `map` / `forEach` often leads to surprising, hard-to-reason-about behavior.

- Analyze complex code systematically:  
  - For each expression or method call, ask:
    - What action is it performing?  
    - On what value?  
    - Any side effects?  
    - What is its return value?  
    - Is that return value used?