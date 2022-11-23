import "./style.scss";
let value = 16;
const container = document.querySelector(".gridContainer");
function createGrid() {
  const cells = [];
  let sliderLabel = document.querySelector(".sliderLabel");
  let CellsNumber = value * value;
  sliderLabel.innerText = `Grid Size: ${value}*${value}`;
  container.style.cssText = `  
    grid-template-columns: repeat(${value}, 1fr);
    grid-template-rows: repeat(${value}, 1fr);
    `;
  for (let i = 0; i < CellsNumber; i++) {
    cells[i] = document.createElement("div");
    container.appendChild(cells[i]);
    cells[i].classList.add("cell");
  }
  createTrail(container);
}
function createTrail(container) {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "#000000";
  });
}
function changeGridSize() {
  let slider = document.getElementById("slider");
  createGrid();
  slider.addEventListener("input", (e) => {
    // container.remove();
    container.innerHTML = "";
    value = e.target.value;
    createGrid();
  });
}
changeGridSize();
