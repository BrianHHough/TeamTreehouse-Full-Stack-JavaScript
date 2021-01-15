// 1. Declare variables and capture input.
const adjective = prompt('Please type an adjective.');
const verb = prompt('Please type a verb.');
const noun = prompt('Please type a noun.');
  // console.log(adjective);

// 2. Combine the input with other words to create a story.

"<p>There once was a [adjective] programmer who wanted to use JavaScript to [verb] the [noun].</p>"

// to hold the entire sentence = template literal + string interpolation w/ curly braces
const sentence = `<p>There once was a ${adjective} programmer who wanted to use JavaScript to ${verb} the ${noun}.</p>`;
console.log(sentence);

// 3. Display the story as a <p> inside the <main> element.
// query selector property and inner HTML method
document.querySelector('main').innerHTML = sentence;