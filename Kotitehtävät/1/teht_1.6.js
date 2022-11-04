const answer = confirm('Should I calculate the square root?');

if (answer === true) {
  nbr = parseFloat(prompt('Please enter a number to square'));

  if (nbr > 0) {
    result = Math.sqrt(nbr);
  } else {
    result = 'The square root of a negative number is not defined';
  }
} else if (answer === false) {
  result = 'The square root is not calculated.';
}
