const gridDiv = document.getElementById('drawingFrame');
const allGridBtn = document.querySelectorAll('.gridBtnStyle');
const allColorBtn = document.querySelectorAll('.colorBtnStyle');
const clearBtn = document.getElementById('clearBtn');
const userColor = document.getElementById('colorPicker');
let cell;

//Buttons to select the size of the grid
allGridBtn.forEach((button) => {
    button.addEventListener('click', () => {
        if (button == document.querySelector('#smallGridBtn')) {
            //Calling the function to clear the grid before creating the new grid
            clearGrid();
            //Calling the function to create the grid
            createGrid(10);
        } else if (button == document.querySelector('#medGridBtn')){
            //Calling the function to clear the grid before creating the new grid
            clearGrid();
            //Calling the function to create the grid
            createGrid(20);
        } else if (button == document.querySelector('#bigGridBtn')) {
            //Calling the function to clear the grid before creating the new grid
            clearGrid();
            //Calling the function to create the grid
            createGrid(50);
        }
    });
});

//Buttons to change the colors
allColorBtn.forEach((button) => {
    button.addEventListener('click', () => {
        if (button == document.querySelector('#blackBtn')) {
            fillCells("colorSelect");
            console.log(colorPicker);
        } else if (button == document.querySelector('#whiteBtn')) {
            fillCells("white");
        } else if (button == document.querySelector('#rainbowBtn')) {
            fillCells("random");
        }
    });
});

//Clear grid button
clearBtn.addEventListener('click', () => {
    restartGrid();
});

//Function to have a grid when the page load
function firstGrid() {
    createGrid(2);
}

//Function to create the grid base on any numbers
function createGrid(value) {
    let gridSize = value * value;

    //Set the value to the css variable
    gridDiv.style.setProperty('--gridRow', value);
    gridDiv.style.setProperty('--gridCol', value);

    //Loop to create cell until the grid size is reached
    for (let i = 0; i < gridSize; i++) {
        cell = document.createElement('div');

        gridDiv.appendChild(cell).className = "cellStyle";
    }
}

//Function to erase the grid
function clearGrid() {
    gridDiv.innerHTML = '';
}

//Function to erase the drawing on the grid
function restartGrid() {
    let allCells = document.querySelectorAll('.cellStyle');

    allCells.forEach(allCell => {
        allCell.style.backgroundColor = "#F5F5F5";
    });
}

function randomColors() {
    let maxValue = 0xFFFFFF;
    let random = Math.floor(Math.random() * maxValue).toString(16);
    let randColor = random.padStart(6, 0);

    return "#" + randColor.toUpperCase();
}

//Function to fill the cell with the chosin color when hovering
function fillCells(color) {
    let allCells = document.querySelectorAll('.cellStyle');

    allCells.forEach(allCell => {
        allCell.addEventListener('mouseover', () => {
            if (color === "random") {
                allCell.style.backgroundColor = `${randomColors()}`;
            } else if (color === "colorSelect") {
                allCell.style.backgroundColor = `${userColorSelection()}` ;
            } else {
                allCell.style.backgroundColor = color;
            }
        });
    });
}

function userColorSelection() {
    //Function to fill the cell based on the color picker
    userColor.addEventListener('change', () => {});

    return userColor.value;
}
userColor.value = "#FF0000";
//Calling the first grid when the page load
firstGrid();
