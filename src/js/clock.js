const DIRECTIONS = ["forward", "backward"];

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
        this.hhDirection = "forward";
        this.mmDirection = "forward";
    }

    _drawHand(hand) {
        push();
        translate(this.x, this.y);
        rotate((hand * 6) - 90);
        strokeWeight(this.w);
        line(0, 0,this.l, 0);
        pop();
    }

    render() {
        stroke("#444444");
        noFill();
        ellipse(this.x, this.y, this.d);
        stroke("#000000");
        fill("#eeeeee");
        ellipse(this.x, this.y, this.d - 4);
        this._drawHand(this.mm);
        this._drawHand(this.hh);
    }

    forward(current, target) {
        if (this[current] !== target) {
            this[current] = (this[current] + 1) % 60;
            return true;
        }
        return false;
    }

    backward(current, target) {
        if (this[current] !== target) {
            this[current] = this[current] === 0 ? 59 : this[current] - 1;
            return true;
        }
        return false;
    }

    update() {
        let hhUpdated = this[this.hhDirection]("hh", this.toHH);
        let mmUpdated = this[this.mmDirection]("mm", this.toMM);
        return hhUpdated && mmUpdated;
    }

    setTarget(toHH, toMM, hhDirection = "forward", mmDirection = "forward") {
        this.toHH = toHH;
        this.toMM = toMM;
        this.hhDirection = hhDirection;
        this.mmDirection = mmDirection;
    }

    setRandomTarget() {
        this.toHH = int(random(0, 60));
        this.toMM = int(random(0, 60));
        this.mmDirection = random(DIRECTIONS);
        this.hhDirection = random(DIRECTIONS);
    }

}
