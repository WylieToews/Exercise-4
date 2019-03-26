//var app = new Framework7 ({
//    
//    root: "#app" /* THIS IS THE APP ELEMENT */
//    
//})
//
//var mainView = app.views.create('.view-main');

document.addEventListener("deviceready", init, false);

var x, y, z;
var posX = window.innerWidth / 2;
var posY = window.innerHeight / 2;
var col1, col2, col3;

function init() {



    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation)
        console.log();
    } else {
        alert("no dice")
    }

    function handleOrientation(event) {
        z = event.alpha
        y = event.beta
        x = event.gamma
        
        posX = map(x, -180, 180, 0, window.innerWidth)
        posY = map(y, -90, 90, 0, window.innerHeight)
        
        posX += x;
        posY += y;
        
        col1 = map(x, -180, 180, 0, 255, true)
        col2 = map(y, -90, 90, 0, 255, true)
        col3 = map(z, 0, 360, 0, 255, true)

        $("#alpha").html(z)
        $("#beta").html(x)
        $("#gamma").html(y)
    }

}



function setup() {

    var cnv = createCanvas(window.innerWidth, window.innerHeight)
    cnv.parent("myCanvas");
    
//    posX = 0;
//    posY = 0;
//    angleMode(DEGREES);

}

function draw() {

    fill(col1, col2, col3);
    stroke(0);
    strokeWeight(1);
    ellipse(posX, posY, 100, 100);
    
    fill(255);
    strokeWeight(10);
    stroke(col1, col2, col3)
    textStyle(BOLD);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Keep Tilting!", window.innerWidth /2, window.innerHeight /5);



}
