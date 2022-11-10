dice = parseInt(prompt('How many dices to roll?'));

const rollTheDice = (dice) => {
  let values = [];
  let value;

  for (let i = 0; i < dice; i++) {
    value = Math.floor(Math.random() * 6 + 1);
    console.log('Dice rolled ' + value);
    values.push(value);
  }
  return values;
};

result = rollTheDice(dice);

sum = result.reduce((partial_sum, a) => partial_sum + a, 0);

document.querySelector('#result').innerHTML = 'The sum of the dices: ' + sum;
