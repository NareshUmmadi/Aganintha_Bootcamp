

function multipleBy(x){

    return function(y){
        
        return x*y;

    }
}



const multipleBy2=multipleBy(2);

const result=multipleBy2(55);

console.log(result);