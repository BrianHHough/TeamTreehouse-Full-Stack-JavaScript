// Step 1: select the element. Document is a global variable of the window. getElement belows to the document object.
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
// now the constant myTextInput holds a reference to the textInput element...when a user clicks button, whatever value the user clicks is what it pulls
const myTextInput = document.getElementById('myTextInput');

// Step 2: take our selection and call the addEventListener method. Tells DOM to start listening for clicks; 1st param we'll pass in will be click
myButton.addEventListener('click', () => {
     // Step 3: tell the DOM to manipulate the element with the CSS property you type into the text box
     myHeading.style.color = myTextInput.value;    
});