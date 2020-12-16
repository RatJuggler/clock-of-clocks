// Show the time every n seconds.
const SHOW_TIME_INTERVAL = 15;

// Configuration options.
let configuration = new Configuration();

// Global to keep track of and draw clocks.
let clockOfClocks;

// Repeat timer.
function repeatEvery(handler, interval) {
    let now = new Date();
    let delay = interval - now % interval;
    setTimeout(() => {
        handler();
        repeatEvery(handler, interval);
    }, delay);
}

// Global function required for p5.js.
function setup() {
    angleMode(DEGREES);
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    createCanvas(clockOfClocks.width, clockOfClocks.height).parent("canvas-container");
    clockOfClocks.reset();
    // Clocks will show patterns with the actual time being shown at intervals.
    repeatEvery(() => clockOfClocks.setTime(), SHOW_TIME_INTERVAL * 1000);
}

// Global function triggered by p5.js.
function windowResized() {
    clockOfClocks = new ClockOfClocks(windowWidth, windowHeight);
    resizeCanvas(clockOfClocks.width, clockOfClocks.height);
    clockOfClocks.reset();
}

// Global function required for p5.js.
function draw() {
    frameRate(configuration.targetFPS);
    // Update and show the clock.
    clockOfClocks.tick();
    // Show FPS and detail on clock/screen sizes.
    if (configuration.debug) {
        textSize(32);
        fill("#00ff00");
        text(`FPS: ${round(getFrameRate(), 0)}
Time: ${str(hour()).padStart(2, "0") }:${str(minute()).padStart(2, "0") }:${str(second()).padStart(2, "0") }
Clocks: ${ClockOfClocks.HORIZONTAL_CLOCKS} x ${ClockOfClocks.VERTICAL_CLOCKS}, Size=${clockOfClocks.clockSize}
Canvas: ${clockOfClocks.width} x ${clockOfClocks.height}`, 8, clockOfClocks.height - 192);
    }
}
