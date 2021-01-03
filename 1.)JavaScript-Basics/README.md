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

