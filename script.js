function connectEventListeners() {
    document.getElementById("grid-wrapper").childNodes.forEach(e => e.addEventListener("mouseover", () => handleMouseOver(e)))
}

function handleMouseOver(e) {
    {e.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);}
}

function rebuildGrid(rows, columns) {
    document.getElementById("grid-wrapper").replaceChildren();
    document.getElementById("grid-wrapper").style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    document.getElementById("grid-wrapper").style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement("div");
        document.getElementById("grid-wrapper").appendChild(cell);
    }

    connectEventListeners();
}

function triggerGridRebuild() {
    let columns, rows;

    do {
        columns = prompt("Enter number of columns (max 100).");
    } while (columns > 100 && columns <= 0)
    do {
        rows = prompt("Enter number of rows (max 100).");
    } while (rows > 100 && rows <= 0)

    rebuildGrid(rows, columns);
}

document.getElementById("generate-grid").addEventListener("click", triggerGridRebuild);

rebuildGrid(4, 4);