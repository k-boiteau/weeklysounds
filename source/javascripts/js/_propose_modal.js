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


// Send form using ajax & set alerts message

const form = document.querySelector('#propose-form');
const message = document.querySelector('#message');
const alert = document.querySelector('#alert');

updateMsg = (cssClass, msg) => {
  closeModal();
  alert.classList.add(cssClass);
  alert.classList.add('alert-appears');
  message.innerText = msg;
  setTimeout((() => { closeAlertMessage(); }), 10000);
}

sendWithAjax = (e) => {
  e.preventDefault();

  const msgSuccess = 'Message reçu frère !';
  const msgError = 'Oups, une erreur est survenue :(';

  fetch('//formspree.io/boiteau.kev@gmail.com', {
      method: 'post',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      },
      body: new FormData(form)
    }).then(function(response) {
      if (!response.ok) {
        updateMsg('error', msgError);
        return Promise.reject(new Error(response.statusText))
      }
      updateMsg('success', msgSuccess);
      return Promise.resolve(response)
    }).catch(function(error) {
      updateMsg('error', msgError);
    });
}

form.addEventListener('submit', sendWithAjax);

