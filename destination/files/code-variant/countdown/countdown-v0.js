// Устанавливаем дату окончания (10 дней, 12 часов, 30 минут от текущего времени)
const countDownDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000) + (30 * 60 * 1000);

// Обновляем таймер каждую секунду
const x = setInterval(function () {

  // Получаем текущее время
  const now = new Date().getTime();

  // Находим разницу между датой окончания и текущим временем
  const distance = countDownDate - now;

  // Рассчитываем дни, часы, минуты и секунды
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Формируем строку с оставшимся временем
  const countdown = days + "д " + hours + "ч " + minutes + "м " + seconds + "с ";

  // Выводим строку в элемент с id="countdown"
  document.getElementById("countdown").innerHTML = countdown;

  // Если отсчет закончился, останавливаем таймер
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "ВРЕМЯ ВЫШЛО";
  }
}, 1000);


//---------------------------------------------------------
