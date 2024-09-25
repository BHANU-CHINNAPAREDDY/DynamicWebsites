let searchInputEl = document.getElementById('searchInput');
let searchResultsEl = document.getElementById('searchResults');
let spinnerEl = document.getElementById('spinner');

function createAndAppendSearchResult(result){

    let {title, link , description} = result;
    
    // Div container -css: result-item
    let resultItemEl = document.createElement('div');
    resultItemEl.classList.add('result-item');
    searchResultsEl.appendChild(resultItemEl);

    // Anchor title -    result-title
    let resultTitleEl = document.createElement('a');
    resultTitleEl.classList.add('result-title');
    resultTitleEl.textContent = title;
    resultTitleEl.href = link;
    resultTitleEl.target = '_blank'
    resultItemEl.appendChild(resultTitleEl);


    // title break
    let titleBreak = document.createElement('br');
    
    resultItemEl.appendChild(titleBreak);
    // Anchor url   -       result-url
    let urlEl = document.createElement('a');
    urlEl.classList.add('result-url');
    urlEl.href = link;
    urlEl.target = '_blank';
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);
    
    // Line break
    let lineBreakEl = document.createElement('br');
    resultItemEl.appendChild(lineBreakEl);
    
    // Paragraph description - line-description
    let descriptionEl = document.createElement('p');
    descriptionEl.classList.add('line-description');
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);
}

function displayResults(searchResults){
    // let result = searchResults[0];
    spinnerEl.classList.toggle('d-none');
    for(let result of searchResults){
        createAndAppendSearchResult(result);
    }
}

function searchWikipedia(event){
    if(event.key === 'Enter'){
        searchResultsEl.textContent ="";
        spinnerEl.classList.toggle('d-none');

        let searchInput = searchInputEl.value;
        // alert(searchInput);
        let url = "https://apis.ccbp.in/wiki-search?search="+ searchInput;
        let options={
            method : "GET"
        }
        fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let {search_results} = jsonData;
            displayResults(search_results);
        })
    }
}

searchInputEl.addEventListener('keydown', searchWikipedia);