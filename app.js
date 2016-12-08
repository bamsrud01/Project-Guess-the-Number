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

//Create a counter for the number of turns remaining

//Write a loop for the user to guess the number
  //Check to see if the number is correct
  //Inform the user if the number is higher or lower
  //Track the turns remaining

//After completion, inform the player of the correct number and total turns used

//Ask the player to play again.


//  Function to get a random number from specified constraints
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
