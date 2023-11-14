
const originalArray = [1,2,3,4,5,6,7,8,9,10];

const evenIndexArray = [];
const oddIndexArray = [];

for(let i=0;i<originalArray.length;i++){
    
    if(i%2===0){
        evenIndexArray.push(originalArray[i]);
    }
    else{
        oddIndexArray.push(originalArray[i]);
    }

}

console.log("Even index numbers::"+evenIndexArray);
console.log("Odd index numbers::"+oddIndexArray);