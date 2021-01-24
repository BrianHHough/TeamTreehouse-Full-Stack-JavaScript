/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
   - declare a variable to hold number of correct answers
   - set the initial score to 0 b/c at the beginning, no questions have been answered
   - as the questions advance, we'll add +1 to the let variable (why it's let is because it can change)
*/

let correct = 0;

/*
    2. Store the rank of a player
    - also could do let rank = '';
*/
let rank;

/*
    3. Select the <main> HTML element
    - use document.querySelector method to display the final message and player ranking inside main element.
    - allows us to access the main element and we store that in 'main' with const

*/
const main = document.querySelector('main');


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const answer1 = prompt("Name a programming language that's also a gem.");
if ( answer1.toUpperCase() === 'RUBY' ) {
  correct += 1;
}

const answer2 = prompt("Name a programming language that's also a snake."); 
if ( answer2.toUpperCase() === 'PYTHON' ) {
  correct += 1;
}

const answer3 = prompt("What langauge do you use to style web pages and apps?");
if ( answer3.toUpperCase() === 'CSS' ) {
  correct += 1;
}

const answer4 = prompt("What language do you use to build the structure of web pages?");
if ( answer4.toUpperCase() === 'HTML' ) {
  correct += 1;
}

const answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
  correct += 1;
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
   
   - write a conditional statement and comparison operator based on ansewrs correct.
   - 1st test statement for assessing whether the correct score strictly equals 5 --> gold
   - else if...for the specific ones
*/

if ( correct === 5 ) {
  rank = "Gold";
} else if ( correct >= 3 ) {
  rank = "Silver";
} else if ( correct >= 1 ) {
  rank = "Bronze";
} else {
  rank = "None :(";
}


/* 6. Output results to the <main> element
  - results should display inside the main element - the variable main stores a reference to the element.
  - innerHTML prop to set HTML markup inside
  - template literal to display the strings + variables
  - string interpolation ($ + {}s) for the final values of the variables to be shown here.
*/

main.innerHTML = `
  <h2>You got ${correct} out of 5 questions correct.</h2>
<p>Crown earned: <strong>${rank}</strong></p>
`;



