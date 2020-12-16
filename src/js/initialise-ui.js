const controls = document.getElementById("controls");
controls.addEventListener("click", function() {
    let co = document.getElementById("controls-overlay");
    co.className = (co.className === "controls--hide") ? "controls--show" : "controls--hide";
});

const debugControl = document.getElementById("debug-control");
const debugDisplay = document.getElementById("debug-display");
debugControl.addEventListener("input", function() {
    configuration.setDebug(debugControl.value);
    debugDisplay.innerText = configuration.showDebug();
});

const fpsControl = document.getElementById("fps-control");
const fpsDisplay = document.getElementById("fps-display");
fpsControl.addEventListener("input", function() {
    configuration.setTargetFPS(fpsControl.value);
    fpsDisplay.innerText = configuration.showTargetFPS();
});

const bgColour = document.getElementById("background-colour");
const bgcDisplay = document.getElementById("background-colour-display");
bgColour.addEventListener("input", function() {
    configuration.setBackgroundColour(bgColour.value);
    bgcDisplay.innerText = configuration.showBackgroundColour();
});

const faceColour = document.getElementById("face-colour");
const faceDisplay = document.getElementById("face-colour-display");
faceColour.addEventListener("input", function() {
    configuration.setFaceColour(faceColour.value);
    faceDisplay.innerText = configuration.showFaceColour();
});

const rimColour = document.getElementById("rim-colour");
const rimDisplay = document.getElementById("rim-colour-display");
rimColour.addEventListener("input", function() {
    configuration.setRimColour(rimColour.value);
    rimDisplay.innerText = configuration.showRimColour();
});

debugControl.value = configuration.getDebug();
fpsControl.value = configuration.targetFPS;
bgColour.value = configuration.backgroundColour;
faceColour.value = configuration.faceColour;
rimColour.value = configuration.rimColour;

debugControl.dispatchEvent(new Event("input"));
fpsControl.dispatchEvent(new Event("input"));
bgColour.dispatchEvent(new Event("input"));
faceColour.dispatchEvent(new Event("input"));
rimColour.dispatchEvent(new Event("input"));
