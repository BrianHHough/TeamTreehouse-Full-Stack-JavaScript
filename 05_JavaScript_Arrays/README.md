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
- [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [Common array operations - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Common_operations)


### Make the array relative to the number of students in an array + access each student in the array

```js
const students = ['Lee', 'Jan', 'Mali', 'Sariah'];
// checks if i is less than the length (4), so it runs. Happens until index length is 4 and then the function no longer runs.
for ( let i = 0; i < students.length; i++ ) {
  // access the element in the array and include element's index value
  console.log( students[i] );
}
```

# Loop Through an Array
Use the for loop to iterate over an array of song names and display them on a web page.

```js
const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight',
  'Cool Song',
];

// loop that runs as many times as items in array
function createListItems (arr) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i] }</li>`;
  }
  return items;
}

// selects main element and displays it
document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;
```

### Get the average of an array of scores
In the following example, a for loop accesses each number in the scores array and adds it to the current value of total. When the loop completes, the console displays the average score by dividing the value of total by the length of the scores array.

```js
const scores = [ 20, 50, 75, 100, 115 ];
let total = 0;

for ( let i = 0; i < scores.length; i++ ) {
  total += scores[i];
}

console.log( total / scores.length );
```


# Use a for loop to iterate over the values inside the temperatures array. Start from the first element (100) to the last (10). Inside the loop, log the current array value to the console. Use i to represent the counter variable.

Solution:
```js
const temperatures = [100, 90, 99, 80, 70, 65, 30, 10];
let counter = 0;

for ( let i = 0; i < temperatures.length; i++ ) {
  counter += temperatures[i];
  console.log(temperatures[i]);
}
```

# Useful Array Methods
As you gain more experience with arrays, you'll want to start learning and experimenting with other more advanced methods. In this video, we'll explore other common and useful array methods.

- [join(', ') - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join): this method takes an array and returns a string holding all elements in array, separated by a character, like a comma, comma + space, etc.
- [includes(valueToFind) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes): method that determines whether an array includes a certain value among entries and returns either true or false.
- [indexOf(searchElement) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf): method that returns the index (position) of an element in an array. If it can't find the index of a particular element in the array, returns `-1`

### Examples of array methods

```js
const daysInWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

daysInWeek.join(', ');

const fruit = [
  'apple', 
  'orange', 
  'grapefruit', 
  'pineapple', 
  'strawberry'
];

fruit.includes('apple');
fruit.indexOf('apple');
fruit.indexOf('pear');

```

# Challenge: Use the array method that combines all of the elements inside the planets array into a single string. The final string should separate the array elements by a comma and space. Log the final string value to the console. Next, use the method that returns the position of 'Saturn' in the planets array. Log the return value to the console.

```js
const planets = ['Earth','Mars','Saturn','Mecury','Jupiter','Venus','Uranus','Neptune'];

console.log(planets.join(', '));
console.log(planets.indexOf('Saturn'));
```


# Search for a Value in an Array + Locate and Join Array Elements
Write a program using the join(), includes(), and indexOf() array methods you learned about earlier.

Let's you search if a product is in stock or not. Lists all the products in stock.

- [Array.indexOf() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [toLowerCase() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [Falsy values - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

### JavaScript Component:
```js
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
// prompt to search
const search = prompt('Search for a product.');
// holds message for user
let message;

// If you search and return nothing (empty string)...display all of the elements in stock
if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
  // However, if the inStock array includes item in the search variable
  // Convert input text to all lowercase letters
} else if ( inStock.includes(search.toLowerCase()) ) {
  // The # is going to search the array for the inStock product and return it's index starting from 0, so products index return starting with the number 1
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search.toLowerCase()) + 1} on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}

// check for any null or empty values
document.querySelector('main').innerHTML = `<p>${message}</p>`;
```

### HTML Component:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Arrays</title>
    <link href="css/style.css" rel="stylesheet"> 
  </head>
  <body>
    <h1>Product List</h1>
    <main></main>
    <script src="js/search-list.js"></script>
  </body>
</html>
```


