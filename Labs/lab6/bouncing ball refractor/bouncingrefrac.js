let myBall = {
    x: 0,
    y: 0,
    speed: 2,
    direction: 1,
    size: 50,
    color: [49, 84, 100]
}

function setup() {
    createCanvas(800 , 600);
}



function draw() {
    myBall.x += myBall.speed * myBall.direction;
    myBall.y += myBall.speed * myBall.direction;

    if(myBall.y > 600){
        myBall.direction = -1;
    }

    if(myBall.y < 0){
        myBall.direction = 1;
    }
    fill(myBall.color);
    background("black");
    circle(myBall.x, myBall.y, myBall.size);
}