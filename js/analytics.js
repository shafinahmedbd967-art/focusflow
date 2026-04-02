const sessionsCtx = document.getElementById("sessionsChart").getContext("2d");
const scoreCtx = document.getElementById("scoreChart").getContext("2d");

// Using Chart.js (include CDN in dashboard.html if not yet)
function renderCharts() {
  const data = JSON.parse(localStorage.getItem("focusHeatmap")) || {};
  const labels = Object.keys(data).slice(-14); // last 14 days
  const sessionData = labels.map((d) => data[d] || 0);
  const scoreData = labels.map((d, i) => (i + 1) * 10);

  new Chart(sessionsCtx, {
    type: "bar",
    data: { labels, datasets: [{ label: "Sessions", data: sessionData, backgroundColor: "#4CAF50" }] },
  });
  new Chart(scoreCtx, {
    type: "line",
    data: { labels, datasets: [{ label: "Score", data: scoreData, borderColor: "#2196F3", fill: false }] },
  });
}
renderCharts();