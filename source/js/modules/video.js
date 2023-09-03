import {loadScript} from '../utils/load-script.js';

let scriptLoaded = false;

export const initVideo = (containerElement) => {
  const linkElement = containerElement.querySelector('[data-control]');
  const youtubeElement = containerElement.querySelector('[data-youtube]');
  let youtubePlayer = null;

  // Делаем кнопку из ссылки
  const controlElement = document.createElement('button');
  controlElement.className = linkElement.className;
  controlElement.setAttribute('style', linkElement.getAttribute('style'));
  controlElement.innerHTML = linkElement.innerHTML;
  containerElement.replaceChild(controlElement, linkElement);

  controlElement.addEventListener('click', () => {
    containerElement.classList.add('is-active');

    youtubePlayer.playVideo();
  });

  const initPlayer = () => {
    window.onYouTubePlayerAPIReady = () => {
      youtubePlayer = new window.YT.Player(youtubeElement.id, {
        width: '100%',
        height: '100%',
        events: {
          onStateChange(event) {
            if (event.data === 0) {
              containerElement.classList.remove('is-active');
            }
          },
        },
        videoId: youtubeElement.id,
      });
    };
  };

  if (scriptLoaded) {
    initPlayer();
  } else {
    loadScript('https://www.youtube.com/player_api', initPlayer, () => (scriptLoaded = true));
  }
};

export const initVideos = () => {
  document.querySelectorAll('[data-video]').forEach(initVideo);
};
