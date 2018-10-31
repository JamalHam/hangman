var anime=["naruto", "bleach", "onepiece", "dragonball", "inuyasha", "hunterxhunter", "pokemon", "digimon", "monster", "onepunchman", "fairytail", "akira"];


const maxAttempts = 10; // maximum number of attempts
var guessedLetters = []; //guessed letter empty array
var currentWord; //index of the current word in the array
var guessingWord = []; //word that is slowly built by the user as they try to match the array
var remainingGuesses = 0; //number of guesses left
var gameStarted = false; //start status
var gameFinished = false; //end status
var wins = 0; //Number of wins gained



// Reset our game-level variables
function resetGame() {
    remainingGuesses = maxAttempts;
    gameStarted = false;

    // Use Math.floor to round the random number down to the nearest whole.
    currentWordIndex = anime[Math.floor(Math.random() * anime.length)];

    // Clear out arrays
    guessedLetters = [];
    guessingWord = [];

    // Build the guessing word and clear it out
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }


    // Show display
    updateDisplay();
};

function updateDisplay{
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText =" ";
    
    for(var i = 0; i < guessingWord.length; i++){
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    
    if(remainingGuesses <= 0 ){
        document.getElementById("pressKeyTryAgain").style.cssText = "display: block";
        gameFinished = true;
    }
}

document.onkeydown = function(event){
    if(gameFinished){
        resetGame();
        gameFinished = false;
    }else{
        if(event.keycode >= 65 && event.keycode =< 90){
            makeGuess(event.key.toLowerCase());
        }
    }
}

function makeGuess(letter){
    if(remainingGuesses > 0){
        if(!gameStarted){
            gameStarted = true;
        }//checking letters to see if they have been pushed
        if(guessedLetters.indexOf(letter) === -1){
        guessedLetters.push(letter);
        evaluateGuess(letter);
        }
    }
    updateDisplay();
    checkWin();
};

function evaluateGuess(letter){
    var positions = [] //array for storing letter positions
    
    for(var i = 0; i < anime[currentWord].length; i++){
        if(anime[currentWord[i]] === letter){
            positions.push(i)
        }
    }
    
    if(positions.length <= 0){
    remainingGuesses--;
    } else {
        for(var i = 0; i < positions.length; i++){
            anime[positions[i]] = letter;
        }
    }
};

function checkWin{
    if(anime.indexOf("_") === -1){
        document.getElementById("pressKeyTryAgain").style.cssText="display: block";
        wins++;
        gameFinished = true;
    }
}