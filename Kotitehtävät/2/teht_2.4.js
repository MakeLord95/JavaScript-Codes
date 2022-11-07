let nbr = 1;
let nbrs = [];
let user_nbr;

while (true) {

  if (nbr % 10 === 1 && nbr !== 11) {
    suffix = 'st';
  } else if (nbr % 10 === 2 && nbr !== 12) {
    suffix = 'nd';
  } else if (nbr % 10 === 3 && nbr !== 13) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  user_nbr = parseInt(prompt('Enter the ' + nbr + suffix + ' number:'));
  nbrs.push(user_nbr);

  if (user_nbr === 0) {
    break;
  }
  nbr++;
}

nbrs.sort((a, b) => a - b);
nbrs.reverse();

for (let i = 0; i < nbrs.length; i++) {
  console.log(nbrs[i]);
}
