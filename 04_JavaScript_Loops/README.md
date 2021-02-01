# JavaScript Loops

In programming, a loop is a way to repeat the same set of actions a certain number of times or until a specific condition is true.

Types of Loops:
1. while
2. do...while
3. for

# 1 of 3: The while Loop
Use the [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) statement to create a loop that executes code as long as a condition evaluates to true.

Resembles an if statement and a condition goes in the parenthesis and runs over and over again as long as the statement is true.
- [Learn about the getRandomNumber function](https://teamtreehouse.com/library/function-parameters-and-arguments)
- [Addition assignment (+=) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Addition_assignment)
- [while statement – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement)

### Starting off...here is the conditional statement that returns a random number between 1 and the supplied number (in this case below, 6)
```js
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

getRandomNumber(6);
```

### Let's log 10 random numbers from 1-6

```js
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
let counter = 0; // lap counter. at start of the race, you've run 0 times. each time you run, you update counter value by +1.
while ( counter < 10 ) {
  // the while loop will run as long as the number isn't larger than the counter's bound/limit
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter += 1;
}
```

# 2 of 3: The do...while Loop
Use [`do...while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) to create a loop that executes code until the test condition evaluates to false.

In a `while loop` the condition gets checked at the beginning before code block runs. If the condition is true, code runs. If false, it doesn't run.
- use when you need to check a condition before running loop (check if less than 10)

The `do...while loop` doesn't check condition until the code block has run once. If it's true, it runs again and again until condition no longer true.
- use when you need code to execute at least one time (log at least 1 random number and then check if counter is less than 10)
- use when you need to run a block of code before checking the condition.

### Write the same function that returns 10 numbers as above but with a `do...while loop`
```js
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0; // to track # of times code runs
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter += 1; 
} while ( counter < 10 );
```

# Add One to a Number with the Increment Operator (++)

### [Increment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
Here's a tip. It's so common in JavaScript to increment a number value by one that there's a shorthand operator (called the "increment operator") that's used frequently with loops. Use it on your counter variable by replacing += 1 with two plus symbols (++).

1. Open the file do-while.js.
2. In the do block, use the increment operator to increase the number assigned to counter by one each time the loop runs:
```js
function getRandomNumber(upper) { ... }

let counter = 0;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter++; // increment operator
} while ( counter < 10 );
```
Similar to using the addition assignment operator and adding 1, the increment operator adds 1 to the current number value stored in counter and returns a value each time through the loop. The approach you use is up to you; the course will use the increment operator moving forward.

### [Decrement operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
JavaScript also provides the decrement operator (--), which subtracts one from an integer value. For example:

```js
function getRandomNumber(upper) { ... }

let counter = 10;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter--; // decrement operator
} while ( counter > 0 );
```
This time, the loop counts down from 10 to 0, decreasing the value assigned to the counter variable by one each time through the loop. It's the same as counter -= 1.

# Challenge 1: Create a while loop that logs the current value of count to the console 26 times. Use the count variable to track the number of times the loop runs. Don't forget to increment count by one each time through the loop. 😀

Solution:
```js
let count = 0;
while ( count < 26 ) {
  console.log(count);
    count++;
}
```

# Challenge 2: You don't always need to use a counter or specify an exact number of times that a loop must run. All you need is a condition that evaluates to false at some point so that the loop can end. The code in script.js opens a prompt dialog that asks for a password and assigns it to the variable secret. It also displays an alert dialog. Currently, no code checks the password. Add a do...while loop that keeps displaying the prompt dialog until the user types 'sesame'.

Solution:
```js
// Display the prompt dialogue while the value assigned to `secret` is not equal to "sesame"
let secret;
do {
     secret = prompt("What is the secret password?");
} while (secret !== 'sesame');


// This should run after the loop is done executing
alert("You know the secret password. Welcome!");
```

# Beware of Infinite Loops!

One important concept you should keep in mind about loops is the infinite loop. An infinite loop, as the name suggests, is a loop that keeps running forever.

For example, a while loop's condition gets evaluated before the loop runs. That is, if the test condition is true at the beginning, the loop runs:

```js
while ( condition ) {
  // execute code if condition is true
}
```

You need a way to break out of the loop. In other words, something has to change inside the loop to stop it from running. There are a few ways to do this. One way is with a keyword you'll learn about in the next stage called break, which lets you exit a loop.

As you've learned, one common method for exiting a loop is to change a variable inside the loop to cause the test condition to evaluate to false. For example, increment the value assigned to a counter variable to stop the loop when counter is no longer less than 10:
```js
let counter = 0;
while ( counter < 10 ) {
  // execute code
  counter++;
}
```

### What if the condition is always true?
If the test condition is always true, the loop never stops. Programmers call this an infinite (or endless) loop, and it's generally a bad thing. For example, the statements in the following while loop would execute forever because the condition never becomes false:

```js
while ( true ) {
  // execute code endlessly
}
```
>> true is always true, so there's no way that the above condition will ever become not true; therefore, the code inside the while block runs on and on and on.

Consider the following while statement:
```js
let counter = 0;
while ( counter >= 0 ) {
  console.log(`The counter is: ${counter}`)
  counter++;
}
```

The counter starts at 0 and increases each time through the loop. Since counter will always be greater than or equal to 0, the condition will ALWAYS be true.

### Avoid Infinite Loops
An infinite loop is like never telling runners in a race when they've gone around the track enough times and completed the race. Without checking that the runner has made it around the track enough times, the runner will keep on running and running and running in an endless loop. Eventually, the racer will become exhausted and collapse. A web browser stuck in an infinite loop can also run out of energy, crash, or at least stop the web page from working any longer.

![img](https://image-proxy-cdn.teamtreehouse.com/3f61225c160ca67d5c1d50ce73fdab8bc3f8aea2/687474703a2f2f74726565686f7573652d70726f6a6563742d646f776e6c6f6164732e73332e616d617a6f6e6177732e636f6d2f6a6176617363726970742d6c6f6f70732f6173736574732f696e66696e6974652d6c6f6f702d30332e706e67)

An infinite loop endlessly logging numbers to the console
Ensure that the condition in a loop eventually becomes false – otherwise, the loop will never end. If you accidentally create an infinite loop, it could crash your browser or computer. It's important to be aware of infinite loops so you can avoid them.

Now you have two different types of loops in your JavaScript toolkit. In the next stage, you'll learn the most common type of loop -- the for loop.

- [Stop infinite loops](https://developers.google.com/web/updates/2018/04/devtools#stop)
- [How do you stop an infinite loop in Javascript?](https://stackoverflow.com/questions/905322/how-do-you-stop-an-infinite-loop-in-javascript)


# Quiz Insights

### Given the below code, what will print to the console?
```js
while (false) {
  console.log('Hello');
}
console.log('Goodbye');
```

Solution: prints `Goodbye` b/c the condition for the while loop is false, so the loop never runs and `Hello` is never printed. But the second `console.log` does run b/c it's outside the loop.

### Given the below code, what will print to the console?
```js
do {
  console.log('Hello');
} while (false);
console.log('Goodbye');
```

Solution: it prints `Goodbye.` The loop runs the code block one time, because the condition for the loop is false. Even though the while condition is false, it'll still run at least once because it's a do while loop


### Example of infinite loop
```js
let counter = 0;
while ( counter >= 0 ) {
    console.log(`The counter is: ${counter}.`)
    counter += 1;
}
```

### Consider the console output: 1,3,5,7,9,11,13,15...complete the do...while loop to display the above:
```js
let i = 1;
do {
  console.log( `#${i}` );
  i += 2; 
} while ( i <= 15 )
```


# 3 of 3: The for Loop
The [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop is a more compact variation of the while loop, with similar parts, and it's useful when you know how many times you want to repeat an action.
- [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- for loops are more compact and more often used
- 4 parts to for loops - expressions in the parentheses
    1. initial declaration of the counter variable
    2. the condition
    3. update the counter each time through the loop -- condition gets evaluated before it runs 
    4. the {} is the code block function you want to run

```js
for ( let counter = 0; counter < 10; counter +=1) {
    console.log(counter);
}
```

Random number picker 100 times: i and j usually used as variables for inputs.
```js
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for ( let i = 0; i < 100; i++) {
  console.log( `The random number is ${getRandomNumber(10)}` );
}
```

# Create a `for` loop that logs the numbers 5 to 100 to the console. Use the `console.log()` method to log a value to the console.
```js
for ( let i = 5; i <= 100; i++) {
  console.log(i);
}
```

# Dynamically Display HTML with a Loop
Use a `for` loop to build a string holding HTML, then display it on a web page.
```js
const main = document.querySelector('main');

// string that holds html
let html = '';

// variable declaration/condition tested once before loop begins
for ( let i = 5; i <= 100; i+=5) {
  html += `<div>${i}</div>`;
}

main.innerHTML = html;
```



# Exit a Loop
In each of the three types of loops you've worked with so far, there's some "exit" condition. In other words, when a specific condition is no longer true, like a counter variable is no longer less than 10, or less than or equal to 100, the loop ends.
```js
for ( let i = 0; i <= 100; i++ ) {
 // code to run
}
```
But that's not the only way to exit a loop. JavaScript includes a "break" statement which, when encountered inside a loop, immediately exits the loop.

### Learn and practice how to exit a loop
1. In your project folder, open the file break.js.
2. In index.html, update the src attribute of the <script> tag:
```js
  <body>
    ...
    <script src="js/break.js"></script>
  </body>
```
The break.js file contains a for loop that gives the user five attempts to guess a "secret" word.
```js
const secretWord = 'tomato';
let message = 'Access denied :(';

for ( let i = 5; i >= 1; i-- ) {  
  let guess = prompt(`Enter the secret word. You have ${i} tries.`);
  if ( guess === secretWord ) {
    message = 'Welcome to the secret loop world!';
  }
}

alert(message);
```

> Notice how the loop starts counting down from 5 and uses the decrement operator (--) to decrease the value of i by one each time through the loop.

Each time the loop runs, it opens a prompt dialogue asking the user to "Enter the secret word," and it displays the number of tries they have to guess it. When the i counter is no longer less than or equal to 1, the loop ends.

The value of the guess variable gets updated with the user's guess each time through the loop. The if statement checks if the user's guess is correct by comparing the value of guess to the string that's assigned to the secretWord variable. If this condition evaluates to true, the message "Welcome to the secret loop world!" displays in an alert dialog box.

If the value of guess does not match the value assigned to secretWord after five loop iterations, an alert dialog displays with the message "Access denied :(".

### [Break out of a loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
Currently, the loop continues to run and keeps asking the user to guess the secret word until it has run five times -- even if they've already entered a guess that matches the secret word.

When the values match, the loop should end, and the "Welcome" message should pop up on the page.

1. Escape (or break out of) the for loop with a break statement. In the if statement, add the break keyword below the message variable assignment:
```js
for ( let i = 5; i >= 1; i-- ) {  
  let guess = prompt(`Enter the secret word. You have ${i} tries.`);
  if ( guess === secretWord ) {
    message = 'Welcome to the secret loop world!';
    break;  // immediately terminate the loop
  }
}

alert(message);
```

The break statement terminates (or stops) the execution of the loop entirely. Then control jumps to the next statement in the program -- or whatever needs to run after the loop.

Now, if the user guesses the secret word before five tries, the loop immediately ends, and the "Welcome" message appears on the page.

### [One more example: Return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
Following is another example of using a break statement in a loop. Evaluate this code and run it in your browser's JavaScript console -- just for fun:

```js
const tMinus = 10;
let message = 'Liftoff! 🚀';

for ( let i = tMinus; i >= 1; i-- ) { 
  let status = prompt(`T-Minus ${i}... Continue? (Y/N)`);
  if ( status === null || status.toLowerCase() === 'n' ) {
    message = 'Abort launch!';
    break;
  }
}

alert(message);
```

Notice how the looping behavior changes when you omit the break keyword.

You may have noticed that the break statement works like the return statement in a function. Any code inside the loop that appears after the break statement will never run.


# Challenge Task - terminate
The for loop in script.js runs as many times as the length value of the string assigned to the message variable. It logs the current value of i to the console, and the rest of the program continues when the loop completes.

Add the statement that immediately terminates the for loop if the value of i is equal to message / 2 (half the length value).

> Original:
```js
let message = "supercalifragilisticexpialidocious";
message = message.length;

for ( let i = 1; i < message; i++ ) {
  if ( i === message / 2 ) {
    console.log('The loop has terminated...');
    break;
  }
  console.log(`Logging the number ${i}`);
}

