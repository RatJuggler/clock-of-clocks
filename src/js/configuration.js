class Configuration {

    constructor() {
        this.debug = false;
        this.targetFPS = 20;
        this.backgroundColour = "#cccccc";
        this.faceColour = "#eeeeee";
        this.rimColour = "#444444";
        this.handsColour = "#000000";
    }

    setDebug(debug) {
        this.debug = debug === "1";
    }

    getDebug() {
        return this.debug ? "1" : "0";
    }

    showDebug() {
        return this.debug ? "On" : "Off";
    }

    setTargetFPS(targetFPS) {
        this.targetFPS = parseInt(targetFPS.toString());
    }

    showTargetFPS() {
        return this.targetFPS.toString();
    }

    setBackgroundColour(backgroundColour) {
        if (/^#[0-9A-Fa-f]{6}$/i.test(backgroundColour.toString())) {
            this.backgroundColour = backgroundColour.toString();
            window.dispatchEvent(new Event('resize'));
        }
    }

    showBackgroundColour() {
        return this.backgroundColour;
    }

    setFaceColour(faceColour) {
        if (/^#[0-9A-Fa-f]{6}$/i.test(faceColour.toString())) {
            this.faceColour = faceColour.toString();
            window.dispatchEvent(new Event('resize'));
        }
    }

    showFaceColour() {
        return this.faceColour;
    }

    setRimColour(rimColour) {
        if (/^#[0-9A-Fa-f]{6}$/i.test(rimColour.toString())) {
            this.rimColour = rimColour.toString();
            window.dispatchEvent(new Event('resize'));
        }
    }

    showRimColour() {
        return this.rimColour;
    }

    setHandsColour(handsColour) {
        if (/^#[0-9A-Fa-f]{6}$/i.test(handsColour.toString())) {
            this.handsColour = handsColour.toString();
        }
    }

    showHandsColour() {
        return this.handsColour;
    }
}
