let chars;
let result;
let operand;
let number_1;
let number_2;

const button = document.getElementById('start');

button.addEventListener('click', function(evt) {
  console.log('button pressed');

  let sentence = document.getElementById('calculation').value;

  let add = '+';
  let sub = '-';
  let multi21 = '*';
  let div = '/';

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].includes(add)) {
      chars = sentence.split('+');
      operand = '+';
      console.log(sentence[i]);
    } else if (sentence[i].includes(sub)) {
      chars = sentence.split('-');
      operand = '-';
      console.log(sentence[i]);
    } else if (sentence[i].includes(multi21)) {
      chars = sentence.split('*');
      operand = '*';
      console.log('multi21 Seb, multi21');
    } else if (sentence[i].includes(div)) {
      chars = sentence.split('/');
      operand = '/';
      console.log(sentence[i]);
    }
  }

  number_1 = chars[0];
  number_2 = chars[1];
  console.log(number_1);
  console.log(number_2);

  if (operand === '+') {
    result = parseFloat(number_1) + parseFloat(number_2);
    symbol = '+';
  } else if (operand === '-') {
    result = parseFloat(number_1) - parseFloat(number_2);
    symbol = '-';
  } else if (operand === '*') {
    result = parseFloat(number_1) * parseFloat(number_2);
    symbol = '*';
  } else if (operand === '/') {
    result = parseFloat(number_1) / parseFloat(number_2);
    symbol = '/';
  } else {
    console.log('Invalid Input!');
  }

  console.log(number_1, symbol, number_2 + ' = ' + result);
  document.querySelector('#result').innerHTML = result;

});
