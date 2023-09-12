export const showMenu = () => {
  const navElement = document.querySelector('.page-header__nav');
  const headerListElement = navElement.querySelector('.page-header__list');
  const togglerElement = navElement.querySelector('.page-header__toggle');
  const bodyElement = document.querySelector('body');

  const hideOverlay = (link) => {
    link.addEventListener('click', () => {
      bodyElement.classList.toggle('scroll-lock');
      navElement.classList.toggle('page-header__nav--opened');
      headerListElement.classList.toggle('page-header__list--opened');
      togglerElement.classList.toggle('page-header__toggle--opened');
    });
  };

  headerListElement.querySelectorAll('.page-header__link').forEach(hideOverlay);

  const menu = togglerElement.addEventListener('click', () => {
    navElement.classList.toggle('page-header__nav--opened');
    headerListElement.classList.toggle('page-header__list--opened');
    togglerElement.classList.toggle('page-header__toggle--opened');
    bodyElement.classList.toggle('scroll-lock');
  });

  return menu;
};
