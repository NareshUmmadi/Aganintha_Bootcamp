

  function calculate(a , b,operationFn){
      
    return operationFn(a,b);

  }



  const add=(a,b)=>a+b;
  const multiply=(a,b)=>a*b;
  const subtract=(a,b)=>a-b;
  const division=(a,b)=>(b!==0 ? a/b :"cannot divide");

    const result=calculate(10,5,division);

    console.log(result);


     