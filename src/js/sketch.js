const SECOND = 1000;
const MINUTE = 60 * 1000;
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
    repeatEvery(() => clockOfClocks.setTargetSeconds(), SECOND);
    repeatEvery(() => clockOfClocks.setTargetTime(), MINUTE);
}

function windowResized() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    resizeCanvas(clockOfClocks.width, clockOfClocks.height);
}

function draw() {
    background(204, 204, 204);
    // Show clocks.
    clockOfClocks.display();
    // Show FPS and detail on clock/screen sizes.
    if (SHOW_FPS) {
        fill(0, 255, 0);
        text(`FPS: ${round(getFrameRate(), 2)}
Time: ${hour()}:${minute()}:${second()}
Clocks: ${HORIZONTAL_CLOCKS} x ${VERTICAL_CLOCKS}
Canvas: ${clockOfClocks.width} x ${clockOfClocks.height}
Window: ${windowWidth} x ${windowHeight}`, 10, clockOfClocks.height - 50);
    }
}
