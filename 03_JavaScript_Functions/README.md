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

The **default parameter** acts as safeguards and prevents the function from returning an undefined value.

### Example #1

For example, there's a function sayGreeting that takes the param `name` -- write as a function declaration. The function now expects a name value passed through it as an argument.
```js
function sayGreeting(name) {
  return `Good morning, ${name}!`;
}
```

If you call `sayGreeting();` in the terminal...it returns the following: 
`"Good morning, undefined!"`

Undefined is one of JS' built in value b/c no value assigned to the name parameter. Missing a **function argument** can potentially break the function. 

### Example #2

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


