import { container, resetBtn, colorBtn, eraseBtn } from "./globals";
import { init, sketch, askForNumGrids, changeColor, erase } from "./helpers";

window.addEventListener("load", init);

container.addEventListener("mouseover", sketch);

resetBtn.addEventListener("click", askForNumGrids);

colorBtn.addEventListener("click", changeColor);

eraseBtn.addEventListener("click", erase);
