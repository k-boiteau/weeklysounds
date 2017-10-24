// Set Navbar behavior

var button = document.querySelector('.mobile-menu-toggle');
var menu = document.querySelector('.mobile-menu');

function toggleMenu() {
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


