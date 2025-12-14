const title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";
document.body.appendChild(title);

const btnContainer = document.createElement("div");
btnContainer.classList.add("button-container");
document.body.appendChild(btnContainer);

const shade = document.createElement("button");
shade.classList.add("shade");
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
customize.classList.add("customize");
customize.textContent = "Customize";
btnContainer.appendChild(customize);

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container", "white");
document.body.appendChild(gridContainer);

document.addEventListener("DOMContentLoaded", () => {
    const SIZE = 16;
    const container = document.querySelector(".grid-container");
    const clearButton = document.querySelector(".clear");
    const rgbButton = document.querySelector(".rgb");
    const shadeButton = document.querySelector(".shade");
    const customizeButton = document.querySelector(".customize");

    let mode = "shade";

    // Declare a function to generate random color
    function generateRandomHexColor() {
    // Generate a random number between 0 and 16777215 (which is FFFFFF in hexadecimal)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // Pad the string with leading zeros if necessary to ensure it's 6 characters long
    // This handles cases where the random number might result in a shorter hex string (e.g., 'abc')
    const paddedColor = randomColor.padStart(6, '0');

    // Prepend '#' to form a valid hex color code
    return '#' + paddedColor;
    }


    // Declare a function to create grids
    function createGrid(size) {
        // Clear old grid
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }

        // Calculate the width for each column to ensure they fit evenly
        // This example uses a percentage, ensuring each column takes an equal share
        const itemWidthPercentage = 100 / size;

        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item", "white");
            // Set the flex-basis to ensure columns wrap correctly
            gridItem.style.flexBasis = `${itemWidthPercentage}%`;

            gridItem.addEventListener("mouseover", () => {
                gridItem.classList.remove("white", "shade");
                if (mode === "shade") {
                    gridItem.classList.add("shade");
                    let currentOpacity = parseFloat(gridItem.style.opacity) || 0.1;
                    if (currentOpacity < 1) {
                        gridItem.style.opacity = currentOpacity + 0.1;
                    }
                } else if (mode === "rgb") {
                    gridItem.style.backgroundColor = generateRandomHexColor();
                }
            });

            container.appendChild(gridItem);
        }
    }

    createGrid(SIZE);

    shadeButton.addEventListener("click", () => mode = "shade");
    rgbButton.addEventListener("click", () => mode = "rgb");
    clearButton.addEventListener("click", () => {
        const allSquares = container.querySelectorAll(".grid-item");
        allSquares.forEach(square => {
            square.classList.remove("shade");
            square.classList.add("white");
            square.style.backgroundColor = "";
            square.style.opacity = "";
        });
    });
    customizeButton.addEventListener("click", () => {
        let userInput = prompt("Please enter a number between 0 to 100:");
        let input = parseInt(userInput);

        if (!isNaN(input) && input <= 100 && input > 0) {
            createGrid(input);
        } else {
            alert("Invalid input! Please enter a number between 1 and 100")
        }
    });
});