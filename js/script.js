var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.header__toggle');

function openMainNav() {
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav');
  navToggle.classList.remove('header__toggle--open');
  navToggle.classList.add('header__toggle--close');
}

function closeMainNav() {
  mainNav.classList.add('main-nav--closed');
  mainNav.classList.remove('main-nav');
  navToggle.classList.remove('header__toggle--close');
  navToggle.classList.add('header__toggle--open');
}

function onNavToggleClick() {
  if (navToggle.classList.contains('header__toggle--close')) {
    closeMainNav();
  } else {
    openMainNav();
  }
}

function onNavToggleEnterPress(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    if (navToggle.classList.contains('header__toggle--close')) {
      closeMainNav();
    } else {
      openMainNav();
    }
  }
}

navToggle.addEventListener('click', onNavToggleClick);
navToggle.addEventListener('keyboard', onNavToggleEnterPress);