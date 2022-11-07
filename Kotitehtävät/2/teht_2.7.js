function rollTheDice(faces) {
  let value;
  value = Math.floor(Math.random() * faces + 1);
  return value;
}

let nbr_list = [];
dice_faces = parseInt(prompt('How many faces does the dice have?'));

while (true) {
  nbr = rollTheDice(dice_faces);
  nbr_list.push(nbr);
  if (nbr === dice_faces) {
    break;
  }
}
