const arrayOfStrings=["Hello","Welcome","to","the","World"];


function conString(arrayOfStrings){
let concantedString="";

for(let i=0;i<arrayOfStrings.length;i++){
    concantedString = concantedString+arrayOfStrings[i];
    // console.log(concantedString);
    if(i<arrayOfStrings.length-1){
        concantedString =concantedString+" ";
    }
}

return concantedString;
}


console.log("concanted string \n"+ conString(arrayOfStrings));