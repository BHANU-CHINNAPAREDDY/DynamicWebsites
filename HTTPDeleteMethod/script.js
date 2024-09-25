let userInputEl = document.getElementById('userInput');
let sendDeleteRequestBtnEl = document.getElementById('sendDeleteRequestBtn');
let requestStatusEl = document.getElementById('requestStatus');
let httpResponseEl = document.getElementById('httpResponse');
let loadingEl = document.getElementById('loading');

function display(result){
    loadingEl.classList.toggle('d-none');
    requestStatusEl.textContent = result.code;
    httpResponseEl.textContent = JSON.stringify(result);
}

function deleteMethod(){
    loadingEl.classList.toggle('d-none');
    
    let url = 'https://gorest.co.in/public-api/users/'+userInputEl.value;
    let options = {
        method : "DELETE",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer 4b1faf484814d0c7eccfe4b26298e173950e3d8f7da0c30e97bb7922850fc98b"
        }
    };
    fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        display(result);
    });
}

sendDeleteRequestBtnEl.addEventListener('click', deleteMethod);