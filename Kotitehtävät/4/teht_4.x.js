async function asynchronousFunction(search_term) {

  const answer = confirm('Would you like to use iframe?');

  console.log('asynchronous download begins');
  try {
    fetch('https://api.tvmaze.com/search/shows?q=' + search_term).
        then(function(response) {
          return response.json();
        }).
        then(function(data) {
          appendData(data, answer);
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

function appendData(jsonData, answer) {

  let iframe = document.querySelector('iframe');
  let list = document.getElementById('pictures');

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
      img.src = 'https://via.placeholder.com/350x492?text=Show+has+no+image';
      img.alt = 'medium_image_for_show';
    }

    let figcaption = document.createElement('figcaption');
    figure.appendChild(figcaption);

    if (jsonData[i]['show']['genres'].length > 1) {
      figcaption.innerText = 'Genres: ' +
          jsonData[i]['show']['genres'].join(' | ');
    } else if (jsonData[i]['show']['genres'].length === 1) {
      figcaption.innerText = 'Genre: ' + jsonData[i]['show']['genres'];
    } else {
      figcaption.innerText = 'No Genres known';
    }

    let a = document.createElement('a');
    figure.appendChild(a);
    a.innerText = '> More Details';

    if (answer === false) {
      a.setAttribute('href', jsonData[i]['show']['url']);
      a.setAttribute('target', '_blank');
    }

    let a_2 = document.createElement('a');
    figure.appendChild(a);
    a_2.innerText = 'More Details - iframe';

    article.innerHTML += jsonData[i]['show']['summary'];

  }

  let articles = Array.from(document.getElementsByTagName('a'));

  articles.forEach(article => {
    article.addEventListener('click', function handleClick(evt) {
      evt = null;
      console.log('open modal');

      let modal = document.querySelector('dialog');

      if (answer === true) {
        modal.showModal();
      }

      //Selvitetään mitä articlea käyttäjä painaa
      for (let i = 0; i < articles.length; i++) {
        if (article === articles[i]) {
          console.log(i + 1);
          iframe.src = jsonData[i]['show']['url'];
          iframe.setAttribute('width', '1024');
          iframe.setAttribute('height', '720');
        }
      }

      let span = modal.getElementsByTagName('span');

      //Lisätään span 'x' napin sulkemistoiminto
      for (let btn of span) {
        btn.addEventListener('click', () => {
          console.log('close modal');
          modal.close();
        });
      }
    });
  });

}

const button = document.querySelector('input[type="submit"]');

button.addEventListener('click', function(evt) {
  console.clear();
  evt.preventDefault();
  console.log('button pressed');

  let search_term = 'Dome';
  //document.querySelector('input[name="search_term"]').value;
  console.log('Search term: ' + search_term);
  asynchronousFunction(search_term).then(r => r);
});
