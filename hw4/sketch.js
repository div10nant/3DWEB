let canvas;

function setup(){
    canvas = createCanvas(600, 600, WEBGL);
 
    angleMode(DEGREES);
    
    let button = createButton("Refresh Screen");
    button.parent("button-holder");
    button.mousePressed(refreshScreen);
}

function preload() {
   // myModel = loadModel('snakemodel.obj',true);

}

function draw(){
    background(255);
    ambientLight(100);
    pointLight(255,255,255,0,0,500);
    orbitControl();
    //model(myModel);
    fill(0);
    box(50);
    
}

function refreshScreen(){
    window.location.reload();
    
}