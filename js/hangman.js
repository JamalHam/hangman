var anime=["naruto", "bleach", "onepiece", "dragonball", "inuyasha", "hunterxhunter", "pokemon", "digimon","monster", "onepunchman", "fairytail", "akira"]



var answerArray =[];
for(var i = 0; i < answerArray.length; i++){
    answerArray[i] = "_";
}

var leftoverLetters=hiddenSelection.length;


var maxAttempts = 10; // maximum number of attempts
var guessedLetters = [] //guessed letter empty array
var currentWord; //index of the current word in the array
var guessingWord = [] //word that is slowly built by the user as they try to match the array
var remainingGuesses = 0; //number of guesses left
var gameStarted = false; //start status
var gameFinished = false; //end status
var wins = 0; //Number of wins gained

function resetGame(){
    remainingGuesses = maxAttempts;
    gameStarted = false;
    
    var hiddenSelection = anime[Math.floor(Math.random()*anime.length)];
    
    guessedLetters = [];
    guessingWord = [];
    
    
    for(var i = 0; i < anime[currentWord].length; i++){
    guessingWord.push("_");
}
    updateDisplay();
    };

function updateDisplay{
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText =" ";
    
    for(var i = 0; i < guessingWord.length; i++){
        document.getElementById(currentWord).innerText += guessingWord[i];
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
            makeGuess(event.keytoLowerCase());
        }
    }
    
}

function makeGuess(letter){
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