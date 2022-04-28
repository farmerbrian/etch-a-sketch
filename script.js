const container = document.querySelector('#container');

const btn = document.querySelector('button');
let gridSize;


btn.addEventListener('click', () => {
    gridSize = prompt('How big do you want your grid?', 16);
    drawGrid(gridSize,gridSize);
});

let squareSelection;
let squares;
let changeColor;

function drawGrid(rows,columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement("div");
        //cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
        container.appendChild(cell).id = `cell-${c}`;
        
        squares = document.querySelectorAll('.grid-item');
            squares.forEach((item) => {
                item.className = 'grid-item';
                item.addEventListener('click', () => {
                    squareSelection = (item.id);
                    changeColor = document.getElementById(`${squareSelection}`);
                    changeColor.className = 'grid-item item-color';
                })
                item.addEventListener('hover', () => {
                    
                })
            }) 
    };

};

let pageLoad = drawGrid(16,16);

// const buttons = document.querySelectorAll('button');
//     buttons.forEach((button) => {
//     // and for each one we add a 'click' listener
//     button.addEventListener('click', () => {
//     playerSelection = (button.id);

// const gridRow = document.createElement('div');
// gridRow.classList.add('gridRow');
// gridRow.style.border = '2px';
// gridRow.style.borderStyle = 'solid';
// gridRow.style.borderColor = 'black';
// gridRow.style.gap = '0px';

// container.appendChild(gridRow);