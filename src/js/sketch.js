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
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    createCanvas(clockOfClocks.width, clockOfClocks.height).parent("canvas-container");
    angleMode(DEGREES);
    repeatEvery(() => clockOfClocks.setTime(), SHOW_TIME_INTERVAL);
    clockOfClocks.setTime();
}

function windowResized() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    resizeCanvas(clockOfClocks.width, clockOfClocks.height);
    clockOfClocks.setTime();
}

function draw() {
    frameRate(TARGET_FPS);
    background("#cccccc");
    // Update and show clocks.
    clockOfClocks.process();
    // Show FPS and detail on clock/screen sizes.
    if (DEBUG) {
        textSize(32);
        fill("#00ff00");
        text(`FPS: ${round(getFrameRate(), 2)}
Time: ${str(hour()).padStart(2, "0") }:${str(minute()).padStart(2, "0") }:${str(second()).padStart(2, "0") }
Clocks: ${HORIZONTAL_CLOCKS} x ${VERTICAL_CLOCKS}
Canvas: ${clockOfClocks.width} x ${clockOfClocks.height}
Window: ${windowWidth} x ${windowHeight}`, 8, clockOfClocks.height - 128);
    }
}
