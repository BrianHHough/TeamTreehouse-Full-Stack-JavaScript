const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;

//console.log(`There are ${secondsPerDay} seconds in a day.`);

const yearsAlive = 25;

const secsAlive = secondsPerDay * 365 * yearsAlive;

console.log(`I've been alive for more than ${secsAlive} seconds!`);