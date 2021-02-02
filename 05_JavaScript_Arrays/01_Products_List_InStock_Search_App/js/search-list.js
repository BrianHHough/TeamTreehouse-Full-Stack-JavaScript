const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
// prompt to search
const search = prompt('Search for a product.');
// holds message for user
let message;

// if the inStock array includes item in the search variable
if ( inStock.includes(search) ) {
  message = `Yes, we have <strong>${search}</strong>.`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;