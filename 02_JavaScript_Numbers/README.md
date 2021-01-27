# **JavaScript Numbers**

JS's built-in data types:
- strings (one of the most common)
    - Looks like: ''
- booleans (two possible values: true/false)
- **numeric data types**, i.e. numbers! (counting/calculating)
    - **integers:** whole number, not a decimal, can be a +/- number
    - **floating point numbers:** decimals (3.14)
    - **scientific notation:** (9e+6)

Storing a number in the variable: `const milesToTheMoon = 225622;`

Any character inside of quotes -- including numbers -- are strings.

>> Create a variable named age and assign it your age.

    var age;
    var age = 26;

# Doing Basic Math 

| Change the Value of a Variable | Shorthand Version |
| :---: | :---: |
| `score = score + 10;` | `score += 10;` |
| `score = score - 20;` | `score -= 20;` |
| `score = score * 5;` | `score *= 5;` |
| `score = score / 2;` | `score /= 2;` |
	
- [Basic math in JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
- [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#Arithmetic_operators)
- [Assignment Operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#Assignment_operators)



>> Build a short program that helps you calculate the number of seconds in a day, hours in a week, or minutes in a year && how many seconds you've been alive if your age is 25 years old.

```js
const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;

//console.log(`There are ${secondsPerDay} seconds in a day.`);

const yearsAlive = 25;

const secsAlive = secondsPerDay * 365 * yearsAlive;

console.log(`I've been alive for more than ${secsAlive} seconds!`);
```
	
>> Which of the following adds 20 to the current value of the variable points, then stores the result back into points.

    points = 20 + points;

>> Use the shorthand operator that adds 20 to the current value of the variable points, then stores the result back into points.

    points += 20;

# Treating Strings As Numbers

If you are supposed to receive data as numbers...be careful that you don't treat those numbers like they are strings.....operators will concatinate the strings together (i.e. '10' + '5' = 105 rather than 10 + 5 = 15)

You need to convert the string to a number!

**`typeof`**: special operator to verify the type of operator.
- used to check variable's type and ensure it's the correct data type.

        // Returns string/number 
        console.log( typeof HTMLBadges), typeof parseInt(CSSBadges) );


        // Returns pi as a string
        const pi = '3.14';
        console.log( typeof pi );

        // Returns 'number'
        const pi = '3.14';
        console.log( typeof parseFloat(pi) );

        // Returns 'number'
        const pi = '3.14';
        console.log(typeof +pi);


**`parseInt()`**: a method that converts a string to an integer. NOTE: `parseInt()` method cannot parse a decmial value.
- The unary plus (+) operator converts a string to a number.

```js
const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');

const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
console.log(totalBadges);
```

    // Returns NaN b/c JavaScript can't find a # at the beginning of the string
    parseInt('That is so 2008')

    // Returns 202.99 in both cases
    parseInt('202.99')
    parseInt('202.99')


**`parseFloat()`**: a method that converts a floating number to an integer.

    // Returns `3.14` as a number
    const pi = '3.14';
    console.log( parseFloat(pi) );

    // Returns just 1.89
    parseFloat('1.89 light years away')


**Unary plus operator** (the + before a variable) attempts to convert value to a number if it isn't already
- works with integers and floating point numbers

>> Output is the badges that you input in the system: such as 10 + 5 = 15

    const HTMLBadges = prompt('How many HTML badges do you have?');
    const CSSBadges = prompt('How many CSS badges do you have?');
    const totalBadges = +HTMLBadges + +CSSBadges;

    console.log(totalBadges);

>> If you put in 3.14, this returns true in the console b/c of the unary plus operator turning pi to a number.

    const pi = prompt('What is Pi?');
    console.log( +pi === 3.14 );


# Perform Operations With the Math Object
In addition to the arithmetic operators you learned, JavaScript has a built-in `Math` object used to perform complex mathematical operations on numbers.

[**Primitive Data Types**](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- Their basic values are built into the language. 
- A wrapper is added via JS so you can edit these types, called an **object**
- All **objects** have:
    - Properties: variables associated to the object
    - Methods: actions that they can perform
- Examples:
    - Strings: 'I'm a string'
        - the string object has a prop called `.length` = holds a numeric value (find the chars in a string) 
        - the string object has a method called `.toUppercase();` = convert string to all upercase letters
    - Booleans: True/False
    - Numbers: 3.14

The [**Math object**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) for running complex math ops -- square roots, sign, cosign, logs, etc.
- Example: Math.pi for working with circles
- Example: `[Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)` = rounds to nearest whole number


# Create a Random Number

- Math.random() – [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) returns a floating-point, pseudo-random number between 0 and 1, inclusive of 0 but not 1.
- Math.floor() – [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) rounds number down
- Math.ceil() – [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) function that rounds a number up to the next largest whole number or integer

**Code runs inside out** - what's inside innermost parenthesis gets processed first
- Example: `Math.floor( Math.random() * 6 );` --> always returns an integer between 0 and 5
- Example: `Math.floor( Math.random() * 6 ) + 1;` --> always returns an integer between 1 and 6

# Random Number Challenge - One Number Solution

// Collect input from a user
// Prompt method returns a string

    const input = prompt('Please provide a number');

// Convert the input to a number
// Turns string into number variable as highInput to use

    const highInput = parseFloat(input);

// Conditional If Statement

    if (highInput) {
  // Use Math.random() and the user's number to generate a random number
    
    const randoNum = Math.floor( highInput * Math.random() ) + 1;
  // Create a message displaying the random number
  
    console.log(`${randoNum} is a random number between 1 and ${highInput}.`);

    } else { 
        alert('You need to provide a number. Try again.');

        console.log('You need to provide a number. Try again.');
    }

# Random Number Challenge Part II - Two Number Solution

```js
// Collect input from a user
// Prompt method returns a string

const inputLow = prompt('Please provide your lowest number');
const inputHigh = prompt('Please provide your highest number');

// Convert the input to a number
// Turns string into number variable as highInput to use
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);

// Conditional If Statement

if (lowNumber && highNumber) {
  // Use Math.random() and the user's number to generate a random number
  const randoNum = Math.floor( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;
  
  // Create a message displaying the random number
  console.log(`${randoNum} is a random number between ${lowNumber} and ${highNumber}.`);
} else { 
  alert('You need to provide two numbers. Try again.');
  console.log('You need to provide two numbers. Try again.');
}
```


