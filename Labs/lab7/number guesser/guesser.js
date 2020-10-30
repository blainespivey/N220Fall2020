let number = document.getElementById("number");

function guessNumber() {
    number1 = 11;
    if(number.value > number1) {
        console.log("Too High");
    }

    if(number.value < number1) {
        console.log("Too Low");
    }

    if(number.value == number1) {
        console.log("You Got It Right!");
    }
}