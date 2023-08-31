const initAudio = (element) => {
  const wrapperElement = document.querySelector('.wrapper-element');
  const buttonElement = wrapperElement.querySelector('[data-button="play"]');
  const radioElement = element.querySelector('.hero-card__radio');

  buttonElement.addEventListener('click', () => {
    radioElement.classList.toggle('hero-card__radio--active');
  });
};

export const initAudios = () => {
  document.querySelectorAll('[data-audio]').forEach(initAudio);
};
