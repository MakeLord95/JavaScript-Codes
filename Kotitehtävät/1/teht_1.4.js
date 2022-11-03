const name = prompt("Please enter your name: ")
result = Math.floor(Math.random() * 4) + 1;

if (result === 1) {
  house = 'Gryffindor';
} else if (result === 2) {
  house = 'Slytherin';
} else if (result === 3) {
  house = 'Hufflepuff';
} else if (result === 4) {
  house = 'Ravenclaw';
} else {
  house = 'JavaScript Error!'
}
