// Footer Year and Last Modified
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');
const now = new Date();
yearSpan.textContent = now.getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// Windchill Calculation
function calculateWindChill(tempC, windKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

const temp = parseFloat(document.getElementById('temperature').textContent);
const wind = parseFloat(document.getElementById('wind').textContent);
const windchillEl = document.getElementById('windchill');

if (temp <= 10 && wind > 4.8) {
  const chill = calculateWindChill(temp, wind);
  windchillEl.textContent = chill.toFixed(1) + ' °C';
} else {
  windchillEl.textContent = 'N/A';
}
