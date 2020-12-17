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
function checkAnswerb() {
    if(answer.indexOf("b") >= 0) {
        document.body.appendChild("b");
    } else if (answer.indexOf("b") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerc() {
    if(answer.indexOf("c") >= 0) {
        document.body.appendChild("c");
    } else if (answer.indexOf("c") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerd() {
    if(answer.indexOf("d") >= 0) {
        document.body.appendChild("d");
    } else if (answer.indexOf("d") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswere() {
    if(answer.indexOf("e") >= 0) {
        document.body.appendChild("e");
    } else if (answer.indexOf("e") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerf() {
    if(answer.indexOf("f") >= 0) {
        document.body.appendChild("f");
    } else if (answer.indexOf("f") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerg() {
    if(answer.indexOf("g") >= 0) {
        document.body.appendChild("g");
    } else if (answer.indexOf("g") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerh() {
    if(answer.indexOf("h") >= 0) {
        document.body.appendChild("h");
    } else if (answer.indexOf("h") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnsweri() {
    if(answer.indexOf("i") >= 0) {
        document.body.appendChild("i");
    } else if (answer.indexOf("i") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerj() {
    if(answer.indexOf("j") >= 0) {
        document.body.appendChild("j");
    } else if (answer.indexOf("j") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerk() {
    if(answer.indexOf("k") >= 0) {
        document.body.appendChild("k");
    } else if (answer.indexOf("k") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerl() {
    if(answer.indexOf("l") >= 0) {
        document.body.appendChild("l");
    } else if (answer.indexOf("l") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerm() {
    if(answer.indexOf("m") >= 0) {
        document.body.appendChild("m");
    } else if (answer.indexOf("m") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswern() {
    if(answer.indexOf("n") >= 0) {
        document.body.appendChild("n");
    } else if (answer.indexOf("n") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswero() {
    if(answer.indexOf("o") >= 0) {
        document.body.appendChild("o");
    } else if (answer.indexOf("o") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerp() {
    if(answer.indexOf("p") >= 0) {
        document.body.appendChild("p");
    } else if (answer.indexOf("p") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerq() {
    if(answer.indexOf("q") >= 0) {
        document.body.appendChild("q");
    } else if (answer.indexOf("q") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerr() {
    if(answer.indexOf("r") >= 0) {
        document.body.appendChild("r");
    } else if (answer.indexOf("r") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswers() {
    if(answer.indexOf("s") >= 0) {
        document.body.appendChild("s");
    } else if (answer.indexOf("s") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswert() {
    if(answer.indexOf("t") >= 0) {
        document.body.appendChild("t");
    } else if (answer.indexOf("t") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnsweru() {
    if(answer.indexOf("u") >= 0) {
        document.body.appendChild("u");
    } else if (answer.indexOf("u") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerv() {
    if(answer.indexOf("v") >= 0) {
        document.body.appendChild("v");
    } else if (answer.indexOf("v") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerw() {
    if(answer.indexOf("w") >= 0) {
        document.body.appendChild("w");
    } else if (answer.indexOf("w") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerx() {
    if(answer.indexOf("x") >= 0) {
        document.body.appendChild("x");
    } else if (answer.indexOf("x") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswery() {
    if(answer.indexOf("y") >= 0) {
        document.body.appendChild("y");
    } else if (answer.indexOf("y") === -1) {
        mistakes++;
        updateHangman();
    }
}
function checkAnswerz() {
    if(answer.indexOf("z") >= 0) {
        document.body.appendChild("z");
    } else if (answer.indexOf("z") === -1) {
        mistakes++;
        updateHangman();
    }
}

     


pickWord();