dice = parseInt(prompt("How many dices to roll?"))

const rollTheDice = (dice) => {
    let values = []

    for (let i = 0; i < dice; i++) {
        values.push(Math.floor(Math.random() * 5 + 1))
    }
    return values
}

result = rollTheDice(dice)
console.log("Dice numbers: " + result)

sum = result.reduce((partial_sum, a) => partial_sum + a, 0)
