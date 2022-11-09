async function asynchronousFunction(search_term) {
  console.log('asynchronous download begins');
  try {
    const response = await fetch(
        'https://api.tvmaze.com/search/shows?q=' + search_term);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('asynchronous load complete');
  }
}

const button = document.querySelector('input[type="submit"]');

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log('button pressed');

  let search_term = 'Futurama';
  //document.querySelector('input[name="search_term"]').value;
  console.log(search_term);
  asynchronousFunction(search_term);
});
