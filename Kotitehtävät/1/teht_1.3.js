const nbr1 = parseFloat(prompt('Enter first value'));

const nbr2 = parseFloat(prompt('Enter second value'));

const nbr3 = parseFloat(prompt('Enter third value'));

sum = nbr1 + nbr2 + nbr3;
product = nbr1 * nbr2 * nbr3;
average = (nbr1 + nbr2 + nbr3) / 3;

document.querySelector('#sum').innerHTML = 'Sum: ' + sum;
document.querySelector('#product').innerHTML = 'Product: ' + product;
document.querySelector('#average').innerHTML = 'Average: ' + average;
