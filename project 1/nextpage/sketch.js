


function setup() {
    
    button = createButton("Try Again");
    button.mousePressed(goToTryAgain);
    
}

function goToTryAgain() {
  window.location.href = "./nextpage/index.html"; // Replace "next_page.html" with your target URL
}