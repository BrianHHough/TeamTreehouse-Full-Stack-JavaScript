# JavaScript Arrays

### Array
In JavaScript, an **[array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)** is a "data structure" that provides a way to store and organize data.
- a collection of values you can assign to a single variable.

- [Array literals - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals)
- [Naming variables - JavaScript Basics](https://teamtreehouse.com/library/javascript-basics/storing-and-tracking-information-with-variables-2/naming-variables)

Previously, we learned about how variables can store primitive values to hold single data types:
- strings
- numbers
- booleans

Let's say we want to keep track of values inside an online shopping cart.
- for each item, you need a variable (i.e. 100 items = 100 variables). 
- But if you store 100 variables, there will be potentially lots of variables that go unused. 
- Also, if you code 100 variables (items), but a user adds 101 items...that won't work...

An **array** is a way of storing more than one value per variable in a single place. They are lists of items, like a shopping list.
- they are flexible methods of storing sequences of values (strings, numbers, booleans, or combination of data types)
- you can add/remove items to the array as the program runs

Example:
```js
const shoppingList = [ 'bread', 'butter', 'honey' ];
const scores = [100, 2838, 28, 0 ];
const data = [ 99, 'bread', true ];
```

Example formatting:
```js
const planets = [ 
  'Mercury', 
  'Venus', 
  'Earth', 
  'Mars' 
];
```

# Access Elements in an Array

To access an element within an array, you use an "index" value, which is a number that indicates a position in the array.
- [Referring to array elements - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Referring_to_array_elements)
- [Accessing and modifying array items - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#Accessing_and_modifying_array_items)
- [Array literals - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals)
- [Array - MDN](https://developer.mozilla.org/en-US/docs/Glossary/array)

An array is a numbered list - **zero-based** (or **zero-indexed**): first element is 0

| **shoppingList**   |
|----------------|
| 0 "bread"      |
| 1 "butter"     |
| 2 "honey"      |

This table above is the same as this:
```js
const shoppingList = [
    "bread", // zero index
    "butter", // index 1
    "honey" // index 2
];
```

To access the first element of the array, you'll call: `console.log( shoppingList[0] );`

If you call an index value that doesn't exist, you'll get `undefined`


