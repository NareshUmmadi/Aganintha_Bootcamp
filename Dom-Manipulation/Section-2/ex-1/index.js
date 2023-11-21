


window.onload = function() {
   
    const clickText = document.getElementById('changeColor');

    clickText.addEventListener('mouseover',function(){
        clickText.style.color='red';
    });

    clickText.addEventListener('mouseout',function(){
        clickText.style.color='';
    })


         
};

