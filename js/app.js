/* ========== Clock ========== */
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${h}:${m}:${s}`;
  document.getElementById("date").textContent = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

/* ========== Quote System ========== */
let qIndex = 0;
function rotateQuote() {
  qIndex = (qIndex + 1) % quotes.length;
  document.getElementById("quote").textContent = quotes[qIndex];
}
setInterval(rotateQuote, 8000);
rotateQuote();

/* ========== Theme Engine ========== */
const body = document.getElementById("body");
const themes = {
  ocean: "linear-gradient(135deg,#0f2027,#2c5364)",
  forest: "linear-gradient(135deg,#134e5e,#71b280)",
  sunset: "linear-gradient(135deg,#ee0979,#ff6a00)",
  midnight: "linear-gradient(135deg,#232526,#414345)",
};
const themeSelect = document.getElementById("themeSelect");
if (themeSelect) {
  themeSelect.addEventListener("change", (e) => {
    const t = e.target.value;
    if (t === "auto") {
      const hour = new Date().getHours();
      if (hour < 12) body.style.background = themes.ocean;
      else if (hour < 18) body.style.background = themes.forest;
      else body.style.background = themes.midnight;
    } else {
      body.style.background = themes[t];
    }
  });
}

/* ========== Focus Mode Toggle ========== */
document.addEventListener("keydown", (e) => {
  if (e.key === "f") {
    document.body.classList.toggle("focus-mode");
  }
});

/* ========== Sound System ========== */
const rainSound = new Audio("assets/rain.mp3");
const forestSound = new Audio("assets/forest.mp3");
let currentSound = null;
function playSound(sound) {
  if (currentSound && currentSound !== sound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }
  currentSound = sound;
  currentSound.play();
}
function stopSound() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
    currentSound = null;
  }
}
const rainBtn = document.getElementById("rain");
const forestBtn = document.getElementById("forest");
const stopBtn = document.getElementById("stopSound");
if (rainBtn) rainBtn.addEventListener("click", () => playSound(rainSound));
if (forestBtn) forestBtn.addEventListener("click", () => playSound(forestSound));
if (stopBtn) stopBtn.addEventListener("click", () => stopSound());