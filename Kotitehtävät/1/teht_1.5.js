function testLeap() {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
      return 'is';
    }
    return 'is';
  } else if (year % 4 === 0 && year && 100 !== 0) {
    return 'is';
  } else {
    return 'is not';
  }
}

year = parseFloat(prompt('Please enter a year'));

document.querySelector('#result').innerHTML = 'The year ' + year + ' ' +
    testLeap() + ' a leap year';
