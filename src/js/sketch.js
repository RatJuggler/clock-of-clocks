function setup() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    createCanvas(clockOfClocks.width, clockOfClocks.height);
    frameRate(60);
    angleMode(DEGREES);
}

function windowResized() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    resizeCanvas(clockOfClocks.width, clockOfClocks.height);
}

function draw() {
    background(220);

    // Show clocks.
    clockOfClocks.display();

    // Show screen size and FPS.
    stroke(220);
    fill(0);
    text(`Window: ${windowWidth} x ${windowHeight} FPS: ${getFrameRate().toFixed(2)}`, 10, clockOfClocks.height - 10);
}
