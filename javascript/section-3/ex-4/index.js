


function operateOnArray(arr, operationFn) {
    return arr.map(operationFn);
  }

 

  function operationFn(num){
   
    return num*num;
   
  }

  const numbers = [1, 2, 3, 4, 5];

  const result=operateOnArray(numbers,operationFn);
  console.log(result);