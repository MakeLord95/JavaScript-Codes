num = parseInt(prompt('Please enter a value'));

let notPrime = false;

if (num > 1) {
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
      notPrime = true;
      break;
    }
  }
  if (notPrime) {
    result = 'The number ' + num + ' is not a prime number!';
  } else {
    result = 'The number ' + num + ' is a prime number!';
  }
} else {
  result = 'The number ' + num + ' is not a prime number!';
}

document.querySelector('#result').innerHTML = result;
