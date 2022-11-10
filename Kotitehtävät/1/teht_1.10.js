dice = parseInt(prompt('How many dices to roll?'));
sum_interested = parseInt(prompt('What sum are you interested in?'));

function getOccurrence(array, value) {
  let count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}

function rollTheDice() {
  let array = [];

  for (let x = 0; x < 10000; x++) {
    let sum;
    let values = [];

    for (let i = 0; i < dice; i++) {
      values.push(Math.floor(Math.random() * 6 + 1));
    }
    sum = values.reduce((partial_sum, a) => partial_sum + a, 0);
    console.log(sum);
    array.push(sum);
  }
  return array;
}

array = rollTheDice();

times = getOccurrence(array, sum_interested);

result = times / 100;

document.querySelector('#result').innerHTML = 'Propability to get the sum ' +
    sum_interested + ' with ' + dice +
    ' dice is ' + result + '%';
