function setup() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    createCanvas(clockOfClocks.width, clockOfClocks.height);
    frameRate(30);
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

    // Show FPS and detail on clock/screen sizes.
    stroke(220);
    fill(0);
    text(`FPS: ${round(getFrameRate(), 2)}
Time: ${hour()}:${minute()}:${second()}
Clocks: ${HORIZONTAL_CLOCKS} x ${VERTICAL_CLOCKS}
Canvas: ${clockOfClocks.width} x ${clockOfClocks.height}
Window: ${windowWidth} x ${windowHeight}`, 10, clockOfClocks.height - 50);
}
