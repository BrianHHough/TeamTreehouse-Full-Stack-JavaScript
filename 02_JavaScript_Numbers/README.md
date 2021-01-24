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


Here's my solution!

>> Build a short program that helps you calculate the number of seconds in a day, hours in a week, or minutes in a year.

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
	

