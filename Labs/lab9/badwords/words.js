var txtSentence = document.getElementById("txtSentence");

var tallyCount = 0;

function findWords() {
    var inputString = txtSentence.value;
    
    var splitString = inputString.split(" ");

    console.log(splitString);

    var foundClear = false;

    var foundWater = false;

    var foundTires = false;

    for(var i = 0; i < splitString.length; i++) {
        var badWords = splitString[i];

        if(badWords === "clear") {
            foundClear = true;
            tallyCount += 1;
        }
        if(badWords === "water") {
            foundWater = true;
            tallyCount += 1;
        }
        if(badWords === "tires") {
            foundTires = true;
            tallyCount += 1;
        }
    }

    console.log(foundClear);
    console.log(foundWater);
    console.log(foundTires);
    console.log(tallyCount);
}