function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    // Show screen size and FPS.
    fill(0);
    text(`Width: ${windowWidth} Height: ${windowHeight} FPS: ${getFrameRate().toFixed(2)}`, 10, windowHeight - 10);
}
