var newContent = document.querySelector('.wysiwyg-content');
var newMails = document.querySelectorAll('.email-content');
var menuLinks = document.querySelectorAll('#preview > .menu > a');
var previews = document.querySelectorAll('#preview > .content > div');

function setNewMail() {
  var mailFormated = [];
  newContent.childNodes.forEach(function(element) {
    if (element.nodeName === "H1") {
      mailFormated.push('<p style="font-size:16px;background:#ffb923;padding:5px 20px;display:initial;color:#201c1c">' + element.innerText + '</p>');
    }
    if (element.nodeName === "P" && element.data !== "") {
      if (element.previousSibling && element.previousSibling.nodeName === "H1") {
        mailFormated.push('<p style="text-align:justify;border-top:2px solid #ffb923;margin-top:2px;padding-top:20px;color:#201c1c">' + element.innerHTML + '</p>');
      } else {
        mailFormated.push('<p>' + element.innerHTML + '</p>');
      }
    }
  });
  newMails.forEach(function(newMail) {
    newMail.innerHTML="";
  });
  mailFormated.forEach(function(element) {
    newMails.forEach(function(newMail) {
      newMail.insertAdjacentHTML('beforeend', element);
    });
  });
}

function togglePreview() {
  var click = this;
  previews.forEach(function(preview) {
    preview.style.display = "none";
    if (preview.classList.value === click.dataset.preview) {
      preview.style.display = "block";
    }
  });
  menuLinks.forEach(function(link) {
    link.classList.remove('selected');
  });
  click.classList.add('selected');
}

if (newContent) {
  newContent.addEventListener('DOMSubtreeModified', setNewMail)
}

if (menuLinks) {
  menuLinks.forEach(function(link) {
    link.addEventListener('click', togglePreview)
  });
}
