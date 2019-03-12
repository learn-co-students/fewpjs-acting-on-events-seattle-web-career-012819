// Your code here
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerUp(){
   var heightNumbers = dodger.style.bottom.replace('px', '')
   var height = parseInt(heightNumbers, 10)

   if (height > 0) {
      dodger.style.bottom = `${height + 1}px`
   }
}

function moveDodgerDown(){
   var heightNumbers = dodger.style.bottom.replace('px', '')
   var height = parseInt(heightNumbers, 10)

   if (height > 0) {
      dodger.style.bottom = `${height - 1}px`
   }
}
document.addEventListener('keydown', function(key) {
  if (key.which === 37) {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(key) {
  if (key.which === 39) {
    moveDodgerRight()
  }
})

document.addEventListener('keydown', function(key) {
  if (key.which === 38) {
    moveDodgerUp()
  }
})

document.addEventListener('keydown', function(key) {
  if (key.which === 40) {
    moveDodgerDown()
  }
})
