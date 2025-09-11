function resizeCanvas(canvasSize) {
  fillCanvas(canvasSize);
  //const button = document.getElementById(resizeButton)
};

let canvasSize = 100;

function fillCanvas (canvasSize) {

  //Empty canvas
  const element = document.getElementById("canvasSection");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  //Fill canvas
  for (let i = 0; i < (canvasSize * canvasSize); i++) {    
      let squareWidth = `${100 / canvasSize}%`
    
      const canvasSquare = document.createElement("div");
      canvasSquare.classList.add("canvasSquare");
      canvasSquare.style.width = `${squareWidth}`;
      canvasSection.appendChild(canvasSquare);
  }    
};

fillCanvas(canvasSize);

//Called on Hover by event delegator (below)
function changeHoverColor (eventTarget) {
    eventTarget.classList.toggle("hovercolor");
};

//Global Eventlistener -> Event delegation
document.body.addEventListener("mouseover", function(e) {
  if (e.target.classList.contains("canvasSquare")) {
    changeHoverColor(e.target);
  }
})

//Global Eventlistener -> Event delegation for slider
document.body.addEventListener("mouseup", function(e) {
  if (e.target.classList.contains("resizeSlider")) {
    resizeCanvas(e.target.value);
  }
})

