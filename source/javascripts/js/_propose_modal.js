// set comportement for modal

var modalButtons = document.querySelectorAll("[data-target='propose-modal']");
var closeButton = document.querySelector('#close-propose-modal');
var modal = document.querySelector('#propose-modal');

function openModal(e) {
  e.preventDefault();
  modal.style = "display: flex"
}

function closeModal() {
  modal.style = "display: none"
}

modalButtons.forEach( function(button) {button.addEventListener('click', openModal)});
closeButton.addEventListener('click', closeModal);


// Send form using ajax & set alerts message

var form = document.querySelector('#propose-form');
var message = document.querySelector('#message');
var alert = document.querySelector('#alert');
var close;

function updateMsg(cssClass, msg) {
  closeModal();
  clearTimeout(close);
  document.querySelector('#alert').classList = '';
  alert.classList.add(cssClass);
  alert.classList.add('alert-appears');
  message.innerText = msg;
  close = setTimeout((function() { closeAlertMessage(); }), 10000);
}

function sendWithAjax(e) {
  e.preventDefault();

  var msgSuccess = 'Message reçu frère !';
  var msgError = 'Oups, une erreur est survenue :(';

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
      form.reset();
      return Promise.resolve(response)
    }).catch(function(error) {
      updateMsg('error', msgError);
    });
}

form.addEventListener('submit', sendWithAjax);

