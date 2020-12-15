const ONE_SECOND = 1000;
const SHOW_TIME_INTERVAL = 15 * ONE_SECOND;

let DEBUG = false;
let TARGET_FPS = 20;

let clockOfClocks;

function repeatEvery(handler, interval) {
    let now = new Date();
    let delay = interval - now % interval;
    setTimeout(() => {
        handler();
        repeatEvery(handler, interval);
    }, delay);
}

function setup() {
    angleMode(DEGREES);
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    createCanvas(clockOfClocks.width, clockOfClocks.height).parent("canvas-container");
    clockOfClocks.reset();
    // Clocks will show patterns with the actual time being shown at intervals.
    repeatEvery(() => clockOfClocks.setTime(), SHOW_TIME_INTERVAL);
}

function windowResized() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    resizeCanvas(clockOfClocks.width, clockOfClocks.height);
    clockOfClocks.reset();
}

function draw() {
    frameRate(TARGET_FPS);
    // Update and show the clock.
    clockOfClocks.tick();
    // Show FPS and detail on clock/screen sizes.
    if (DEBUG) {
        textSize(32);
        fill("#00ff00");
        text(`FPS: ${round(getFrameRate(), 0)}
Time: ${str(hour()).padStart(2, "0") }:${str(minute()).padStart(2, "0") }:${str(second()).padStart(2, "0") }
Clocks: ${HORIZONTAL_CLOCKS} x ${VERTICAL_CLOCKS}, Size=${clockOfClocks.clockSize}
Canvas: ${clockOfClocks.width} x ${clockOfClocks.height}
Window: ${windowWidth} x ${windowHeight}`, 8, clockOfClocks.height - 128);
    }
}
