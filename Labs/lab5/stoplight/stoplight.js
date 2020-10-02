let myColors = ["red", "yellow", "green"];

function setup(){
    createCanvas(800,600);
}

function draw(){
    background("blue");
    for (var i = 0; i < myColors.length; i++){
        fill(myColors[i]);
        stroke("black")
        circle(400,100 + 200 * i,100);

    }
}