
let billAmountElement = document.getElementById("billAmount");
let percentageTipElemet = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");
let errorMessage = "Please enter a valid Input";
// console.log(billAmount);
// console.log(billPercentage);
// console.log(tipAmount);
// console.log(totalAmount);

function calculateTip(){
    let billAmountValue = billAmountElement.value;
    let percentageTipValue = percentageTipElemet.value;
    if(billAmountValue === ""){
        errorMessageElement.textContent= errorMessage;
    }
    else if(percentageTipValue=== ""){
        errorMessageElement.textContent= errorMessage;
    }
    else{
        errorMessageElement.textContent="";
        let billAmount = parseInt(billAmountValue);
        let percentageTip = parseInt(percentageTipValue);
        let tipAmount = (percentageTip/100) * billAmount;
        let totalAmount = billAmount + tipAmount;
        tipAmountElement.value = tipAmount;
        totalAmountElement.value = totalAmount;
    }
}