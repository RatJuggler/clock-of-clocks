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
    return {
        "width": clockSize * HORIZONTAL_CLOCKS + 1,
        "height": clockSize * VERTICAL_CLOCKS + 1
    }
}

function setup() {
    let canvasSize = createClocks();
    createCanvas(canvasSize.width, canvasSize.height);
    frameRate(60);
    angleMode(DEGREES);
}

function windowResized() {
    let canvasSize = createClocks();
    resizeCanvas(canvasSize.width, canvasSize.height);
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
