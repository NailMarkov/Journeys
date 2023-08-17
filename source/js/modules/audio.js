export const initAudio = () => {
  const buttonElement = document.querySelector('[data-button="play"]');
  const radioElement = document.querySelector('.hero-card__radio');

  const audio = buttonElement.addEventListener('click', () => {
    radioElement.classList.toggle('hero-card__radio--active');
  });

  return audio;
};
