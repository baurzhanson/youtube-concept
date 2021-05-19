const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
   
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  });

  const swiper_rec = new Swiper('.channel-slider-rec', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
   
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next2',
      prevEl: '.channel-button-prev2',
    },
  });
