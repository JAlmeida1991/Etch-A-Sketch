// Global variables:

const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const colorBtn = document.querySelector(".color");
let color;

// changeColor
let changeColor = (function() {
  let index = 0;
  const colors = [
    "black",
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "yellow"
  ];
  return function() {
    if (index >= colors.length) {
      index = 0;
    }
    console.log(index);
    color = colors[index];
    colorBtn.style.backgroundColor = colors[index];
    index++;
  };
})();

function setColor(color) {
  color = color;
  colorBtn.style.backgroundColor = color;
}

changeColor();

makeGridsAppear(16);
// Event handlers:

resetBtn.addEventListener("click", askForNumGrids);

container.addEventListener("mouseover", sketch);

colorBtn.addEventListener("click", changeColor);

// Helper functions
function sketch(e) {
  if (e.target.className === "cell") {
    e.target.style.backgroundColor = color;
  }
}

function askForNumGrids() {
  const gridSize = prompt("How many grids per column and row?");
  resetContainer();
  makeGridsAppear(parseInt(gridSize));
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

// Need to remove children from grid since otherwise the border will stack from the previous call of makeGridsAppear
function resetContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
