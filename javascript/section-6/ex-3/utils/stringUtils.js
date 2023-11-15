




   function reverseString(str){
      
    let revStr='';

       for(let i=0;i<str.length;i++){
         
        revStr=str[i]+revStr;

       }
       return revStr;

   }
   
   
   
   function countCharacters(str){
    return str.length;
   }

//    console.log(reverseString("hello world"));


module.exports ={
   reverseString,
   countCharacters
};