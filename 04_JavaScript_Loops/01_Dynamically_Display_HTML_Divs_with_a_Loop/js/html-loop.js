const main = document.querySelector('main');

// string that holds html
let html = '';

// variable declaration/condition tested once before loop begins
for ( let i = 5; i <= 100; i+=5) {
  html += `<div>${i}</div>`;
}

main.innerHTML = html;