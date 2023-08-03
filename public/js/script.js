// Navbar Fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  window.scrollY > fixedNav ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed')
}

//hamburger
const hamburger = document.querySelector('#hamburger');
const navbarMenu = document.querySelector('#navbar-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navbarMenu.classList.toggle('hidden')
})