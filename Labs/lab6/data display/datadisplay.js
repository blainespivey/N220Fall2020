let myRect = {
    height: 100,
    width: 200,
    x: 0,
    y: 0,
    color: [98, 40, 250]
}

function setup() {
    createCanvas(800,600);
}

function draw() {
    fill(myRect.color);
    rect (myRect.x, myRect.y, myRect.width, myRect.height);
}