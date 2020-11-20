
var numberList = document.getElementById("numberList");

var stringOutput = document.getElementById("stringOutput");

var sum = 0;

function breakString() {

    var inputString = numberList.value;

    var splitString = inputString.split(",");

    console.log(splitString);

    for(var i = 0; i < splitString.length; i++){
        var getSum = splitString[i];
        var makeInts = parseInt(getSum);
        sum = sum + getSum;
    }

    stringSum.innerHTML = sum;

}