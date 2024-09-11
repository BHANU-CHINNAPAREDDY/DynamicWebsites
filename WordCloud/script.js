let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordsContainer");

let userInput = document.getElementById("userInput");

let errorMsg = document.getElementById('errorMsg');

let addBtn= document.getElementById('addBtn');


addBtn.onclick=function(){
    onAddWord();
}

function onAddWord(){
    let word = userInput.value;
    if(word === ""){
        errorMsg.textContent="Please enter a word";
    }
    else{
        errorMsg.textContent="";
        displayWord(word);
        userInput.value ="";
    }
    
}

function displayWord(word){
    let fontSize = Math.ceil(Math.random()*60)+"px";

    let span = document.createElement('span');
    span.classList.add('mr-2','p-2')
    span.style.fontSize=fontSize;

    span.textContent=word;

    wordsContainer.appendChild(span);
}

for(word of wordCloud){
    displayWord(word);
}
