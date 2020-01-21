var ans = Math.floor(Math.random()*100)+1;
var guessCount = 1;
let previous = document.getElementById("previous-number");
let submitBotton = document.getElementById("submit");
var guessField = document.getElementById("number");
var result = document.getElementById("result");
var hint = document.getElementById("hint");
var showans = document.getElementById("show-answer");


submitBotton.addEventListener('click', function(){
    var userGuess = Number(guessField.value);
    previous.innerHTML += userGuess  + " ";

    if(guessCount == 5){
       result.innerHTML = "GAME OVER!!!"
       hint.innerHTML = "";
       showans.innerHTML = "The right answer is : " + ans;
       disableForm();
       
    }else{
        if(userGuess == ans){
            result.innerHTML = "YOU WIN!!!!";
            hint.innerHTML = "";
            disableForm();
        }else{
            if(userGuess > ans){
                result.innerHTML = "WRONG!!!";
                hint.innerHTML = "Your guess is too high!";

            }else{
                if(userGuess < ans){
                result.innerHTML = "WRONG!!!";
                hint.innerHTML = "Your guess is too low!";
                }
            }
        }
        guessCount++;
        guessField.value = "";
    }

});

function disableForm() {
    var wholeForm = document.querySelector(".Answerbox"); 
    wholeForm.style.opacity = 0.5; 
    guessField.setAttribute("disabled", "disabled");
    guessSubmit.setAttribute("disabled", "disabled"); 
  }
  