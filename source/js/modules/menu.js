export const showMenu = () => {
  const navElement = document.querySelector('.page-header__nav');
  const headerListElement = navElement.querySelector('.page-header__list');
  const togglerElement = navElement.querySelector('.page-header__toggle');

  const menu = togglerElement.addEventListener('click', () => {
    navElement.classList.toggle('page-header__nav--opened');
    headerListElement.classList.toggle('page-header__list--opened');
    togglerElement.classList.toggle('page-header__toggle--opened');
  });

  return menu;
};
