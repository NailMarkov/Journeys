export const initSliderHero = () => {
  const sliderElement = document.querySelector('[data-slider="hero"]');
  const swiperHero = new window.Swiper(sliderElement, {
    initialSLide: 1,
    slidesPerView: 1,
    pagination: {
      el: document.querySelector('[data-pagination="hero"]'),
      type: 'bullets',
      clickable: true,
    },
  });

  return swiperHero;
};

export const initSliderTours = () => {
  const sliderElement = document.querySelector('[data-slider="tours"]');
  const swiperTours = new window.Swiper(sliderElement, {
    navigation: {
      prevEl: document.querySelector('[data-prev="tours"]'),
      nextEl: document.querySelector('[data-next="tours"]'),
    },
    breakpoints: {
      320: {
        initialSlide: 1,
        slidesPerView: 1,
      },
      768: {
        initialSlide: 1,
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  return swiperTours;
};
