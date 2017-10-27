var newContent = document.querySelector('.wysiwyg-content');
var newMail = document.querySelector('#email-content');

function setNewMail() {
  console.log(newContent.innerHTML);
  newMail.innerHTML = '<p>' + newContent.innerHTML + '</p>';
}

if (newContent) {
  newContent.addEventListener('DOMSubtreeModified', setNewMail)
}
