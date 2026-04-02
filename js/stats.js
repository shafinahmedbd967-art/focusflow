let sessions = JSON.parse(localStorage.getItem("focusSessions")) || 0;
let streak = JSON.parse(localStorage.getItem("focusStreak")) || 0;
let lastDate = localStorage.getItem("lastFocusDate");
let score = JSON.parse(localStorage.getItem("focusScore")) || 0;

document.getElementById("sessionCount").textContent = sessions;
document.getElementById("streakCount").textContent = streak + " 🔥";

function sessionComplete() {
  sessions++;
  localStorage.setItem("focusSessions", sessions);
  document.getElementById("sessionCount").textContent = sessions;
  updateStreak();
  updateScore();
  updateHeatmap();
  updateAIMessage();
  updateAchievements();
}

function updateStreak() {
  const today = new Date().toDateString();
  if (lastDate === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (lastDate === yesterday.toDateString()) streak++;
  else streak = 1;
  lastDate = today;
  localStorage.setItem("focusStreak", streak);
  localStorage.setItem("lastFocusDate", today);
  document.getElementById("streakCount").textContent = streak + " 🔥";
}

function updateScore() {
  score += 10;
  localStorage.setItem("focusScore", score);
}

function updateHeatmap() {
  let data = JSON.parse(localStorage.getItem("focusHeatmap")) || {};
  const today = new Date().toISOString().slice(0, 10);
  data[today] = (data[today] || 0) + 1;
  localStorage.setItem("focusHeatmap", JSON.stringify(data));
  renderHeatmap();
}

function renderHeatmap() {
  const grid = document.getElementById("heatmapGrid");
  if (!grid) return;
  grid.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("focusHeatmap")) || {};
  for (let i = 0; i < 70; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const count = data[key] || 0;
    const cell = document.createElement("div");
    cell.classList.add("heat-cell");
    if (count > 0) cell.classList.add("level1");
    if (count > 2) cell.classList.add("level2");
    if (count > 4) cell.classList.add("level3");
    if (count > 6) cell.classList.add("level4");
    grid.appendChild(cell);
  }
}

renderHeatmap();