function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for ( let i = 0; i < 100; i++) {
  console.log( `The random number is ${getRandomNumber(10)}` );
}