let result;
let symbol;
let operand;
let number_1;
let number_2;

const button = document.getElementById('start');

button.addEventListener('click', function (evt) {
    console.log('button pressed')

    let sentence = document.getElementById('calculation').value;

    let add = '+'
    let sub = '-'
    let multi21 = '*'
    let div = '/'

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].includes(add)) {
            operand = '+'
            console.log(sentence[i])
        } else if (sentence[i].includes(sub)) {
            operand = '-'
            console.log(sentence[i])
        } else if (sentence[i].includes(multi21)) {
            operand = '*'
            console.log(sentence[i])
        } else if (sentence[i].includes(div)) {
            operand = '/'
            console.log(sentence[i])
        } else {
            number_1 = sentence[i]
            console.log(sentence[i])
        }
    }
    /*
    let chars = sentence.split('');
    number_1 = chars[0]
    operand = chars[1]
    number_2 = chars[2]

    if (operand === '+') {
        result = parseFloat(number_1) + parseFloat(number_2)
        symbol = '+'
    } else if (operand === '-') {
        result = parseFloat(number_1) - parseFloat(number_2)
        symbol = '-'
    } else if (operand === '*') {
        result = parseFloat(number_1) * parseFloat(number_2)
        symbol = '*'
    } else if (operand === '/') {
        result = parseFloat(number_1) / parseFloat(number_2)
        symbol = '/'
    } else {
        console.log('Invalid Input!')
    }

    console.log(number_1, symbol, number_2 + ' = ' + result)
    document.querySelector('#result').innerHTML = result;

     */
});
