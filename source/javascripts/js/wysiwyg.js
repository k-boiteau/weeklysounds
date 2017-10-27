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
  if (this.dataset.role === "title") {
    newText = document.createElement("h1");
  }
  if (this.dataset.role === "list") {
    newText = document.createElement("li");
  }
  if (this.dataset.role === "canceled") {
    newText = document.createElement("span");
  }
  newText.appendChild(document.createTextNode(selection.toString()));
  var range = selection.getRangeAt(0);
  range.deleteContents();
  range.insertNode(newText);
}

if (controls !== []) {
  controls.forEach( function(control) {control.addEventListener('click', addStyle)});
}
