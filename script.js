var grid = document.getElementById("grid");

function createGrid(size){
    for(i=0;i<size*size;i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.cssText = `
        width:`+String(800/size)+`px;
        height:`+String(800/size)+`px;
        `
        grid.appendChild(square);
    }
    console.log("Height: "+grid.childNodes[0].getBoundingClientRect().height);
    console.log("Width: "+grid.childNodes[0].getBoundingClientRect().width);
}
createGrid(16);
document.addEventListener("mousemove",checkHover);

function checkHover(){
    document.querySelectorAll(":hover").forEach(function(Square){
        if (Square.classList.contains("square")){
            Square.style.backgroundColor = "red";
        }
    });
}

function newGrid(){
    let size = document.getElementById("size-input").value;
    console.log(size);
    togglePopup();
    deleteGrid();
    createGrid(size);
}

function deleteGrid(){
    while (grid.childNodes[0]){
        grid.removeChild(grid.childNodes[0]);
    }
}

function togglePopup() { 
    const overlay = document.getElementById('popupOverlay'); 
    overlay.classList.toggle('show'); 
} 