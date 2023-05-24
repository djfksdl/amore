var swiper = new Swiper(".thumb_Swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".visual_Swiper", {
    speed: 5000,
    autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
    loop: true,
    spaceBetween: 0,
    navigation: {
      // nextEl: ".visual_Swiper-button-next",
      // prevEl: ".visual_Swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });