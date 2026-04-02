function updateAchievements() {
  const badgeGrid = document.getElementById("badgeGrid");
  if (!badgeGrid) return;
  badgeGrid.innerHTML = "";

  const milestones = [1, 5, 10, 20, 50]; // Pomodoro sessions
  milestones.forEach((ms) => {
    const badge = document.createElement("div");
    badge.classList.add("badge");
    badge.textContent = `🔥${ms}`;
    if (sessions >= ms) badge.classList.add("unlocked");
    badgeGrid.appendChild(badge);
  });
}
updateAchievements();