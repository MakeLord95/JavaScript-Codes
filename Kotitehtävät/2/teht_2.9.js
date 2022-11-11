function remove_uneven(arr_nbrs) {
  let nbrs_even = [];

  for (let i = 0; i < arr_nbrs.length; i++) {
    if (arr_nbrs[i] % 2 === 0) {
      nbrs_even.push(arr_nbrs[i]);
    }
  }

  return nbrs_even;
}

let nbrs_even = [];
let nbrs_orig = [];

const ammount = parseInt(prompt('How many random numbers do you want?'));

for (let i = 0; i < ammount; i++) {
  let value = Math.floor(Math.random() * ammount) + 1;
  nbrs_orig.push(value);
}

nbrs_even = remove_uneven(nbrs_orig);

console.log('Original array: ');
for (let i = 0; i < nbrs_orig.length; i++) {
  console.log(nbrs_orig[i]);
}

console.log('Only even numbers: ');
for (let i = 0; i < nbrs_even.length; i++) {
  console.log(nbrs_even[i]);
}

console.log(nbrs_orig);
console.log(nbrs_even);
