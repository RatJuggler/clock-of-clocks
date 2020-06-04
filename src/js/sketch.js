const ONE_SECOND = 1000;
const TWO_SECONDS = 2 * ONE_SECOND;
const FIVE_SECONDS = 5 * ONE_SECOND;
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
    frameRate(30);
    angleMode(DEGREES);
    // repeatEvery(() => clockOfClocks.setTargetRandom(), TWO_SECONDS);
    repeatEvery(() => clockOfClocks.setTargetPattern(), TWO_SECONDS);
    repeatEvery(() => clockOfClocks.setTargetTime(), FIVE_SECONDS);
    clockOfClocks.setTargetTime();
}

function windowResized() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    resizeCanvas(clockOfClocks.width, clockOfClocks.height);
    clockOfClocks.setTargetTime();
}

function draw() {
    background("#cccccc");
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
