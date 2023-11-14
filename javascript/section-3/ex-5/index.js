

function curry(additionFn){
    
    function curried(x){

        return function(y){
            return additionFn(x,y);
        }

    }

    return curried;

}




  function add(a,b){
    return a+b;
  }

     
    const addingCurry=curry(add);
   
     console.log(addingCurry(5)(3));

     const returnCurry=addingCurry(10);

     const result=returnCurry(25);

     console.log(result);

