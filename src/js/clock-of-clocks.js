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

    display() {
        if (this.newTarget && second() % 10 === 0) {
            this.clocks.forEach(clock => {
                clock.setTarget();
            })
            this.newTarget = false;
        }
        this.clocks.forEach(clock => {
            clock.update();
            clock.render();
        })
        if (!this.newTarget && second() % 10 !== 0) {
            this.newTarget = true;
        }
    }

}