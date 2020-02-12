var ENTER_KEYCODE = 13;

var mainNav = document.querySelector('.main-nav');
var headerToggle = document.querySelector('.header__toggle');
var mainNavToggles = document.querySelectorAll('.main-nav__toggle');
var aboutToggle = document.querySelector('.about-toggle');
var teamToggle = document.querySelector('.team-toggle');
var historyToggle = document.querySelector('.history-toggle');
var sportToggle = document.querySelector('.sport-toggle');


function openMainNav() {
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav');
  headerToggle.classList.remove('header__toggle--open');
  headerToggle.classList.add('header__toggle--close');
}

function closeMainNav() {
  mainNav.classList.add('main-nav--closed');
  mainNav.classList.remove('main-nav');
  headerToggle.classList.remove('header__toggle--close');
  headerToggle.classList.add('header__toggle--open');
}

function onNavToggleClick() {
  if (headerToggle.classList.contains('header__toggle--close')) {
    closeMainNav();
  } else {
    openMainNav();
  }
}

function onNavToggleEnterPress(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    if (headerToggle.classList.contains('header__toggle--close')) {
      closeMainNav();
    } else {
      openMainNav();
    }
  }
}

function openSubMenu() {
  var relValue = document.activeElement.getAttribute('rel');
  var parentMenu = document.activeElement.parentNode.parentNode;
  var allSubMenu = parentMenu.querySelectorAll('.main-nav__submenu');
  var navToggles = parentMenu.querySelectorAll('.main-nav__toggle');

  allSubMenu.forEach(function (menu) {
    menu.classList.add('main-nav__submenu--closed');
    if (menu.getAttribute('rel') === relValue) {
      menu.classList.remove('main-nav__submenu--closed');
    }
  });

  navToggles.forEach(function (toggle) {
    toggle.classList.remove('main-nav__toggle--close');
    toggle.classList.add('main-nav__toggle--open');
  });

  document.activeElement.classList.remove('main-nav__toggle--open');
  document.activeElement.classList.add('main-nav__toggle--close')
}

function closeSubMenu() {
  var parentContainer = document.activeElement.parentNode;
  var subMenu = parentContainer.querySelector('.main-nav__submenu');
  
  subMenu.classList.add('main-nav__submenu--closed');
  document.activeElement.classList.remove('main-nav__toggle--close');
  document.activeElement.classList.add('main-nav__toggle--open')
}

function onMainNavToggleClick() {
  if (document.activeElement.classList.contains('main-nav__toggle--open')) {
    openSubMenu();
  } else {
    closeSubMenu();
  }
}

headerToggle.addEventListener('click', onNavToggleClick);
headerToggle.addEventListener('keyboard', onNavToggleEnterPress);

aboutToggle.addEventListener('click', onMainNavToggleClick);
teamToggle.addEventListener('click', onMainNavToggleClick);
historyToggle.addEventListener('click', onMainNavToggleClick);
sportToggle.addEventListener('click', onMainNavToggleClick);
