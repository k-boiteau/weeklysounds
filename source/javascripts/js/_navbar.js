// Set Navbar behavior

const button = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.mobile-menu');

toggleMenu = () => {
  if (menu.classList.contains('on')) {
    menu.classList.remove('on');
    button.classList.remove('on');
  } else {
    menu.classList.add('on');
    button.classList.add('on');
  }
}

if (button) {
  button.addEventListener('click', toggleMenu);
}


