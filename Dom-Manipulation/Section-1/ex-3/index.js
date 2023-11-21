    


    



window.onload= function(){
    const box=document.getElementById('box');

    const changeColor=document.getElementById('changeColor');
    function colorChange(){
        const random=randomColor();
        // box.style.backgroundColor=random;
        document.body.style.backgroundColor=random;
    }
     
   
    changeColor.addEventListener('click',colorChange);
}

function randomColor(){
    const letters='ABCDEF'
    color='#';

    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*6)];
    }
    return color;
}