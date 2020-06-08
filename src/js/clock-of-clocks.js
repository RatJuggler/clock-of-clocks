const HORIZONTAL_CLOCKS = 18;
const VERTICAL_CLOCKS = 8;

class ClockOfClocks {

    constructor(windowWidth, windowHeight) {
        // Work out how big each clock and the canvas will be given the current window size.
        let clockSize = min(int(windowWidth / HORIZONTAL_CLOCKS), int(windowHeight / VERTICAL_CLOCKS));
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

    _freeToSetNewTarget() {
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

    _copy(from, offset) {
        let digitIdx = 0;
        let clockIdx = offset;
        for (let height = 0; height < from.height; height++) {
            for (let width = 0; width < from.width; width++) {
                this.clocks[clockIdx + width].setHands(from.shape[digitIdx].hh, from.shape[digitIdx].mm, from.hhDirection, from.mmDirection);
                digitIdx++;
            }
            clockIdx += HORIZONTAL_CLOCKS;
        }
        return offset + from.width;
    }

    setTime() {
        // Potential race condition here.
        this.targetSet = true;
        // Time display to show.
        let time = hour().toString().padStart(2, "0") + ":" + minute().toString().padStart(2, "0");
        let offset = HORIZONTAL_CLOCKS;
        for (let c of time) {
            offset = this._copy(DIGITS[c], offset);
        }
        // Do something with the top and bottom rows.
        offset = (VERTICAL_CLOCKS - 1) * HORIZONTAL_CLOCKS;
        for (let width = 0; width < HORIZONTAL_CLOCKS; width++) {
            this.clocks[width].setHands(0, 0);
            this.clocks[offset + width].setHands(0, 0);
        }
    }

    _setPattern() {
        let pattern = random(PATTERNS.templates);
        for (let row = 0; row < pattern.layout.length; row++) {
            let offset = row * HORIZONTAL_CLOCKS * pattern.height;
            for (let c of pattern.layout[row]) {
                offset = this._copy(PATTERNS[c], offset);
            }
        }
    }

    _setTarget() {
        // Randomly show chaos or pattern.
        let chance = random();
        if (chance > 0.9) {
            this.clocks.forEach(clock => {
                clock.setRandomHands();
            })
        } else if (chance > 0.8) {
            this.clocks.forEach(clock => {
                clock.setSwapHands();
            })
        } else {
            this._setPattern();
        }
    }

    tick() {
        if (this._freeToSetNewTarget()) {
            this._setTarget();
        }
        let anyUpdates = false;
        this.clocks.forEach(clock => {
            anyUpdates = clock.update() || anyUpdates;
            clock.renderHands();
        })
        if (this.targetSet && !anyUpdates) {
            this.targetSetDelay = 30;
            this.targetSet = false;
        }
    }

    reset(renderTo) {
        // Redraw the faces and set time.
        renderTo.background("#cccccc");
        this.clocks.forEach(clock => {
            clock.renderFace(renderTo);
        })
        this.setTime();
    }

}
