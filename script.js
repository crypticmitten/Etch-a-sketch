

function createGrid(size){
    const grid = document.getElementById("grid");
    for(i=0;i<size*size;i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = 800/size;
        square.style.height = 800/size;
        grid.appendChild(square);
    }
}
window.onload = createGrid(16);
document.addEventListener("mousemove",checkHover);

function checkHover(square){
    square = document.querySelectorAll(":hover")[3];
    console.log(square)
    if (square.classList.contains("square")){
        square.style.backgroundColor = "red";
    }
}