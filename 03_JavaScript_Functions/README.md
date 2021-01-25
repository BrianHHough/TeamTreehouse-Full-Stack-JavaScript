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

