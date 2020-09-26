let yPositions = [];

let speed = 5;

let y = 0;


function setup(){
    createCanvas(800, 600);
}

function draw(){

    
    background(0);
    

    y = y + speed;

    for(var i = 0; i < 100; i++){

        circle(400, y, 50);

    }

}