var hidden = true;

function dropMenu() {
  var id = document.getElementById('dropMenu');

  if (hidden) {
    id.style.display = 'block';
    hidden = false;
  } else {
    id.style.display = 'none';
    hidden = true;
  }
}