var selectableWords = ["naruto", "bleach", "onepiece", "dragonball", "inuyasha", "hunterxhunter", "pokemon", "digimon", "monster", "onepunchman", "fairytail", "akira"];


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
	document.getElementById("pressKeyTryAgain").style.cssText = "display: none";
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

document.onkeydown = function(event){
	//reset if we finish a game
	if(hasFinished){
		resetGame();
		hasFinished = false;
	}else{
		//check to make sure a-z clicked
		if(event.keyCode >= 65 && event.keycode <=90){
			makeGuess(event.key.toLowerCase());
		}
	}
	
};

///Guessing Function

function makeGuess(letter) {
	if(remainingGuesses > 0){
		if(!gameStarted){
			gameStarted = true;
		}
		if(guessedLetters.indexOf(letter) === -1){
			guessedLetters.push(letter);
			evaluateGuess(letter);
		}
		
	}
	
	updateDisplay();
	checkWin();
};

/////Check guesses
function evaluateGuess(letter){
	var positions = [];
	
	for(var i = 0; i < SelectableWords[currentWordIndex].length; i++){
		if(selectableWords[currentWordIndex][i] === letter){
		positions.push(i);
		}
			
	}
	if (positions.length <= 0){
		remainingGuesses--
		updateHangmanImage();
	}else{
		for(var i = 0; i < positions.length; i++){
			guessingWord[positions[i]] = letter;
		}
	}

};


function Checkwin(){
	if(guessingWord.indexOf("_") === -1){
		document.getElementById("youwin-image").style.cssText = "display: block";
		document.getElementById("pressKeyTryAgain").style.cssText = "display: block";
		winss++;
		hasFinished = true;
		
	}
};















