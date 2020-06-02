class Clock {

    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.hh = 0;
        this.mm = 0;
    }

    _drawHand(angle) {
        push();
        translate(this.x, this.y);
        rotate(angle - 90);
        strokeWeight(4);
        line(0, 0,this.d * 8 / 20, 0);
        pop();
    }

    render() {
        stroke(0);
        fill(240);
        ellipse(this.x, this.y, this.d);
        this._drawHand(map(this.mm, 0, 60, 0, 360));
        this._drawHand(map(this.hh % 12, 0, 12, 0, 360));
    }

    update(hh, mm) {
        this.hh = hh;
        this.mm = mm;
    }

}