// Действующие элементы: 
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');

console.log(days);
console.log(hours);
console.log(minutes);


//-------------------------

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);



const currentTime = new Date();

const diff = nextYear - currentTime;

//--------------------------------------------------------
// Получаем дни:
const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24); // 255


// Получаем часы:
const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

// Получаем минуты:
const minutesLeft = Math.floor(diff / 1000 / 60) % 60;


// Получаем секунды:
const secondsLef = Math.floor(diff / 1000) % 60;

console.log(daysLeft, hoursLeft, minutesLeft, secondsLef);


// -------------------------------------------------------------------------
// ! Заполним наши переменные 
// Если нам нужена всегда двойное число : ( 08, 09, 01, 03, итд. )
days.innerText = (daysLeft < 10) ? `0 + ${daysLeft}` : daysLeft;
hours.innerText = (hoursLeft < 10) ? `0${hoursLeft}` : hoursLeft;
minutes.innerText = minutesLeft;

/*
  : days.innerText =  daysLeft;
  : hours.innerText =  hoursLeft;
  : minutes.innerText = minutesLeft;
*/
// -------------------------------------------------------------------------
