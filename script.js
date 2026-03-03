const apiKey = "5PR7CNWX8JZAVYA6GR4K9FW28";

function getWeather() {
  const location = document.getElementById("locationInput").value;

  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {

      const temp = data.currentConditions.temp;
      const condition = data.currentConditions.conditions;

      document.getElementById("weatherText").innerText =
        `Temperature: ${temp}°F - ${condition}`;

      changeMood(temp, condition);
    });
}

function changeMood(temp, condition) {

  const body = document.body;

  // Clear rain
  document.getElementById("rainContainer").innerHTML = "";

  // Temperature mood
  if (temp > 80) {
    body.style.backgroundColor = "orange";
    playSound(600);
  } 
  else if (temp < 40) {
    body.style.backgroundColor = "lightblue";
    playSound(200);
  } 
  else {
    body.style.backgroundColor = "lightgray";
    playSound(400);
  }

  // Rain animation
  if (condition.toLowerCase().includes("rain")) {
    createRain();
  }
}

function createRain() {
  const container = document.getElementById("rainContainer");

  for (let i = 0; i < 100; i++) {
    const drop = document.createElement("div");
    drop.classList.add("raindrop");
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = (Math.random() + 0.5) + "s";
    container.appendChild(drop);
  }
}

function playSound(frequency) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  oscillator.connect(audioCtx.destination);
  oscillator.start();

  setTimeout(() => oscillator.stop(), 500);
}