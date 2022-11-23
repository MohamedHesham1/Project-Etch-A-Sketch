import "./style.scss";
const container = document.querySelector(".grid-container");
function createGrid(value) {
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
}
function createTrail() {
  let color;
  const colorPicker = document.getElementById("color-picker");
  eraseColor(colorPicker);
  container.addEventListener("mouseover", (e) => {
    color = colorPicker.value;
    e.target.style.backgroundColor = color;
  });
}
createTrail();

function eraseColor(colorPicker) {
  const eraser = document.querySelector(".eraser");
  eraser.addEventListener("click", () => {
    colorPicker.value = "#FFFFFF";
  });
}
function changeGridSize() {
  let value = 16;

  let slider = document.getElementById("slider");
  createGrid(value);
  slider.addEventListener("input", (e) => {
    container.innerHTML = "";
    value = e.target.value;
    createGrid(value);
  });
}
changeGridSize();
