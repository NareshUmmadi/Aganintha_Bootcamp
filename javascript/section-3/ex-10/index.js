 

   function memoize(expensiveOperationFn){
         
    const cache={};

     return function(arg){
        if(cache[arg]===undefined){
        cache[arg]=expensiveOperationFn(arg);
        }
        return cache[arg];
     };
        

   }


   function fibonacci(num){
    if(num<=1){
        return num
    }
    else{
        return fibonacci(num-1)+fibonacci(num-2);
    }
   }


   const memoizeFunc=memoize(fibonacci);

   console.log(memoizeFunc(6));





