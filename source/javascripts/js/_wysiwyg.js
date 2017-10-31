var controls = document.querySelectorAll('[data-role]');
var text = document.querySelector('.wysiwyg-content');

function addStyle(e) {
  e.preventDefault();
  var selection = window.getSelection();
  if (selection.anchorNode == null) {return}
  var newText;
  if (this.dataset.role === "underline") {
    newText = document.createElement("u");
  }
  if (this.dataset.role === "italic") {
    newText = document.createElement("i");
  }
  if (this.dataset.role === "bold") {
    newText = document.createElement("strong");
  }
  if (this.dataset.role === "list") {
    newText = document.createElement("li");
  }
  if (this.dataset.role === "title") {
    newText = document.createElement("h1");
    newText.appendChild(document.createTextNode(selection.toString()));
    selection.baseNode.parentElement.parentElement.replaceChild(newText, selection.baseNode.parentElement);
    return;
  }
  newText.appendChild(document.createTextNode(selection.toString()));
  var range = selection.getRangeAt(0);
  range.deleteContents();
  range.insertNode(newText);
}

if (controls !== []) {
  controls.forEach( function(control) {control.addEventListener('click', addStyle)});
}

if (text) {
  text.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
      document.execCommand('formatBlock', false, 'p');
      return false;
    }
  });
}
