let nbr = 1;
let value;
let suffix;
let numbers = [];

function reverseArray(numbers) {
  let reversedArray = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedArray.push(numbers[i]);
  }
  return reversedArray;
}

while (nbr <= 5) {
  if (nbr === 1) {
    suffix = 'st';
  } else if (nbr === 2) {
    suffix = 'nd';
  } else if (nbr === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  value = parseInt(prompt('Enter the ' + nbr + suffix + ' value'));
  numbers.push(value);
  nbr++;
}

reversed_array = reverseArray(numbers)

for (let i = 0; i < reversed_array.length; i++) {
  console.log(reversed_array[i])
}
