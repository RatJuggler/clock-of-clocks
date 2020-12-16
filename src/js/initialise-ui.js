const controls = document.getElementById("controls");
controls.addEventListener("click", function() {
    let co = document.getElementById("controls-overlay");
    co.className = (co.className === "controls--hide") ? "controls--show" : "controls--hide";
});

const debugControl = document.getElementById("debug-control");
const debugDisplay = document.getElementById("debug-display");
debugControl.addEventListener("input", function() {
    DEBUG = debugControl.value === "1";
    debugDisplay.innerText = DEBUG ? "On" : "Off";
});

const fpsControl = document.getElementById("fps-control");
const fpsDisplay = document.getElementById("fps-display");
fpsControl.addEventListener("input", function() {
    TARGET_FPS = parseInt(fpsControl.value.toString());
    fpsDisplay.innerText = TARGET_FPS.toString();
});

const bgColour = document.getElementById("background-colour");
const bgcDisplay = document.getElementById("background-colour-display");
bgColour.addEventListener("input", function() {
    if (/^#[0-9A-Fa-f]{6}$/i.test(bgColour.value.toString())) {
        BACKGROUND_COLOUR = bgColour.value.toString();
        bgcDisplay.innerText = BACKGROUND_COLOUR;
        windowResized();
    }
});

debugControl.value = DEBUG ? "1" : "0";
fpsControl.value = TARGET_FPS;
bgColour.value = BACKGROUND_COLOUR;

debugControl.dispatchEvent(new Event("input"));
fpsControl.dispatchEvent(new Event("input"));
bgColour.dispatchEvent(new Event("input"));
