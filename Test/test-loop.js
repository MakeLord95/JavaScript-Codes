const max = parseInt(prompt("What is the max value?"))
let i = 1

while (max) {
  let value = 0;

  value = Math.floor(Math.random() * max) + 1
  console.log(value)
  i++

  if (value === max) {
    console.log(`It took ${i} iterations to reach ${max}`)
    break
  }
}
