// declaring the variables

var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];

// generating random letter from the alphabet array
var compLetter = alphabets[Math.floor(Math.random() * alphabets.length)];

console.log("Computer Choice: " + compLetter);

// defining the function
document.onkeyup = function(event){

// what key did the user press
var userGuess = event.key.toLowerCase();

// adding the user pressed key to the guesses that user made already array 
// only if it is an alphabet and hasn't been added  before
// and reducing the number of guesses left by one
if (alphabets.indexOf(userGuess) >= 0) {

	if (guessesMade.indexOf(userGuess) < 0) {

		guessesMade.push(userGuess);
		guessesLeft--;
		var guessesLeftCounter = document.getElementById("guessesLeftId");
		guessesLeftCounter.innerHTML = ("Guesses left: " + guessesLeft);
	}
}

// display the wrong guesses that you have already made
var wrongLetter = document.getElementById("guessesMadeId");
wrongLetter.innerHTML = ("Guesses you already made: " + guessesMade);

// counter for wins
if (userGuess == compLetter) {
	wins++;
	guessesMade = [];
	guessesLeft = 9;
	var victory = document.getElementById("winsId");
	victory.innerHTML = ("Wins: " + wins);
	compLetter = alphabets[Math.floor(Math.random() * alphabets.length)];
	console.log("Computer Choice: " + compLetter);
}
// counter for losses
if (guessesLeft ==0) {
	losses++;
	guessesLeft = 9;
	guessesMade = [];
	var youLose = document.getElementById("lossesId");
	youLose.innerHTML = ("Losses: " + losses );
	compLetter = alphabets[Math.floor(Math.random() * alphabets.length)];
	console.log("Computer Choice: " + compLetter);

}
// counter for wrong guesses
// else if (userGuess != compLetter && alphabets.indexOf(userGuess) >= 0 && guessesLeft > 0) {
// 	guessesLeft--;
// 	var guessesLeftCounter = document.getElementById("guessesLeftId");
// 	guessesLeftCounter.innerHTML = ("Guesses left: " + guessesLeft);
// // counter for losses
// }else{ 
// 	// (guessesLeft == 0);
// 	losses++;
// 	guessesLeft = 9;
// 	guessesMade = [];
// 	var youLose = document.getElementById("lossesId");
// 	youLose.innerHTML = ("Losses: " + losses );
// 	compLetter = alphabets[Math.floor(Math.random() * alphabets.length)];
// 	console.log("Computer Choice: " + compLetter);
// }

// console.log("User Guesses: " + guessesMade);

}