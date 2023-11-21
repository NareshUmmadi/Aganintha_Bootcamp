


window.onload=function (){
    const divPara=document.getElementById('addPara');
    const  button=document.getElementById('clickButton');

    function generate(){

        // divPara.innerHTML="<p> this is auto-generated paragraph.</p>"

        const content = 'This is a new paragraph created dynamically.';
        const newParagraph = document.createElement('p');
        newParagraph.innerHTML = content;
       divPara.appendChild(newParagraph);
    }
    
    button.addEventListener("click",generate);
}




