alert("app.js is running");
const matchesDiv = document.getElementById("matches");

// TEMP DEMO DATA (so app always works)
const demoMatches = [
  {
    id: 1,
    teams: ["India", "Australia"],
    venue: "Eden Gardens, Kolkata",
    status: "Live",
    score: [{ r: 145, w: 4, o: "16.2" }]
  },
  {
    id: 2,
    teams: ["England", "South Africa"],
    venue: "Lords, London",
    status: "Live",
    score: [{ r: 172, w: 6, o: "18.5" }]
  }
];

// Render matches
function renderMatches(matches) {
  matchesDiv.innerHTML = "";

  matches.forEach(match => {
    const div = document.createElement("div");
    div.className = "match";

    div.innerHTML = `
      <strong>${match.teams[0]} vs ${match.teams[1]}</strong><br>
      ${match.score[0].r}/${match.score[0].w}
      (${match.score[0].o} ov)<br>
      <small>${match.venue}</small>
    `;

    div.onclick = () => {
      localStorage.setItem("selectedMatch", JSON.stringify(match));
      window.location.href = "match.html";
    };

    matchesDiv.appendChild(div);
  });
}

// Load on start
renderMatches(demoMatches);
