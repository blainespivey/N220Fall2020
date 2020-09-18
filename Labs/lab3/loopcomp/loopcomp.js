
let x = 0;

let speed = x + 5;


function setup(){
    createCanvas(800,600);
}

/*
I created this because I thought it looked cool. I wanted it to look the ball is rolling through
a tube.
*/

function draw(){
    background("red");

    fill("black");

    stroke("white");

    for(var i = 1; i <= 300; i++){
     circle(i + 300, 300, 50)
    }

    x = x + speed;

    if(x > 800){
      x = 0;
    }
  
    fill("white");

    circle(x, 300, 50,);
}