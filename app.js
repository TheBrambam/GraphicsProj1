const frame = document.getElementById("program-frame");

const programMap = {
  "0": "Level0.html",
  "1": "Level1.html",
  "2": "Level2.html",
  "3": "Level3.html",
};

function switchProgram(key) {
  if (programMap[key]) {
    frame.src = programMap[key];
  }
}

window.addEventListener("keydown", (e) => {
  switchProgram(e.key);
});

window.addEventListener("message", (e) => {
  if (e.data.type === "KEY_SWITCH") {
    switchProgram(e.data.key);
  }
});