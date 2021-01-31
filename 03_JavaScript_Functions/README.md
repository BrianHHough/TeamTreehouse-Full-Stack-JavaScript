# **JavaScript Functions**

**Functions**: at its simplest, a [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) is a set of instructions that you want to run over and over again.
- a function lets you store a block of code that you can use over and over again.
- JavaScript is often referred to as a "functional programming language."

Example: the "call the function" part is `sayHello()`

    function sayHello() {
        alert("Hello");
    }

# Create and Call a Function

Write the function at the top of random.js file -- it's common to put functions at the top of the file because the code in the file does not run immediately. 

JS creates a space in memory to save the function definition to assign it to the name you pick. 

It is stored in memory until it's called to run.

You only have to write the function once, but you can call it multiple times (see **Example** below). This makes it more modular and easier to edit/update.

**Example:** a dialogue box that returns a random number. 

    function alertRandom() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;
    alert(randomNumber);
    }

    alertRandom();
    alertRandom();
    alertRandom();

# Return a Value from a Function

Functions can also give something back when they finish. This is called ["returning a value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)," and it's common when working with functions. To return a value from a function, use the return keyword, which creates what's called a "return statement."

To return a value from a function - return statement that immediately jumps out of the current function and provides the value to return to use in your program.

>> Alert to the browser

    function getRandomNumber() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
    }
    alert( getRandomNumber() );

>> Print to the console

    function getRandomNumber() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
    }
    console.log( getRandomNumber() );

>> Store in a variable that you can use later with a call to the function

    function getRandomNumber() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
    }

    const dieRoll = getRandomNumber();


# Using Multiple return Statements

If the field value is equal to an empty string...if yes, then returns true! False if it has something in it.

Rules:
- JS engine puts the function to memory.
- The `return` JS keyword is used to send back a value from a function.
    - Return exits a function and sends a value back to the spot in the program where the function was called.
- When a return statement runs, it causes JS engine to exit immediately. Return should be the LAST line of code to run.
    - As soon as the function encounters a return statement, it exits the function and returns a value.
- Return statement can only return ONE thing (string, boolean, number, content of variable, etc.) but you can't return multiple items.
    - You can have more than one return statement in a function...but only one ever runs.


# Function Parameters and Arguments

Functions often need specific information to perform a task. In addition to getting information from a function, you can send information to a function to change how that function works.

