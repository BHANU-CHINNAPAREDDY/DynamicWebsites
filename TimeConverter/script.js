let hoursInputEl = document.getElementById('hoursInput');
let minutesInputEl = document.getElementById('minutesInput');
let convertBtn = document.getElementById('convertBtn');
let timeInSecondsEl = document.getElementById('timeInSeconds');
let errorMsgEl = document.getElementById('errorMsg');

convertBtn.onclick= function(){
    let hours = hoursInputEl.value;
    let minutes = minutesInputEl.value;
    if(hours === ""){
        timeInSecondsEl.textContent ="";
        timeInSecondsEl.classList.remove('answer');
        errorMsgEl.textContent = "Please enter a valid number of hours." 
    }
    else if(minutes === ""){
        timeInSecondsEl.textContent ="";
        timeInSecondsEl.classList.remove('answer');
        errorMsgEl.textContent = "Please enter a valid number of minutes."
    }
    else{
        errorMsgEl.textContent = "";
        let seconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;
        timeInSecondsEl.textContent = seconds;
        timeInSecondsEl.classList.add('answer');
    }
}