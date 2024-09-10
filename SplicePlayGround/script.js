let arr = [1, 7, 3, 1, 0, 20, 77];
let startIndexInputE1 = document.getElementById("startIndexInput");
let deleteCountInputE1 = document.getElementById("deleteCountInput");
let itemToAddInputE1 = document.getElementById("itemToAddInput");
let updatedArrayE1 = document.getElementById("updatedArray");
let spliceBtnE1 = document.getElementById("spliceBtn");
// Initially Add array contents to html span element.
stringifyArray(arr);

function stringifyArray(arr){
    let stringifiedArray =  JSON.stringify(arr);
    updatedArrayE1.textContent= stringifiedArray;
}

spliceBtnE1.onclick=function(){
 let startIndex = startIndexInputE1.value;
 let deleteCount = deleteCountInputE1.value;
 let itemToAdd  = itemToAddInputE1.value;
 
 if(startIndex === ""){
    alert("Please enter the start index!");
 }

 if(deleteCount === ""){
    deleteCount = 0;
 }
 if (itemToAdd===""){
    arr.splice(startIndex,deleteCount);
 }
 else{
    arr.splice(startIndex,deleteCount,itemToAdd);
 }
 updatedArrayE1.textContent = JSON.stringify(arr);
 startIndexInputE1.value ="";
 deleteCountInputE1.value ="";
 itemToAddInputE1.value="";
}
