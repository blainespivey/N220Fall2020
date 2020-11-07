dvSquare = document.createElement("div");

dvSquare.style.backgroundColor = "#00FF00";
dvSquare.style.width = "20px";
dvSquare.style.height = "20px";
dvSquare.style.margin = "2px";
dvSquare.style.float = "left";

document.body.appendChild(dvSquare);


function drawSquares() {
    for(i = 0; i < 100; i++){
        document.body.appendChild(dvSquare);  
    }
} 

drawSquares();