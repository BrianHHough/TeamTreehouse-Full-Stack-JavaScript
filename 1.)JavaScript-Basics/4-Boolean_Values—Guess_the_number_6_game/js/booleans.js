// The code above performs three tests:

// Does the player's guess match the random number?
// Is the player's guess less than the random number?
// Is the player's guess greater than the random number?

// ** else if Conditions ** 
// The two else if clauses test two conditions:

// First, is the guess lower than the random number?
// Next, is the guess higher?
// If the guess is lower, the program lets the player know and asks them to guess again via a second prompt() dialog. The program then checks the second guess and tests if it's correct. This is done by nesting an if conditional statement inside the code block.

// The nested if conditional only runs if the first else if condition is true -- if the player's second guess is less than the random number. If that guess is correct, the correctGuess variable changes to true.

// The second else if clause also has a nested if statement. If the player's second guess is greater than the random number, correctGuess changes to true.

// The rest of the code should remain the same. Now the user has a second chance to guess if their first guess is wrong!


let correctGuess = false;
const number = 6; 
const guess = prompt('Guess a number between 1 and 10.');

if ( +guess === number ) {
  correctGuess = true;
} else if ( +guess < number ) {
  const guessMore = prompt(`Try again. The number is higher than ${guess}`);
  if ( +guessMore === number ) {
    correctGuess = true;
  }
} else if ( +guess > number ) {
  const guessLess = prompt(`Try again. The number is lower than ${guess}`);
  if ( +guessLess === number ) {
    correctGuess = true;
  }
}

if ( correctGuess ) {
  console.log("You guessed the number!");    
} else {
  console.log(`Sorry. The number was ${number}.`);  
}