[Parameters](https://developer.mozilla.org/en-US/docs/Glossary/Parameter) inside functions: a variable in which the function stores information passed to it.
- a value that you supply to the function so the function can do something with that value.
- They are like variables that you define in the function.

>> Example: Pick random number with upper bound set in the argument of the function.

```js
function getRandomNumber(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

console.log( getRandomNumber(6) );
console.log( getRandomNumber(100) );
console.log( getRandomNumber(1000) );
console.log( getRandomNumber(20) );
```

[Arguments](https://developer.mozilla.org/en-US/docs/Glossary/argument) inside functions: the values you pass through a function when you call it.

>> Example:
 ```js
    function getRandomNumber(upper) {
    const randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
    }

    console.log( getRandomNumber(6) );
    console.log( getRandomNumber(100) );
    console.log( getRandomNumber(1000) );
    console.log( getRandomNumber(20) );
```

# Challenge Task
Write a function to call `returnVALUE` and accept one argument named value, and return that argument stored in the function.

```js
function returnValue(value) {
  return value
}
```

# Pass Multiple Arguments to a Function

Functions can accept more than one argument. When calling a function, you're able to pass multiple arguments to the function; each argument gets stored in a separate parameter and used as a discrete variable within the function.
- Each argument gets stored in a separate parameter.


> Area of a shape

```js
function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}
// enter statement w/ return statement on 2nd line...
getArea(4, 33, 'sq ft');
"132 sq ft"

```


# Challenge Task

>> Create a function named max that accepts two numbers as arguments (name the parameters whatever you would like). The function should return the larger of the two numbers. HINT: You'll need to use a conditional statement to test which of the two parameters is the largest.

```js
function max(numBig, numSmall) {
  if (numBig > numSmall) {
    return numBig;
  } else {
    return numSmall;
  }
}

```

# Variable Scope

JavaScript provides separate "scopes" for each function. Any variables created within a function are not accessible outside the function, and cannot interact variables created in another function.

Scope determines what is accessible under which contexts.

**Function scope**
```js
let person = 'Lee';


function greeting() {
  // function scope
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}

function greeting2() {
  let person = 'Robert';
  alert(`Good morning, ${person}!`);
}

greeting();
alert(`Hi, ${person}`);
greeting2();
```

**Global scope** - larger universe. You can change the value of a function in the global scope from within the inside function. Global scope is when a variable is accessible anywehre inside a program -- in the body of the program and within functions.
- Variables defined outside a function are called `global variables`.
- Variables defined within a function are `local variables`.

>>> All three alerts are for Meg now. Key to avoid this is to change variables to be clear they can't be changed...

```js
// Global scope
let person = 'Lee';


function greeting() {
  // function scope
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}

function greeting2() {
  person = 'Robert';
  alert(`Good morning, ${person}!`);
}

greeting();
alert(`Hi, ${person}`);
greeting2();
```

Functions are self-contained blocks of replicable code.
- use let/const keywords


# Function Declarations vs. Function Expressions

There is another syntax for creating a function that is called a "function expression."

**Anonymous Function:** a function without a name after the function keyword.
- the name comes from the variable.
- store function as a variable and creates a statement by assigning a function to a variable --> `;`
- use name of variable with a function and a semicolon

```js
const getRandomNumber = function(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
};

getRandomNumber(10);
```

**Function Declaration**: you can call these before they're defined.

**Hoisting** when you call a function before it loads -- only when the JS engine reaches the line of code that it's on. Hoisting is the behavior where the JS engine moves function declarations to the top of their scope before code execution.
- function MUST come before the logging.

# JS Quiz Insights
- When you declare a variable within a function, is that variable only accessible within that function?
  - Yes but only if you use a `let`, `const`, or `var` keywoard insight the function to declare the variable.

- Given the following code what happens?
```js
let message = "Welcome!";
function setMessage() {
  message = "Goodbye!";
}
setMessage();
alert(message);
```
- Because a `let`, `const`, or `var` keyword is not used to declare a message variable inside the function, the function overwrites the value in the global variable message.
- the answer is "Goodbye" is written b/c of the above!

- Given the following code what happens?
```js
const name = "Trish";
function setName() {
  const name = "Sarah";
}
setName();
alert(name);

```
- The name variable outside the function is a global variable, so the `alert()` (which is also outside the function) accesses global variable.
- the answer is "Trish" is written b/c of the above!



# Create Functions Using Arrow Syntax

The two methods of writing functions we've learned about thus far: 

(1.) **Declaration Function:** defines a function using the function keyword first, followed by name of function
- hoised (while arrow functions aren't)

```js
function square(x) {
  return x * x;
}
```

(2.) **Anonymous Function:** a function without a name that's assigned to a variable

```js
const square = function(x) {
  return x * x;
}
```

There's one more to learn:

(3.) **Arrow Functions:** you omit function keyword and after (), you add the => function. Body remains the same
- are anonymous function b/c no name and you call/reference them using the variable name.
- dont' replace function expressions, just a new way
- aren't hoisted while declaration functions are. 

Get a random number between 1 and 6

```js
const getRandomNumber = () => {
  const randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
};
```


### Turn a declaration function into an arrow function expression

Original in declaration function...
```js
function getArea(width, length, unit) {
  const area = width x height;
  return `${area} ${unit}`;
}
```
New as an arrow expression
```js
const getArea = (width, length, unit) => {
  const area = width x height;
  return `${area} ${unit}`;
}
```


# Concise Arrow Function Syntax
Arrow functions are already less verbose than function declarations and function expressions, but you can write them in a more concise way.

### **Arrow Functions with One Parameter**
If your arrow function accepts a single argument, like the square function below, you can omit the parentheses:

```js
const square = x => {
  return x * x;
}

square(10); // 100

```

### **Arrow Functions with Multiple Parameters**
JavaScript does not allow you to remove the parentheses from arrow functions with no or multiple parameters; only functions with a single parameter.

❌ The following arrow function expression (without parentheses) throws a syntax error ❌ 

```js
const getArea = width, length, unit => {
  const area = width * length;
  return `${area} ${unit}`;
}

getArea(10, 20, 'sq ft');
// Uncaught SyntaxError: Missing initializer in const declaration

```

✅ You need to include the parentheses when working with multiple (or no) parameters: ✅ 

```js
const getArea = (width, length, unit) => {
  const area = width * length;
  return `${area} ${unit}`;
}

getArea(10, 20, 'sq ft');  // 200 sq ft
```

### **Arrow Functions as One-line Statements** 

If your function body (the part between the curly braces) is only one line of code, you can make the function more concise by omitting the return keyword and placing everything on one line:

```js
const square = x => { x * x };
```

When you omit the return keyword in a single-line function, the value is returned automatically (or implicitly). This is called an **implicit return**.

In fact, when using an implicit return, you don't even need the curly braces (they are optional). You can reduce the arrow syntax further by writing the function like this:

```js
const square = x => x * x;
const multiply = (x, y) => x * y;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
```

### **Single-line Functions with No Parameters**
Finally, a single-line arrow function with no parameters requires parentheses before the arrow (=>) token, otherwise JavaScript produces a syntax error. For example:

❌ This is wrong ❌ 
```js
const name = 'Jesse';
const greeting = => alert(`Greetings, ${name}!`);
greeting(); // Uncaught SyntaxError: Unexpected token '=>'
```

✅ The following is the correct way ✅ 
```js
const name = 'Jesse';
const greeting = () => alert(`Greetings, ${name}!`);
```

This shorter syntax might seem strange at first, and take a little getting used to, but compared to the following expression:

```js
const greeting = function() {
  alert(`Greetings, ${name}!`);
};
```

it can make parts of your code more concise and easier to read. However, even if your function meets the criteria for concise syntax, it's still perfectly acceptable to use the standard arrow function syntax.


# JavaScript Function Quiz Insights

### Complete the code below to create an arrow function with two parameters: `greeting` and `name`:

```js
const sayGreeting = (greeting, name) => {
  return `${greeting}, ${name}.`;
}
```


### Which is functionllay the same as the below function?
```js
const square = function(x) {
  return x * x;
};
```

This one: 
```js
const square = x => {
  return x * x;
};
```

### Arrow function
```js
const add = (num1, num2) => {
  return num1 + num2;
};
```

### What's functionally equivalent to the function below?
```js
const sayYay = function() {
  return "Yay!";
};
```

This: 
```js
const sayYay = () => "Yay!";
```

This function doesn't return a value. You can omit the `return` keyword only if the arrow function is on a single line without { }.

### Arrow functions hoisted to the top of their scope?
- NO, just like function expressions are not hoisted.


# Default Function Parameters
JS lets you assign default parameters to your functions so if you don't pass a certain argument to the function, it defaults to a certain value.

The [**default parameter**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) acts as safeguards and prevents the function from returning an undefined value.

>> Example #1

For example, there's a function sayGreeting that takes the param `name` -- write as a function declaration. The function now expects a name value passed through it as an argument.
```js
function sayGreeting(name) {
  return `Good morning, ${name}!`;
}
```

If you call `sayGreeting();` in the terminal...it returns the following: 
`"Good morning, undefined!"`

Undefined is one of JS' built in value b/c no value assigned to the name parameter. Missing a **function argument** can potentially break the function. 

>> Example #2

Now if you pass student as a **default function parameter**, in this way:
```js
function sayGreeting(name = 'student') {
  return `Good morning, ${name}!`;
}
```

If you call `sayGreeting();` in the terminal...it returns the following:
`"Good morning, student!"`

Or `sayGreeting('Maria');` returns:
`"Good morning, Maria!"`

>> Example #3

Now if you pass in default param for `name` and an argument that isn't a default pram (`greeting`)...
```js
function sayGreeting(greeting, name = 'student') {
  return `${greeting}, ${name}!`;
}
```
If you call `sayGreeting('Hi there');` in the console...notice how the greeting is defined but the name isn't... The name will return `student` by default and lead to the following:

`"Hi there, student!"`

>> Example #4

If we want to bypass the greeting default parameter and adjust the name, what do we do?

The following below returns the way it does b/c the first input is the argument passed in...for the first template literal parameter. The function expects you to put in a value.
```js
sayGreeting('Guil')
"Guil, student!"
```

To fix this, we have to [pass in undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters#Passing_undefined_vs._other_falsy_values) to instruct JS engine to use default value to the first parameter (a placeholder). This [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) is like a placeholder.

This in the console `sayGreeting(undefined, 'Guil')` returns the following:
`"Good morning, Guil!"`

>> Example #5

Let's take the area function example and use default parameters
```js
function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}
```
This input in console `getArea(5, 5, 'in.');` returns the following:
`"25 in."`

Let's add in a default param for width...like this:
```js
function getArea(width = 5, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}
```

Now, if we put this into the console `getArea(undefined, 5, 'in.');` b/c length already defaults as 5, the output is again 25!
`"25 in."`

# Challenge Task

Turn the following function into an arrow function:
```js
greet('cool coders');

function greet(val) {
  return `Hi, ${val}!`;
}
```

Arrow function (answer) is here:
```js
const greet = (name) => {
  return `Hi, ${name}!`;
}

greet('val');
greet('cool coders');

```

# Descriptive Comments for Functions
Developers often use descriptive comments in their programs for function documentation. The comments provide a high-level overview of what a function does, its parameters, and return value.

There is a standard syntax you can use to document functions -- it's known as [JSDoc](https://jsdoc.app/index.html), and the format looks like this:

```js
/**
 * [A short description of the myFunc function]
 *
 * @param {[param type]} param1 - [parameter description]
 * @param {[param type]} param2 - [parameter description]
 * @returns {[return type]} [documents the function's return value]
 */

function myFunc( param1, param2 ) {
  // function returns a value...
}
```

When using the JSDoc approach, place a comment immediately before the function you are documenting. Each comment begins with /**. Let's go over each line in the comment sequence:

- The first part of the comment is a [short and simple description](https://jsdoc.app/about-getting-started.html) of what the function does. Below the description, you add more information with @ tags.
- The @param tag provides the name, type, and description of a function parameter. Use one @param tag for each parameter you define.
- The @returns tag (also @return) documents the value the function returns with a type and description.

Besides @param and @returns, there are other useful tags like @throws, @example, @author, and [many more](https://jsdoc.app/index.html#block-tags).

### Document a Function
Below is an example of how you might document the getArea function using the JSDoc format:

```js
/**
 * Calculates and returns the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle and unit of measure.
 */

function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}
```

### The Power of JSDoc
Besides its descriptive format, the JSDoc tool itself has other useful and powerful features. JSDoc is also a documentation generator for JavaScript.

For example, when you add documentation comments directly to your source code, JSDoc can scan your code and [generate an HTML documentation website](https://jsdoc.app/about-getting-started.html#generating-a-website) for you. However, you'll need to install special tools to run this feature -- you'll learn about some of these tools later in your JavaScript learning journey.

JSDoc also has built-in support in text editors like [Visual Studio Code](https://code.visualstudio.com/). VS Code can use the [JSDoc annotations](https://code.visualstudio.com/docs/languages/javascript#_jsdoc-support) to provide code completion, hover information, and function signature information to help you write code more quickly and correctly.

### Take Advantage of JSDoc Comments
Keep in mind that you don't have to install any extra tools to simply use the JSDoc syntax and format in your code.

Using a consistent and descriptive commenting approach makes your functions more predictable. Other developers who need to learn about your functions will have a faster and easier way to identify each part of a function.

### Resources
- [JSDoc](https://jsdoc.app/index.html)
- [JSDoc cheat sheet](https://devhints.io/jsdoc)


# Function Challenge

In this practice challenge, you will make the random number function you created earlier more flexible. It should be able to produce random values between 10 and 100 or 0 and 6.

Original Starting Place:
```js
/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

Math.floor(Math.random() * (6 - 1 + 1)) + 1;

// Call the function and pass it different values
```

Final Version:
