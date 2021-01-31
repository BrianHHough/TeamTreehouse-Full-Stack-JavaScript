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


