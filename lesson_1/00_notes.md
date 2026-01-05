# Lesson Summary

## String Methods

- Strings are immutable: methods never change the original string; they return new strings.

- Common methods:
  - concat: `'a'.concat('b')` → `'ab'`
  - includes(substring, [startIndex])
  - split(separator) → returns an array
  - trim / trimStart / trimEnd
  - toUpperCase / toLowerCase
  - charAt(index) vs bracket notation `str[index]`
    - out of range: `charAt` → `''`, `str[index]` → `undefined`
  - charCodeAt(index) and `String.fromCharCode(code)`
  - Be aware of: startsWith, endsWith, repeat

- To "change" characters in a string (since strings are immutable):
  1. Build a new string with concatenation/slice.
  2. Or: convert to an array with split(''), modify, then join('').

## Iterating with for and while Loops

- Every loop needs: loop construct, counter, retrieving current value, exit condition. 
  1. A loop construct (`for`, `while`, `do/while`, or `while (true)`)
  2. A counter / control variable
  3. A way to get the current element (`array[i]`, `string[i]`, `object[key]`)
  4. A way to exit (loop condition or `break`)

- Iterating collections:
  - Arrays/strings: use indices from `0` up to (but not including) `.length`.
  - Objects: use keys (e.g., via `Object.keys` or `for...in`).
  - Avoid off-by-one errors: use < collection.length, not <=.

- Loop control:
  - `break` exits the loop.
  - `continue` skips to the next iteration.
  - Guard clauses (early continue/break) simplify loop bodies.

- Practice the “four elements” of looping to reason about any manual iteration without relying on helper methods.

## Introduction to the PEDAC Process

- Follow a plan before coding to prevent wasted effort and wrong assumptions (PEDAC):
  1. Understand the Problem
  2. Use Examples/Test Cases
  3. Pick Data Structures
  4. Design an Algorithm
  5. Write the Code

- Spend time on “Understand the Problem”; clarify:
  - Terms
  - Inputs/outputs
  - Explicit and implicit rules
  - Verify your understanding with test cases

- Decompose:
  - Use helper functions.
  - Start with a high-level plan, then add detail to the hard parts.

- Use small, concrete examples to:
  - Spot patterns
  - Shape your algorithm

- Write clear pseudocode for tricky parts so coding is straightforward.

- Testing:
  - Test early and often in small steps to catch bugs quickly.

- Coding: 
  - Translate the algorithm into language-specific code.
  - Use tests.
  - Run often.
  - Refactor, and loop back to earlier PEDAC steps when needed.

## Selection and Transformation

- Selection: pick some elements (≤ `N`). Use an `if` condition to decide which to include.

- Transformation: produce a result for every element (`N` results). Define how each item is changed.

- Both use iteration: loop, counter, current value, exit condition.

- Mutation vs. new collection: decide whether to modify the original or return a new one — it matters.

- Make functions flexible by passing criteria (e.g., `matcher` or `multiplier`).

- Edge cases: identity transformations are valid; beware chaining on empty or `undefined` returns.

## Array Methods: Key Points

- Purpose of Each Method:
  - `forEach`: Iterate over an array to do side effects (e.g., `console.log`, updating external variables). Ignores callback’s return value and returns `undefined`.
  - `filter`: Select elements. Callback return value is tested for truthiness; truthy → element included in new array.
  - `map`: Transform elements. Callback return value becomes the corresponding element in a new array (same length as original).

- Use of Callback Return Value:
  - `forEach`: Ignored.
  - `filter`: Used for selection based on truthy / falsy.
  - `map`: Used as the transformed element.

- When to Use:
  - `forEach`: Need to iterate and do side effects; no early exit needed.
  - `filter`: Need a subset of elements matching a condition.
  - `map`: Need to transform all elements into a new array.

- Strings and Objects:
  - Strings: No `forEach` / `filter` / `map` directly; use `split('')` (and `join('')` to convert back).
  - Objects: No `forEach` / `filter` / `map` directly; use `Object.keys`, `Object.values`, or `Object.entries` to get arrays first.

- Common Pitfalls:
  - Forgetting `return` inside a `{ ... }` callback → `undefined` results for `filter` / `map`.
  - `filter` uses truthiness, not strictly `true` / `false`.
  - Can’t use `break` / `continue` inside a `forEach` callback; use `for` / `while` if you need early exit.

## More Array Methods

- Core behaviors:
  - `some`: Returns `true` if the callback returns a truthy value for **any** element, otherwise returns `false`.
  - `every`: Returns `true` only if the callback returns a truthy value for **every** element, otherwise returns `false`.
  - `find`: Returns the **first element** for which the callback returns a truthy value, returns `undefined` if none match.
  - `findIndex`: Returns the **index** of the first element for which the callback returns a truthy value, returns `-1` if none match.
  - `reverse`: Reverses the array **in place** (mutates the original array). Use `array.slice().reverse()` to get a reversed **copy** without mutation.
  - `includes`: Returns `true` if an element equal to the argument exists in the array, `false` otherwise. Behaves like `===` in most cases, but **does** correctly find `NaN`.

- Method vs. callback return value:
  - These methods look at the **truthiness of the callback’s return value** to decide their own result.

- Mutation vs. non-mutation:
  - `reverse` **mutates** the original array.  
  - Methods like `some`, `every`, `find`, `findIndex`, `includes` do **not** mutate.

- Using with objects:
  - Combine with:
    - `Object.keys(obj)`
    - `Object.values(obj)`
    - `Object.entries(obj)`
  - Example: `Object.values(obj).some(...)`

- Method chaining:
  - Chaining works only if the previous method returns a value that supports the next call  
    (e.g., another **array** if you want to call another array method).
  - Be careful when chaining **mutating** methods (like `reverse`) because they change the original data.

## Arrays: What is an Element?

- Arrays are objects; their indices are property names (as strings), but not all properties are array *elements*.

- An element is a property whose key is a non-negative integer (`"0"`, `"1"`, `"2"`, ...).
  - Other keys (e.g. `"-3"`, `"foo"`) are just object properties, not elements.
  - Array methods (like `map`, `forEach`) ignore non-element properties.

- `length` counts elements with non-negative-integer keys and ignores non-element properties, so:
  - `length === 0` can be true even if the array object has other properties.
  - `Object.keys(arr)` may show keys even when `length === 0`.

- Arrays can be sparse:
  - Increasing `arr.length` creates gaps (indices with no property at all).
  - Accessing a gap returns `undefined`, but it’s different from setting `arr[i] = undefined`.
    - Gap: no property; key not in `Object.keys(arr)`.
    - Explicit `undefined`: real property; key appears in `Object.keys(arr)`.

- “Empty” is ambiguous:
  - Use `length` when you care about the conceptual size (including gaps).
  - Use `Object.keys` (and/or checking numeric keys) when you care about actual stored elements.