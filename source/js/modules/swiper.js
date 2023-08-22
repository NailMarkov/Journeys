export const initSliderHero = () => {
  const sliderHeroElement = document.querySelector('[data-slider="hero"]');
  const swiperHero = new window.Swiper(sliderHeroElement, {
    loop: true,
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
  const sliderToursElement = document.querySelector('[data-slider="tours"]');
  const swiperTours = new window.Swiper(sliderToursElement, {
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

export const initSliderTraining = () => {
  const sliderTrainingElement = document.querySelector('[data-slider="training"]');
  const swiperTraining = new window.Swiper(sliderTrainingElement, {
    navigation: {
      prevEl: document.querySelector('[data-prev="training"]'),
      nextEl: document.querySelector('[data-next="training"]'),
    },
    breakpoints: {
      320: {
        initialSlide: 1,
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  return swiperTraining;
};
