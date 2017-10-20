// set comportement for modal
const modalButtons = document.querySelectorAll("[data-target='propose-modal']");
const closeButton = document.querySelector('#close-propose-modal');
const modal = document.querySelector('#propose-modal');

openModal = (e) => {
  e.preventDefault();
  modal.style = "display: flex"
}

closeModal = () => {
  modal.style = "display: none"
}

modalButtons.forEach( button => button.addEventListener('click', openModal));
closeButton.addEventListener('click', closeModal);

// Send form using ajax
const form = document.querySelector('#propose-form');

sendWithAjax = (e) => {
  e.preventDefault();
}

form.addEventListener('submit', sendWithAjax)
