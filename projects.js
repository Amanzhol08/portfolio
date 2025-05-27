const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
  
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });

document.addEventListener("DOMContentLoaded", function () {
    // Swiper объектісін инициализация
    const swiper = new Swiper('.swiper', {
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // URL-ден project= санын алу
    const params = new URLSearchParams(window.location.search);
    const slideIndex = parseInt(params.get("project"));

    // Егер индекс бар болса, слайдты ауыстыру
    if (!isNaN(slideIndex)) {
      swiper.slideTo(slideIndex, 0); // 0 — анимация ұзақтығы
    }
  });

const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('menu--active');
});
