let hover = document.getElementById('trigger');

hover.addEventListener('pointerover', (event) => {
  let img = document.getElementById('target');
  img.setAttribute('src', 'img/picB.jpg');
});

hover.addEventListener('pointerout', (event) => {
  let img = document.getElementById('target');
  img.setAttribute('src', 'img/picA.jpg');
});
