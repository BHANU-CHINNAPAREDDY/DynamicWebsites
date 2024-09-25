let sendPostRequestBtnEl = document.getElementById('sendPostRequestBtn');
let requestBodyEl = document.getElementById('requestBody');
let requestStatusEl = document.getElementById('requestStatus');
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById('loading');

function display(result){
    // requestBodyEl.value ="";
    loadingEl.classList.toggle('d-none');
    requestStatusEl.textContent =  result.code;
    httpResponseEl.textContent = JSON.stringify(result);
}
function postRequest(){
    requestStatusEl.textContent ="";
    httpResponseEl.textContent ="";
    loadingEl.classList.toggle('d-none');
    let requestBody = requestBodyEl.value;
    requestBody = JSON.parse(requestBody);
    // requestBody = JSON.stringify(requestBody);
    // console.log(requestBody);

    let url ='https://gorest.co.in/public-api/users';
    let options = {
        method : "POST",
        headers:{
            "Content-Type":"application/json",
            Accept : "application/json",
            Authorization : "Bearer 4b1faf484814d0c7eccfe4b26298e173950e3d8f7da0c30e97bb7922850fc98b"
        },
        body: JSON.stringify(requestBody)
    };
    fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        display(result);
    })
}

sendPostRequestBtnEl.addEventListener('click', postRequest);