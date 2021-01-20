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
