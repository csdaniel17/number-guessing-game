//computer thinks of a number 1-100
//ask user for a guess

var compNum = Math.floor(Math.random() * 100);
//var compNum = 6;
//var playGuess = Number(prompt("Guess a number between 1-100, you only have 6 guesses!"));
var youWon = false;
//debugger

for (var numGuess = 1; numGuess <= 5; numGuess++) {
  var playGuess = Number(prompt("Guess a number"));
  if (playGuess > compNum) {
    console.log(playGuess + " is too high");
  } else if (playGuess < compNum) {
    console.log(playGuess + " is too low");
  } else if (playGuess === compNum) {
    youWon = true;
    break;
  }
}

if (youWon) {
  console.log("Correct! It was " + playGuess);
} else if (!youWon) {
  console.log("Sorry you lost!");
}
