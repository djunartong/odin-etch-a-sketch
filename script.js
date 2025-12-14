const title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";
document.body.appendChild(title);

const btnContainer = document.createElement("div");
btnContainer.classList.add("button-container");
document.body.appendChild(btnContainer);

const shade = document.createElement("button");
shade.classList.add("default");
shade.textContent = "Shade";
btnContainer.appendChild(shade);

const random = document.createElement("button");
random.classList.add("rgb");
random.textContent = "Randomize";
btnContainer.appendChild(random);

const clear = document.createElement("button");
clear.classList.add("clear");
clear.textContent = "Clear";
btnContainer.appendChild(clear);

const customize = document.createElement("button");
customize.textContent = "Customize";
btnContainer.appendChild(customize);

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container", "white");
document.body.appendChild(gridContainer);

// function drawShade(grid) {
//     grid.addEventListener("mouseover", () => {
//         grid.classList.remove("white");
//         grid.classList.add("shade");
//         // Increment opacity safely
//         let currentOpacity = parseFloat(grid.style.opacity) || 0.1;
//         if (currentOpacity < 1) {
//             grid.style.opacity = currentOpacity + 0.1;
//         }
//     });
// }

// function defaultButton(shadeButton, grid) {
//     shadeButton.addEventListener("click", () => drawShade(grid));
// }

// function drawRgb(rgbButton, grid) {
//     rgbButton.addEventListener("click", () => {
//         grid.addEventListener("mouseover", () => {
//             grid.classList.remove("white", "shade");
//             grid.style.backgroundColor = generateRandomHexColor();
//         });
//     });
// }

// function clearGrid(clearButton, container) {
//     clearButton.addEventListener("click", () => {
//         // Declare a node list containing all grid-item class divs
//         const allSquares = container.querySelectorAll(".grid-item");
//         allSquares.forEach(square => {
//             square.classList.remove("shade");
//             square.classList.add("white");
//             square.style.backgroundColor = "";
//             square.style.opacity = "";
//         });
//     });
// }

document.addEventListener("DOMContentLoaded", () => {
    const NUM_ROWS = 16; // Define the number of rows
    const NUM_COLS = 16; // Define the number of columns
    const container = document.querySelector(".grid-container");
    const clearButton = document.querySelector(".clear");
    const rgbButton = document.querySelector(".rgb");
    const shadeButton = document.querySelector(".default");
    const customize = document.querySelector(".customize");

    let mode = "shade";

    function generateRandomHexColor() {
    // Generate a random number between 0 and 16777215 (which is FFFFFF in hexadecimal)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // Pad the string with leading zeros if necessary to ensure it's 6 characters long
    // This handles cases where the random number might result in a shorter hex string (e.g., 'abc')
    const paddedColor = randomColor.padStart(6, '0');

    // Prepend '#' to form a valid hex color code
    return '#' + paddedColor;
    }

    function createGrid(size) {
        // Clear old grid
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }

        // Calculate the width for each column to ensure they fit evenly
        // This example uses a percentage, ensuring each column takes an equal share
        const itemWidthPercentage = 100 / size;

        for (let i = 0; i < NUM_ROWS * NUM_COLS; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item", "white");
            // Set the flex-basis to ensure columns wrap correctly
            gridItem.style.flexBasis = `${itemWidthPercentage}%`;

            gridItem.addEventListener("mouseover", () => {
                gridItem.classList.remove("white", "shade");
                if (mode === "shade") {
                    gridItem.classList.add("shade");
                    let currentOpacity = parseFloat(grid.style.opacity) || 0.1;
                    if (currentOpacity < 1) {
                        grid.style.opacity = currentOpacity + 0.1;
                    }
                } 
                else if (mode === "rgb") {
                    gridItem.style.backgroundColor = generateRandomHexColor();
                }
            });

            container.appendChild(gridItem);
        }
    }


    // Calculate the width for each column to ensure they fit evenly
    // This example uses a percentage, ensuring each column takes an equal share
//     const itemWidthPercentage = 100 / NUM_COLS;

//     for (let i = 0; i < NUM_ROWS * NUM_COLS; i++) {
//         const gridItem = document.createElement("div");
//         gridItem.classList.add("grid-item", "white");
//         // Set the flex-basis to ensure columns wrap correctly
//         gridItem.style.flexBasis = `${itemWidthPercentage}%`; 
//         container.appendChild(gridItem);
//         // Shade each grid upon hover
//         drawShade(gridItem);
//         drawRgb(rgbButton, gridItem);
//         defaultButton(shadeButton, gridItem);
//     }

//     clearGrid(clearButton, container);
// });

// customize.addEventListener("click", () => {
//     let userInput = prompt("Please enter a number between 0 to 100:");
//     let input = parseInt(userInput);

//     if (!isNaN(input) && input <= 100 && input > 0) {
//         // Clear old grid
//         while (container.firstChild) {
//             container.removeChild(container.firstChild);
//         }

//         const itemWidthPercentage = 100 / input;

//         for (let i = 0; i < input * input; i++) {
//             const gridItem = document.createElement("div");
//             gridItem.classList.add("grid-item", "white");
//             // Set the flex-basis to ensure columns wrap correctly
//             gridItem.style.flexBasis = `${itemWidthPercentage}%`; 
//             container.appendChild(gridItem);
//             drawShade(gridItem);
//             drawRgb(rgbButton, gridItem);
//             defaultButton(shadeButton, gridItem);
//         }

//         clearGrid(clearButton, container);
//     } else {
//         alert("Invalid input! Please enter a number between 1 and 100")
//     }
});