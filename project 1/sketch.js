let canvas;
let x;
let y;
let z;
let myTitle;
let button;
let buttonSize = 100;
let i;
let sphereRot1 = pi/2;

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

    translate(0, 0, -2000);
    background(0);
    orbitControl(0, 0, 0.3);

    fill(255);
    sphere(200);
    push();
    translate(-500, 0, 0);
    cone(300, 300, 4);
    translate(200, -150, 0);
    box(250);
    endShape();
    pop();

    push();
    
        
    translate(-800, 0, 0);
    rotateY(sphereRot1);
    sphere(200);
    boxRot1++;
    
    pop();
    
    push();

    for (let i = 0; i < 10; i++) {
        push();
        translate(-500, -600, i * 2);
        image(myTitle, -100, -200);
        pop();
    }

   pop();

    spiral();
}

function spiral() {
    beginShape(QUAD_STRIP);
    for (let i = 0; i < 7; i++) {
        rotateX(PI * -0.2);
        rotateY(PI * 0.2);
        // Draw a strip of quads in a spiral formation

        translate(i*20, 0, -820);
        for (let z = -100; z < 100; z += 5) {
            //fill((z + frameCount) % 360, 100, 100);
            fill(255);
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

function mouseWheel() {
    if (event.delta > 0) {
        buttonSize--;
    } else {
        buttonSize++;
    }

    if (buttonSize < 90) {
        buttonSize = 90;
    } else if (buttonSize > 200) {
        buttonSize = 200;
    }

    button.style("width", buttonSize + "px");
    button.style("height", buttonSize / 3 + "px");
    button.style("margin", "-" + buttonSize / 6 + "px -" + buttonSize / 2 + "px");
    button.style("font-size", buttonSize / 7 + "px");
}

function goToNextPage() {
    window.location.href = "./nextpage/index.html"; // Replace "next_page.html" with your target URL
}
