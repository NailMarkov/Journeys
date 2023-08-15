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
