let bill = document.getElementById("bill");

function calcTip(){
    var tip = bill.value * .2;
    console.log("Tip:" + " " + "$" + tip);
    var total = bill.value + tip;
    console.log("Total:" + " " + "$" + total);
}