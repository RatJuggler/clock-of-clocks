const ONE_SECOND = 1000;
const SHOW_TIME_INTERVAL = 10 * ONE_SECOND;
const SHOW_FPS = true;

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
    createCanvas(clockOfClocks.width, clockOfClocks.height);
    frameRate(20);
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
    background("#cccccc");
    // Randomly chaos or pattern.
    if (random() > 0.5) {
        clockOfClocks.setTargetRandom();
    } else {
        clockOfClocks.setTargetPattern();
    }
    // Show clocks.
    clockOfClocks.display();
    // Show FPS and detail on clock/screen sizes.
    if (SHOW_FPS) {
        fill("#00ff00");
        text(`FPS: ${round(getFrameRate(), 2)}
Time: ${str(hour()).padStart(2, "0") }:${str(minute()).padStart(2, "0") }:${str(second()).padStart(2, "0") }
Clocks: ${HORIZONTAL_CLOCKS} x ${VERTICAL_CLOCKS}
Canvas: ${clockOfClocks.width} x ${clockOfClocks.height}
Window: ${windowWidth} x ${windowHeight}`, 10, clockOfClocks.height - 50);
    }
}
