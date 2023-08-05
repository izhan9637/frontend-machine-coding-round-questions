const grid = [
  [true, true, true],
  [true, false, false],
  [true, true, true],
];
const boxContianer = document.querySelector(".box-container");
const clickedBoxes = [];

drawGrid();

boxContianer.addEventListener("click", handleClickParent);

// using event delegation here, I have attached a eventListener to the common ancestor of the divs
function handleClickParent(event) {
  if (event.target.classList.contains("box")) {
    event.target.classList.add("green");
    clickedBoxes.push(event.target);

    // we only have 7 divs visible so when we have make all the 7 divs green then it's time to reset them all
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

      // when we reset the last element then we also empty the clickedBoxes array so that the cylle can continue
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
      }
      fragment.appendChild(box);
    }
    boxContianer.appendChild(fragment);
  }
}
