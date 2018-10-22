var anime=["naruto", "bleach", "onepiece", "dragonball", "inuyasha", "hunterxhunter", "pokemon", "digimon","monster", "onepunchman", "fairytail", "akira"]

var hiddenSelection = anime[Math.floor(Math.random()*anime.length)];

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