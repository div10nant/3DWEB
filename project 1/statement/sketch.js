let button;
let canvas; 
let i;
let sphereRot1 = 0.001;
let myFont;

// two variables needed for animation
let textFill = 255;
let isDimming = true;

// load font (required with WEBGL)
function preload() {
  myFont = loadFont("Courier New Regular.ttf");
}

  function setup() {
    button = createButton("go home");
    button.class("home");
    button.parent("top");
    button.mousePressed(goToMain2);
    canvas = createCanvas(windowWidth,windowHeight, WEBGL);
    textFont(myFont);
    textAlign(CENTER);
    textSize(30);
    }


function goToMain2() {
  window.location.href = "../index.html"; // Replace "next_page.html" with your target URL
}


function draw() {
    orbitControl();
    push();
    rotateY(-sphereRot1);
    sphere(150);
    pop();
     sphereRot1 = sphereRot1 + 0.0090;
    
    text("hi",0,0);
}