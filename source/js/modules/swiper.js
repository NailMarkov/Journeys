import {initVideo} from './video';

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

  const initActiveSlides = () => {
    initVideo();
    const activeSlide = swiperHero.slides[swiperHero.activeIndex]; // Находим текущий слайд
    const activePlayer = activeSlide.querySelector('[data-video]'); // Находим текущий плеер
    activePlayer.classList.remove('is-active');
    console.log(activePlayer);
    // if (activePlayer.hasAttribute('data-madia="media"')) {
    //   activePlayer.classList.remove('is-active');
    // }
    // const activeAttribute = activeSlide.getAttribute('data-swiper-slide-index');
    // if (activeAttribute === '0') {
    //   initVideo(activePlayer);
    //   activePlayer.setAttribute('data-media', 'media');
    // }
  };

  swiperHero.on('slideChange', initActiveSlides);

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

export const initSliderReviews = () => {
  const sliderReviewsElement = document.querySelector('[data-slider="reviews"]');
  const wrapperReviewsElement = document.querySelector('[data-wrapper="reviews"]');
  wrapperReviewsElement.style.overflow = 'visible';

  const swiperReviews = new window.Swiper(sliderReviewsElement, {
    navigation: {
      prevEl: document.querySelector('[data-prev="reviews"]'),
      nextEl: document.querySelector('[data-next="reviews"]'),
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });

  return swiperReviews;
};

export const initSliderAdvantages = () => {
  const getDesktopChange = (event) => {
    const result = event.matches ? swiperAdvantages : swiperAdvantages.destroy();

    return result;
  };

  const mediaQuery = window.matchMedia('(min-width: 1199px)');
  mediaQuery.addEventListener('change', getDesktopChange);

  const sliderAdvantagesElement = document.querySelector('[data-slider="advantages"]');
  const swiperAdvantages = new window.Swiper(sliderAdvantagesElement, {
    loop: true,
    navigation: {
      prevEl: document.querySelector('[data-prev="advantages"]'),
      nextEl: document.querySelector('[data-next="advantages"]'),
    },
    initialSlide: 2,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
  });

  return getDesktopChange(mediaQuery);
};

export const initSliderGallery = () => {
  const sliderGalleryElement = document.querySelector('[data-slider="photogallery"]');
  const swiperGallery = new window.Swiper(sliderGalleryElement, {
    navigation: {
      prevEl: document.querySelector('[data-prev="photogallery"]'),
      nextEl: document.querySelector('[data-next="photogallery"]'),
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 3,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 6,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 6,
      },
    },
  });

  return swiperGallery;
};
