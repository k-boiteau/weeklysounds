// Suscribe form for mailchimp

const suscribeForm = document.querySelector("#mc-embedded-subscribe-form");
const submitButton = document.querySelector("#mc-embedded-subscribe");

register = () => {
  const msgSuccess = 'Merci pour ton inscription. N\'oublie pas de valider ton adresse mail !' ;
  const msgError = 'Oups, une erreur est survenue :(';
  fetch(suscribeForm.action + '&EMAIL=' + suscribeForm[0].value + '&c=', {
      method: suscribeForm.method,
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
    }).then(function() {
      updateMsg('success', msgSuccess);
    }).catch(function(error) {
      updateMsg('error', msgError);
    });
}

subscribe = (e) => {
  e.preventDefault();
  register(suscribeForm);
}

submitButton.addEventListener('click', subscribe);
