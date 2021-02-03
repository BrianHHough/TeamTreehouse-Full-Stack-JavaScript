// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [ 
  ['How many planets are in the Solar System?', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have?', '6'],
  ['What year was JavaScript created?', '1995']  
];
// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;



/* 
  3. Use a (for) loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
// this is a loop that runs as many times as there are elements in the questions array
for ( let i = 0; i < questions.length; i++ ) {
  // access the question part...whatever index and it's position 0 (first element)
  let question = questions[i][0];
  // access the answer part
  let answer = questions[i][1];
  let response = prompt(question);
  
  // tests if response matches the correct answer
  if ( response === answer ) {
    // if correct, increment by +1
    correctAnswers++; // this is the same as: correctAnswers += 1
    // add correct answer to the array with the push method
    correct.push(question);
  } else {
    // push incorrect answers to incorrect array
    incorrect.push(question);
  }
}

// accepts array as an argument and loops through array and builds/returns the list items
function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
  <h1>You got ${correctAnswers} question(s) correct</h1>
  <h2>You got these questions right: </h2>
  <ol>${ createListItems(correct) }</ol>

  <h2>You got these questions wrong: </h2>
  <ol>${ createListItems(incorrect) }</ol>
`;

document.querySelector('main').innerHTML = html;