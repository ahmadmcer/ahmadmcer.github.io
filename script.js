var hidden = true;

function dropMenu() {
  var id = document.getElementById('nav');

  if (hidden) {
    id.style.height = 'auto';
    hidden = false;
  } else {
    id.style.height = '64px';
    hidden = true;
  }
}