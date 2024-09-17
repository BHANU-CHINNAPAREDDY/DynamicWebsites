let twentySecondsBtn = document.getElementById('twentySecondsBtn');
let thirtySecondsBtn = document.getElementById('thirtySecondsBtn');
let fortySecondsBtn = document.getElementById('fortySecondsBtn');
let oneMinuteBtn = document.getElementById('oneMinuteBtn');
let timerTextEl = document.getElementById('timerText');

let counter=null;
let intervalid = null;

twentySecondsBtn.onclick = function(){
    clearInterval(intervalid);
    counter = 20;
    timerTextEl.textContent = counter +" seconds left";
    intervalid = setInterval(function(){
        counter = counter - 1;
        timerTextEl.textContent = counter +" seconds left";
        if(counter === 0){
            timerTextEl.textContent = "Your Moment is completed";
            clearInterval(intervalid);
        }
    },1000);
}

thirtySecondsBtn.onclick = function(){
    clearInterval(intervalid);
    counter = 30;
    timerTextEl.textContent = counter +" seconds left";
    intervalid = setInterval(function(){
        counter = counter - 1;
        timerTextEl.textContent = counter +" seconds left";
        if(counter === 0){
            timerTextEl.textContent = "Your Moment is completed";
            clearInterval(intervalid);
        }
    },1000);
}

fortySecondsBtn.onclick = function(){
    clearInterval(intervalid);
    counter = 40;
    timerTextEl.textContent = counter +" seconds left";
    intervalid = setInterval(function(){
        counter = counter - 1;
        timerTextEl.textContent = counter +" seconds left";
        if(counter === 0){
            timerTextEl.textContent = "Your Moment is completed";
            clearInterval(intervalid);
        }
    },1000);
}

oneMinuteBtn.onclick = function(){
    clearInterval(intervalid);
    counter = 60;
    timerTextEl.textContent = counter +" seconds left";
    intervalid = setInterval(function(){
        counter = counter - 1;
        timerTextEl.textContent = counter +" seconds left";
        if(counter === 0){
            timerTextEl.textContent = "Your Moment is completed";
            clearInterval(intervalid);
        }
    },1000);
}