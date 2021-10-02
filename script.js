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


let i = 5

const animation = (i) => {
  let j = i % 5
  switch (j) {
    case 0:
      document.getElementById('title').innerHTML = 'Remember the Legendary...'
      break
    case 1:
      document.getElementById('title').style.margin = '91.5px 0 0 0'
      document.getElementById('title').innerHTML = ''
      document.getElementById('image').src = 'goodbye_coco.jpeg'
      break
    case 2:
      document.getElementById('title').style.margin = '335.5px 0 0 0'
      document.getElementById('title').innerHTML = '#GoodbyeCoco'
      document.getElementById('image').src = ''
      break
    case 3:
      document.getElementById('title').innerHTML = '<i>Made with HTML, CSS, JavaScript</i>'
      break
    case 4:
      document.getElementById('title').innerHTML = 'Hello World!'
      break
  }
}

setInterval(() => {
  animation(i)
  i++
}, 2500)