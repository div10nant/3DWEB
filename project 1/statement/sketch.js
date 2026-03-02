let button;
let canvas; 

  function setup() {
    button = createButton("go home");
    button.class("home");
    button.parent("top");
    button.mousePressed(goToMain2);
    
      }


function goToMain2() {
  window.location.href = "../index.html"; // Replace "next_page.html" with your target URL
}
