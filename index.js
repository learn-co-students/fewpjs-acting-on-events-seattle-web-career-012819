// Your code here

console.log('loaded');

document.addEventListener('keydown', (e) => {
  console.log(e.which);
  if (e.which === 37) {
    moveDodgerLeft();
  } else if (e.which === 39) {
    moveDodgerRight();
  }
})

const moveDodgerLeft = () => {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  dodger.style.left = `${left - 1}px`
}

const moveDodgerRight = () => {
  console.log('fired right');
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  dodger.style.left = `${left + 1}px`
}