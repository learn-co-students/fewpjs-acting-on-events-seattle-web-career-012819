function moveDodgerLeft() {
  let elem = document.getElementById('dodger');
  let elemLeft = parseInt(elem.style.left);
  let leftPos = elemLeft - (Math.floor(Math.random() * elemLeft) + 1);
  document.getElementById('dodger').style.left = `${leftPos}px`;
}

function moveDodgerRight() {
  let elem = document.getElementById('dodger');
  let elemLeft = parseInt(elem.style.left);
  let leftPos = elemLeft + (Math.floor(Math.random() * elemLeft) + 1);
  document.getElementById('dodger').style.left = `${leftPos}px`;
}