window.onload=function(){
const searchTermInput = document.getElementById('searchTerm');
const itemList = document.getElementById('itemList');
const listItems = itemList.querySelectorAll('li');

searchTermInput.addEventListener('keyup', filterList);

function filterList() {
    const searchTerm = searchTermInput.value.toLowerCase().trim();

    for (const item of listItems) {
        const itemName = item.textContent.toLowerCase().trim();
        if (itemName.includes(searchTerm)) {
            
            item.style.display='block';
        } else {
           
          item.style.display='none';
        }
    }
}

// Initially show all items
for (const item of listItems) {
  
    item.style.display='block';  
}
}
