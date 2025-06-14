const form = document.getElementById('destinationForm');
const destinationList = document.getElementById('destinationList');

function loadDestinations() {
  const saved = JSON.parse(localStorage.getItem('destinations')) || [];
  destinationList.innerHTML = '';
  saved.forEach((dest, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${dest.place}</strong>, ${dest.country}<br>
      <em>${dest.notes}</em><br>
      ${dest.photo ? `<img src="${dest.photo}" alt="${dest.place}" width="150"><br>` : ''}
      <button onclick="deleteDestination(${index})">Delete</button>
    `;
    destinationList.appendChild(li);
  });
}

function deleteDestination(index) {
  const saved = JSON.parse(localStorage.getItem('destinations')) || [];
  saved.splice(index, 1);
  localStorage.setItem('destinations', JSON.stringify(saved));
  loadDestinations();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const place = document.getElementById('place').value;
  const country = document.getElementById('country').value;
  const notes = document.getElementById('notes').value;
  const photoInput = document.getElementById('photo');

  const reader = new FileReader();

  reader.onload = function () {
    const photoData = reader.result;
    const newDestination = { place, country, notes, photo: photoData };
    const saved = JSON.parse(localStorage.getItem('destinations')) || [];
    saved.push(newDestination);
    localStorage.setItem('destinations', JSON.stringify(saved));

    form.reset();
    loadDestinations();
  };

  if (photoInput.files[0]) {
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    const newDestination = { place, country, notes, photo: null };
    const saved = JSON.parse(localStorage.getItem('destinations')) || [];
    saved.push(newDestination);
    localStorage.setItem('destinations', JSON.stringify(saved));

    form.reset();
    loadDestinations();
  }
});

window.onload = loadDestinations;
