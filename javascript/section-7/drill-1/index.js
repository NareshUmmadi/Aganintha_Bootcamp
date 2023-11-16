

  function fibonacci(num){
    
    if(num<=1){
        return 1;
    }
    return fibonacci(num-1)+fibonacci(num-2);

  }

 function fibonacci1(num){
  if(num<=1){
    return 1;
  }
  let a=1;
  let b=1;
  for(let i=2;i<=num;i++){
    let c=a+b;
    a=b;
    b=c;
  }
  return b;

 }


 function fibonacci2(num,memo={}){

  if(num<=1){
    return 1;
  }

  if(memo[num]){
    return memo[num];
  }

  memo[num]=fibonacci2(num-1)+fibonacci2(num-2);
  return memo[num];

 }



   const num=parseInt(process.argv[2]);

   if(isNaN(num) || num<0){
    console.log("please enter the positive numbers")
   }
   else{
    
    let startTime= new Date().getTime();
    const result = fibonacci(num);
    let endTime=new Date().getTime();
    let timeTaken=endTime-startTime;
  console.log(`Fibonacci(${num}) = ${result}`);
  console.log(`timeTaken for the recursion-process::${timeTaken} milliseconds`);
    
  let startTime1= new Date().getTime();
  const result1 = fibonacci1(num);
  let endTime1=new Date().getTime();
  let timeTaken1=endTime1-startTime1;
console.log(`Fibonacci(${num}) = ${result1}`);
console.log(`timeTaken for the normal-process::${timeTaken1} milliseconds`);


let startTime2= new Date().getTime();
    const result2 = fibonacci2(num);
    let endTime2=new Date().getTime();
    let timeTaken2=endTime2-startTime2;
  console.log(`Fibonacci(${num}) = ${result2}`);
  console.log(`timeTaken for the cache-process::${timeTaken2} milliseconds`);



   }


