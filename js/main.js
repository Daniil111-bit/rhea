const swiper = new Swiper('.price-slider', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  
  navigation: {
    nextEl: '.price-slider-arrow-left',
    prevEl: '.price-slider-arrow-right',
  },
});


var travel = new Swiper('.travel-slide-block', {
  slidesPerView: 5,
  centeredSlides: true,
  loop:true,
  // spaceBetween: 115,
  grabCursor: true,
  
  navigation: {
      nextEl: '.travel-arrow-right',
      prevEl: '.travel-arrow-left',
    },

});
var commentsSlider = new Swiper('.comments-slider', {
  slidesPerView: 1,
  loop:true,
  grabCursor: true,
  
  navigation: {
      nextEl: '.coments-arrow-right',
      prevEl: '.coments-arrow-left',
    },

});

