const DIRECTIONS = ["clockwise", "counterClockwise"];

class Clock {

    constructor(x, y, d) {
        this.x = x;         // Clock center postion x,y
        this.y = y;
        this.d = d;         // Clock diameter
        this.w = d * 0.05;  // Hands thickness
        this.l = d * 0.4;   // Hands length
        this.hh = 0;
        this.mm = 0;
        this.toHH = 15;
        this.toMM = 45;
        this.hhDirection = "clockwise";
        this.mmDirection = "clockwise";
    }

    renderFace(renderTo) {
        renderTo.stroke("#444444");
        renderTo.noFill();
        renderTo.ellipse(this.x, this.y, this.d);
        renderTo.stroke("#000000");
        renderTo.fill("#eeeeee");
        renderTo.ellipse(this.x, this.y, this.d - 4);
    }

    _drawHand(hand) {
        push();
        translate(this.x, this.y);
        rotate((hand * 6) - 90);
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
        this.setHands(int(random(0, 60)), int(random(0, 60)), random(DIRECTIONS), random(DIRECTIONS));
    }

    setSwapHands() {
        this.setHands(this.toMM, this.toHH, this.mmDirection, this.hhDirection);
    }

}
