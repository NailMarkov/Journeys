export const initNav = () => {
  const navElement = document.querySelector('.page-header__nav');
  if (!navElement) {
    return;
  }

  const headerListElement = navElement.querySelector('.page-header__list');
  const togglerElement = navElement.querySelector('.page-header__toggle');
  const headerPhoneElement = navElement.querySelector('.page-header__wrapper');

  const changeOverlay = (method = 'toggle') => {
    document.body.classList[method]('scroll-lock');
    navElement.classList[method]('page-header__nav--opened');
    headerListElement.classList[method]('page-header__list--opened');
    togglerElement.classList[method]('page-header__toggle--opened');
  };

  headerListElement.querySelectorAll('.page-header__link').forEach((linkElement) => {
    linkElement.addEventListener('click', () => changeOverlay());
  });

  togglerElement.addEventListener('click', () => changeOverlay());

  const setNavHeight = () => {
    document.body.style.setProperty('--header-height', `${navElement.clientHeight}px`);
  };
  const observer = new MutationObserver(() => {
    setNavHeight();
  });
  observer.observe(headerListElement, {
    childList: true, // наблюдать за непосредственными детьми
  });
  observer.observe(headerPhoneElement, {
    childList: true,
  });
  window.addEventListener('resize', () => {
    setNavHeight();

    if (document.body.clientWidth >= 1200) {
      changeOverlay('remove');
    }
  });
  setNavHeight();
};
