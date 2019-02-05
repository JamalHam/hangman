var selectableWords=["naruto", "bleach", "onepiece", "dragonball", "inuyasha", "hunterxhunter", "pokemon", "digimon", "monster", "onepunchman", "fairytail", "akira"];


const maxTries = 10; // maximum number of attempts
var guessedLetters = []; //guessed letter empty array
var currentWordIndex; //index of the current word in the array
var guessingWord = []; //word that is slowly built by the user as they try to match the array
var remainingGuesses = 0; //number of guesses left
var gameStarted = false; //start status
var hasFinished = false; //end status
var wins = 0; //Number of wins gained

///////////////////////////////////////////////////////////////Acurate

function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    // Use Math.floor to round the random number down to the nearest whole.
    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    // Clear out arrays
    guessedLetters = [];
    guessingWord = [];
	
	document.getElementById('hangmanImage').src = "";
	
    // Build the guessing word and clear it out
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }
	
	//hide game over and win images
	document.getElementById("pressKeytryAgain").style.cssText = "display: none";
	document.getElementById("gameover-image").style.cssText = "display: none";
	document.getElementById("youwin-image").style.cssText = "display: none";
	
    // Show display
    updateDisplay();
};

///reset function complete

//display function start

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    
    for(var i = 0; i < guessingWord.length; i++){
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    
    if(remainingGuesses <= 0){
		document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display: block";
        hasFinished = true;
    }
}
//update display finished

//update yo man
function updateHangmanImage() {
	document.getElementById("hamgmanImage").src = "images/" + (maxtries - remainingGuesses) + ".png"
}