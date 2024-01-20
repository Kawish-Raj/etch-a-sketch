const gridContainerDiv = document.querySelector(".grid_container");

for(let i=0; i < 16*16; i++){
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid_div');
    gridContainerDiv.appendChild(gridDiv);
}