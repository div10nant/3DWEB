let canvas;
let x;
let y;
let z;
let myTitle;
let button;
let buttonSize = 75;
function preload() {
  myTitle = loadImage('./feelingfinder.png');
 
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    //angleMode(DEGREES);
    colorMode(HSB);
    rectMode(CENTER);
    nextButton = createButton('Tell Me How 2 Feel');
    nextButton.style("width", buttonSize+"px"); // Set position (x, y)
    nextButton.mousePressed(goToNextPage); // Attach the event handler

}

function draw() {
    scale(0.5);
    translate(0,0,-2000);
    background(0);
    orbitControl(0,0,0.3);
    
    for (let i = 0; i < 10; i++){
        push();
        translate(-500,-600,(i*2));
        image(myTitle,-100,-200);
        pop();
    }

rotateX(PI * -0.2);
rotateY(PI * 0.2);
// Draw a strip of quads in a spiral formation
beginShape(QUAD_STRIP);
for (let z = -100; z < 100; z += 5) {
  fill((z + frameCount) % 360, 100, 100);
  
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

function goToNextPage() {
  window.location.href = "next_page.html"; // Replace "next_page.html" with your target URL
}

