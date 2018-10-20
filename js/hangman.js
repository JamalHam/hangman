var anime=["naruto", "bleach", "onepiece", "dragonball", "inuyasha", "hunterxhunter", "pokemon", "digimon","monster", "onepunchman", "fairytail", "akira"]

var hiddenSelection = anime[Math.floor(Math.random()*anime.length)];

var answerArray =[];

for(var i = 0; i < answerArray.length; i++){
    answerArray[i] = "_";
}

var leftoverLetters=hiddenSelection.length;