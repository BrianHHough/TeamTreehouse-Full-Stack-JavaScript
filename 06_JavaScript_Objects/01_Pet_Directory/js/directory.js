const main = document.querySelector('main');
let html = '';

for ( let i = 0; i < pets.length; i++ ) {
  let pet = pets[i];
  html += `
    <h2>${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.breed}">
  `;
}

// once you have a reference to that element aka a node, you can call the .insertAdjacentHTML method. takes 2 arguments: a string indicating where inside main insert html and the actual html string you want to insert. We'll pass string: `beforeend` - inserts content inside element after any other element. You insert in main the final html snippet
// like innerHTML but this is faster:
main.insertAdjacentHTML('beforeend', html);