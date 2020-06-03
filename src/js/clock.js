class Clock {

    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.hh = 0;
        this.mm = 0;
        this.toHH = 15;
        this.toMM = 45;
    }

    _drawHand(hand) {
        push();
        translate(this.x, this.y);
        rotate((hand * 6) - 90);
        strokeWeight(4);
        line(0, 0,this.d * 2 / 5, 0);
        pop();
    }

    render() {
        stroke(0);
        noFill();
        ellipse(this.x, this.y, this.d);
        stroke(50);
        fill(240);
        ellipse(this.x, this.y, this.d - 4);
        this._drawHand(this.mm);
        this._drawHand(this.hh);
    }

    update() {
        if (this.hh !== this.toHH) {
            this.hh = (this.hh + 1) % 60;
        }
        if (this.mm !== this.toMM) {
            this.mm = (this.mm + 1) % 60;
        }
    }

    setTarget(toHH, toMM) {
        this.toHH = toHH;
        this.toMM = toMM;
    }

    swapTargets() {
        let temp = this.toHH;
        this.toHH = this.toMM;
        this.toMM = temp;
    }
}