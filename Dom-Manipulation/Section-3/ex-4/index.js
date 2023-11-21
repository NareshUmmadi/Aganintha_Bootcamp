let nextNumber = 2; // Starting from 2 because the first row is already present

function addRow() {
    const table = document.getElementById('sequenceTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    cell1.innerHTML = nextNumber;
    cell2.innerHTML = '<button onclick="addRow()">Add</button>';
    nextNumber++;
}

function deleteRow() {
    const table = document.getElementById('sequenceTable').getElementsByTagName('tbody')[0];
    if (table.rows.length > 1) {
        table.deleteRow(-1);
        nextNumber--;
    } else {
        alert('Cannot delete the last row!');
    }
}
