let canvas;
let x;
let y;
let z;
let myTitle;
let button;
let buttonSize = 100;
let i;
let sphereRot1 = 0.1;

function preload() {
    myTitle = loadImage("./feelingfinder.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("sketch-holder");
    //angleMode(DEGREES);
    colorMode(HSB);
    rectMode(CENTER);
    nextButton = createButton("tell me how 2 feel");
    nextButton.style("width", buttonSize + "px"); // Set position (x, y)
    nextButton.mousePressed(goToNextPage); // Attach the event handler
    nextButton.parent("sketch-holder");
    nextButton.style("width", buttonSize + "px");
    nextButton.style("height", buttonSize / 3 + "px");
    nextButton.style("margin", "-" + buttonSize / 6 + "px -" + buttonSize / 2 + "px");
    nextButton.style("font-size", buttonSize / 7 + "px");



}

function draw() {
    background(0);
    
    fill(255);
   
    orbitControl(0, 0, 0.4);

    scale(0.5);

    fill(255, 0, 0, 100);
    stroke(255);

    push();
    translate(250, -150, 800);
    rotateY(sphereRot1);
    sphere(100);
    pop();
    push();
    translate(-500, 0, 0);
    rotateY(sphereRot1);
    cone(250, 250, 4);
    pop();
    push();

    translate(250, -10, 0);
    rotate(PI / 2);
    rotateY(sphereRot1);
    box(250);

    pop();

    push();

    translate(250, -10, 0);
    rotate(PI / 4);
    rotateY(sphereRot1);
    box(250);

    pop();

    push();

    translate(-250, 600, -1200);
    rotate(PI / 2);
    rotateY(sphereRot1);
    box(150);

    pop();

    push();
    translate(-500, 0, 0);
    rotateX(sphereRot1);
    cone(250, 250, 4);
    pop();

    push();
    translate(-700, 300, 100);
    rotateY(sphereRot1);
    cone(150, 250, 4);
    pop();

    push();
    translate(-250, 150, -150);
    rotateY(-sphereRot1);
    sphere(150);
    pop();

    push();
    translate(-50, -450, -500);
    rotate(PI / 3);
    rotateZ(-sphereRot1);
    sphere(100);
    pop();

    for (let i = 0; i < 10; i++) {
        push();
        translate(-500, -600, i * 2);
        image(myTitle, -100, -200);
        pop();
    }

    spiral();

    push();
    translate(1700, -100, 500);
    rotateZ(PI * 0.1);
    spiral();
    pop();

    push();

    translate(1200, -1600, -1500);
    rotateZ(PI * -0.1);
    rotateY(PI * -0.3);
    spiral();
    pop();
    sphereRot1 = sphereRot1 + 0.018;

    push();

    translate(1500, -300, -400);
    rotateZ(PI * -0.1);
    rotateX(PI * -0.2);
    spiral();
    pop();
    sphereRot1 = sphereRot1 + 0.018;
}

function spiral() {
    beginShape(QUAD_STRIP);
    for (let i = 0; i < 7; i++) {
        rotateX(PI * -0.2);
        rotateY(PI * 0.2);
        // Draw a strip of quads in a spiral formation

        translate(0, 0, -820);
        for (let z = -100; z < 100; z += 5) {
            //fill((z + frameCount) % 360, 100, 100);

            // Rotate the end point based on how far back it is,
            // and additionally based on the time
            let endPoint = createVector(0, 100);
            endPoint.rotate((z + frameCount) * 0.1);

            // In a QUAD_STRIP, each pair of vertices forms a
            // quad with the next pair. By making each pair have
            // a small y offset between them, we make a vertical
            // ribbon.
            vertex(endPoint.x, endPoint.y - 5, z);
            vertex(endPoint.x, endPoint.y + 5, z);
        }
        endShape();
    }
}

function goToNextPage() {
    window.location.href = "./nextpage/index.html"; // Replace "next_page.html" with your target URL
}
