let eyesize = 120;

let mouth = 300;

function setup(){

createCanvas(800,600);

    
}

function draw(){

background("red");

fill("blue");

stroke("black");

strokeWeight(7);

ellipse(300, 200, eyesize, 80);

ellipse(500, 200, eyesize,80);

fill(197, 140, 133);

ellipse(400, 300, 120, 100);

fill("black");

rect(250, 400, mouth, 50);

}