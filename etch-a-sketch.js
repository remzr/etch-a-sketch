function fillCanvas () {
    for (let i = 0; i < 256; i++) {    
        const canvasSquare = document.createElement("div");
        canvasSquare.classList.add("canvasSquare");
        canvasSection.appendChild(canvasSquare);
    }    
};

fillCanvas();
function message () {
    console.log("Hovered!");
}

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