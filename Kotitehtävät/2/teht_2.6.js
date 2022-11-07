function rollTheDice() {
  let value;
  value = Math.floor(Math.random() * 6 + 1);
  return value;
}

let nbr_list = [];

while (true) {
  nbr = rollTheDice();
  nbr_list.push(nbr);
  if (nbr === 6) {
    break;
  }
}
