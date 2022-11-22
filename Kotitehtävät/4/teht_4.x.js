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

function appendData(jsonData) {
  console.clear();

  list = document.getElementById('pictures');
  list.innerHTML = '';

  for (let i = 0; i < jsonData.length; i++) {
    console.log(JSON.stringify(jsonData[i], null, 2));

    let article = document.createElement('article');
    article.classList.add('card');
    list.appendChild(article);

    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.innerText = jsonData[i]['show']['name'];

    let figure = document.createElement('figure');
    article.appendChild(figure);

    if (jsonData[i]['show']['image'] != null) {
      let img = document.createElement('img');
      figure.appendChild(img);
      img.src = jsonData[i]['show']['image']['medium'];
      img.alt = 'medium_image_for_show';
    } else {
      let img = document.createElement('img');
      figure.appendChild(img);
      img.src = 'https://via.placeholder.com/243x486?text=Show+has+no+image';
      img.alt = 'medium_image_for_show';
    }

    let figcaption = document.createElement('figcaption');
    figure.appendChild(figcaption);

    figcaption.innerText = 'Genres: ' + jsonData[i]['show']['genres'].join(' | ');


    let a = document.createElement('a');
    figure.appendChild(a);
    a.innerText = 'Link to show details';
    a.setAttribute('href', jsonData[i]['show']['url']);
    a.setAttribute('target', '_blank')

    let p = document.createElement('p');
    article.appendChild(p);
    p.innerHTML = jsonData[i]['show']['summary'];
  }
}

const button = document.querySelector('input[type="submit"]');

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  console.log('button pressed');

  let search_term = document.querySelector('input[name="search_term"]').value;
  console.log(search_term);
  asynchronousFunction(search_term).then(r => r);
});
