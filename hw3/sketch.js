
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
    //ambientLight(245, 182, 66);
    fill(220,220,220);
    shininess(0);
    specularMaterial(255,0,255);
    //model(myShape);
    
    push();
    fill(220,220,220);
    translate(20,-110,0);
    rotate(90);
    translate(5,55,7);
    rotateZ(-20);
    cone(10,60,);
    translate(0,0,-14)
    cone(10,60,);
    pop();
    push();
    translate(40,-110,0);
    rotate(90);
    cylinder(15,20,15);
    pop();
    cylinder(15,190,20);
    push();
    translate(0,-110,0);
    box(40,29,35);
    pop();
    translate(20,-110,0);
    rotateZ(90);
    cylinder(10,30,10);

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
