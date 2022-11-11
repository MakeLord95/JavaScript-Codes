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

list = document.getElementById('UlList');
for (let i = 0; i < nbr_list.length; ++i) {
  let li = document.createElement('li');
  li.innerText = nbr_list[i];
  list.appendChild(li);
}
