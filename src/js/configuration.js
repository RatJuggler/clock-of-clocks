class Configuration {

    constructor() {
        this.debug = false;
        this.targetFPS = 20;
        this.backgroundColour = "#cccccc";
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
}
