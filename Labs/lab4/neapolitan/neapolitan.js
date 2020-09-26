let myColors = ["pink", "white", "brown"];

function setup(){
    createCanvas(800,600);
}

function draw(){
    background("black");
    for (var i = 0; i < myColors.length; i++){
        fill(myColors[i]);

        rect(300 * i, 200, 300, 200);

    }



}

