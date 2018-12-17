// Global variables:
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const colorBtn = document.querySelector(".color");
const eraseBtn = document.querySelector(".erase");

const colorObj = {
  color: "",
  index: 0,
  colors: [
    "black",
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "yellow",
    "grey"
  ]
};

export { container, resetBtn, colorBtn, eraseBtn, colorObj };
