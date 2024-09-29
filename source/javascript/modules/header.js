export function initBurger() {
  const burger = document.querySelector('.burger');
  const menuBody = document.querySelector('.header__body');
  const bodyElement = document.body;

  if (burger && menuBody) {
    burger.addEventListener('click', toggleBurger);
  }

  function toggleBurger() {
    burger.classList.toggle('open');
    menuBody.classList.toggle('open');
    bodyElement.classList.toggle('no-scroll');
  }
}

