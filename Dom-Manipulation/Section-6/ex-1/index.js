function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}


window.onload=function(){
    
    const container=document.getElementById('numberContainer');

    function generateBoxes(){
        for(let i=100;i<=1000;i++){
            const div=document.createElement('div');
            div.classList.add('number');
            if (i % 2 === 0) {
                div.textContent = i;
                div.classList.add("even");
            } else {
                div.textContent = i;
                div.classList.add("odd");
            }
    
            if (isPrime(i)) {
                div.classList.remove("even", "odd");
                div.classList.add("prime");
            }
    
            container.appendChild(div);

        }
    }
   generateBoxes();

}