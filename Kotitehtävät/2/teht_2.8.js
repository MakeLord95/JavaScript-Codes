function concat(arr) {
  let result = '';
  let separator = '';

  for (let i = 0; i < arr.length; i++) {
    if (result) {
      result = result + separator;
    }
    result += arr[i];
  }

  return result;
}

let array = ['Johnny', 'DeeDee', 'Joey', 'Marky', 'Jesus'];

result = concat(array);

document.querySelector('#result').innerHTML = result;
