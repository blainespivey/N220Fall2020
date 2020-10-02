
let speedX = 5;

let speedY = 5;

let circleX = 0;

let circleY = 0;

let rectX = 300;

let rectY = 400;

let rectH = 100;

let rectW = 400;


function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

              return true;

        }

   }

   return false;

}

function setup(){
    createCanvas(800,600)
}

function draw(){
    background("black");

    cirlceY = circleY + speedY;
    circleX = circleX + speedX;

    if(circleY > 600){
       speedY = -5;
    }

    if(circleY < 0){
        speedY = 5;
    }
    if(circleX > 800){
        speedX = -5;
    }

    if(circleX < 0){
        speedX = 5;
    }

    if(collideRect == true){
        speedX = -5;
        speedY = -5;
    }

    circle(circleX, circleY, 100);

    rect(rectX, rectY, rectW, rectH);




}