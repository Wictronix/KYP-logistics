 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    autoplay: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      1200:{
          slidesPerView : 4
      },

      992:{
          slidesPerView : 3
      },
      576:{
          slidesPerView : 1,
          enabled:false
      },

      381:{
          slidesPerView : 1
      },
      0:{
        slidesPerView : 1
      }
    },
  });

  