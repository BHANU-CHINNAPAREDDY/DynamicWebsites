
let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");

let userInputElement = document.getElementById("userInput");

let gameResultElement = document.getElementById("gameResult");

let randomNumber1 = Math.ceil(Math.random()*100);

let randomNumber2 = Math.ceil(Math.random()*100);

firstNumberElement.textContent = randomNumber1;
secondNumberElement.textContent = randomNumber2;

function checkResult(){
    let result = parseInt(randomNumber1) + parseInt(randomNumber2);
    let userInputValue = parseInt(userInputElement.value);
    
    if(result === userInputValue){
        gameResultElement.textContent = "Congratulations! You got it right.";
        gameResultElement.style.backgroundColor="green";
    }
    else{
        gameResultElement.textContent = "Please Try Again!";
        gameResultElement.style.backgroundColor="blue";
    }
}

function restartGame(){
    randomNumber1 = Math.ceil(Math.random()*100);

    randomNumber2 = Math.ceil(Math.random()*100);

    firstNumberElement.textContent = randomNumber1;
    secondNumberElement.textContent = randomNumber2;
    userInputElement.value="";
    gameResultElement.textContent= "";
}