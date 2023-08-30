const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://f-c-n.us.to/dynmap/standalone/dynmap_world.json/{z}/{x}/{y}.png", {
  attribution: "Dynmap Map Tiles"
}).addTo(map);

const screenshotElement = document.getElementById("screenshot");
const guessButton = document.getElementById("guessButton");

function captureScreenshot() {
  // Set the Dynmap web interface URL here
  const dynmapUrl = "https://f-c-n.us.to/dynmap/";

  // Open the Dynmap web interface in a new window
  window.open(dynmapUrl, "_blank");

  // In the real implementation, you would need to capture the screenshot from the window and set it as the source of the screenshotElement
}

guessButton.addEventListener("click", captureScreenshot);
