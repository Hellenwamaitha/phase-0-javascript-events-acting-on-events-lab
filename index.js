// Your code here
function moveDodgerLeft() {
    let dodger = document.getElementById('dodger');
    let currentLeft = parseInt(dodger.style.left) || 0;
    let newLeft = currentLeft - 1;
  
    // Set the new left position
    dodger.style.left = newLeft + 'px';
  }
  function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let currentLeft = parseInt(dodger.style.left) || 0;
    let newLeft = currentLeft + 1;
  
    // Set the new left position
    dodger.style.left = newLeft + 'px';
  }
  function moveDodgerRight() {
    var dodger = document.getElementById('dodger');
    var currentLeft = parseInt(dodger.style.left) || 0;
    var newLeft = currentLeft + 1;
  
    // Set the new left position
    dodger.style.left = newLeft + 'px';
  }
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  function moveDodgerRight() {
    var dodger = document.getElementById('dodger');
    var currentLeft = parseInt(dodger.style.left) || 0;
    var dodgerWidth = 40; // Width of the dodger
  
    var gameWidth = document.getElementById('game').offsetWidth; // Width of the game field
    var currentRight = currentLeft + dodgerWidth; // Calculate the right edge of the dodger
  
    if (currentRight < gameWidth) {
      var newLeft = currentLeft + 1;
  
      // Set the new left position
      dodger.style.left = newLeft + 'px';
    }
  }
  