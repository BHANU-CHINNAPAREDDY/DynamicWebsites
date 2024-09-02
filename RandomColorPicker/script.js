
let bgColors = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0","#184b73","#883e7f","#ed048b"];

let bgContainer = document.getElementById("bgContainer");

bgContainer.style.backgroundColor=bgColors[0];

function changeColor(){
    let bgColorslenght = bgColors.length;
    let randomIndex = Math.ceil(Math.random()*bgColorslenght);
    // console.log(randomIndex);
    let randomBgColor = bgColors[randomIndex];
    // console.log(randomBgColor);
    bgContainer.style.backgroundColor = randomBgColor;
}