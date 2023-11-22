
window.onload=function(){
const progressBar = document.querySelector('.progress-bar');
const scrollableContent = document.querySelector('.scrollable-content');

window.addEventListener('scroll', updateProgressBar);

function updateProgressBar() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = document.documentElement.clientHeight;

    const progressPercentage = scrollPosition / (documentHeight - windowHeight);
    const progressBarWidth = progressPercentage * 100;

    progressBar.style.width = `${progressBarWidth}%`;
}

updateProgressBar(); 
}