const title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";
document.body.appendChild(title);

const btnContainer = document.createElement("div");
btnContainer.classList.add("button-container");
document.body.appendChild(btnContainer);

const shade = document.createElement("button");
shade.textContent = "Shade";
btnContainer.appendChild(shade);

const random = document.createElement("button");
random.textContent = "Randomize";
btnContainer.appendChild(random);

const clear = document.createElement("button");
clear.textContent = "Clear";
btnContainer.appendChild(clear);

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
document.body.appendChild(gridContainer);

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector(".grid-container");
    const numRows = 16; // Define the number of rows
    const numCols = 16; // Define the number of columns

    // Calculate the width for each column to ensure they fit evenly
    // This example uses a percentage, ensuring each column takes an equal share
    const itemWidthPercentage = 100 / numCols;

    for (let i = 0; i < numRows * numCols; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item", "white");
        // Set the flex-basis to ensure columns wrap correctly
        gridItem.style.flexBasis = `${itemWidthPercentage}%`; 
        container.appendChild(gridItem);
        gridItem.addEventListener("mouseover", () => {
            gridItem.classList.remove("white");
            gridItem.classList.add("shade");
            // Increment opacity safely
            let currentOpacity = parseFloat(gridItem.style.opacity) || 0.1;
            if (currentOpacity < 1) {
                gridItem.style.opacity = currentOpacity + 0.1;
            }
        });
    }
});