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
    repeatEvery(() => clockOfClocks.setTargetTime(), SHOW_TIME_INTERVAL);
    clockOfClocks.setTargetTime();
}

function windowResized() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    resizeCanvas(clockOfClocks.width, clockOfClocks.height);
    clockOfClocks.setTargetTime();
}

function draw() {
    frameRate(TARGET_FPS);
    background("#cccccc");
    if (clockOfClocks.freeToSetNewTarget()) {
        // Randomly show chaos or pattern.
        let chance = random();
        if (chance > 0.9) {
            clockOfClocks.setTargetRandom();
        } else if (chance > 0.8) {
            clockOfClocks.setTargetSwap();
        } else {
            clockOfClocks.setTargetPattern();
        }
    }
    // Show clocks.
    clockOfClocks.display();
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