# Locate and Join Array Elements

### Why repeat search.toLowerCase() vs. assigning it to a variable and reusing it? For example:

```js
const search = prompt('Search for a product.');
const searchText = search.toLowerCase();

inStock.includes(searchText);
inStock.indexOf(searchText);
```

If the user clicks the "Cancel" button in the prompt dialogue, the variable searchText would point to null. The JavaScript interpreter throws an error when you call toLowerCase() on a returned null value -- there's nothing to convert to lowercase:

```js
const search = prompt('Search for a product.');
const searchText = search.toLowerCase();
// Uncaught TypeError: Cannot read property 'toLowerCase' of null
```


Following is another way you might convert the value assigned to search to all lowercase. If search points to a truthy value (not null, for example), then convert it to lowercase:
```js
const inStock = [ ... ];
let message;
let search = prompt('Search for a product.');

if ( search ) {
  search = search.toLowerCase();
}

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( inStock.includes(search) ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search) + 1} on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}
```

That way, you don't have to repeat calling toLowerCase() in the conditional.

### A different approach with only indexof()
There's another way you might write the product search without having to use includes() to check whether the inStock array includes a specific value. Remember, indexOf() returns the index of a given element inside an array, or -1 if it's not present.

First, pass the search value to indexOf(). In the else if clause, check if the product index is not -1. Then use the value of productIndex + 1 to display the product's number in the list:

```js
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
let search = prompt('Search for a product.');
let productIndex;
let message;

if ( search ) {
  search = search.toLowerCase();
  productIndex = inStock.indexOf(search);
}

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( productIndex !== -1 ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${productIndex + 1} on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}
```


# Quiz Insights

Complete the code to log each element in the times array to the console:
```js
const times = [ 1.22, 1.75, 2.10, 2.55 ];
for ( let i = 0; i < times.length; i++ ) {
  console.log(times[i]); 
}
```

Complete the code below by writing the method that checks whether the colors array holds the value firebrick among its entries:
```js
const colors = [ 'tomato',  'crimson', 'darkred', 'firebrick' ];
colors.includes('firebrick'); // true
```

Complete the code below to assign the totalScores variable the number of elements in the scores array:
```js
const scores = [ 76, 79, 85, 87, 89 , 90, 99 ];
const totalScores = scores.length ;
```

Complete the code by adding the array method that combines all of the elements in an array into a single string:
```js
const students = ["Sierra", "Kaya", "Rafael", "Charlie"];
const message = `Hello, ${students.join(', ')}`;
```


# What is a Multidimensional Array?
Learn how to create and work with arrays that contain other arrays, or "multidimensional arrays".
- [Creating a two-dimensional array - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Creating_a_two-dimensional_array)
- [How can I create a two-dimensional array in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript)

**Multidimensional Array:** an array within an array

Example:

```js
const grades = [
  [80, 90, 100, 95],
  [75, 95, 85, 100]
];
```

| Grades|
| :---: |
| index | value |
| :---: | :---: |
| 0 | [80, 90, 100, 95] | grades[0] |
| 1 | [75, 95, 85, 100] | grades[1] |

Each index value represents another array. You can use another index value

To access last element in the first array...use a second set of square brackets `grades[0][3]`


# Create a Multidimensional Array
Create a program that uses a multidimensional array to hold songs and artists, and then displays a playlist of each song, with the artist who recorded it and the duration of the song.

