const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
// prompt to search
const search = prompt('Search for a product.');
// holds message for user
let message;

// If you search and return nothing (empty string)...display all of the elements in stock
if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
  // However, if the inStock array includes item in the search variable
  // Convert input text to all lowercase letters
} else if ( inStock.includes(search.toLowerCase()) ) {
  // The # is going to search the array for the inStock product and return it's index starting from 0, so products index return starting with the number 1
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search.toLowerCase()) + 1} on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}

// check for any null or empty values

document.querySelector('main').innerHTML = `<p>${message}</p>`;