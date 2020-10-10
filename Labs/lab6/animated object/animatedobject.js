let myCircle = {
    x: 400,
    y: 300,
    size: 50,
}

function setup(){
    createCanvas(800,600);
}

function draw(){
    background("black");

    myCircle.x += 1;

    fill("red");

    circle(myCircle.x, myCircle.y, myCircle.size);
}