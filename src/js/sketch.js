function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    angleMode(DEGREES);
    this.clock = new Clock(200, 200, 200);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    strokeWeight(8);

    // Show clock.
    this.clock.update(hour(), minute(), second());
    this.clock.render();

    // Show screen size and FPS.
    stroke(220);
    fill(0);
    text(`Width: ${windowWidth} Height: ${windowHeight} FPS: ${getFrameRate().toFixed(2)}`, 10, windowHeight - 10);
}
