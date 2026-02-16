function setup(){
    let canvas = createCanvas(800, 800, WEBGL);
    angleMode(DEGREES);
}

function preload() {
    myModel = loadModel('snakemodel.obj',true);

}

function draw(){
    background(255);
    ambientLight(100);
    pointLight(255,255,255,0,0,500);
    orbitControl();
    model(myModel);
    
    box(50,50,50);
    

}