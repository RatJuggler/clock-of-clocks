const HORIZONTAL_CLOCKS = 22;
const VERTICAL_CLOCKS = 8;

function createClocks() {
    let clockWidth = int(windowWidth / HORIZONTAL_CLOCKS);
    let clockHeight = int(windowHeight / VERTICAL_CLOCKS);
    let clockSize = min(clockWidth, clockHeight);
    clocks = [];
    let offset = int(clockSize / 2) + 1;
    for (let yClocks = 0; yClocks < VERTICAL_CLOCKS; yClocks++) {
        for (let xClocks = 0; xClocks < HORIZONTAL_CLOCKS; xClocks++) {
            clocks.push(new Clock( offset + (clockSize * xClocks), offset + (clockSize * yClocks), clockSize));
        }
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    angleMode(DEGREES);
    createClocks();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    createClocks();
}

function draw() {
    background(220);

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
