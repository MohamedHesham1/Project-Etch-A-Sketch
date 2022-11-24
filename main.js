import "./style.scss";
const container = document.querySelector(".grid-container");
const sliderLabel = document.querySelector(".sliderLabel");
const colorPicker = document.getElementById("color-picker");

function createGrid(value) {
  const cellsNumber = value * value;
  sliderLabel.innerText = `Grid Size: ${value}*${value}`;

  for (let i = 0; i < cellsNumber; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
    cell.classList.add("cell");
  }
  container.style.cssText = `  
  grid-template-columns: repeat(${value}, 1fr);
  grid-template-rows: repeat(${value}, 1fr);
  `;
  reset();
}

function changeGridSize() {
  const slider = document.getElementById("slider");
  let value = slider.value;

  slider.addEventListener("input", (e) => {
    value = e.target.value;
    sliderLabel.innerText = `Grid Size: ${value}*${value}`;
  });
  createGrid(value);
  slider.addEventListener("change", (e) => {
    container.innerHTML = "";
    value = e.target.value;
    createGrid(value);
  });
}
changeGridSize();

function createTrail() {
  let color;
  generateRandomColor(colorPicker);
  container.addEventListener("mouseover", (e) => {
    color = colorPicker.value;
    e.target.style.backgroundColor = color;
  });
}
createTrail();

function generateRandomColor(colorPicker) {
  const randomBtn = document.querySelector(".random-color");
  const maxVal = 0xffffff;

  randomBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * maxVal);
    const randomColor = randomNumber.toString(16);
    colorPicker.value = `#${randomColor}`;
  });
}

function eraseColor(colorPicker) {
  const eraser = document.querySelector(".eraser");

  eraser.addEventListener("click", () => {
    colorPicker.value = "#FFFFFF";
  });
}
eraseColor(colorPicker);

function reset() {
  const resetBtn = document.querySelector(".reset");
  const cells = document.querySelectorAll(".cell");

  resetBtn.addEventListener("click", () => {
    cells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  });
}
