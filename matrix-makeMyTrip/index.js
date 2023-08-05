const grid = [
  [true, true, true],
  [true, false, false],
  [true, true, true],
];
const boxContianer = document.querySelector(".box-container");
const clickedBoxes = [];

drawGrid();

boxContianer.addEventListener("click", handleClickParent);

function handleClickParent(event) {
  if (event.target.classList.contains("box")) {
    const targetElement = event.target;
    // const rowIndex = parseInt(targetElement.dataset.row);
    // const colIndex = parseInt(targetElement.dataset.col);

    event.target.classList.add("green");
    clickedBoxes.push(event.target);

    console.log(clickedBoxes.length);

    if (clickedBoxes.length === 7) {
      resetGrid();
    }
  }
}

function resetGrid() {
  for (let i = 0; i < clickedBoxes.length; i++) {
    setTimeout(() => {
      const box = clickedBoxes[i];
      box.classList.remove("green");

      if (i === clickedBoxes.length - 1) {
        clickedBoxes.length = 0;
      }
    }, 1000 * (i + 1));
  }
}

function drawGrid() {
  for (let i = 0; i < grid.length; i++) {
    const fragment = document.createDocumentFragment();
    for (let j = 0; j < grid[0].length; j++) {
      const box = document.createElement("div");
      if (grid[i][j] === true) {
        box.classList.add("box");
        // box.textContent = "A";
      }
      box.dataset.row = i;
      box.dataset.col = j;
      fragment.appendChild(box);
    }
    boxContianer.appendChild(fragment);
  }
}
