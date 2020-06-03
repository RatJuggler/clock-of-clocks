const HORIZONTAL_CLOCKS = 22;
const VERTICAL_CLOCKS = 8;

class ClockOfClocks {

    constructor(windowWidth, windowHeight) {
        let clockWidth = int(windowWidth / HORIZONTAL_CLOCKS);
        let clockHeight = int(windowHeight / VERTICAL_CLOCKS);
        let clockSize = min(clockWidth, clockHeight);
        this.width = clockSize * HORIZONTAL_CLOCKS + 1;
        this.height = clockSize * VERTICAL_CLOCKS + 1;
        this.clocks = [];
        let offset = int(clockSize / 2) + 1;
        for (let yClocks = 0; yClocks < VERTICAL_CLOCKS; yClocks++) {
            for (let xClocks = 0; xClocks < HORIZONTAL_CLOCKS; xClocks++) {
                this.clocks.push(new Clock( offset + (clockSize * xClocks), offset + (clockSize * yClocks), clockSize));
            }
        }
        this.newTarget = true;
    }

    _targetDigit(digit, offset) {
        for (let height = 0; height < DIGITS[digit].height; height++) {
            for (let width = 0; width < DIGITS[digit].width; width++) {
                let clockIdx = offset + (height * HORIZONTAL_CLOCKS) + width;
                let digitIdx = (height * DIGITS[digit].width) + width;
                this.clocks[clockIdx].setTarget(DIGITS[digit].shape[digitIdx].hh, DIGITS[digit].shape[digitIdx].mm);
            }
        }
        return offset + DIGITS[digit].width;
    }

    display() {
        if (this.newTarget && second() % 5 === 0) {
            let time = str(hour()).padStart(2, "0") + ":" + str(minute()).padStart(2, "0");
            let offset = HORIZONTAL_CLOCKS;
            for (let c of time) {
                offset = this._targetDigit(c, offset);
            }
            this.newTarget = false;
        }
        this.clocks.forEach(clock => {
            clock.update();
            clock.render();
        })
        if (!this.newTarget && second() % 5 !== 0) {
            this.newTarget = true;
        }
    }

}