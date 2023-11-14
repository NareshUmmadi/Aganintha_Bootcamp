


  function composeWithReduce(functions){

    return function(num){

    //  return  functions.reduceRight((result,fan)=> fan(result),num);
        let result=num;
        for(let fanc of functions.reverse()){
               
          result=fanc(result);

        }
        return result;
       
    }
    
  }


  const add7=(x)=>x+7;
  const multiply3=(x)=>x*3;
  const subtract4=(x)=>x-4;

        

  const composedFunction=composeWithReduce([add7,multiply3,subtract4]);

  const result=composedFunction(25);

  console.log(result);