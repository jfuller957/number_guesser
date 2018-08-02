/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - win
    gameOver(true, `${winningNum} is correct, You Win!`);
  } else {
    // Wrong number guessed
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - lose
      gameOver(
        false,
        `Game Over, you lose.  The correct number was ${winningNum}`
      );
    } else {
      // Game continues - answers wrong

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear input
      guessInput.value = '';

      // Tell user their guess is wrong
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left!`);
    }
  }
});

// Game over function
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Change text color
  message.style.color = color;
  // Set message
  setMessage(msg);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
