
import Swiper from 'swiper';
import { Pagination, Keyboard, EffectCards, Autoplay, Navigation } from 'swiper/modules';
// '.speaker__swiper'

export function initialSwiperSpeaker(selector) {
  return new Swiper(selector, {
    modules: [Navigation, Keyboard, Pagination, EffectCards, Autoplay],
    direction: 'horizontal',
    loop: true,
    autoHeight: false,
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 700,
    // autoplay: { delay: 5000 },
    keyboard: { enabled: true },
    navigation: {
      nextEl: ".speaker__button-next",
      prevEl: ".speaker__button-prev",
    },

    // Используем брейкпоинты Swiper
    breakpoints: {
      // Когда ширина экрана >= 768px
      992: {
        // Отключаем Swiper
        enabled: false,
      },

    },
  });
}


export function initialSwiperSponsors(selector) {
  return new Swiper(selector, {
    modules: [Navigation, Keyboard, Pagination, EffectCards,],
    direction: 'horizontal',
    loop: true,
    autoHeight: false,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 100,
    speed: 700,
    // autoplay: { delay: 5000 },

    keyboard: { enabled: true },

    pagination: {
      el: ".sponsors__pagination",
      clickable: true,

    },
  });
}




