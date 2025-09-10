function fillCanvas () {
    for (let i = 0; i < 256; i++) {    
        const canvasSquare = document.createElement("div");
        canvasSquare.classList.add("canvasSquare");
        canvasSection.appendChild(canvasSquare);
    }    
};

fillCanvas();