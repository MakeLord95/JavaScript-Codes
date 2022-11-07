let nbr = 1;
let dog = '';
let dogs = [];

while (nbr <= 6) {
  if (nbr === 1) {
    suffix = 'st';
  } else if (nbr === 2) {
    suffix = 'nd';
  } else if (nbr === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  dog = prompt('Enter the ' + nbr + suffix + ' dog\'s name');
  dogs.push(dog);
  nbr++;
}

dogs.sort();
dogs.reverse();

for (let i = 0; i < dogs.length; i++) {
  if (i + 1 === 1) {
    suffix = 'st';
  } else if (i + 1 === 2) {
    suffix = 'nd';
  } else if (i + 1 === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  console.log((i + 1) + suffix + ' dog: ' + dogs[i]);
}
