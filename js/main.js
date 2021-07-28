//const swiper = new Swiper('.swiper-container', {
  // Optional parameters Параметры слайдера
  //direction: 'vertical',
 // loop: true,  // бесконечная прокрутка

  // If we need pagination  Пагинация
 // pagination: {
//    el: '.swiper-pagination',
 // },

  // Navigation arrows  Стрелки
//  navigation: {
//    nextEl: '.swiper-button-next',
//    prevEl: '.swiper-button-prev',
//  },

  // And if we need scrollbar  Лента прокрутки
 // scrollbar: {
//    el: '.swiper-scrollbar',
//  },
//});

 var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
//        navigation: {
//          nextEl: ".swiper-button-next",
//          prevEl: ".swiper-button-prev",
//        },
        thumbs: {
          swiper: swiper,
        },
      });