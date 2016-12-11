function runGame() {

  function isNumber(message) {
    var numberToCheck = prompt(message);
    //  Filter out non-number entries
    while (!Number.isInteger(parseInt(numberToCheck))) {
      numberToCheck = prompt('Please try again.  Enter a NUMBER');
    }
    return parseInt(numberToCheck);
  }

  //  Have the user choose both numbers
  var minimum = isNumber('Please choose a minimum number');
  var maximum = isNumber('Please choose a maximum number');

  while (maximum <= minimum) {
    maximum = isNumber('The maximum must be larger than the minimum of ' + minimum + '.');
  }

  //  Create a random number
  var secret = getRandomNumber(minimum, maximum);

  //  Create a counter for the number of turns remaining
  var counter = 6;

  //  Write a loop for the user to guess the number
  while (counter > 0) {
    var guess = isNumber('Guess the number!');

    if (secret == guess) {
      alert('Congratulations!  You guessed the secret number!');
      break;
    } else if (secret >= guess) {
      alert('You guessed too low.');
    } else if (secret <= guess) {
      alert('You guessed too high.');
    } else {
      alert ('Error.');
    }

    counter --;
  }

  playAgain();

};

function playAgain() {
  var again = confirm('Play again?');

  if (again) {
    runGame();
  }

}

runGame();


//  Function to get a random number from specified constraints
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
