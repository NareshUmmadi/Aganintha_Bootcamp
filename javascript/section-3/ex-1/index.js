

  function composed(f, g){
    return function(x){
        return f(g(x));
    }
  }

function double(num){
    return num*2;
}

function square(num){
    return num*num;
}
  console.log(composed(square,double,10));
  const composedFunction=composed(square,double);

  const result=composedFunction(5);

  console.log("final result:::"+result);