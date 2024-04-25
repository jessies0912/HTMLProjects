// Function to play sound
function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
  }
  
  // Function to handle button click or key press
  function handleSound(buttonLetter) {
    // Play the corresponding sound
    switch(buttonLetter) {
      case 'w':
        playSound('./sounds/crash.mp3');
        break;
      case 'a':
        playSound('./sounds/kick-bass.mp3');
        break;
      case 's':
        playSound('./sounds/snare.mp3');
        break;
      case 'd':
        playSound('./sounds/tom-1.mp3');
        break;
      case 'j':
        playSound('./sounds/tom-2.mp3');
        break;
      case 'k':
        playSound('./sounds/tom-3.mp3');
        break;
      case 'l':
        playSound('./sounds/tom-4.mp3');
        break;
      default:
        console.error('Invalid button letter:', buttonLetter);
    }
    
    // Add flashing effect
    var button = document.querySelector('.' + buttonLetter);
    button.classList.add('pressed');
    setTimeout(function() {
      button.classList.remove('pressed');
    }, 100);
  }
  
  // Add event listeners to each button
  var buttons = document.querySelectorAll('.drum');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      var buttonLetter = this.textContent;
      handleSound(buttonLetter);
    });
  }
  
  // Add event listener to listen for keyboard keys
  document.addEventListener('keydown', function(event) {
    var key = event.key;
    // Check if the pressed key corresponds to any button
    if (['w', 'a', 's', 'd', 'j', 'k', 'l'].includes(key)) {
      handleSound(key);
    }
  });
  