class Clock {

    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
    }

    _drawHand(width, angle) {
        push();
        translate(this.x, this.y);
        rotate(angle - 90);
        line(0, 0, width / 2, 0);
        pop();
    }

    render() {
        stroke(50);
        fill(240);
        ellipse(this.x, this.y, this.d);

        stroke(175, 208, 191);
        this._drawHand(this.d - 25, map(this.ss, 0, 60, 0, 360));

        stroke(128, 143, 135);
        this._drawHand(this.d - 50, map(this.mm, 0, 60, 0, 360));

        stroke(155, 126, 70);
        this._drawHand(this.d - 75, map(this.hh % 12, 0, 12, 0, 360));

        stroke(0);
        point(0, 0);
    }

    update(hh, mm, ss) {
        this.hh = hh;
        this.mm = mm;
        this.ss = ss;
    }

}