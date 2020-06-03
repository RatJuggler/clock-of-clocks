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
    }

    setTargetSeconds() {
        let offset = (VERTICAL_CLOCKS - 1) * HORIZONTAL_CLOCKS;
        for (let width = 0; width < HORIZONTAL_CLOCKS; width++) {
            this.clocks[width].swapTargets();
            this.clocks[offset + width].swapTargets();
        }
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
        let time = str(hour()).padStart(2, "0") + ":" + str(minute()).padStart(2, "0");
        let offset = HORIZONTAL_CLOCKS;
        for (let c of time) {
            offset = this._targetDigit(c, offset);
        }
    }

    display() {
        this.clocks.forEach(clock => {
            clock.update();
            clock.render();
        })
    }

}