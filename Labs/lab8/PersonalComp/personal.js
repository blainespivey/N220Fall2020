dvSquare.style.backgroundColor="#0000FF";
dvSquare.style.width="200px";
dvSquare.style.height="200px";
dvSquare.innerHTML="Hello";
dvSquare.style.position = "absolute";
dvSquare.style.top = "100px";
dvSquare.style.left = "100px";

let position = "300px";

function moveBox(){
    
    dvSquare.style.top = position;
    dvSquare.style.left = position;
}