let counterElement = document.getElementById("counterValue");
console.log(counterElement)
function onIncrement(){
    let prevCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(prevCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;

    if(updatedCounterValue > 0){
        counterElement.style.color="green";
    }
    else if(updatedCounterValue < 0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
}

function onDecrement(){
    let prevCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(prevCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;

    if(updatedCounterValue > 0){
        counterElement.style.color="green";
    }
    else if(updatedCounterValue < 0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
}

function onReset(){
    let updatedCounterValue = 0;
    counterElement.textContent = updatedCounterValue;

    counterElement.style.color="black";
}