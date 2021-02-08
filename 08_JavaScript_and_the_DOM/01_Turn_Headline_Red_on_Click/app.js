// Step 1: select the element
const myHeading = document.getElementById('myHeading');

// Step 2: take our selection and call the addEventListener method. Tells DOM to start listening for clicks; 1st param we'll pass in will be click
myHeading.addEventListener('click', () => {
     // Step 3: tell the DOM to manipulate the element
     myHeading.style.color = 'red';    
});