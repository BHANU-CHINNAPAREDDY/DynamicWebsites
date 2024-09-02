
let bgColorInputElement = document.getElementById("bgColorInput");

let fontColorInputElement = document.getElementById("fontColorInput");

let fontSizeInputElement = document.getElementById("fontSizeInput");

let fontWeightInputElement = document.getElementById("fontWeightInput");

let paddingInputElement = document.getElementById("paddingInput");

let borderRadiusInputElement = document.getElementById("borderRadiusInput");

function apply(){
    let customButtonElement = document.getElementById("customButton");

    customButtonElement.style.backgroundColor= bgColorInputElement.value;
    customButtonElement.style.color = fontColorInputElement.value;
    customButtonElement.style.fontSize = fontSizeInputElement.value;
    customButtonElement.style.fontWeight = fontWeightInputElement.value;
    customButtonElement.style.padding = paddingInputElement.value;
    customButtonElement.style.borderRadius = borderRadiusInputElement.value;
    // console.log(customButtonElement.style);
}