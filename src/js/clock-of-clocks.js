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
        this.targetSet = false;
    }

    setTargetRandom() {
        if (this.targetSet) {
            return;
        }
        this.targetSet = true;
        this.clocks.forEach(clock => {
            clock.setTarget(int(random(0, 60)), int(random(0, 60)));
        })
    }

    _targetDigit(digit, offset) {
        let digitIdx = 0;
        let clockIdx = offset;
        for (let height = 0; height < DIGITS[digit].height; height++) {
            for (let width = 0; width < DIGITS[digit].width; width++) {
                this.clocks[clockIdx + width].setTarget(DIGITS[digit].shape[digitIdx].hh, DIGITS[digit].shape[digitIdx].mm);
                digitIdx++;
            }
            clockIdx += HORIZONTAL_CLOCKS;
        }
        return offset + DIGITS[digit].width;
    }

    setTargetTime() {
        this.targetSet = true;
        let time = str(hour()).padStart(2, "0") + ":" + str(minute()).padStart(2, "0");
        let offset = HORIZONTAL_CLOCKS;
        for (let c of time) {
            offset = this._targetDigit(c, offset);
        }
        offset = (VERTICAL_CLOCKS - 1) * HORIZONTAL_CLOCKS;
        for (let width = 0; width < HORIZONTAL_CLOCKS; width++) {
            this.clocks[width].setTarget(0, 0);
            this.clocks[offset + width].setTarget(0, 0);
        }
    }

    display() {
        let anyUpdates = false;
        this.clocks.forEach(clock => {
            anyUpdates = clock.update() || anyUpdates;
            clock.render();
        })
        this.targetSet = anyUpdates;
    }

}