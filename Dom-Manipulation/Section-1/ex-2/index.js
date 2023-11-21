

// let count=0;
// const clickText=document.getElementById('count');
// const clickButton=document.getElementById('increase');
// function onClick(){

//     count++;
//     clickText.innerText=count;
//     console.log(count);

// }

//   clickButton.addEventListener('click',onClick);

window.onload = function() {
    let count = 0;
    const clickText = document.getElementById('count');
    const clickButton = document.getElementById('increase');

    function onClick() {
        count++;
        clickText.innerText = count;
        console.log(count);
    }

    clickButton.addEventListener('click', onClick);
};

