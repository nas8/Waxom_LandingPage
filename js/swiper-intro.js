'use strict';
(function(){
  const swiper = new Swiper('.swiper-intro', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 800,
    effect: 'fade',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}());