const gridContainerDiv = document.querySelector(".grid_container");
const sizeButton = document.querySelector(".size-button");

let gridSize = 16;

function genrateGrid() {

    for (let i = 0; i < gridSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row_div');
        gridContainerDiv.appendChild(rowDiv);
        for (let j = 0; j < gridSize; j++) {
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

}

genrateGrid();

function emptyGrid(){
    while (gridContainerDiv.firstChild){
        gridContainerDiv.removeChild(gridContainerDiv.firstChild);
    }
}

function getRandomPixel(){
    return Math.floor(Math.random() * 255);
}

sizeButton.addEventListener('click',() => {
    let tempGridSize = prompt("Enter number between 16 and 100 to set grid size");
    
    if (tempGridSize >= 16 && tempGridSize <= 100) {
        emptyGrid();
        gridSize = tempGridSize;
        genrateGrid();
    }
    else{
        alert("Please enter a value between 16 and 100");
    }
})