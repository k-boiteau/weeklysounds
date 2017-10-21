// set redirection
document.getElementsByName('_next')[0].value = window.location.href

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

  const msgLoad = '<div class="alert alert-loading">Message en cours d\'envoi</div>';
  const msgSuccess = '<div class="alert alert-success">Message reçu frère !</div>';
  const msgError = '<div class="alert alert-error">Oups, une erreur est survenue :(</div>';

  const updateMsg = (nodes, msg) => {
    const messageStatus = document.querySelectorAll('.alert-loading');
    for (i = 0; i < messageStatus.length; i++) {
      statusMessages[i].style.display = 'none';
    }
    nodes.insertAdjacentHTML('beforeend', msg)
  }

  fetch('//formspree.io/germain.loret@gmail.com', {
      method: 'post',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      },
      body: new FormData(form)
    }).then(function(response) {
      console.log(response)
      if (!response.ok) {
        updateMsg(form, msgError);
        return Promise.reject(new Error(response.statusText))
      }
      updateMsg(form, msgSuccess);
      return Promise.resolve(response)
    }).catch(function(error) {
      updateMsg(form, msgError);
    });
}

form.addEventListener('submit', sendWithAjax)
