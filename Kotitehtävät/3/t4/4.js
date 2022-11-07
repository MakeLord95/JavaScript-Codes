'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let list = document.getElementById('target');

for (let i = 0; i < students.length; i++) {
  let list_item = document.createElement('option');

  list_item.value = students[i]['id'];
  list_item.innerText = students[i]['name'];

  list.appendChild(list_item);
}
