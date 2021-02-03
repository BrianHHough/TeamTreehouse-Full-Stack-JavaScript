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
```shell
> (4) ["name", "role", "skills", "isTeacher"]
```

