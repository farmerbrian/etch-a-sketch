const container = document.querySelector('#container');
const btn = document.querySelector('button');
let gridSize;


btn.addEventListener('click', () => {
    gridSize = prompt('How big do you want your grid? 50 or less', 16);
    if (gridSize > 50) {
        gridSize = prompt('Try again but make it 50 or less this time', 16);
        if (gridSize < 50){
            drawGrid(gridSize,gridSize)
        }
    } else {
        drawGrid(gridSize,gridSize)
    }
    
});

function drawGrid(rows,columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = 'grid-item';
        container.appendChild(cell).id = `cell-${c}`;
        
        let squares = document.querySelectorAll('.grid-item');
            squares.forEach((item) => {
                item.className = 'grid-item';
                item.addEventListener('click', () => {
                    let squareSelection = (item.id);
                    let changeColor = document.getElementById(`${squareSelection}`);
                    changeColor.className = 'grid-item item-color';
                })
                
                item.addEventListener('mouseenter', () => {
                    hover = (item.id);
                    showHover = document.getElementById(`${hover}`).classList.add('hover-color');
                })
                item.addEventListener('mouseleave', () => {
                    hover = (item.id);
                    showHover = document.getElementById(`${hover}`).classList.remove('hover-color');
                })
            }) 
    };

};

let pageLoad = drawGrid(16,16);

