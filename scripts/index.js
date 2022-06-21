const menuButton = document.querySelector('.main_menu .bi-list ');
const closeButton = document.querySelector('.bi-x-lg');
const menuList = document.querySelector('.main_menu_list');

function openMenu() {
  menuList.classList.add('open--menu');
}

function closeMenu() {
  menuList.classList.remove('open--menu');
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
