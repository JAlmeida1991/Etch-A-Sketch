// Global variables:
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const colorBtn = document.querySelector(".color");
const eraseBtn = document.querySelector(".erase");
// This global variable will keep track on the color of the sketch
let color;

/**
 * Using an IIFE to create a closure.
 * Index is initally set to 0, local variable, colors, is an array of possible colors for sketch
 * Everytime user clicks colorBtn, index will increment and both sketch and colorBtn will change colors
 * After final iteration, index is set back to 0 (black)
 * Since this is a function expression, it must be declared at the top since JS Engine will not hoist unlike function statements
 */
const changeColor = (() => {
  let index = 0;
  const colors = [
    "black",
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "yellow",
    "grey"
  ];
  return () => {
    if (index >= colors.length) {
      index = 0;
    }
    setColor(colors[index]);
    index++;
  };
})();

// Event handlers:

window.addEventListener("load", init);

container.addEventListener("mouseover", sketch);

resetBtn.addEventListener("click", askForNumGrids);

colorBtn.addEventListener("click", changeColor);

eraseBtn.addEventListener("click", erase);

// Helper functions
function sketch(e) {
  if (e.target.className === "cell") {
    e.target.style.backgroundColor = color;
  }
}

function askForNumGrids() {
  const gridSize = prompt("How many grids per column and row?");
  resetContainer();
  // Need to check if gridSize is also greater than 0 other program acts weird using negative numbers
  if (gridSize && gridSize > 0) {
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
  color = changedColor;
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
  color = "#eee";
}

function init() {
  changeColor();
  makeGridsAppear(16);
}
