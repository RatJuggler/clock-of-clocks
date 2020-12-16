const controls = document.getElementById("controls");
controls.addEventListener("click", function() {
    let co = document.getElementById("controls-overlay");
    co.className = (co.className === "controls--hide") ? "controls--show" : "controls--hide";
});

const debugControl = document.getElementById("debug-control");
const debugDisplay = document.getElementById("debug-display");
debugControl.addEventListener("input", function() {
    configuration.debug = debugControl.value === "1";
    debugDisplay.innerText = configuration.debug ? "On" : "Off";
});

const fpsControl = document.getElementById("fps-control");
const fpsDisplay = document.getElementById("fps-display");
fpsControl.addEventListener("input", function() {
    configuration.targetFPS = parseInt(fpsControl.value.toString());
    fpsDisplay.innerText = configuration.targetFPS.toString();
});

const bgColour = document.getElementById("background-colour");
const bgcDisplay = document.getElementById("background-colour-display");
bgColour.addEventListener("input", function() {
    if (/^#[0-9A-Fa-f]{6}$/i.test(bgColour.value.toString())) {
        configuration.backgroundColour = bgColour.value.toString();
        bgcDisplay.innerText = configuration.backgroundColour;
        windowResized();
    }
});

debugControl.value = configuration.debug ? "1" : "0";
fpsControl.value = configuration.targetFPS;
bgColour.value = configuration.backgroundColour;

debugControl.dispatchEvent(new Event("input"));
fpsControl.dispatchEvent(new Event("input"));
bgColour.dispatchEvent(new Event("input"));