```js
// multidimensional array
const playlist = [
  ['So What', 'Miles Davis', '9:04'],
  ['Respect', 'Aretha Franklin', '2:45'],
  ['What a Wonderful World', 'Louis Armstrong', '2:21'],
  ['At Last', 'Ella Fitzgerald', '4:18'],
  ['Three Little Birds', 'Bob Marley and the Wailers', '3:01'],
  ['The Way You Look Tonight', 'Frank Sinatra', '3:21']
];

// display artist name in first array and log to console based on index values
const myArtists = `${playlist[0][1]}, ${playlist[1][1]}, ${playlist[5][1]}`;
console.log(myArtists);

// display whole playlist: arr = parameter of the data being passed in; want to identify the value of each item in the array
function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    // arr[i][0] = the song name; arr[i][1] = artist na;me
    items += `<li>${ arr[i][0] }, by ${ arr[i][1] } - ${ arr[i][2] }</li>`;
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;
```

### Spread syntax and multidimensional arrays
Note: Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays, as the following example shows.
- [Copy an array (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Copy_an_array)

```js
const brass = [ ['trumpet'], ['tuba'], ['trombone'] ];
const instruments = [...brass];

instruments.shift().shift(); 
//  "trumpet"

//  Notice how the brass array is also affected by this:
brass
//  [ [], ["tuba"], ["trombone"] ]
```

# Challenge Task
Declare a variable named coordinates and assign it an empty array literal.
```js
const coordinates = [''];
```

Next, add one array inside the coordinates array. The new nested array should contain two number values.
```js
const coordinates = [
  [1, 2]
];
```


# Build a Quiz Challenge 
This video covers one solution to the first part of the "Build a Quiz" challenge.

### JavaScript solution
```js
// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [ 
  ['How many planets are in the Solar System?', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have?', '6'],
  ['What year was JavaScript created?', '1995']  
];
// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;



/* 
  3. Use a (for) loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
// this is a loop that runs as many times as there are elements in the questions array
for ( let i = 0; i < questions.length; i++ ) {
  // access the question part...whatever index and it's position 0 (first element)
  let question = questions[i][0];
  // access the answer part
  let answer = questions[i][1];
  let response = prompt(question);
  
  // tests if response matches the correct answer
  if ( response === answer ) {
    // if correct, increment by +1
    correctAnswers++; // this is the same as: correctAnswers += 1
    // add correct answer to the array with the push method
    correct.push(question);
  } else {
    // push incorrect answers to incorrect array
    incorrect.push(question);
  }
}

// accepts array as an argument and loops through array and builds/returns the list items
function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
  <h1>You got ${correctAnswers} question(s) correct</h1>
  <h2>You got these questions right: </h2>
  <ol>${ createListItems(correct) }</ol>

  <h2>You got these questions wrong: </h2>
  <ol>${ createListItems(incorrect) }</ol>
`;

document.querySelector('main').innerHTML = html;
```

### For reference:
The return value of the prompt() method is always a string. If your question answers are numeric values, you'll need to convert the value of the response variable to a number, otherwise the condition will always evaluate to false.

The unary plus operator (+) provides a quick way of converting a string to a number. Place a plus symbol just before the response variable:
```js
if ( +response === answer ) { 
  ... 
}
```


# Quiz Insights:

Say you have two arrays, itemsA and itemsB, and you want to combine them into a new array named allItems. Complete the code so that the new allItems array stores the elements from itemsA first, followed by the elements inside itemsB:

```js
const itemsA = [ 'Lightsaber', 'Mockingjay pin', 'Box of chocolates' ];
const itemsB = [ 'Ghost trap', 'The One Ring', 'DeLorean' ]
const allItems = [ ...itemsA, ...itemsB ];
```

Complete the code below using the method that returns the position of the darkred string inside the colors array:
```js
const colors = [ 'tomato',  'crimson', 'darkred', 'firebrick' ];
colors.indexOf('darkred'); // 2
```


What is the length value of the allTasks array after the above code runs?

```js
const morningTasks = [ 'study', 'exercise', 'write' ];
const eveningTasks = [ 'bake', 'edit article',  'chill' ];
const allTasks = [...morningTasks, ...eveningTasks];
morningTasks.pop();
```

Answer: `6` b/c: The spread syntax creates a "copy" of the morningTasks array. So morningTasks.pop() removes an element from the end of that array only.