

function addItem() {
    const inputField = document.getElementById('inputText');
    const list = document.getElementById('list');
    
    const text = inputField.value.trim(); 
    if (text !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = text; 
        
        list.appendChild(listItem); 
        
        inputField.value = ''; // Clear the input field after adding the item
    }
}

