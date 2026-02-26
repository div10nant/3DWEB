let canvas;
let x;
let y;
let z;
let myTitle;
let button;
let buttonSize = 100;
let i;
let sphereRot1;
sphereRot1 = sphereRot1+0.18;

function preload() {
    myTitle = loadImage("./feelingfinder.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("sketch-holder");
    //angleMode(DEGREES);
    colorMode(HSB);
    rectMode(CENTER);
    nextButton = createButton("Tell Me How 2 Feel");
    nextButton.style("width", buttonSize + "px"); // Set position (x, y)
    nextButton.mousePressed(goToNextPage); // Attach the event handler
    nextButton.parent("sketch-holder");
    nextButton.style("width", buttonSize + "px");
    nextButton.style("height", buttonSize / 3 + "px");
    nextButton.style("margin", "-" + buttonSize / 6 + "px -" + buttonSize / 2 + "px");
    nextButton.style("font-size", buttonSize / 7 + "px");
}

function draw() {
    scale(0.5);

    //translate(0, 0, -1000);
    background(0);
    orbitControl(0, 0, 0.4);
    
    fill(255, 0, 0, 100);
    stroke(255);
    
    push();
    translate(450,-100,0);
    sphere(150);
    pop();
    push();
    translate(-500, 0, 0);
    cone(300, 300, 4);
    translate(200, -150, 0);
    box(250);
    
    pop();
    
    push();
    translate(-350,100,0);
    sphere(150);
    pop();

    

    for (let i = 0; i < 10; i++) {
        push();
        translate(-500, -600, i * 2);
        image(myTitle, -100, -200);
        pop();
    }

   

    spiral();
    
    push();
    translate(600,-100,0);
    rotateZ(PI*0.1);
    spiral();
    pop();
    
    push();
    translate(1000,-1000,0);
    rotateZ(PI*0.5);
    rotateX(PI*0.2);
    spiral();
    pop();
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
