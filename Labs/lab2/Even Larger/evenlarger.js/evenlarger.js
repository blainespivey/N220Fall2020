let diameter = 1;

let increase = diameter + 1;

function setup(){
    createCanvas(800,600);
}

function draw(){
    background('red');

    diameter = diameter + increase;

    circle(400,300,diameter);
    
    if(diameter > 200){
        diameter = 1;
    }

   
}
    
