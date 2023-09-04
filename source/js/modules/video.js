import {loadScript} from '../utils/load-script.js';

let scriptLoaded = false;
let playerIsReady = false;

const prepareElementByAnother = (oneElement, anotherElement) => {
  oneElement.className = anotherElement.className;
  oneElement.dataset.control = anotherElement.dataset.control;
  oneElement.innerHTML = anotherElement.innerHTML;

  const styles = anotherElement.getAttribute('style');
  if (styles) {
    oneElement.setAttribute('style', styles);
  }
};

export const initVideo = (containerElement) => {
  const linkElement = containerElement.querySelector('[data-control]');
  const youtubeElement = containerElement.querySelector('[data-youtube]');
  let youtubePlayer = null;

  // Делаем кнопку из ссылки
  const controlElement = document.createElement('button');
  prepareElementByAnother(controlElement, linkElement);
  containerElement.replaceChild(controlElement, linkElement);

  controlElement.addEventListener('click', () => {
    if (!youtubePlayer && !youtubePlayer.playVideo) {
      return;
    }

    containerElement.classList.add('is-active');

    youtubePlayer.playVideo();
  });

  const createPlayer = () => {
    youtubePlayer = new window.YT.Player(youtubeElement, {
      width: '100%',
      height: '100%',
      events: {
        onStateChange(event) {
          if (event.data === 0) {
            containerElement.classList.remove('is-active');
          }
        },
      },
      videoId: youtubeElement.dataset.youtube,
    });
  };

  const initPlayer = () => {
    if (playerIsReady) {
      createPlayer();
      return;
    }

    window.onYouTubePlayerAPIReady = () => {
      createPlayer();
      playerIsReady = true;
    };
  };

  if (scriptLoaded) {
    initPlayer();
  } else {
    loadScript('https://youtube.com/player_api', initPlayer, () => (scriptLoaded = true));
  }
};

const destroyVideo = (containerDestroyElement) => {
  const controlElement = containerDestroyElement.querySelector('[data-control]');
  const youtubeElement = containerDestroyElement.querySelector('[data-youtube]');

  const linkElement = document.createElement('a');
  prepareElementByAnother(linkElement, controlElement);
  linkElement.href = `https://youtube.com/embed/${youtubeElement.dataset.youtube}`;
  containerDestroyElement.replaceChild(linkElement, controlElement);

  containerDestroyElement.classList.remove('is-active');

  const newYoutubeElement = document.createElement('div');
  newYoutubeElement.className = youtubeElement.className;
  newYoutubeElement.dataset.youtube = youtubeElement.dataset.youtube;
  containerDestroyElement.replaceChild(newYoutubeElement, youtubeElement);
};

export const destroyVideos = (rootElement = document) => {
  rootElement.querySelectorAll('[data-video]').forEach(destroyVideo);
};
