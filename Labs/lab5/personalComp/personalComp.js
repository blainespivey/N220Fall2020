let moveY = 0;
let moveX = 0;

function setup(){
    createCanvas(800,600);
}

function draw(){
    background("black");
    explodeBalls(moveX, moveY);
    moveY++;
    moveX++;
    if(moveX > 800){
        moveX = 0;
    }
    if(moveY > 600){
        moveY = 0;
    }

}

function explodeBalls(circleX, circleY){
    
    for(var i = 0; i < 10; i++){
        circle(circleX * i, circleY , 20);
    }
    
}