const HORIZONTAL_CLOCKS = 18;
const VERTICAL_CLOCKS = 8;

class ClockOfClocks {

    constructor(windowWidth, windowHeight) {
        // Work out how big each clock and the canvas will be given the current window size.
        let clockWidth = int(windowWidth / HORIZONTAL_CLOCKS);
        let clockHeight = int(windowHeight / VERTICAL_CLOCKS);
        let clockSize = min(clockWidth, clockHeight);
        this.width = clockSize * HORIZONTAL_CLOCKS + 1;
        this.height = clockSize * VERTICAL_CLOCKS + 1;
        // Initialise the clocks.
        this.clocks = [];
        let offset = int(clockSize / 2) + 1;
        for (let yClocks = 0; yClocks < VERTICAL_CLOCKS; yClocks++) {
            for (let xClocks = 0; xClocks < HORIZONTAL_CLOCKS; xClocks++) {
                this.clocks.push(new Clock( offset + (clockSize * xClocks), offset + (clockSize * yClocks), clockSize));
            }
        }
        // This should be atomic.
        this.targetSet = false;
        this.targetSetDelay = 0;
    }

    freeToSetNewTarget() {
        // Potential race condition here.
        if (this.targetSet) {
            return false;
        }
        if (this.targetSetDelay > 0) {
            this.targetSetDelay--;
            return false;
        }
        this.targetSet = true;
        return true;
    }

    setTargetRandom() {
        this.clocks.forEach(clock => {
            clock.setRandomTarget();
        })
    }

    setTargetSwap() {
        this.clocks.forEach(clock => {
            clock.setSwapTarget();
        })
    }

    _targetCopy(from, offset) {
        let digitIdx = 0;
        let clockIdx = offset;
        for (let height = 0; height < from.height; height++) {
            for (let width = 0; width < from.width; width++) {
                this.clocks[clockIdx + width].setTarget(from.shape[digitIdx].hh, from.shape[digitIdx].mm, from.hhDirection, from.mmDirection);
                digitIdx++;
            }
            clockIdx += HORIZONTAL_CLOCKS;
        }
        return offset + from.width;
    }

    setTargetTime() {
        // Potential race condition here.
        this.targetSet = true;
        // Time display to show.
        let time = hour().toString().padStart(2, "0") + ":" + minute().toString().padStart(2, "0");
        let offset = HORIZONTAL_CLOCKS;
        for (let c of time) {
            offset = this._targetCopy(DIGITS[c], offset);
        }
        // Do something with the top and bottom rows.
        offset = (VERTICAL_CLOCKS - 1) * HORIZONTAL_CLOCKS;
        for (let width = 0; width < HORIZONTAL_CLOCKS; width++) {
            this.clocks[width].setTarget(0, 0);
            this.clocks[offset + width].setTarget(0, 0);
        }
    }

    setTargetPattern() {
        let pattern = random(PATTERNS.templates);
        for (let row = 0; row < pattern.layout.length; row++) {
            let offset = row * HORIZONTAL_CLOCKS * pattern.height;
            for (let c of pattern.layout[row]) {
                offset = this._targetCopy(PATTERNS[c], offset);
            }
        }
    }

    display() {
        let anyUpdates = false;
        this.clocks.forEach(clock => {
            anyUpdates = clock.update() || anyUpdates;
            clock.render();
        })
        if (this.targetSet && !anyUpdates) {
            this.targetSetDelay = 30;
            this.targetSet = false;
        }
    }

}