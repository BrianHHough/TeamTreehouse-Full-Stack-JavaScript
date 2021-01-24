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