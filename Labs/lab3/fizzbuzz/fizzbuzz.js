

function setup(){
    createCanvas(800,600);
}

function draw(){
    background ("red");

    fill ("black");

    stroke("white");

    

    for(var i = 0; i < 26; i++){
     
        if (i == 3){
            fill("purple");
            circle(i * 50, 300, 50);
        }

        if(i==5){
            fill("green");
            rect(i * 50, 300, 50, 50);
        }
        
        circle(i * 50, 300, 50);

    }
}
