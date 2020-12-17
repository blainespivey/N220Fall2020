var words = [
    "basketball",
    "computer",
    "elephant",
    "catapult",
    "indianapolis",
    "tornado",
    "guitar",
    "bologna",
    "christmas",
    "february"
]

var underscores = document.getElementById("underscores");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
var f = document.getElementById("f");
var g = document.getElementById("g");
var h = document.getElementById("h");
var i = document.getElementById("i");
var j = document.getElementById("j");
var k = document.getElementById("k");
var l = document.getElementById("l");
var m = document.getElementById("m");
var n = document.getElementById("n");
var o = document.getElementById("o");
var p = document.getElementById("p");
var q = document.getElementById("q");
var r = document.getElementById("r");
var s = document.getElementById("s");
var t = document.getElementById("t");
var u = document.getElementById("u");
var v = document.getElementById("v");
var w = document.getElementById("w");
var x = document.getElementById("x");
var y = document.getElementById("y");
var z = document.getElementById("z");

let answer = "";
let guessed = [];
let mistakes = 0;
let maxMistakes = 6;

function pickWord() {
    answer = words[Math.floor(Math.random() * words.length)];
    
    for(i=0; i < answer.length; i++){
        document.body.appendChild("underscores");
    }
}

function checkAnswera() {
    if(answer.indexOf("a") >= 0) {
        document.body.appendChild("a");
    } else if (answer.indexOf("a") === -1) {
        mistakes++;
        updateHangman();
    }
}

pickWord();