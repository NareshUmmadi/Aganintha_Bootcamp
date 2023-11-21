window.onload= function (){
    const fontSizeRange = document.getElementById('fontSizeRange');
const textContainer = document.getElementById('textContainer');

fontSizeRange.addEventListener('input', function() {
    const fontSize = fontSizeRange.value;
    textContainer.style.fontSize = `${fontSize}px`;
});

}
