// multidimensional array
const playlist = [
  ['So What', 'Miles Davis', '9:04'],
  ['Respect', 'Aretha Franklin', '2:45'],
  ['What a Wonderful World', 'Louis Armstrong', '2:21'],
  ['At Last', 'Ella Fitzgerald', '4:18'],
  ['Three Little Birds', 'Bob Marley and the Wailers', '3:01'],
  ['The Way You Look Tonight', 'Frank Sinatra', '3:21']
];

// display artist name in first array and log to console based on index values
const myArtists = `${playlist[0][1]}, ${playlist[1][1]}, ${playlist[5][1]}`;
console.log(myArtists);

// display whole playlist: arr = parameter of the data being passed in; want to identify the value of each item in the array
function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    // arr[i][0] = the song name; arr[i][1] = artist na;me
    items += `<li>${ arr[i][0] }, by ${ arr[i][1] } - ${ arr[i][2] }</li>`;
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;