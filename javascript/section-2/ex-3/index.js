
function revString(str){
     
    let revStr="";

    for(let i=0;i<str.length;i++){
       revStr=str[i]+revStr;
    }
    return revStr;

}

 



let str="welcome to the world";
  
    console.log(revString(str));
