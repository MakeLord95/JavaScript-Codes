startYear = parseInt(prompt('Please enter a year to start on'));
endYear = parseInt(prompt('Please enter a year to end on'));

let leapYears = [];
let year = startYear;

while (year <= endYear) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && startYear % 400 === 0) {
      leapYears.push(year);
    } else {
      leapYears.push(year);
    }
  } else if (year % 4 === 0 && year && 100 !== 0) {
    leapYears.push(year);
  }
  year++;
}

list = document.getElementById('UnList');
for (let i = 0; i < leapYears.length; ++i) {
  let li = document.createElement('li');
  li.innerText = leapYears[i];
  list.appendChild(li);
}
