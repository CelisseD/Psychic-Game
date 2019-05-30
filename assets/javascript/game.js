// VARIABLES

var wins = 0;
var losses = 0;
var guessLeft = 10;

// Declares an empty array to hold our guesses
var guessSoFar = [];

// Declares an array of letters for the computer to choose at random
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Empty array holding letters the computer guessed
var computerGuess = "";

// Function that forces computer to choose a random letter of the computerChoices array
function compSelectRandomLetter() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// Function that updates score on HTML
function updateScores () {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessLeft").innerHTML = guessLeft;
    document.querySelector("#guessSoFar").innerHTML = guessSoFar;
}

// Function to reset scores at the end of 9 tries
function resetScores() {
    guessLeft = 10;
    guessSoFar = [];
}

// Call the function to run it
compSelectRandomLetter();
// log this so we can test if it is working
console.log("Computer Guess " + computerGuess)

// Start the game by pressing a key using document.onkeyup
// toLowerCase changes whatever the user presses into lowercase to match the computer array
document.onkeyup = function(event) {
    guessLeft --;
    var userGuess = event.key.toLowerCase();
    guessSoFar.push(userGuess);
    updateScores();

// If Else statement that says  what happens when the game is being played.

    if (userGuess === computerGuess) {
        wins++;
        updateScores();
        resetScores();
        compSelectRandomLetter();
    }

// If statement that says to update losses once guessLeft reaches 0
    if (guessLeft === 0) {
        losses++;
        updateScores();
        resetScores();
    }

}

