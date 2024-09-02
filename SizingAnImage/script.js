let imageElement = document.getElementById("image");

let originalImageWidth = 200;
let maxImageWidth = 300;
let minImageWidth = 100;

imageElement.style.width = originalImageWidth+"px";

let warningMessageElement= document.getElementById("warningMessage");

let imageWidthElement = document.getElementById("imageWidth");

imageWidthElement.textContent = imageElement.style.width;

function decreaseImageSize(){
    if (originalImageWidth <= minImageWidth){
        warningMessageElement.textContent="Can't Visible. Increase the size of the Image."
    }
    else{
        originalImageWidth -= 5;
        imageElement.style.width = originalImageWidth+"px"
        imageWidthElement.textContent= imageElement.style.width;
        warningMessageElement.textContent="";
    }
}

function increaseImageSize(){
    if (originalImageWidth >= maxImageWidth){
        warningMessageElement.textContent="Too big. Decrease the size of the Image."
    }
    else{
        originalImageWidth += 5;
        imageElement.style.width = originalImageWidth+"px"
        imageWidthElement.textContent= imageElement.style.width;
        warningMessageElement.textContent="";
    }
}