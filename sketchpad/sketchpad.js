// Select the HTML element with the id "grid-container" and assign it to the variable container
const container = document.querySelector("#grid-container");

// Declare variables to store cell and target elements
let cell;
let target;

// Function to create a cell with a given number and append it to the container
function makeCell(numCell) {
  for (let i = 0; i < numCell; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}

// Function to create a grid with a given number of rows and columns
function makeGrid(numRow, numCol) {
  // Set CSS custom properties for the number of rows and columns
  container.style.setProperty("--numRows", numRow);
  container.style.setProperty("--numCols", numCol);
  
  // Create cells for each row with the specified number of columns
  for (let i = 0; i < numRow; i++) {
    makeCell(numCol);
  }
}

// Function to prompt the user for grid size and create the grid accordingly
function promptGrid() {
  // Prompt user for grid size between 5-64
  let number = prompt("Choose grid size between 5-64!", 16);
  
  // Check if the entered value is within the valid range
  if (number >= 5 && number <= 64) {
    makeGrid(number, number);
  } else {
    // If not, keep prompting until a valid value is entered
    do {
      number = prompt("Invalid size! Try Again! Make sure your value is between 5-64!");
    } while (number < 5 || number > 64);
    makeGrid(number, number);
  }
}

// Function to change the background color of the target element to black
function changeColor(target) {
  target.style.backgroundColor = "black";
}

// Event listener for mouseover on the grid container
container.addEventListener("mouseover", function (e) {
  // Get the target element
  target = e.target;

  // Check if the target is a cell and change its color
  if (target.matches("div.cell")) {
    changeColor(target);
  }
});

// Reset button functionality - reload the page
const reset = document.querySelector("#reset-button");
reset.addEventListener("click", function () {
  window.location.reload();
});

// Initial call to promptGrid function to create the grid based on user input
promptGrid();