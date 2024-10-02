// Действующие элементы: 
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
// Получить 10часов 
const countDownDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000) + (36 * 60 * 1000);


function updateCounter() {

  const now = new Date().getTime();
  const distance = countDownDate - now;

  //--------------------------------------------------------
  // Осталось: Дней, Часов, Минут
  const daysLeft = Math.floor(distance / 1000 / 60 / 60 / 24); // 255
  const hoursLeft = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(distance / 1000 / 60) % 60;

  // Получаем секунды:
  // const secondsLef = Math.floor(distance / 1000) % 60;
  // -------------------------------------------------------------------------
  // ! Заполнение таймера: 
  // Если нам нужена всегда двойное число : ( 08, 09, 01, 03, итд. )
  days.innerText = (daysLeft < 10) ? `0${daysLeft}` : daysLeft;
  hours.innerText = (hoursLeft < 10) ? `0${hoursLeft}` : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;

  /*
! Или так:
  : days.innerText =  daysLeft;
  : hours.innerText =  hoursLeft;
  : minutes.innerText = minutesLeft;
*/

  // Если отсчет закончился, останавливаем таймер
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("countdown").innerHTML = "ВРЕМЯ ВЫШЛО";
  // }
  // -------------------------------------------------------------------------

}


/*
- Можно просто вызвать функцию вместо, preloader 
- Это тоже решит проблему с исчезновение таймера после обновления.
updateCounter();
*/

setInterval(updateCounter, 1000);

// -----------------------------------------------------------------

//! Убрать loading спустя 1 секунду
setTimeout(() => {
  const preloader = document.querySelector('.countdown__preloader');
  const box = document.querySelector('.countdown__box');
  preloader.remove();
  box.style.visibility = 'visible';
}, 1000);

