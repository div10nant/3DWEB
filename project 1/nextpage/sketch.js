
let imgArray = [];
let imgIndex = 0;
let button;
let button2;
let canvas; 

function preload() {
    
    for(let i =  0; i < 2; i++) {
        imgArray[i] = loadImage("./feeling"+i+".png");
    }
}

function setup() {
    
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("middle");
    rectMode(CENTER);
    button = createButton("Try Again");
    button.class("try");
    button.mousePressed(refresh);
    
    button2 = createButton("Go Home");
    button2.class("home");
    button2.parent("top");
    button2.mousePressed(goToMain);
    
    refresh();
    
    
    
}

function goToMain() {
  window.location.href = "../index.html"; // Replace "next_page.html" with your target URL
}

function draw() {
  
    translate(-500,-200,0);
    orbitControl(0, 0, 0.4);
    image(imgArray[imgIndex],0,0);

}

function refresh() {
    imgIndex = int(random(imgArray.length));
    
}