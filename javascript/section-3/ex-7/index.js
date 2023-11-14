

  function fibonacci(num){
     let temp=0;
    if(num<=1){
        return num;
    }

    else{

        temp=fibonacci(num-1)+fibonacci(num-2);

        // console.log(temp);
        return temp;
    }

     
  }

  const result=fibonacci(25);
  console.log(result);