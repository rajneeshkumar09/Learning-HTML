document.getElementById("para").innerHTML = "Hello JavaScript!";
document.getElementById("demo").style.fontSize = "25px";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.backgroundColor = "yellow";

function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "../images/bulb-off.png"
    } else {
        pic = "../images/bulb-on.png"
    }
    document.getElementById('myImage').src = pic;
}