function setup(){
    createCanvas(800,600);
}

function draw(){
    background ("gray");

    noFill();


    for(var i = 0; i < 100; i++){
     
       circle(400, 300, i * 5);

    }
}