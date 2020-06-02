const HORIZONTAL_CLOCKS = 24;
const VERTICAL_CLOCKS = 12;

function setup() {
    let clockWidth = int(windowWidth / HORIZONTAL_CLOCKS);
    let clockHeight = int(windowHeight / VERTICAL_CLOCKS);
    let clockSize = min(clockWidth, clockHeight);
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    angleMode(DEGREES);
    this.clock = new Clock(200, 200, clockSize);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    strokeWeight(4);

    // Show clock.
    this.clock.update(hour(), minute(), second());
    this.clock.render();

    // Show screen size and FPS.
    stroke(220);
    fill(0);
    text(`Width: ${windowWidth} Height: ${windowHeight} FPS: ${getFrameRate().toFixed(2)}`, 10, windowHeight - 10);
}
