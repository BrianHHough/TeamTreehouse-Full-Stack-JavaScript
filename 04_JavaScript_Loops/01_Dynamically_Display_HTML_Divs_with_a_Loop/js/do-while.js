function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0; // to track # of times code runs
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter += 1; 
} while ( counter < 10 );