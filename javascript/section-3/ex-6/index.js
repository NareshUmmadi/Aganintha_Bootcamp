

function sortNumbers(numberArray,compareFn){
    
    return numberArray.sort(compareFn);

}



function comapreAscending(a,b){
    return a-b;
}

     const numbers=[25,36,4,9,78,25,26,35];

     const result=sortNumbers(numbers,comapreAscending);

     console.log(result);
