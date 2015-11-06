document.addEventListener('click', function(event) {
  if (event.target.localName === 'a') {
    event.srcElement.setAttribute('rel', 'noreferrer');
  }
}, true);
