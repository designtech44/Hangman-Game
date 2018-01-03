// GLOBAL VARIABLES
//-------------------------------------

var wordOptions = ["aces", "remington", "winchester", "horse", "carriage", "pistols", "sheriff", "yeehaw", "buckaroo", "howdy", "saddle"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];


var winCount = 0;
var lossCount = 0;
var guessesLeft = 15;


//FUNCTIONS
//-------------------------------------

function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;


	guessesLeft = 15;
	wrongLetters = [];
	blanksAndSuccesses = [];

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}


	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;


//TESTING BELOW
	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if (selectedWord[i] == letter) {
			isLetterInWord = true;

		}
	}

	if(isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if (selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}

	else {
		wrongLetters.push(letter);
		guessesLeft--
	}

	console.log(blanksAndSuccesses);

}


function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + guessesLeft);

	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML =  blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

	if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You're a winner, No Hanging for you!");

		document.getElementById("winCounter").innerHTML = winCount;

		startGame();
	}

	else if (guessesLeft == 0) {
		lossCount++;
		alert("Well this ain't your lucky day. You Lost");

		document.getElementById("lossCounter").innerHTML = lossCount.join();

		startGame();
	}
}


//MAIN PROCESS
//--------------------------------------

startGame();

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	console.log(letterGuessed);
}
