function biggerFunction() {
    //alert("Hello, World!");
    document.getElementById("usertext").style.fontSize = "24pt";
}

function fancyFunction() {
    document.getElementById("usertext").style.fontWeight ="bold";
    document.getElementById("usertext").style.color = "blue";
    document.getElementById("usertext").style.textDecoration = "underline";
}

function boringFunction() {
    document.getElementById("usertext").style.fontWeight = "normal";
    document.getElementById("usertext").style.color = "black";
    document.getElementById("usertext").style.textDecoration = "none";
}

function mooFunction() {
    //document.getElementById("usertext").value = document.getElementById("usertext").value.toUpperCase();
    var parts = document.getElementById("usertext").value.split(".");
    document.getElementById("usertext").value = parts.join("moo.");

}

/*
var button = document.getElementById("biggerButton");
button.addEventListener("click", alertFunction);
*/