list = document.getElementById('target');

let list_item_1 = document.createElement('li');
list_item_1.innerText = 'First Item';
list.appendChild(list_item_1);

let list_item_2 = document.createElement('li');
list_item_2.classList.add('my-item');
list_item_2.innerText = 'Second Item';
list.appendChild(list_item_2);

let list_item_3 = document.createElement('li');
list_item_3.innerText = 'Third Item';
list.appendChild(list_item_3);
