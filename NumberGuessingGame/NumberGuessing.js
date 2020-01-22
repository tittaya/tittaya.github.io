var ans = Math.floor(Math.random()*100)+1;
var guessCount = 1;
let previous = document.getElementById("previous-number");
let submitBotton = document.getElementById("submit");
var guessField = document.getElementById("number");
var result = document.getElementById("result");
var hint = document.getElementById("hint");
var showans = document.getElementById("show-answer");
var showansBox = document.getElementById("show-answer-box");
var restart = document.getElementById("restart");
var resultBox = document.getElementById("resultBox");
var hintBox = document.getElementById("hint-box");

guessField.focus();
restart.style.visibility = "hidden";
restart.disabled = true;
showansBox.style.visibility = "hidden";
hintBox.style.visibility = "hidden";
resultBox.style.visibility = "hidden";
submitBotton.addEventListener('click', function(){
    if(guessCount <= 5){
        var userGuess = Number(guessField.value);
        previous.innerHTML += userGuess  + " ";
    }

    if(guessCount > 5){
       resultBox.style.visibility = "visible";
       result.innerHTML = "GAME OVER!!!"
       hintBox.style.visibility = "hidden";
       showansBox.style.visibility = "visible";
       showans.innerHTML = "The right answer is : " + ans;
       disableForm();
       restart.style.visibility = "visible";
       restart.disabled = false;
       restart.scrollIntoView();
    }else{
        if(userGuess == ans){
            resultBox.style.visibility = "visible";
            resultBox.className = "callout callout-success";
            result.innerHTML = "YOU WIN!!!!";
            hintBox.style.visibility = "hidden";
            disableForm();
            restart.style.visibility = "visible";
            restart.disabled = false;
            restart.scrollIntoView();
        }else{
            if(userGuess > ans){
                resultBox.style.visibility = "visible";
                result.innerHTML = "WRONG!!!";
                resultBox.className = "callout callout-danger";
                hint.innerHTML = "Your guess is too high!";
                hintBox.style.visibility = "visible";
                guessField.focus();
            }else{
                if(userGuess < ans){
                resultBox.style.visibility = "visible";
                result.innerHTML = "WRONG!!!";
                resultBox.className = "callout callout-danger";
                hint.innerHTML = "Your guess is too low!";
                hintBox.style.visibility = "visible";
                guessField.focus();
                }
            }
        }
        guessCount++;
        guessField.value = "";
    }

});

restart.addEventListener('click', function(){location.reload();});

function disableForm() {
    var wholeForm = document.querySelector(".Answerbox"); 
    wholeForm.style.opacity = 0.5; 
    guessField.setAttribute("disabled", "disabled");
    submitBotton.setAttribute("disabled", "disabled"); 
  }
  