let first_name;
let last_name;
let full_name;

const button = document.querySelector('input[type="submit"]');

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log('button pressed');

  first_name = document.querySelector('input[name="firstname"]').value;
  last_name = document.querySelector('input[name="lastname"]').value;

  full_name = first_name + ' ' + last_name;

  console.log(first_name);
  console.log(last_name);
  console.log(full_name);

  document.getElementById('target').innerHTML = 'Your name is ' + full_name;
});
