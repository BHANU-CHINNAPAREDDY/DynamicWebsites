let userInputEl = document.getElementById('userInput');
let requestBodyEl = document.getElementById('requestBody');
let sendPutRequestBtnEl = document.getElementById('sendPutRequestBtn');
let requestStatusEl = document.getElementById('requestStatus');
let httpResponseEl = document.getElementById('httpResponse');
let loadingEl = document.getElementById('loading');

function display(result){
    loadingEl.classList.toggle('d-none');
    requestStatusEl.textContent = result.code;
    httpResponseEl.textContent = JSON.stringify(result);
}

function putRequest(){
    loadingEl.classList.toggle('d-none');

    let url = "https://gorest.co.in/public-api/users/"+userInputEl.value;
    let data = JSON.parse(requestBodyEl.value);
    // console.log(data); 
    
    let options = {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            Accept:'application/json',
            Authorization:"Bearer 4b1faf484814d0c7eccfe4b26298e173950e3d8f7da0c30e97bb7922850fc98b"
        },
        body: JSON.stringify(data)
    }

    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        display(result);
    })
}

sendPutRequestBtnEl.addEventListener('click', putRequest);