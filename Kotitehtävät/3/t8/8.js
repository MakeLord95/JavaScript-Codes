let symbol;
let result;

const button = document.getElementById('start');

button.addEventListener('click', function (evt) {
    let number_1 = document.getElementById('num1').value;
    let number_2 = document.getElementById('num2').value;

    let operand = document.getElementById('operation').value;

    if (operand === 'add') {
        result = parseFloat(number_1) + parseFloat(number_2)
        symbol = '+'
    } else if (operand === 'sub') {
        result = parseFloat(number_1) - parseFloat(number_2)
        symbol = '-'
    } else if (operand === 'multi') {
        result = parseFloat(number_1) * parseFloat(number_2)
        symbol = '*'
    } else if (operand === 'div') {
        result = parseFloat(number_1) / parseFloat(number_2)
        symbol = '/'
    } else {
        console.log('Invalid Input!')
    }

    console.log(number_1, symbol, number_2 + ' = ' + result)
    document.querySelector('#result').innerHTML = result;
});
