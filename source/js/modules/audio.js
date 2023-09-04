export const initAudio = (audioElement) => {
  const buttonElement = audioElement.querySelector('[data-button="play"]');

  buttonElement.addEventListener('click', () => {
    audioElement.classList.toggle('hero-card__radio--active');
  });

  const createElement = () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://music.yandex.ru/iframe/#track/112912322/25474374';
    audioElement.appendChild(iframe);
  };

  createElement();
};

const destroyAudio = (containerAudioElement) => {
  containerAudioElement.remove();
};

export const destroyAudios = (rootElement = document) => {
  rootElement.querySelectorAll('iframe').forEach(destroyAudio);
};
