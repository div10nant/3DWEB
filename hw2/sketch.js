function setup() {
    let canvas = createCanvas(800,800, WEBGL);
    angleMode(DEGREES);
    
    
}

function draw() {
    background(200);
    orbitControl();
    box(100);
    translate(0,0,30);
    fill(255, 200, 221);
    box(80);
    translate(0,0,30);
    translate(0,0,0);
    fill(153,88,42);
    box(60);
    translate(0,0);
    translate(0,0,-130);
    rotateZ(90);
    rotateX(-90);
    cone(50,100,300);
    translate(0,-100,0);
}