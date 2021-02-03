# JavaSCript Objects

# What is an Object?
A [**JavaScript object**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) has properties (variable that belongs to object) and methods (something the object can do or something that can be done to the object). A property is like a variable that belongs to the object, and a method is something the object can "do," or that can be "done" to the object. In this video, you'll learn the syntax for creating an object literal that stores data as property/value pairs.
- [Object Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals): these are containers for storing data as property/value pairs
- Objects let you store data as key-value pairs


Curly braces are object literal
Key is the variable name (name)
Value is what's to right of key
```js
const student = {     
    name: "Quincy",    
    grades: [85, 90, 95, 100]
};                    
```

# Create an Object Literal
Create an object literal containing various pieces of information about a person.
- [Working with objects - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

```js
const person = {
  name: 'Edward', // name property with string value Edward
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

person['name']; // or
person.name // Dot notation: for accessing property name
```

# Access Object Properties
Objects like arrays, but arrays use index while objects use a key/property name
- [Object literals – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals)
- [Objects and properties – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties)
- [Bracket notation - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#Bracket_notation)
- [Dot notation - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#Dot_notation)


```js
const person = {
  name: 'Edward', // name property with string value Edward
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

const message = `Hi, I'm ${person.name}. I live in ${person.city}.`;
console.log(message);
```
This logs in the console: 
`Hi, I'm Edward. I live in New York.`

# Set the Value of Object Properties
Use dot notation to set the value of an object's property and add new properties to an object. You can create and add new properties with dot notation. 
- [Setting object members - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Setting_object_members)
- [Dot notation vs Bracket notation](https://medium.com/dailyjs/dot-notation-vs-bracket-notation-eedea5fa8572)
- [Using const with Arrays and Objects - Treehouse](https://teamtreehouse.com/library/using-const-with-arrays-and-objects)

### Adding data to nickname and calling it
```js
const person = {
  name: 'Edward', // name property with string value Edward
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

person.nickname = 'Duke';
const message = `Hi, I'm ${person.name}. I live in ${person.city}. Most know me as ${person.nickname = 'Duke'}.`;
console.log(message);
```
Returns:
`Hi, I'm Edward. I live in New York. Most know me as Duke.`

### Adding more data points:
```js
const person = {
  name: 'Edward', // name property with string value Edward
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

person.nickname = 'Duke';
const message = `Hi, I'm ${person.name}. I live in ${person.city}. Most know me as ${person.nickname}. My age is ${person.age + 1}. I have ${person.skills.length} skills: ${person.skills.join(', ')}.`;
console.log(message);
```

This exports to: 
`Hi, I'm Edward. I live in New York. Most know me as Duke. My age is 38. I have 3 skills: JavaScript, HTML, CSS.`

# Challenge
Addy the pug is now one year older. Add a line of code that sets the age property to 4. Don't change the original declaration of the object.

Next, add a new property named isFriendly and set its value to true. Be sure not to change the original object; add the new property using dot notation.

Answer:
```js
const addy = {
  animal: 'dog', 
  age: 3,
  breed: 'pug'
};

addy.age = addy.age + 1;
addy.isFriendly = true;
```


# Quiz Insights

Complete the code below to display the value of the name property of the rocket object in the console:

```js
const rocket = {
  name: 'Falcon 9',
  manufacturer: 'SpaceX',
  capsule: 'Dragon 2' 
};
console.log( rocket.name );
```

Which of the following is one way to change the weight property of the animal object?

```js
const animal = {
  name: "Zebra",
  lifeSpan: 25,
  weight: 770
};
```

Answer: `animal['weight'] = 770;`


# Use `for in` to Loop Through an Object's Properties
Use a for...in loop to access each key (or property name) in an object.
- [for...in - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [for...in statement - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement)
- [undefined - MDN](https://developer.mozilla.org/en-US/docs/Glossary/undefined)
- [Bracket notation - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#Bracket_notation)

### For...In Loop
For...In iterates/loops over each property name in the object

```js
const student = {
    na;me: 'Jesse',
    grades: [80, 85, 90, 95]
};
for ( let propName in student ) {
    console.log( student[propName] );
}
```

For example, let's access all the properties in an object:
```js
const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

for ( let prop in person ) {
  console.log(prop);
}
```

This returns in the console:
```
name
nickname
city
age
isStudent
```

To access a value, you'll use square bracket notation - looks for a string value

```js
const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

for ( let prop in person ) {
  console.log(`${prop}: ${person[prop]}`);
}
```

This returns in the console:
```
name: Edward
nickname: Duke
city: New York
age: 37
isStudent: true
```

However, if you used `${person['name']` instead...this outputs because its the same value repeated
```
name: Edward
nickname: Edward
city: Edward
age: Edward
isStudent: Edward

```


# Challenge Task
Use a for...in loop to log each of the property names of the composer object to the console.

Now that you're logging the property names, include the property values too. The console should display four lines that include both the property name and value. For example: 'instrument: piano'.

```js
const composer = {
  name: 'Edward Ellington',
  nickname: 'Duke',
  genres: ['jazz', 'swing'],
  instrument: 'piano'
};

for ( let prop in composer ) {
  console.log(`${prop}: ${composer[prop]}`);
}
```

# Useful JavaScript Object Methods
- [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.values() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [Spread syntax - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Object.keys()
The Object.keys() method returns an array containing the property names (or keys) of an object. Consider the following code:

```js
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the keys of the `person` object in `personProps`
const personProps = Object.keys(person); 
console.log(personProps);

```
```zsh
> (4) ["name", "role", "skills", "isTeacher"]
```
Notice how the array returned by Object.keys(person) lists the property names in the order they appear inside the person object.

### Check the length of an object
You learned that you use the length property to get the number of characters inside a string and return the number of elements inside an array. Object literals, however, do not have a length property. So if you wanted to check the length of an object (the number of properties inside it), calling person.length, for example, would return undefined.

Since Object.keys() stores an object's keys inside a new array, you can use it for checking the length of an object. For example:
```js
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

console.log( Object.keys(person).length );  // 4
```

### `Object.values()`
The Object.values() method returns an array of a given object's property values, in the same order as provided by a for...in loop. For example:
```js
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the `person` object's property values in `personVals`
const personVals = Object.values(person); 
console.log(personVals);

```
```zsh
> (4)
[
  "Reggie",
  "Software developer",
  ["JavaScript","HTML","CSS"],
  true
]
```
The array returned by Object.values(person) lists the property values of the person object.

### The handy spread operator
In a previous course on JavaScript arrays, you learned how to copy and combine arrays with the spread operator (...).

You can use the spread operator to copy key/value pairs from one object to another. Evaluate the following objects:

```js
const name = {
  firstName: 'Reggie',
  lastName: 'Williams',
};

const role = {
  title: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// merge `name` and `role` into a `person` object
const person = {  
  ...name,
  ...role
};
console.log(person);
```

```zsh
{
  firstName: "Reggie",
  lastName: "Williams",
  title: "Software developer",
  skills: ["JavaScript", "HTML", "CSS"],
  isTeacher: true
}
```
In this case, the spread operator produces the same results as with arrays -- it merges the name and role objects into one person object.


# Store Objects in Arrays
[**Arrays**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays) let you group values to build complex data structures. With an array, you store a collection of elements you can access by their position (or index). Objects take that concept further by providing a way to structure related data that's easy to read and retrieve using key/value pairs. It's common to combine the two by creating an array of objects.
- one of the best parts of objects is that it lets you use distinct names to ID individual items (items more efficient to work with)

While the 2D array got the job done, When using related data, developers will often use this type of approach when the data can be defined by a set of characteristics (i.e. a question and its answer)

```js
// 1. Create an array to hold quiz questions and answers
// relational data 
const questions = [
  { 
    question: 'How many planets are in the Solar System?', 
    answer: '8' 
  },
  { 
    question: 'How many continents are there?', 
    answer: '7' 
  },
  { 
    question: 'How many legs does an insect have?', 
    answer: '6' 
  },
  { 
    question: 'What year was JavaScript created?', 
    answer: '1995' 
  }
];

// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
// we are looping through the array each time through the loop
for ( let i = 0; i < questions.length; i++ ) {
  // we access one of the array elements (an object) and assign the value of its question prop to a variable 
  let question = questions[i].question;
  // we do the same with the answer array
  let answer = questions[i].answer;
  let response = prompt(question);
  
  if ( response === answer ) {
    correctAnswers++;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

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
  <h2>You got these questions right:</h2>
  <ol>${ createListItems(correct) }</ol>

  <h2>You got these questions wrong:</h2>
  <ol>${ createListItems(incorrect) }</ol>
`;

document.querySelector('main').innerHTML = html;
```

# Challenge
Inside the array, add two object literals. Each object should have two property/value pairs.


```js
const objects = [
  { name: 'Brian', topic: 'Hello' },
  { name: 'Joey', topic: 'World' }
]
```


# Challenge: Pet Directory: Display an Array of Objects on the Page
It's time to put your knowledge of JavaScript Objects to the test. In this practice challenge, you'll use JavaScript loops, arrays, and objects to create a script that builds a pet directory, then displays it on the page.
- Create a data structure on pets (array should contain a list of objects - pet with name, type, breed, age, photo)
- You use dot notation to access the properties of an object (i.e. `pet.name` accesses name property) and we need bracket notation to get to this array
- Insert adjacent HTML to render items on the page
- [Accessing array elements - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessing_array_elements)
- [Image Tags - Treehouse](https://teamtreehouse.com/library/image-tags)
- [insertAdjacentHTML() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
- [Using const with Arrays and Objects - Treehouse](https://teamtreehouse.com/library/using-const-with-arrays-and-objects)




# Quiz Insights

Complete the code below to display every property and value of an object named location:
```js
for ( const prop in location ) {
  console.log( `property : ${location[prop]` );
}
```

What method returns an array containing a given object's property values?
`.values()`


What will display in the JavaScript console?
```js
const vehicle = {
  make: "Tesla",
  model: "Model X",
  year: 2030
}
for ( let prop in vehicle ) {
  console.log( prop );
}
```
Answer:
```zsh
make
model
year
```

Can an array contain objects? Is the below code valid JS?
```js
const students = [
  { name: "Resse", grade: 99 },
  { name: "Eloise", grade: 88 },
  { name: "Sanji", grade: 80 }
];
```
Answer: Yes. It's common to store objects inside an array.



What method returns an array containing a given object's property names?
`.keys()`


Which of the following displays the values "Lee", "FSJS", and 14888 in the JavaScript console?
```js
const student = {
  userName: 'Lee',
  degree: 'FSJS',
  points: 14888
};
```
Answer:
```js
for ( let prop in student ) {
  console.log( student[prop] );
}
```
