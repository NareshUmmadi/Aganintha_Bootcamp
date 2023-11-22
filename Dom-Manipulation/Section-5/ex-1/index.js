window.onload=function(){

const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

for (const header of collapsibleHeaders) {
    header.addEventListener('click', toggleContent);
}

function toggleContent(event) {
    const content = event.target.nextElementSibling;
    const allContents = document.querySelectorAll('.collapsible-content');

    // Hide all contents
    allContents.forEach(item => {
      if (item !== content) {
        item.style.display = 'none';
      }
    });

    // Toggle display for the clicked content
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
    
    
}


}



