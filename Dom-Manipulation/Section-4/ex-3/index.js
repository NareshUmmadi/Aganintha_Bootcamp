window.onload=function(){
const characterCounterTextarea = document.getElementById('characterCounterTextarea');
const characterCountElement = document.getElementById('characterCount');

characterCounterTextarea.addEventListener('keyup', updateCharacterCount);

function updateCharacterCount() {
    const characterCount = characterCounterTextarea.value.length;
    characterCountElement.textContent = characterCount;
}

};