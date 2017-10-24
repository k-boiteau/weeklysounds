// Set alert popup behavior

const closeAlert = document.querySelector('#close-alert');

closeAlertMessage = () => {
  document.querySelector('#alert').classList.remove('alert-appears');
}

closeAlert.addEventListener('click', closeAlertMessage)

