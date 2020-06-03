const MINUTE = 60 * 1000;

function setTargetTime() {
    let time = str(hour()).padStart(2, "0") + ":" + str(minute()).padStart(2, "0");
    console.log(time);
    let offset = HORIZONTAL_CLOCKS;
    for (let c of time) {
        offset = clockOfClocks.targetDigit(c, offset);
    }
}

function repeatEveryMinute() {
    let now = new Date();
    let delay = MINUTE - now % MINUTE;
    console.log("Now: " + now + " Waiting: " + delay);
    setTimeout(() => {
        setTargetTime();
        repeatEveryMinute();
    }, delay);
}

function setup() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    createCanvas(clockOfClocks.width, clockOfClocks.height);
    frameRate(30);
    angleMode(DEGREES);
    repeatEveryMinute();
}

function windowResized() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    resizeCanvas(clockOfClocks.width, clockOfClocks.height);
}

function draw() {
    background(220);

    // Show clocks.
    clockOfClocks.display();

    // Show FPS and detail on clock/screen sizes.
    stroke(220);
    fill(0);
    text(`FPS: ${round(getFrameRate(), 2)}
Time: ${hour()}:${minute()}:${second()}
Clocks: ${HORIZONTAL_CLOCKS} x ${VERTICAL_CLOCKS}
Canvas: ${clockOfClocks.width} x ${clockOfClocks.height}
Window: ${windowWidth} x ${windowHeight}`, 10, clockOfClocks.height - 50);
}
