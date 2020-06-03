const SECOND = 1000;
const MINUTE = 60 * 1000;

function repeatEveryMinute() {
    let now = new Date();
    let delay = MINUTE - now % MINUTE;
    setTimeout(() => {
        clockOfClocks.setTargetTime();
        repeatEveryMinute();
    }, delay);
}

function repeatEverySecond() {
    let now = new Date();
    let delay = SECOND - now % SECOND;
    setTimeout(() => {
        clockOfClocks.setTargetSeconds();
        repeatEverySecond();
    }, delay);
}

function setup() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    createCanvas(clockOfClocks.width, clockOfClocks.height);
    frameRate(30);
    angleMode(DEGREES);
    repeatEverySecond();
    repeatEveryMinute();
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
    fill(0, 255, 0);
    text(`FPS: ${round(getFrameRate(), 2)}
Time: ${hour()}:${minute()}:${second()}
Clocks: ${HORIZONTAL_CLOCKS} x ${VERTICAL_CLOCKS}
Canvas: ${clockOfClocks.width} x ${clockOfClocks.height}
Window: ${windowWidth} x ${windowHeight}`, 10, clockOfClocks.height - 50);
}
