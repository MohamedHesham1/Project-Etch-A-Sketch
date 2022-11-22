import "./style.scss";
function createGrid() {
  const container = document.querySelector(".gridContainer");
  const cells = [];
  for (let i = 0; i < 256; i++) {
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
createGrid();
