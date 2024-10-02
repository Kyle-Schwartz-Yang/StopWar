// Действующие элементы: 
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
// Получить 10д. 12ч. 36хв.
const countDownDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000) + (36 * 60 * 1000);


const updateCounter = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  //--------------------------------------------------------
  // Осталось: Дней, Часов, Минут
  const daysLeft = Math.floor(distance / 1000 / 60 / 60 / 24); // 255
  const hoursLeft = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(distance / 1000 / 60) % 60;
  // -------------------------------------------------------------------------
  // ! Заполнение таймера: 
  // Если нам нужена всегда двойное число : ( 08, 09, 01, 03, итд. )
  days.innerText = (daysLeft < 10) ? `0${daysLeft}` : daysLeft;
  hours.innerText = (hoursLeft < 10) ? `0${hoursLeft}` : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;

  // Если отсчет закончился, останавливаем таймер
  if (distance < 0) {
    clearInterval(updateCounter);
    document.getElementById("countdown").innerHTML = "ВРЕМЯ ВЫШЛО";
  }
  // -------------------------------------------------------------------------
}, 1000)



// -----------------------------------------------------------------

//! Убрать loading спустя 1 секунду
setTimeout(() => {
  const preloader = document.querySelector('.countdown__preloader');
  const countdownTime = document.querySelectorAll('.countdown__time');
  preloader.remove();

  // countdownTime.forEach((time, index) => setTimeout(() => time.style.visibility = 'visible', 300 * index));
  countdownTime.forEach(time => time.style.visibility = 'visible')
}, 1000);