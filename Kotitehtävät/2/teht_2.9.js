function even(arr_nbrs) {
  let nbrs_even = [];

  for (let i = 0; i < arr_nbrs.length; i++) {
    if (arr_nbrs[i] % 2 === 0) {
      nbrs_even.push(arr_nbrs[i]);
    }
  }

  return nbrs_even;
}

let nbrs_even = [];
let nbrs_orig = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 111, 2012];

nbrs_even = even(nbrs_orig);

console.log('Original array: ');
for (let i = 0; i < nbrs_orig.length; i++) {
  console.log(nbrs_orig[i]);
}

console.log('Only even numbers: ');
for (let i = 0; i < nbrs_even.length; i++) {
  console.log(nbrs_even[i]);
}
