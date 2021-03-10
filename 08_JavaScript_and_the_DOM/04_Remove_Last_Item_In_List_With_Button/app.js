const toggleList = document.getElementById('toggleList');
// query list
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
// to specify the part of p we want in the class we defined "description" in index.html
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');





toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});
// event listener for when the button is clicked. When clicked, set content 
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
 // clears description input
 descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  // clears empty input 
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  // select last item in the list
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
  
  
  
  
  
  
  
  