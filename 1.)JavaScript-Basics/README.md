# JavaScript Basics

## Display Messages w/ JS

COMMAND + OPTION + J
or
COMMAND + ALT + J = browser code inspector

*JS Statement* = sentence that ends in ;
- you write programs by writing multiple statements

`alert("Hello, world!");` --> alert popup

`console.log("Hello, world");` --> write words

`document.write("Welcome to my web page")` --> writes a message to current web page;


## Your First JS Program

SHIFT + ENTER = go to next line without returning

>> Statement needs to run before the next one runs

    alert("Hello. Thanks for visiting!");
    console.log("Hello from the console.");
    document.write("<h1>Welcome to my web page.</h1>");

## Add JS to HTML

To link a .js file to an HTML file, use HTML script tag. Source attribute instructs browser where to source the file f˜rom

    <script src="js/script.js"></script>

*Pro tip:* you can't source the JS file and run a script at the same time!
- only one set of scripts tags for linked files

*Pro tip:* put scripts below the bottom of the page before the closing body tag
- lets the files load but you show the message before anything is shown

What is one benefit of putting your JavaScript code just before the closing </body> tag on a web page?
- users can view the contents of the web page before teh JS program runs

## Debug JavaScript in the Console5:52

Chrome Console Keyboard Shortcuts
- Windows: Ctrl + Shift + J
- Mac: Cmd + Option + J

*for me with keyboard it's: COMMAND + ALT + J*

Firefox Console Keyboard Shortcuts
- Windows: Ctrl + Shift + K
- Mac: Cmd + Option + K

Internet Explorer Console Keyboard Shortcuts
- F12 key

Safari Console Keyboard Shortcuts
- Cmd + Option + C

## Practice Challenge Notes

This statement selects the <h1> element and replaces its text with "BOOM!".

    document.querySelector("h1").textContent = "🔥BOOM!🔥";


## Variables

Variables = boxes with unique lables that have value inside

`var` = JS keyword to create the labeled box

*Declare a variable* with var score; the = is the assignment operator to assign a value to the variable; string is on the right of the equals sign;
var score = 0;

Once you store data in a variable, you can use and access it whenever you need it by calling it.


<!-- OUTPUT = message (b/c logging the word message, not the variable) -->
    var message = "Hello!"
    console.log("message");

<!-- OUTPUT = Hello! (b/c logging the variable of message which has the text input value of "Hello!") -->
    var message = "Hello!"
    console.log(message);

>> this is creating a variable reference so the variable "message" is stored with some value and then we are printing the variable that's packed w/ some value.


*Rules for Naming Variables*
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

*What makes a good variable name?*
You learned what you can and can't put into a variable name, but what should you put into a variable name? While writing a computer program can be a lot of fun, looking over a program you wrote nine months ago, or a program someone else wrote can often be confusing. Writing clear and understandable code helps make your life easier as a programmer.

*Provide clear and descriptive names for your variables*
Names like t, n1 or p are short and require less typing, but they don't communicate the purpose of the variables. Even if it requires more typing, use descriptive names like score, playerName, or pricePerPound. Your programs will be a lot easier to understand if you do, and as a programmer, you should always strive to write understandable, readable code.

*Variable Reassignment*

<!-- OUTPUT: 10 and not 0 b/c score was updated -->
    var score = 0;
    score = 10;
    console.log(score);

