const match = JSON.parse(localStorage.getItem("selectedMatch"));
const matchDiv = document.getElementById("matchInfo");
const pitchDiv = document.getElementById("pitchInfo");

if (!match) {
  matchDiv.innerHTML = "No match data";
} else {
  matchDiv.innerHTML = `
    <strong>${match.teams[0]} vs ${match.teams[1]}</strong><br><br>
    🏟 ${match.venue}<br>
    📍 ${match.city || ""}<br><br>
    🏏 ${match.score?.[0]?.r || 0}/${match.score?.[0]?.w || 0}
    (${match.score?.[0]?.o || "0"} ov)<br>
    <small>Status: ${match.status}</small>
  `;

  showPitch(match.venue);
}

function showPitch(venue) {
  const ground = pitches.find(p => venue?.includes(p.ground));

  if (!ground) {
    pitchDiv.innerHTML = "Pitch data not available";
    return;
  }

  pitchDiv.innerHTML = `
    <h3>${ground.ground}</h3>

    <div class="badges">
      <div class="badge">${ground.pitchType}</div>
      <div class="badge">Dew: ${ground.dew}</div>
    </div>

    <p>⚡ Pace: ${ground.pace}/5</p>
    <p>🌀 Spin: ${ground.spin}/5</p>
    <p>📊 Avg Score: ${ground.avgScore}</p>
    <p>🎯 Chasing Win: ${ground.chaseWin}</p>
    <p><strong>Insight:</strong> ${ground.insight}</p>
  `;
}