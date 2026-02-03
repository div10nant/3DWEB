let myShape;

function setup(){
    let canvas = createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
    //lampBlob();
}

function draw() {
    background(0);
    orbitControl();
    noStroke();
    lights();
    fill(0,255,255);
    shininess(0);
    specularMaterial(255,0,255);
    //model(myShape);
    ellipsoid(100,50,100);
}

function lampBlob() {
    beginGeometry();
    for (let i =0; i<25; i++) {
        let r = random(255);
        let g = random(255);
        let b = random(255);
        fill(r, g, b);
        let x = random(-100,100);
        let y = random(-100,100);
        let z = random(-100,100);
        let size = random(5,20);
    push();
    translate(x,y,z);
       
    pop();
    endGeometry();
    }
    
    
}
