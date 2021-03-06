# **JavaScript Basics**

# Display Messages w/ JS

**Open Browser Inspector**

COMMAND + OPTION + J
or
COMMAND + ALT + J = browser code inspector

**JS Statement** = sentence that ends in ;
- you write programs by writing multiple statements

`alert("Hello, world!");` --> alert popup

`console.log("Hello, world");` --> write words

`document.write("Welcome to my web page")` --> writes a message to current web page;


# Your First JS Program

SHIFT + ENTER = go to next line without returning in the console

>> Statement needs to run before the next one runs

    alert("Hello. Thanks for visiting!");
    console.log("Hello from the console.");
    document.write("<h1>Welcome to my web page.</h1>");

# Add JS to HTML

To link a .js file to an HTML file, use HTML script tag. Source attribute instructs browser where to source the file f˜rom

    <script src="js/script.js"></script>

**Pro tip:** you can't source the JS file and run a script at the same time!
- only one set of scripts tags for linked files

**Pro tip:** put scripts below the bottom of the page before the closing body tag
- lets the files load but you show the message before anything is shown

What is one benefit of putting your JavaScript code just before the closing </body> tag on a web page?
- users can view the contents of the web page before teh JS program runs

# Debug JavaScript in the Console

Chrome Console Keyboard Shortcuts
- Windows: Ctrl + Shift + J
- Mac: Cmd + Option + J
- My keyboard: Cmd + Alt + J

**for me with keyboard it's: COMMAND + ALT + J**

Firefox Console Keyboard Shortcuts
- Windows: Ctrl + Shift + K
- Mac: Cmd + Option + K

Internet Explorer Console Keyboard Shortcuts
- F12 key

Safari Console Keyboard Shortcuts
- Cmd + Option + C

# Practice Challenge Notes

This statement selects the `<h1>` element and replaces its text with "BOOM!".

    document.querySelector("h1").textContent = "🔥BOOM!🔥";


# Variables

Variables = boxes with unique lables that have value inside

`var` = JS keyword to create the labeled box

### **Declare a variable** 
with var score; the = is the assignment operator to assign a value to the variable; string is on the right of the equals sign;
var score = 0;

Once you store data in a variable, you can use and access it whenever you need it by calling it.


>> OUTPUT = message (b/c logging the word message, not the variable) 
    
    var message = "Hello!"
    console.log("message");

>> OUTPUT = Hello! (b/c logging the variable of message which has the text input value of "Hello!") 
    
    var message = "Hello!"
    console.log(message);

>> this is creating a variable reference so the variable "message" is stored with some value and then we are printing the variable that's packed w/ some value.


### **Rules for Naming Variables**
- there are reserved keywords that [CANNOT be used for naming variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)

Other words are reserved for future versions of JavaScript so that they won't cause errors now, but they might in the future. You can view the complete list of current and future reserved keywords in this MDN reference on keywords.

There are a few other rules you'll need to follow as well. Names can't start with a number. So a variable named 9lives is not allowed, but a variable named right1 is. Names can only contain letters, numbers, and the $ and _ characters. So the names numOfUnitsBy# or @home are not allowed, but variables like price$ and created_by are permitted.

Variable names with multiple words
Many programmers use variable names that combine two or more words. It's common to name those variables by either connecting the words with an underscore like price_per_unit or capitalizing every word after the first word like pricePerUnit.

Capitalizing every word following the first is called camel case by programmers because the capital letters look like the humps on the back of a camel!

It's a convention in JavaScript to name variables using the camel case format.

You can also begin a variable name with $ or _.

| Not Allowed | Allowed |
| :---: | :---: |
| 9lives | right1 |
| pricePer# | $price |
| @home | home_alone |
|  | price_per_unit |
|  | pricePerUnit |

### *What makes a good variable name?*
You learned what you can and can't put into a variable name, but what should you put into a variable name? While writing a computer program can be a lot of fun, looking over a program you wrote nine months ago, or a program someone else wrote can often be confusing. Writing clear and understandable code helps make your life easier as a programmer.

### *Provide clear and descriptive names for your variables*
Names like t, n1 or p are short and require less typing, but they don't communicate the purpose of the variables. Even if it requires more typing, use descriptive names like score, playerName, or pricePerPound. Your programs will be a lot easier to understand if you do, and as a programmer, you should always strive to write understandable, readable code.

### **Variable Reassignment**
[Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Assignment_operators) for reference

>> OUTPUT: 10 and not 0 b/c score was updated 
    var score = 0;
    score = 10;
    console.log(score);

### **Assignment Operators**
An assignment operator assigns a value to its left operand based on the value of its right operand.

