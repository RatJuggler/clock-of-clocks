class ClockOfClocks {

    static HORIZONTAL_CLOCKS = 18;
    static VERTICAL_CLOCKS = 8;

    constructor(windowWidth, windowHeight) {
        // Work out how big each clock and the canvas will be given the current window size.
        this.width = windowWidth;
        this.height = windowHeight;
        this.clockSize = min(int(this.width / ClockOfClocks.HORIZONTAL_CLOCKS), int(this.height / ClockOfClocks.VERTICAL_CLOCKS));
        // Initialise the clocks.
        this.clocks = [];
        let offset = int(this.clockSize / 2);
        let hOffset = offset + int((this.width - (this.clockSize * ClockOfClocks.HORIZONTAL_CLOCKS)) / 2);
        for (let yClocks = 0; yClocks < ClockOfClocks.VERTICAL_CLOCKS; yClocks++) {
            for (let xClocks = 0; xClocks < ClockOfClocks.HORIZONTAL_CLOCKS; xClocks++) {
                this.clocks.push(new Clock( hOffset + (this.clockSize * xClocks), offset + (this.clockSize * yClocks), this.clockSize));
            }
        }
        // Create an off-screen canvas which is used to pre-render the clock faces.
        this.faceCanvas = createGraphics(this.width, this.height);
        // The target will be a new pattern or the time to display (the flag should be atomic).
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
            clockIdx += ClockOfClocks.HORIZONTAL_CLOCKS;
        }
        return offset + from.width;
    }

    setTime() {
        // Potential race condition here.
        this.targetSet = true;
        // Time display to show.
        let time = hour().toString().padStart(2, "0") + ":" + minute().toString().padStart(2, "0");
        let offset = ClockOfClocks.HORIZONTAL_CLOCKS;
        for (let c of time) {
            offset = this._copy(DIGITS[c], offset);
        }
        // Do something with the top and bottom rows.
        offset = (ClockOfClocks.VERTICAL_CLOCKS - 1) * ClockOfClocks.HORIZONTAL_CLOCKS;
        for (let width = 0; width < ClockOfClocks.HORIZONTAL_CLOCKS; width++) {
            this.clocks[width].setHands(0, 0);
            this.clocks[offset + width].setHands(0, 0);
        }
    }

    _setPattern() {
        let pattern = random(PATTERNS.templates);
        for (let row = 0; row < pattern.layout.length; row++) {
            let offset = row * ClockOfClocks.HORIZONTAL_CLOCKS * pattern.height;
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
        // Show the clock faces.
        image(this.faceCanvas, 0, 0);
        // Show a new pattern.
        if (this._freeToSetNewTarget()) {
            this._setTarget();
        }
        // Move and show the hands.
        let anyUpdates = false;
        this.clocks.forEach(clock => {
            anyUpdates = clock.tick() || anyUpdates;
            clock.renderHands();
        })
        // If pattern/time is complete a new one can be set.
        if (this.targetSet && !anyUpdates) {
            this.targetSetDelay = 30;
            this.targetSet = false;
        }
    }

    reset() {
        // Redraw the faces and immediately target a new time display.
        this.faceCanvas.resizeCanvas(this.width, this.height);
        this.faceCanvas.background("#cccccc");
        this.clocks.forEach(clock => {
            clock.renderFace(this.faceCanvas);
        })
        this.setTime();
    }

}
