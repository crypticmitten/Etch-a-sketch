

function createGrid(){
    const grid = document.getElementById("grid");
    console.log(grid);
    for(i=0;i<16*16;i++){
        let square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
    }
}
window.onload = createGrid();