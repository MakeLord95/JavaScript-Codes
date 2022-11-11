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

list = document.getElementById('UlList');
for (let i = 0; i < nbr_list.length; ++i) {
  let li = document.createElement('li');
  li.innerText = nbr_list[i];
  list.appendChild(li);
}