| Symbol | Result |
| :---: | :---: |
| `=` | Assignment operator |
| `*=` | Multiplication assignment |
| `**=` | Exponentiation assignment |
| `/=` | Division assignment |
| `%=` | Remainder assignment |
| `+=` | Addition assignment |
| `-=` | Subtraction assignment |
| `<<=` | Left shift assignment |
| `>>=` | Right shift assignment |
| `>>>=` | Unsigned right shift assignment |
| `&=` | Bitwise AND assignment |
| `^=` | Bitwise XOR assignment |
| `|=` | Bitwise OR assignment |
| `&&=` | Logical AND assignment |
| `||=` | Logical OR assignment |
| `??=` | Logical nullish assignment |

`[a, b] = [1, 2]`
`{a, b} = {a:1, b:2}`
Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.


Example:

>>  OUTPUT: 115
    
    var score = 0;
    score += 10;
    score += 5;

    var bonusPts = 100;
    var finalScore = score + bonusPts;
    console.log(finalScore);


### **Equality Operators**
| Symbol | Result |
| :---: | :---: |
| `==` | Equality operator |
| `!=` | Inequality operator |
| `===` | Identity operator |
| `!==` | Nonidentity operator |



# **Define Variables with let and const**
Make code less error prone than var...

**`const`** = often the best choice for declaring variables. 
- the value of variables shouldn't change (i.e. product prices, passwords, usernames, selecting elements of a webpage, etc.)
- prevents overwritting; can't assign it another value
- using var for a score, price or username could cause them to be overwritten.
- [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

Example: 

>> OUTPUT: 5
    
    const score = 5;
    console.log(score);

>> OUTPUT: Assignment to Constant error -- you cannot change/manipulate value of variable through reassignment or redeclare the same constant variable (i.e. writing const score x2)
    
    const score = 5;
    score += 5;
    console.log(score);

**`let`** = used for variables that should change while the program runs
 - the value of variables should change (i.e. score of a game)
 - when you want to re-assign a varriable
 - let offers more protection and helps prevent you from overriding the value in the initial variable assignment
 - [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

 Example:

 >> OUTPUT: 15

    let score = 5;
    score += 10;
    console.log(score);

>> OUTPUT: Syntax Error -- you cannot reassign let variables later on in the program, while you can do that with const.
   
    let score = 5;
    score += 10;

    let score = 20
    console.log(score);

Example: 
>> How can you reassign the below info using shorthand syntax?
   
    let correct = 0;
    correct = correct + 1;

>> Solution:
   
    let correct = 0;
    correct += 1;

Example: Evaluate the code in app.js. The code currently produces a TypeError. Adjust the code so that the points variable holds the expected value.

>> Solution: use `let` for points variable b/c it will change by adding bonus points to it
   
    let points = 100;
    const bonusPts = 50;

    points += bonusPts;
    console.log(points);

# JavaScript Strings

### Introduction
**Quotes** = tell JS that the string is a set of characters
- double quotes is a best practice for strings of characters
- use the \ before quote mark to treat that next quote mark as just a character and not an end to the string (i.e. `I\'m a programmer!`)

To write a string with multiline, use \ at the end of each line:
    
    const multiline = "Hello, students. \
    Welcome to JavaScript Basics. \
    I hope you learn a lot!";

### Transform and Manipulate Strings
**Strings** = are not just a type of data but also objects that have properties (you can find the length of string by looking at string's length property)

`.length` = count the characters of a string, including spaces

Example:

>> Output = 11
    const passphrase = 'Open Sesame';
    console.log(passphrase.length);

`.` = allows you to access the properties of JavaScript objects

**passphrase**.length = length prop of a string

**method** = something you can do with an object. Performing some action on the object. You know its a method if there are parentheses ()

- toUpperCase() = converts string to upper class letters
- toLowerCase() = converts string to lower class letters
- console.log() = method for the console to print elements


# Capture Input

**Prompt** = allows you to get information from the site user.
- `prompt();` is a method to ask a question or ask user to input some text

We can capture this input by using a variable

Example:
>> First line: asks you to input your name
>> Second line: will return your name back to you as an alert
    const name = prompt('What is your name?');
    alert(name);


Example: develop a program where you have a pop-up asking for your name and the input is logged in the console
    
    const name = prompt('What is your name?');
    console.log(name);


# Combine Strings

**String Concatenation** = comining two or more strings together
- you'll use this if you have items that don't have the inputs in just yet (i.e. if you want to greet a user by their first name, but don't have the info just yet...you might use a variable b/c you won't know their name ahead of time)

Example: a pop-up that asks for your name and then welcomes you to the music app from the console:

    const name = prompt("What is your name?");
    const message = "Hello " + name + ". Welcome to my music site. ";

    console.log(message);

Example: expanding on the above with concatenation to add the name in multiple places in the console.
>> Output is: Hello Brian. Welcome to my music site. I'm so happy that you came by to visit, Brian. Feel free to come again and listen to more music.

    const name = prompt("What is your name?");
    let message = "Hello " + name + ". Welcome to my music site. ";
    message += "I'm so happy that you came by to visit, ";

    message += name;

    message += ". Feel free to come again and listen to more music.";

    console.log(message);


Example: Create a string of concatenation
>> Output: "Brian Hough: DEVELOPER"
    let firstName = "Brian";
    let lastName = "Tech";
    let role = "developer";

    let msg = firstName + " " + lastName + ": " + role.toUpperCase();


# Template Literals
- make code more usable and enhance how you work with strings
- you define template literals with backticks instead of quotes

**Interpolation** = whatever is in curly braces gets evaluated by the JS engine first and added to the string.
- ${} = dynamic values in template literals
- easier to work with variables this way than concatenated strings


>> Original with string:
    const name = prompt('What is your name?');
    const message = "Hello" + name;
    console.log(message);

After (easier to read) code with Template Literals
>> Output: Hello Brian
    const name = prompt('What is your name?');
    const message = `Hello ${name}`;
    console.log(message);

Example:
>> Output: Hello Brian. It's 6 o'clock.
    const name = prompt('What is your name?');
    const message = `Hello ${name}. It's ${2 *3} o'clock.`;
    console.log(message);

Example: interpolated version of the "hello brian welcome to my music site" from above
>> Output: Welcome to my music site. I'm happy that you came to visit, Brian. Please come again and listen to more music!
    const name = prompt('What is your name?');

    const message = `Hello ${name}. Welcome to my music site. I'm happy that you came to visit, ${name}. Please come again and listen to more music!`;

    console.log(message);

# Display the Value of a String on a Page

**App for shouting JavaScript statement**

>> Interpolated version: 
    const stringToShout = prompt("What do you want to shout?");
    const shout = stringToShout.toUpperCase();
    const shoutMessage = `The message to shout is: ${shout}!!`;

    console.log(shoutMessage);

We'll use `querySelector()` which in the parentheses you'll include the tag name, class or ID of element you want to access as a string.

We'll use  `document.` method with the `querySelector()` method to interact with browser for the info we want to present.
- combining these is saying, "Hey JavaScript, go into the HTML file and get us a main element so that we can do something with it, and it will return the first element that it sees.

`.innerHTML` = property that replaces existing content of element with new content. 


**Which of the following code examples logs `Total points: 500 to the console`?**

>> Answer
    const points = 400;
    const bonusPts = 100;
    let total = `Total points: ${points + bonusPts}`;
    console.log(total);

# Introducing Conditional Statements
Let you make the program behave differently based on inputs and conditions. Make your software more flexible.

**Strict Equality Operator**
===
to test if two values are exactly the same
- Example: ( '3' == 3) --> FALSE (comparing strings to numbers)
- Example: ( ' ' === 0) --> FALSE
    - This is why the === is better to use

**Equality Operator**
==
Tests if two values are the same
- Example: ( '3' == 3) --> TRUE
- Example: ( ' ' == 0) --> TRUE

**Logical Not Operator**
!=
- Example: ( 10 !== 9) --> TRUE because 10 is not strictly equal to 9
- Example: ( '10' !== 10) --> FALSE because comparing string to number; types do not match
- ( 'Java' !== 'java') --> TRUE

**If Else Statement**
Two doors

if () {

} else {

}

- `else` clause is optional, but useful. It lets you run additional code if the condition is false.

# Conditional Operators

| Symbol | Meaning |
| :---: | :---: |
| > | Greater Than |
| >= | Greater Than or Equal To |
| < | Less Than |
| <= | Less Than or Equal To |
| == | Equal To |
| === | Strict Equal To |
| != | Not Equal To |
| !== | Strict Not Equal To |

- letter strings always go after numbers
- a string is not equal to a number
- when comparing strings, the first letter of the first string is compared to the first letter of the second string.
- `( 'lion' > 'zebra' )` --> this is false b/c 'l' comes before 'z' 

## Challenge Task: Conditional Statement

> Add a conditional statement that tests if the value in variable a is greater than the value in variable b. If it is, log the message "a is greater than b" to the console. Then, add an else clause that logs the message "a is not greater than b". 

    const a = 10;
    const b = 20;
    const c = 30;

    if ( a > b ) {
    console.log("a is greater than b");
    } else {
    console.log("a is not greater than b");
    }

# Boolean Values: True and False

A condition in a conditional statement is just a yes/no (true/false), which are booleans.

Only one of two possible options - asking program yes/no questions.

- maintain conditions of a variable for example

> Let b/c we expect the value of `correctGuess` to change. The value returned by a prompt method is a string. Using strict equality operator. Need to return string to number value w/ the + button to compare two number values. This is called the [**unary plus operator**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) which precedes an operand and evalutes to its operand but attempts to convert it into a number.

    let correctGuess = false; 
    const number = 6;
    const guess = prompt('Guess a number between 1 and 10.');
                        
    // Conditional statement
    if ( +guess === number ) {
    correctGuess = true;
    }

    // If statement checks
    if ( correctGuess === true ) {
    console.log('You guessed the number!');
    } else {
    console.log(`Sorry. The number was ${number}.`);
    }


# Program Multiple Outcomes with Else-If
What if you want many different outcomes than just two?

[**else if**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#Using_else_if) statement makes the program more flexible and let's you respond to multiple conditional outcomes.
- Example: In a conditional statement with one if clause, two `else if` clauses and an `else` clause, what is the maximum number of code blocks in that conditional statement that can run? The answer is: `1`

- Part 1: **if** --> tests if true/false
- Part 2: **else if** --> only get here if the first if is false (not true)
- Part 3: **else** --> only runs if the first two are false (not true)
_ Part X: etc. etc. with else if and else

>> Weather Check App
    const weather = '';

    if ( weather === 'sun') {
    console.log("It's sunny, so I'm going swimming.");
    
    } else if ( weather === 'rain' ) {
    console.log("It's raining, so I will read a book");
    
    } else if ( weather === 'snow' ) {
    console.log("It's snowing, so I'm going sledding.");
    
    } else {
    console.log("I don't know what I'm doing today.");
    }

# Multi-part challenge with Booleans and Else-If's
>> Add an `else if` clause that tests if the `isStudent` variable is true. If it's true, set the value of the message variable to "Welcome student".

    const isAdmin = true;
    const isStudent = false;
    let message;

    if ( isAdmin ) {
    message = "Welcome admin";
    console.log( message );
    } else
    console.log("access denied");

>> Add an else if clause that tests if the isStudent variable is true. If it's true, set the value of the message variable to "Welcome student".

    const isAdmin = false;
    const isStudent = true;
    let message;

    if ( isAdmin ) {
    message = 'Welcome admin';
    } else if (isStudent) {
    message = "Welcome student"
    }

>> Add a final else clause to this conditional statement. If both the isAdmin and isStudent variables are false, the value of the message variable should be "Access denied". Important to note that An `else` clause doesn't check for a condition, so no parentheses are necessary. The code inside the else clause runs only if none of the previous conditions are met. 

    const isAdmin = false;
    const isStudent = false;
    let message;

    if ( isAdmin ) {
    message = 'Welcome admin';
    } else if ( isStudent ) {
    message = 'Welcome student';
    } else {
    message = 'Access denied';
    }

# Test Multiple Conditions With the && Operator (And)
Both conditions evaluated separately. Combines tests together.
- Every single test conditions must be true for the larger, overall statement to be true.

Example: does a variable lie within a specific range?

>> True
    let age = 25;
    (20 < age && age < 30 )

>> False
    age = 35;
    ( 20 < age && age < 30 )

# Test Multiple Conditions With the || Operator (Or)
There are times you'll want to perform an action if either of the two possible conditions is true. In this video, you'll use the [logical operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR) OR (|| ) to test multiple conditions.
- just one of the tests needs to pass.
- Resource: [Mozilla Ref on Logical Operators]()
- Resource: 

>> The following statement is TRUE because one or the other is true...so the statement is true

    let agree = 'yes';
    undefined

    ( agree == 'yes' || agree === 'y' )
    true

Example: 
 `( score === 0 && ships <= 0 && time === 0 )`

# Document Your Code with Comments
JavaScript provides ways to leave [messages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Comments) in your code. When you or another developer review your code later, these messages (or comments) can quickly help describe what's going on in the program. You can add comments anywhere in your JavaScript code; they're ignored by a web browser and don't affect how your program works.

- Single Line comment: `//`
- Multi-line: `/* */`

**To comment out something:**
- COMMAND + K + C
- CMD + K + C
- CMD + /

## Quiz Learnings:

>> Complete the code below so that the alert message appears if either one of the conditions is true:

    if ( username === '' || password === '') {
    alert("Password or user name is missing");
    }

>>

    let ships = 10;
    let score = 0;
    if (  ships === 0 || score === 0 ) {
    console.log('Game over.');
    }  else {
    console.log('Your score is 0.');
    }

>> What will appear in the browser's console when the code runs?
>> ANSWER: The condition fails! The AND operator requires that both conditions on either side of the && are true. Because x is not less than 10, the condition fails.

    const x = 10;
    const y = 20;
    if (  x < 10 && y > 10 ) {
    console.log('The condition passes.');
    } else {
    console.log('The condition fails.');
    }


 