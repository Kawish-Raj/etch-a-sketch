const gridContainerDiv = document.querySelector(".grid_container");

let gridLen = 16;

for(let i=0; i < gridLen; i++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row_div');
    gridContainerDiv.appendChild(rowDiv);
    for (let j = 0; j < gridLen; j++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid_div');

        gridDiv.addEventListener('mouseover', () => {

            let rVal = getRandomPixel();
            let gVal = getRandomPixel();
            let bVal = getRandomPixel();
            gridDiv.style.cssText = `background-color: rgb(${rVal},${gVal},${bVal});`;
            
            //black pen
            //gridDiv.style.cssText = "background-color: black;"
        
        })

        rowDiv.appendChild(gridDiv);
    }
}

function getRandomPixel(){
    return Math.floor(Math.random() * 255);
}