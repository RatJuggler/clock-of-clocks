const HORIZONTAL_CLOCKS = 24;
const VERTICAL_CLOCKS = 12;

function setup() {
    let clockWidth = int(windowWidth / HORIZONTAL_CLOCKS);
    let clockHeight = int(windowHeight / VERTICAL_CLOCKS);
    let clockSize = min(clockWidth, clockHeight);
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    angleMode(DEGREES);
    clocks = [];
    for (let yClocks = 0; yClocks < VERTICAL_CLOCKS; yClocks++) {
        for (let xClocks = 0; xClocks < HORIZONTAL_CLOCKS; xClocks++) {
            clocks.push(new Clock(clockSize * xClocks, clockSize * yClocks, clockSize));
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    strokeWeight(4);

    // Show clocks.
    clocks.forEach(clock => {
        clock.update(hour(), minute(), second());
        clock.render();
    })

    // Show screen size and FPS.
    stroke(220);
    fill(0);
    text(`Width: ${windowWidth} Height: ${windowHeight} FPS: ${getFrameRate().toFixed(2)}`, 10, windowHeight - 10);
}
