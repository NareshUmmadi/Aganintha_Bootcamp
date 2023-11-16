const arrayOfStrings=["Hello","Welcome","to","the","World"];


function conString(arrayOfStrings){
let concantedString="";

for(let i=0;i<arrayOfStrings.length;i++){
    concantedString = concantedString+arrayOfStrings[i];
    concantedString+=" ";
    
}

return concantedString;
}


console.log("concanted string \n"+ conString(arrayOfStrings));