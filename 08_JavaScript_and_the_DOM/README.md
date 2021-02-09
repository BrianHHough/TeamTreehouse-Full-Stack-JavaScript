# JavaScript and the DOM

DOM = Document Object Model
According to [W3.org](https://www.w3.org/TR/DOM-Level-2-Core/introduction.html#:~:text=The%20Document%20Object%20Model%20(DOM,document%20is%20accessed%20and%20manipulated.) 

The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.


### Welcome and Overview
Interactivity happens by the JS DOM listening for clicks/actions and changing what we see based on those actions.

Making static pages interactive with JavaScript with three basic actions:
- **Selection:** selecting elements on the page (i.e. keys on a digital calculator)
- **Manipulating:** changing elements on the page (i.e. a popup that leads to a color change)
- **Listening:** listening for user actions (i.e. a spreadsheet, once a user clicks on an Excel cell is selected, we want to know what user types so we can put that in the cell)

^ the DOM is where these actions take place

### Website examples:
- [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
- [JavaScript Calculator](http://codepen.io/giana/full/GJMBEv/)
- [St. Louis Browns Historical Society](http://thestlbrowns.com/)
- [Google Sheets](https://www.google.com/sheets/about/)

### Related Treehouse courses and workshops
- [Introducing ES2015 – course](https://teamtreehouse.com/library/introducing-es2015)
- [Exploring JavaScript Conditionals – workshop](https://teamtreehouse.com/library/exploring-javascript-conditionals)
- [Introducing Arrow Function Syntax – workshop](https://teamtreehouse.com/library/introducing-arrow-function-syntax)



# Thinking Globally
JavaScript's global environment is full of controls your code can use to make things happen. These controls come in the form of JavaScript objects and functions. Inside a browser, they allow your code to see and manipulate web pages.

JavaScript's global environment is like a plane's cockpit -- the controls come by way of functions and objects which let you see and manipulate in the browser.

- [MDN page for the window object](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [MDN page for the document object](https://developer.mozilla.org/en-US/docs/Web/API/Document)

For example, `alert('I made the browser message me!')` and `location.href` when they are run in the terminal are able to manipulate the web page even though they don't exist in the website files b/c they are variables of JavaScript's global environment.

If you type `window` in the console, you'll see all the properties on the windows object. `window.alert('This is the same alert function')` gives an error in the same way.

### The getElementByID Method
When you run this in the browser based on the following code below, this **getElementByID** method turns the title purple: `document.getElementById('myHeading').style.color = 'purple'`
- we selected the element
- manipulated it


```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
  </body>
</html>
```

To change the the background color of the title to yellow, you'll access the style `backgroundColor` property with this: `document.getElementById('myHeading').style.backgroundColor = 'yellow'`
- you can use the **`document`** object to select and control elements of the currently loaded webpage. This Document object is a global object representing the HTML and content of a web page.
- the `document` object, like all other global variables, is a property of the `window` object.

# What is the DOM?
**DOM:** Document Object Model - a representation of the document that JavaScript uses to navigate and make changes to a webpage.
- a map of a webpage that JS will use (i.e. a city map). Changes that JavaScript makes to the DOM alter the web page.
- [MDN page for the Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

Represents the website as a tree-like structure that creates an upside down tree:
- Document: root node of the tree
    - PARENT: Head/body: branches sprout to other branches
        - CHILD/SIBLINGS: H1/ul/li: tiny nodes/leaves (deeply nested tabs)

index.html
```html
<html>
    <head>
        <title> JavaScript and the DOM </title>
    </head>
    <body>
        <h1> JavaScript and the DOM </h1>
        <p> Take control of the web page <a href="#"> link to a place </a>
        </p>
        <ul>
            <li> First </li>
            <li> Second </li>
            <li> Third </li>
        </ul>
    </body>
</html>
```

# A Simple Example
We'll select an element with JavaScript and start with one of the most common user interactions: clicking. Tell the headline to listen to events.

index.html
```html
!DOCTYPE html>
<html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <script src="app.js"></script> 
  </body>
</html>
```

app.js
```js
// Step 1: select the element
const myHeading = document.getElementById('myHeading');

// Step 2: take our selection and call the addEventListener method. Tells DOM to start listening for clicks; 1st param we'll pass in will be click
myHeading.addEventListener('click', () => {
     // Step 3: tell the DOM to manipulate the element
     myHeading.style.color = 'red';    
});
```

### Declaring variables
This course uses let and const to declare variables and constants instead of the var keyword. If these are new to you, check out the [Defining Variables with let and const](https://teamtreehouse.com/library/defining-variables-with-let-and-const) workshop.

### Arrow Functions
If you're new to ES2015's arrow functions, they provide a more concise syntax for writing functions. [Introducing Arrow Function Syntax](https://teamtreehouse.com/library/introducing-arrow-function-syntax) is a short workshop (8 min) that will show you everything you'll need for this course.

For more advanced use cases, take a look at [Arrow Functions – Introducing ES2015](https://teamtreehouse.com/library/arrow-functions).



# Select a Page Element By Its ID
- [MDN page for getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- **Common Errors:**
    - Mismatching Values
        - Spelling - If you get an undefined error when trying to grab an element you may have incorrectly spelled the argument being passed.
        - Case Sensitivity - Make sure your capitalizations are proper camelCase and the correct letters are capitalized.
- **Accessing the value of an input element**
    - Use the value property to get the text that has been entered into an input element. For example, if you have a text input stored in a variable myInput, you can retrieve any text the user has typed into that input like this: `myInput.value`
- **Experiment with the app**
    - Add a button that always resets the title to black
    - Create another field that sets a different style attribute of the headline

### Updated previous code with a changing headline based on a text input and pressing a button

index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <input type="text" id="myTextInput">
    <button id="myButton">Change headline color</button>
    <script src="app.js"></script> 
  </body>
</html>
```
app.js
```js
// Step 1: select the element. Document is a global variable of the window. getElement belows to the document object.
const myHeading = document.getElementById('myHeading');
    // Alternative way of doing the above...we target the h1 tag on the page with index 1, meaning the first thing on the page that can change.
    // const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
// now the constant myTextInput holds a reference to the textInput element...when a user clicks button, whatever value the user clicks is what it pulls
const myTextInput = document.getElementById('myTextInput');
// Step 2: take our selection and call the addEventListener method. Tells DOM to start listening for clicks; 1st param we'll pass in will be click
myButton.addEventListener('click', () => {
     // Step 3: tell the DOM to manipulate the element with the CSS property you type into the text box
     myHeading.style.color = myTextInput.value;    
});
```

# Select the button with the ID sayPhrase and assign it to the button variable.
We need to make sure the result of `document.getElementByID()` is assigned back into the button variable, as that's the one referred to in the function that appears later on. Next, select the input element with the ID `phraseText` and assign it to the input variable.

JavaScript:
```js
var button = document.getElementById('sayPhrase');
var input = document.getElementById('phraseText');

button.addEventListener('click', () => {
  alert(input.value);
});
```

HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Phrase Sayer</title>
  </head>
  <body>
    <p><input type="text" id="phraseText"></p>
    <p><button id="sayPhrase">Say Phrase</button></p>
    <script src="js/app.js"></script>
  </body>
</html>
```



# Select All Elements of a Particular Type
Learn to select an element that doesn't have an ID, or select multiple elements on a page, using getElementsByTagName.

### Each method returns a different data type:
- **Get Element By Id** - returns single HTML element that can be accessed directly
    - // => <ul id="a">
    - `const el = document.getElementById('a');`
- **Get Elements By Id** - returns an HTML collection (an array) of elements with [getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName). Read more about [HTML collections](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) (similar to arrays)
    - // => [<p>,<p>,<p>]\
    - `const els = document.getElementsByTagName('p');`
    - You can return these by:
        - Accessing its index, like the first pe element on the page: `let el = els[0];`
        - Loop over the whole collection:
            ```js 
            cons els = document.getElementsBYTagName('p');

            for (let i = 0; i < els.length; i += 1) {
                else[i] // do something with each element
            }
            ```

### Access Elements in a List

Test HTML Code: 
```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <p>Things that are purple:</p>
    <ul>
      <li>grapes</li>
      <li>amethyst</li>
      <li>lavender</li>
      <li>plums</li>
    </ul>
    <script src="app.js"></script> 
  </body>
</html>
```

1. In the console, we declare a `myList` variable: `const myList = document.getElementsByTagName('li')`
2. We want to change the third item in the list (lavender) to purple: `myList[2].style.color = 'purple'`
3. To change the whole list to purple text -- we'll add JavaSCript to the app.js file:
```js
const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}
```


# Selecting Elements with the Same Class Name
When working with HTML, you'll use classes to give elements a particular style with CSS. In this video, you'll learn to select elements with the same class, using [`document.getElementsByClassName`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName).
- Unlike `getElementById` which returns a single element, `getElementsByClassName` returns an [html collection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) of elements.
    - You apply changes to elements in an HTML collection by iterating over them with a for loop.

The list items are made purple...but then a specific subset (defined by a class) are made red:

HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <p>Things that are purple:</p>
    <ul>
      <li>grapes</li>
      <li class="error-not-purple">oranges</li>
      <li>amethyst</li>
      <li>lavender</li>
      <li class="error-not-purple">fire trucks</li>
      <li class="error-not-purple">snow</li>
      <li>plums</li>
    </ul>
    <script src="app.js"></script> 
  </body>
</html>
```
JS:
```js
// Entire list is made purple
const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

// Then just the list items with this error-not-purple class are turned red
const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}
```

# Quiz Insights:

How would you select the `body` element using document.getElementsByTagName, and store it in the variable body? (Hint: Don't forget that this method returns a zero-based collection, not a single element.)

**Answer:** The getElementsByTagName returns a collection of HTML elements. Note that elements is plural. You're only interested in the first body element so you'd select it with an index of 0.

```js
const body = document.getElementsByTagName("body")[0];
```


# Using CSS Queries to Select Page Elements
The last selectors we'll look at are querySelector and querySelectorAll. These are the most flexible of the selectors we've looked at, as they will accept ID's, classes, tag names and more.
- CSS Selectors
    - CSS selectors are a powerful way to select DOM elements. If you'd like to learn more about CSS selectors, including pseudo-class selectors, check out [CSS Selectors](https://teamtreehouse.com/library/css-selectors) on Treehouse.
    - In addition, [here's what MDN has to say](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors) about CSS selectors.

[`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) - only returns the first matching element 

[`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) - returns all elements that match the selector

Examples:
- `document.querySelector('[title=label]')` - return a title
- `document.querySelector('li')` - return an item in a list
- `document.querySelectorAll('li')` - return all items in a list
- `document.querySelectorAll('.error-not-purple')` - return a css prop elements
- `document.querySelector('#myHeading')` - return the HTML anchor ID of the header

CSS pseudo-class selector: every other item in list has a light gray background

HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <p title="label">Things that are purple:</p>
    <ul>
      <li>grapes</li>
      <li class="error-not-purple">oranges</li>
      <li>amethyst</li>
      <li>lavender</li>
      <li class="error-not-purple">fire trucks</li>
      <li class="error-not-purple">snow</li>
      <li>plums</li>
    </ul>
    <script src="app.js"></script> 
  </body>
</html>
```

JS:
```js
// Entire list is made purple
const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

// Then just the list items with this error-not-purple class are turned red
const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}

// CSS pseudo-class selector
const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i += 1) {
  evens[i].style.backgroundColor = 'lightgray';
}
```


# Challenge Task
The for loop cycles over list items and applies a color to each item using the values stored in the colors array. For example, the first color in the array ( #C2272D) is applied to the first list item, the second color (#F8931F) to the second list item, and so on. Complete the code by setting the variable listItems to refer to a [collection](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children#Syntax). The collection should contain all list items in the <ul> element with the ID of rainbow.

**Answer:** The challenge is specifically testing the ability to work with a collection using the concept of children. As such, to pass the challenge you need to explicitly select the li elements that are children of the ul with the id "rainbow". Here is the clue text from the challenge: The collection should contain all list items in the <ul> element with the ID of rainbow. We can do this by selecting the element with the specified id, and then modifying that selection to refer to its children.

JS:
```js
var listItems = document.getElementById('rainbow').children;
var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < listItems.length; i ++) {
  listItems[i].style.color = colors[i];    
}
```

HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Rainbow!</title>
  </head>
  <body>
    <ul id="rainbow">
      <li>This should be red</li>
      <li>This should be orange</li>
      <li>This should be yellow</li>
      <li>This should be green</li>
      <li>This should be blue</li>
      <li>This should be indigo</li>
      <li>This should be violet</li>
    </ul>
    <script src="js/app.js"></script>
  </body>
</html>
```

# Learning More
You've seen a number of ways to select elements, and in some cases, a number of different ways to make the same selections. But how do you know the right one to use? This video covers great resources to help you evaluate the tools you use for your projects.

Babel
Many JavaScript developers turn to tools like [Babel](https://babeljs.io/) to manage the varying stages of browser support for new JS features. Babel can be used for other environments besides browsers too.

Mozilla Developer Network
Here is the [Mozilla Developer Network](https://developer.mozilla.org/en-US/), or MDN's main page. This is a great reference site for JavaScript, as well as the browser environment.

[MDN's page](https://developer.mozilla.org/en-US/docs/Web/API/Document) on the Document object


Can I Use?
[caniuse.com](http://caniuse.com/#) is also a good reference to check cross-browser support for features you want to use.

Practice Selecting DOM Elements with JavaScript
To help make what you learned stick, [try these challenges](https://teamtreehouse.com/library/practice-selecting-dom-elements)!


# Quiz Insights

How would you use querySelectorAll to obtain a reference to all elements in a document with the class student-info and assign it to the constant studentInfo?

**Answer:** `const studentInfo = document.querySelectorAll('.student-info');`


Are the following lines of code functionally identical?
1. `const myElement = document.getElementById('myId');`
2. `const myElement = document.querySelector('#myId');`

**Answer:** YES!


How would you select the first element in the DOM with its HTML title attribute set to "MyTitle"?

**Answer:** `document.querySelector('[title=MyTitle]');`


# Challenge Task
In this challenge, you're going to select various elements from index.html. First, select all links inside the <nav> element and assign them to the variable navigationLinks. (HINT: Use a [descendant selector](https://teamtreehouse.com/library/descendant-selectors) to match elements that are [descendants of an element](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll#JavaScript).)

Next, select all links inside the unordered list with the ID gallery and assign them to the variable galleryLinks.

Finally, select all images inside the footer element and assign them to the variable footerImages.

**Answer:**

```js
let navigationLinks = document.querySelectorAll("nav li a");
let galleryLinks = document.querySelectorAll('#gallery a');
let footerImages = document.querySelectorAll("footer a img"); 
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Nick Pettit | Designer</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link href='http://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400italic,700italic,400,700,800' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <header>
      <a href="index.html" id="logo">
        <h1>Nick Pettit</h1>
        <h2>Designer</h2>
      </a>
      <nav>
        <ul>
          <li><a href="index.html" class="selected">Portfolio</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
    <div id="wrapper">
      <section>
        <ul id="gallery">
          <li>
            <a href="img/numbers-01.jpg">
              <img src="img/numbers-01.jpg" alt="">
              <p>Experimentation with color and texture.</p>
            </a>
          </li>
          <li>
            <a href="img/numbers-02.jpg">
              <img src="img/numbers-02.jpg" alt="">
              <p>Playing with blending modes in Photoshop.</p>
            </a>
          </li>
        </ul>
      </section>
      <footer>
        <a href="http://twitter.com/nickrp"><img src="img/twitter-wrap.png" alt="Twitter Logo" class="social-icon"></a>
        <a href="http://facebook.com/nickpettit"><img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon"></a>
        <p>&copy; 2016 Nick Pettit.</p>
      </footer>
    </div>
  <script src="js/app.js"></script>
  </body>
</html>

```


# Getting and Setting Text with textContent and innerHTML
In this video, you'll learn to read and change text using the DOM element properties textContent and innerHTML. You'll learn how each property has its own approach to the DOM.

How to return the text content of a node:

1. In console, we'll define a varialbe `myHeading` with: `let myHeading = document.querySelector('h1')`
2. In console, we'll return the value that we called with: `myHeading.textContent` which returns "JavaSCript asnd the DOM" which is the h1 text.
3. Assign a string to change the heading text

