var body = document.querySelector('body');
var header = document.querySelector('header');
var logo = document.querySelector('.logo');
var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
var blackout = document.querySelector('#blackout');
burger.onclick = function () {
  if (burger.className === 'burger') {
    burger.className = 'burger burger-active';
    menu.className = 'menu menu-active';
    body.className = 'body-active';
    header.className = 'header-active';
    logo.className = 'logo logo-active';
    blackout.className = 'blackout';
  } else {
    burger.className = 'burger';
    menu.className = 'menu';
    body.className = '';
    header.className = '';
    logo.className = 'logo';
    blackout.className = '';
  }
}
document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(header);

  if (!withinBoundaries) {
    burger.className = 'burger';
    menu.className = 'menu';
    body.className = '';
    header.className = '';
    logo.className = 'logo';
    blackout.className = '';
  }
})