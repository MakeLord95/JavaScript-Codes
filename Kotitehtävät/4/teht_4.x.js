async function asynchronousFunction(search_term) {
  console.log('asynchronous download begins');
  try {

    fetch('https://api.tvmaze.com/search/shows?q=' + search_term).
        then(function(response) {
          return response.json();
        }).
        then(function(data) {
          appendData(data);
        }).
        catch(function(err) {
          console.log(err);
        });

  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('asynchronous load complete');
  }
}

function appendData(data) {
  console.clear();
  let jsonData = JSON.stringify(data, null, 2);
  console.log(jsonData);

  document.getElementById('tulos').innerText = jsonData;
}

const button = document.querySelector('input[type="submit"]');

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log('button pressed');

  let search_term = document.querySelector('input[name="search_term"]').value;
  console.log(search_term);
  asynchronousFunction(search_term);
});
