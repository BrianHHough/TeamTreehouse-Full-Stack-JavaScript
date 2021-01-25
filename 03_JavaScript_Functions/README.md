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

[Parameters](https://developer.mozilla.org/en-US/docs/Glossary/Parameter) inside functions: a value that you supply to the function so the function can do something with that value.
- They are like variables that you define in the function.

>> Example: Pick random number with upper bound set in the argument of the function

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