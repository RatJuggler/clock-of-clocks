class Clock {

    static DIRECTIONS = ["clockwise", "counterClockwise"];

    constructor(x, y, d) {
        this.x = x;         // Clock center position x,y
        this.y = y;
        this.d = d;         // Clock diameter
        this.w = d * 0.05;  // Hands thickness
        this.l = d * 0.4;   // Hands length
        this.hh = 0;
        this.mm = 0;
        this.toHH = 15;
        this.toMM = 45;
        this.hhDirection = Clock.DIRECTIONS[0];
        this.mmDirection = Clock.DIRECTIONS[0];
    }

    renderFace(renderTo) {
        renderTo.stroke(configuration.rimColour);
        renderTo.noFill();
        renderTo.ellipse(this.x, this.y, this.d);
        renderTo.fill(configuration.faceColour);
        renderTo.ellipse(this.x, this.y, this.d - 4);
    }

    _drawHand(hand) {
        push();
        translate(this.x, this.y);
        rotate((hand * 6) - 90);
        stroke(configuration.handsColour);
        strokeWeight(this.w);
        line(0, 0,this.l, 0);
        pop();
    }

    renderHands() {
        this._drawHand(this.mm);
        this._drawHand(this.hh);
    }

    clockwise(current, target) {
        if (this[current] === target) {
            return false;
        }
        this[current] = this[current] === 59 ? 0 : this[current] + 1;
        return true;
    }

    counterClockwise(current, target) {
        if (this[current] === target) {
            return false;
        }
        this[current] = this[current] === 0 ? 59 : this[current] - 1;
        return true;
    }

    tick() {
        let hhUpdated = this[this.hhDirection]("hh", this.toHH);
        let mmUpdated = this[this.mmDirection]("mm", this.toMM);
        return hhUpdated && mmUpdated;
    }

    setHands(toHH, toMM, hhDirection = "clockwise", mmDirection = "clockwise") {
        this.toHH = toHH;
        this.toMM = toMM;
        this.hhDirection = hhDirection;
        this.mmDirection = mmDirection;
    }

    setRandomHands() {
        this.setHands(int(random(0, 60)), int(random(0, 60)), random(Clock.DIRECTIONS), random(Clock.DIRECTIONS));
    }

    setSwapHands() {
        this.setHands(this.toMM, this.toHH, this.mmDirection, this.hhDirection);
    }

}
