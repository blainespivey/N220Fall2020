/*

Blaine Spivey
Assignment 2

*/ 



function setup() {
    createCanvas(800, 600);
}

let x = 0;

let speed = x + 5;


function draw() {
  background("black"); 
  
  x = x + speed;

  if(x > 800){
    x = 0;
  }

  circle(x, 300, 100,);
    
    
}

