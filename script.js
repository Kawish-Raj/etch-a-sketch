const gridContainerDiv = document.querySelector(".grid_container");

let gridLen = 16;

for(let i=0; i < gridLen; i++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row_div');
    gridContainerDiv.appendChild(rowDiv);
    for (let j = 0; j < gridLen; j++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid_div');
        rowDiv.appendChild(gridDiv);
    }
}