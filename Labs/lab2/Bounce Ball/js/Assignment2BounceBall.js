/*
Blaine Spivey
Assignment 2
*/

function setup() {
    createCanvas(800 , 600);
}

let radius = 600;

let x = 0;

let y = 0;

let speed = 2;

let direction = 1;

function draw() {
    x += speed * direction;
    y += speed * direction;

    if(y > 600){
        direction = -1;
    }

    if(y < 0){
        direction = 1;
    }

    background("black");
    circle(x,y,100);
}