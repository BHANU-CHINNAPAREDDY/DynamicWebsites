let numbers = [17, 31, 77, 20, 63];
let userInputEl = document.getElementById("userInput");
let indexOfNumberEl = document.getElementById("indexOfNumber");

function findIndexOfNumber(){
    let element = parseInt(userInputEl.value);
    let elementIndex = numbers.findIndex(function(eachElement){
        if(eachElement === element){
            return true;
        }
        else{
            return false;
        }
    });
    indexOfNumberEl.textContent = elementIndex;
}