import { container, colorBtn, colorObj } from "./globals";

// Helper functions
function sketch(e) {
  if (e.target.className === "cell") {
    e.target.style.backgroundColor = colorObj.color;
  }
}

function askForNumGrids() {
  const gridSize = prompt("How many grids per column and row?");
  resetContainer();
  // Need to check if gridSize is also greater than 0 other program acts weird using negative numbers
  if (!isNaN(gridSize) && gridSize > 0) {
    makeGridsAppear(parseInt(gridSize));
  } else {
    // edge case needed in case user does not enter a valid number
    makeGridsAppear(16);
  }
}

function makeGridsAppear(numGrids) {
  const gridArea = numGrids * numGrids;
  container.style.gridTemplateRows = `repeat(${numGrids}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${numGrids}, 1fr)`;
  for (let i = 0; i < gridArea; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.style.border = ".2px solid black";
    container.appendChild(cell);
  }
}

// This will change the color of the button and sketch
function setColor(changedColor) {
  colorObj.color = changedColor;
  colorBtn.style.backgroundColor = changedColor;
}

// Need to remove children from grid since otherwise the border will stack from the previous call of makeGridsAppear
function resetContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// This will mutate the global color variable to be the same as the background color
function erase() {
  colorObj.color = "#eee";
}

function changeColor() {
  if (colorObj.index >= colorObj.colors.length) {
    colorObj.index = 0;
  }
  setColor(colorObj.colors[colorObj.index]);
  colorObj.index++;
}
function init() {
  changeColor();
  makeGridsAppear(16);
}

export { init, sketch, askForNumGrids, changeColor, erase };
