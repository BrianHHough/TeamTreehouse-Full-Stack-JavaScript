function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0; // lap counter. at start of the race, you've run 0 times. each time you run, you update counter value by +1.
while ( counter < 100 ) {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter += 1;
}