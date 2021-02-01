# JavaScript Arrays

### Array
In JavaScript, an **[array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)** is a "data structure" that provides a way to store and organize data.
- a collection of values you can assign to a single variable.
- a special type of object with properties and methods.

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


# Add Elements to an Array

3 ways to edit elements in arrays:
- **length property:** # of elements in an array (`[Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)`)
- **push method:** add 1 or more elements to the end of an array (`[Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)`)
- **unshift method:** add 1 or more elements to the beginning of an array (`[Array.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)`)


### Add guitar to the array `instruments`

Add to the end with `.push` method:
```js
const instruments = ['piano', 'drums', 'trumpet'];
instruments.push( 'guitar' );
```

Add to the beginning with `.unshift` method:
```js
const instruments = ['piano', 'drums', 'trumpet'];
instruments.push( 'guitar', 'violin', 'triangle' );
instruments.unshift( 'cowbell', 'tuba');
```


# Remove Elements From an Array

2 ways to do this:
- **pop method:** this pops (removes) the last element in the array out of the array (`[Array.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)`)
    - doesn't accept arguments
- **shift method:** removes the first element in the array (`[Array.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)`)
    - doesn't accept arguments


Important concepts:
- [First in First Out (LIFO)](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)): first element processed first and newest element is processed last. 
- [Queues](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))


# Challenge Task
The array assigned to the variable orderQueue contains a list of order numbers. Declare a new variable named shipping. Remove the first element from the orderQueue array and assign it to the shipping variable.

Next, declare a new variable named cancelled. Remove the last item from the orderQueue array and assign it to the variable cancelled. Use the array method that removes the last element from an array and returns it.

Solution:
```js
const orderQueue = ['1XT567437','1U7857317','1I9222528'];
const shipping = orderQueue.shift();
const cancelled = orderQueue.pop();
```


# Copy and Combine Arrays with the Spread Operator
Learn the basics of the spread operator (...), a special syntax JavaScript provides to build, combine, and manipulate arrays quickly and more seamlessly.
- [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    - consists of `...` dots which unpack values of an array so you can add it to another.
- [6 Great Uses of the Spread Operator](https://davidwalsh.name/spread-operator)
- **Math.max property:** returns the max (heighest) number in the array `[Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)`
- **Math.min property:** returns the min (lowest) number in the array `[Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)`

**Spread operator:** expands an array, to allow you to add contents of one array into another, for example.

### Example:
```js
const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun', ...middle, 'bottom bun'];
console.log(burger);
```

This exports in the console:
`["top bun", "lettuce", "cheese", "patty", "bottom bun"]`

### Example #2:
```js
const brass = ['trumpet', 'trombone', 'french horn', 'baritone', 'tuba'];
const woodwind = ['flute', 'oboe', 'clarinet', 'saxaphone', 'bassoon'];
const instruments = [...brass, ...woodwind];
console.log(instruments);
```

This exports in the console:
`["trumpet", "trombone", "french horn", "baritone", "tuba", "flute", "oboe", "clarinet", "saxaphone", "bassoon"]`

### Math.max and Math.min
```js
const numbers = [10, 20, 30, 40];
console.log( Math.min(...numbers) );
```

### Making a copy of an array with the spread operator
One of the main benefits of copying an array is that you preserve the values of the original array. For example, the original mathStudents and scienceStudents arrays remain unchanged (won't be mutated) if you decide to push or pop elements in and out of the copies of those arrays.

```js
const mathStudents = [
  'Marty',
  'Jennifer',
  'Lorraine',
  'Goldie'
];

const scienceStudents = [
  'Emmett', 
  'Clara', 
  'Needles',
  'Strickland'
];

const mathStudentsCopy = [...mathStudents];
const scienceStudentsCopy = [...scienceStudents];

// This affects the copied arrays only
//  The original arrays remain unchanged
mathStudentsCopy.pop();
scienceStudentsCopy.push('Marvin');

```


# Using a 'for' Loop to Iterate Over an Array
The for loop provides one way to loop (or iterate) through the elements in an array.
- for - MDN
- Common array operations - MDN



