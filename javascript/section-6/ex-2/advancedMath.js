


// const mathOperations = require('../ex-1/mathOperations.js');


function add(x,y){
  return x+y;
}


function subtract(x,y){
  return x-y;
}


function multiply(x,y){
  return x*y;
}

function divide(x,y){

  if(y === 0){
      throw new Error("Cannot divide by Zero");
  }
  return x/y;
}



function squareRoot(x) {
    if (x < 0) {
      throw new Error("Cannot calculate the square root of a negative number");
    }
    return Math.sqrt(x);
  }

 

  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    squareRoot
  };
  

  