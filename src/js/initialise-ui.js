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

debugControl.value = DEBUG ? "1" : "0";
fpsControl.value = TARGET_FPS;

debugControl.dispatchEvent(new Event("input"));
fpsControl.dispatchEvent(new Event("input"));
