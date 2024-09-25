let jokeTextEl = document.getElementById('jokeText');
let spinnerEl = document.getElementById('spinner');
let jokeBtnEl = document.getElementById('jokeBtn');

function display(result){
    spinnerEl.classList.toggle('d-none');
    jokeTextEl.textContent =  result.value;
}

function randomJoke(){
    spinnerEl.classList.toggle('d-none');
    
    let url = 'https://apis.ccbp.in/jokes/random';
    let options = {
        method : "GET"
    }

    fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        display(result);
    });
}

jokeBtnEl.addEventListener('click', randomJoke);