console.log('The program continues...');
```

# The Refactor Challenge
In this challenge, you will use a loop to reduce the repetition of code in a program.

### **DRY Principle**
**[DRY:(https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)** Don't Repeat Yourself
- reduce the repetition of code in a proigram
- loops help you write DRY code
- JS functions embrace the DRY principle
- functions let you write more modular code

### **Refactoring** 
**[Code efactoring:(https://en.wikipedia.org/wiki/Code_refactoring)** improving and simplifying code w/o changing its behavior. Cleaning up long/repetitive code.

Repetitive or copy/pasting blocks of code = warning something might be wrong


### ORIGINAL CODE:
```JS
let html = '';
let red;
let green;
let blue;
let randomRGB;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">1</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">2</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">3</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">4</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">5</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">6</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">7</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">8</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">9</div>`;

red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
html += `<div style="background-color: ${randomRGB}">10</div>`;

document.querySelector('main').innerHTML = html;
```

### REFACTORED NEW CODE:
- first step is removing nine of these blocks of code b/c it repeats itself
- use a `for loop` to repeat the first code block up to 10 times
- put the code block in the fore loop --> 67 lines of code to now less than 20
- to put a number in each div...insert/interpolate the value of i into the string containing the div text w/ a template literal.
- now 10 colorful dots appear w/ random colors: each div element has a style attribute with a random RGB color.
- RGB is redundant too -- let's createa  function from 0-256 for a RGB value. You'll need to call `randomValue()` three different times b/c we need 3 different colors blended together...but at least the code can be cleaned up with only one algorithm with a variable called for each color multiple times.
- ``randomRGB = `rgb( ${red}, ${green}, ${blue} )`;`` leads to something like: rgb(100, 100, 100). Let's create a function where we get rid of `let red; let green; let blue;` and create the function `function randomRBG() {}`
- create a parameter `value` in the function `randomRGB()`

```js
let html = ''; // set to empty string
const randomValue = () => Math.floor(Math.random() * 256);

function randomRGB(value) {
  // local scope -- you can only declare this variable in the function
  // runs three times to generate random RGB value parameter
  const color = `rgb( ${value()}, ${value()}, ${value()} )`;
  return color;
}

for ( let i = 1; i <= 10; i++ ) {  
  html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;
```


# Quiz Insights:

### How many times will the code run?
```js
for ( let j = 0; j <= 100; j += 10 ) {
  console.log( j );
}
```
Answer: 11 b/c the test condition includes the value 100 (j <= 100), the loop will work for the following values of j: 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100. Therefore, it runs 11 times.

### What forces JS engine to exit a loop even when loop condition is still true?

`break;`

### Which code block works the same as this `while` statement?
```js
let counter = 0; 
while (counter < 5) {
  console.log(`The counter is now: ${counter}`);
  counter++;
}
```

Answer:
```js
for (let i = 0; i < 5; i++) {
  console.log(`The counter is now: ${i}`);
}
```

### Consider the following code examples. All but one of them is an infinite loop. Choose the one that is NOT an infinite loop.

Infinite loops are caused when the loop's condition never evaluates to `false`

♾ Infinite Loop ♾ - as long as it's greater than 0, count up.
```js
let counter = 1;
while (counter > 0) {
  console.log(counter);
  counter++;
}
```
✅ This will stop eventually
```js
for ( let i = 0; i < 100; i += 10 ) {
  console.log(i);
}
```

♾ Infinite Loop ♾ - counts down from 0 indefinitely
```js
for ( let i = 0; i < 10; i -= 1 ) {
  console.log(i);
}
```

♾ Infinite Loop ♾ - because it doesn't incrementally increase...
```js
let counter = 1;
while (counter < 10) {
  console.log(counter);
}
```


# Challenge
The code in script.js logs all even numbers (from 2 to 24) to the JavaScript console. There seems to be a lot of redundant code in the file. Rewrite (or refactor) the code using a loop.

Original:
```js
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
console.log(14);
console.log(16);
console.log(18);
console.log(20);
console.log(22);
console.log(24);
```

Final:
```js
for ( let i = 2; i <= 24; i += 2 ) {
 console.log(i);

}
```
