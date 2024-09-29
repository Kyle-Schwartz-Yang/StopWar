
import * as LASAGNA from "./modules/functional.js"
LASAGNA.isWebp();

//------------------------------------------------------------
//! Установить таймер:
import * as countdown from './modules/countdown.js';
setInterval(countdown.updateCounter, 1000);
countdown.initCountdown();
//------------------------------------------------------------------


//------------------------------------------------------------------
import { initBurger } from './modules/header.js';

initBurger();

// const burger = document.querySelector('.burger');
// const menuBody = document.querySelector('.header__body');

// burger.addEventListener('click', (e) => {
//   burger.classList.toggle('open');
//   menuBody.classList.toggle('open');
// })



//------------------------------------------------------------------
//SWIPER
//-------------------------------------------------------------------
import { initialSwiperSpeaker, initialSwiperSponsors } from "./mode/sliders.js";

initialSwiperSpeaker('.speaker__swiper');
initialSwiperSponsors('.sponsors__swiper');

