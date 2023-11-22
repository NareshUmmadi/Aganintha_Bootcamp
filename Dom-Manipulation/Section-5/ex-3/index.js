

window.onload=function(){

const theme=document.getElementById('themeSwitch');
let darkMode = false;
theme.addEventListener('change',()=>{
  document.body.classList.toggle('dark-theme');
})
}
