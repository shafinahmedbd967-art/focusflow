const messages = [
  "Great focus! Keep it up! 💪",
  "Awesome! One more Pomodoro for streak 🔥",
  "You're building amazing habits! 🌱",
  "Stay strong! Distractions can't stop you! 🚀",
  "Keep the momentum going! ⏳",
];

function updateAIMessage() {
  const index = Math.floor(Math.random() * messages.length);
  const msg = messages[index];
  const elem = document.getElementById("aiMessage");
  if (elem) elem.textContent = msg;
}