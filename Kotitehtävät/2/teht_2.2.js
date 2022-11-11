let nbr = 1;
let participant;
let participants = [];

nbr_or_participants = parseInt(prompt('How many participants are there?'));

while (nbr <= nbr_or_participants) {
  if (nbr % 10 === 1 && nbr !== 11) {
    suffix = 'st';
  } else if (nbr % 10 === 2 && nbr !== 12) {
    suffix = 'nd';
  } else if (nbr % 10 === 3 && nbr !== 13) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  participant = prompt('Enter the ' + nbr + suffix + ' participant');
  participants.push(participant);
  nbr++;
}

for (let i = 0; i < participants.length; i++) {
  console.log(participants[i]);
}

list = document.getElementById('OlList');
for (let i = 0; i < participants.length; ++i) {
  let li = document.createElement('li');
  li.innerText = participants[i];
  list.appendChild(li);
}
