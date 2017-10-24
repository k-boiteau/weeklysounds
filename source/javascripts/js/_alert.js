// Set alert popup behavior

var closeAlert = document.querySelector('#close-alert');

function closeAlertMessage() {
  document.querySelector('#alert').classList.remove('alert-appears');
}

closeAlert.addEventListener('click', closeAlertMessage)

