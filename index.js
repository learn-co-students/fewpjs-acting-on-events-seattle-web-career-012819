// Your code herevar dodger = document.getElementById('dodger');

document.addEventListener('keydown', (e) => {
  let hozPoz = Number.parseInt(dodger.style.left.replace("px", ""));

	if (e.which === 37) {
    hozPoz--;
  } else if (e.which === 39) {
    hozPoz++;
  }
  dodger.style.left = `${hozPoz}px`;
});

function moveDodgerLeft () {
  let dodger = document.getElementById('dodger');
  let hozPoz = Number.parseInt(dodger.style.left.replace("px", ""));

  dodger.style.left = `${--hozPoz}px`;
}

function moveDodgerRight () {
  let dodger = document.getElementById('dodger');
  let hozPoz = Number.parseInt(dodger.style.left.replace("px", ""));

  dodger.style.left = `${++hozPoz}px`;
}