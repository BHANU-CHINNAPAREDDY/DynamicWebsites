let aboutButton = document.getElementById("aboutButton");
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");


let aboutTabElement= document.getElementById("aboutTab");

let timeToVisitTabElement =document.getElementById("timeToVisitTab");

let attractionsTabElement = document.getElementById("attractionsTab");


timeToVisitTabElement.classList.add("d-none");
attractionsTabElement.classList.add("d-none");

function aboutVaranasi(){

    aboutButton.classList.add("selected-button");
    timeToVisitButton.classList.remove("selected-button");
    attractionsButton.classList.remove("selected-button");

    aboutTabElement.classList.remove("d-none");
    timeToVisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.add("d-none");
}

function timeToVisitVaranasi(){
    
    timeToVisitButton.classList.add("selected-button");
    aboutButton.classList.remove("selected-button");
    attractionsButton.classList.remove("selected-button");

    timeToVisitTabElement.classList.remove("d-none");
    aboutTabElement.classList.add("d-none");
    attractionsTabElement.classList.add("d-none");
}

function attractionsInVaranasi(){
    attractionsButton.classList.add("selected-button");
    aboutButton.classList.remove("selected-button");
    timeToVisitButton.classList.remove("selected-button");

    attractionsTabElement.classList.remove("d-none");
    aboutTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.add("d-none");
}