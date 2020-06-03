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

    update() {
        let updated = false;
        if (this.hh !== this.toHH) {
            this.hh = (this.hh + 1) % 60;
            updated = true;
        }
        if (this.mm !== this.toMM) {
            this.mm = (this.mm + 1) % 60;
            updated = true;
        }
        return updated;
    }

    setTarget(toHH, toMM) {
        this.toHH = toHH;
        this.toMM = toMM;
    }
}