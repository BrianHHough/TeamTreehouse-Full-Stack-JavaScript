/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

function getRandoNum(lower, upper = 100) {
  // if either lower or upper num is a string...display an error
  if ( isNaN(lower) || isNaN(upper) ) {
    throw Error('Both arguments must be numbers.');
    
  }
  return randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// Call the function and pass it different values
console.log( getRandoNum(1, 6) );
console.log( `${getRandoNum(10)} is a random number between 10 and 100.` );
console.log( getRandoNum(200, 'three hundred') );