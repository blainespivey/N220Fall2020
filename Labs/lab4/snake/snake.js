let xpositions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let ypositions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setup(){
    createCanvas(800, 600);
}

function draw(){
    background(50);

    xpositions.push(mouseX);
    xpositions.shift();

    ypositions.push(mouseY);
    ypositions.shift();

    for(var i = 0; i < xpositions.length; i++){

        circle(xpositions[i], ypositions[i] , 100);

    }

}