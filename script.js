let btnReset = document.getElementById(`btnReset`);
let btnBlack = document.getElementById(`btnBlack`);
let btnRandomColor = document.getElementById(`btnRandomColor`);
let btnColorPick = document.getElementById(`btnColorPick`);
let btnClass = document.getElementsByClassName(`btn`);
let gridContainer = document.getElementById(`gridContainer`);
let colorsContainer = document.getElementById(`colorsContainer`);
let squaresArray = new Array();
let colorsPalette = new Array();
let colorVariety = [`white`, `red`, `green`, `blue`, `yellow`, `brown`, `pink`, `violet`, `grey`, `orange`];


function createGrid() {
    gridContainer.style.display = `grid`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size**2; i++) {
        squaresArray[i] = document.createElement(`div`);
        squaresArray[i].id = `square${i}`;
        squaresArray[i].style.width = `1/${size}`;
        squaresArray[i].style.height = `1/${size}`;
        squaresArray[i].style.borderRight = `1px solid grey`;
        squaresArray[i].style.borderBottom = `1px solid grey`;
        gridContainer.appendChild(squaresArray[i]);
    }
}

function createColorsPalette() {
    for (let i = 0; i < 10; i++) {
        colorsPalette[i] = document.createElement(`button`);
        colorsPalette[i].style.height = `100%`;
        colorsPalette[i].style.width = `10%`;
        colorsPalette[i].style.borderRight = `1px solid black`;
        colorsPalette[i].style.backgroundColor = colorVariety[i];
        colorsContainer.appendChild(colorsPalette[i]);
    }
}

function colorsPaletteActivate() {
    colorsContainer.style.display = `flex`;
}

function colorChoice() {
    for (let i = 0; i < 10; i++) {
        colorsPalette[i].addEventListener(`click`, function() {
            for (let j = 0; j < size**2; j++) {
                squaresArray[j].addEventListener(`mouseover`, function() {
                    this.style.backgroundColor = colorVariety[i];
                })
            }
            colorsPalette[i].classList.add(`click`);
            setTimeout(function() {colorsPalette[i].classList.remove(`click`)}, 100);
        })
    }
}

function black() {
    for (let i = 0; i < size**2; i++) {
        squaresArray[i].addEventListener(`mouseover`, function() {
            this.style.backgroundColor = `black`;
        })
    }
}

function clear() {
    for (let i = 0; i < size**2; i++) {
        squaresArray[i].remove();
    }
}

function randomColor() {
    function chooseColor() {
        let numbers255 = new Array();
        for (let i = 0; i < 256; i++) {
            numbers255[i] = i;
        }
        let r = numbers255[Math.floor(Math.random() *256)];
        let g = numbers255[Math.floor(Math.random() *256)];
        let b = numbers255[Math.floor(Math.random() *256)];
        return `rgb(${r}, ${g}, ${b})`
    }
    for (let i = 0; i < size**2; i++) {
        squaresArray[i].addEventListener(`mouseover`, function() {
        this.style.backgroundColor = chooseColor();
        })
    }
}

let size = 16;
createGrid();
createColorsPalette();

btnReset.addEventListener(`click`, function() {
    clear();
    size = prompt(`Type a size of your grid.`);
    if (size === NaN || size <= 0) {
        alert(`ERROR! Type a number greater than 0!`)
    }
    createGrid();
    this.classList.add(`click`);
    setTimeout(function() {btnReset.classList.remove(`click`)}, 100);
    colorsContainer.style.display = `none`;
})
btnBlack.addEventListener(`click`, function() {
    black();
    this.classList.add(`click`);
    setTimeout(function() {btnBlack.classList.remove(`click`)}, 100);
    colorsContainer.style.display = `none`;
})
btnRandomColor.addEventListener(`click`, function() {
    randomColor();
    this.classList.add(`click`);
    setTimeout(function() {btnRandomColor.classList.remove(`click`)}, 100);
    colorsContainer.style.display = `none`;
})
btnColorPick.addEventListener(`click`, function() {
    colorsPaletteActivate();
    colorChoice();
    this.classList.add(`click`);
    setTimeout(function() {btnColorPick.classList.remove(`click`)}, 100);
})