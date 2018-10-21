var anime=["naruto", "bleach", "onepiece", "dragonball", "inuyasha", "hunterxhunter", "pokemon", "digimon","monster", "onepunchman", "fairytail", "akira"]

var hiddenSelection = anime[Math.floor(Math.random()*anime.length)];

var answerArray =[];

for(var i = 0; i < answerArray.length; i++){
    answerArray[i] = "_";
}

var leftoverLetters=hiddenSelection.length;

while (leftoverLetters > 0){
    
    alert(answerArray.join(" "));
    
    var guess = prompt("Guess a letter or quit");
    
    if(guess === null){
        break} else if(guess.length==!1){
            alert("please enter a single letter")
        }else{
            for( var j = 0; j < hiddenSelection.length; j++){
                if (hiddenSelection[j] === guess){
                    answerArray[j] = guess;
                    hiddenSelection--;
                }
            
            }
        }
    
}
