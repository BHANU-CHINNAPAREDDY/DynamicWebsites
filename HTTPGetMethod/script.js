let buttonEl = document.getElementById("sendGetRequestBtn");
let spinnerEl = document.getElementById('loading');
let requestStatusEl = document.getElementById('requestStatus');
let httpResponseEl = document.getElementById('httpResponse');


function display(result) {
    spinnerEl.classList.toggle('d-none');
    requestStatusEl.textContent = result.code;
    httpResponseEl.textContent = JSON.stringify(result);
    // console.log(result);

}

function httpRequest() {
    spinnerEl.classList.toggle('d-none');
    let url = 'https://gorest.co.in/public-api/users';
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            display(result);
        });
}
buttonEl.onclick = function() {
    httpRequest();
}