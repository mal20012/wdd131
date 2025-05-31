// temples.js

// temples.js

// Temple data array
const temples = [
  {
    templeName: "Manila Philippines",
    location: "Manila, Philippines",
    dedicated: "1984, September, 25-27",
    area: "2,479",
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/320x200/manila-philippines-temple-lds-129585-wallpaper.jpg" 
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27-30",
    area: "3,911",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-772758-wallpaper.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: "4,104",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-1905503.jpg"
  },
  {
    templeName: "Brisbane Australia",
    location: "Brisbane, Australia",
    dedicated: "2003, June, 15",
    area: 994,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brisbane-australia/400x250/brisbane-australia-temple-lds-901526-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27-29",
    area:  "5,016",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/200x320/tokyo_japan_temple-evening.jpeg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: "1,626",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/320x180/accra-ghana-temple-detail-249022-2400x1200.jpg"
  },
  {
    templeName: "Bogota Colombia",
    location: "Bogota, Colombia",
    dedicated: "1999, April, 24-26",
    area: "4,970",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/400x250/bogota-colombia-temple-lds-1029726-wallpaper.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Bern, Switzerland",
    dedicated: "1955, September, 11-15",
    area: "3,302",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-653038-wallpaper.jpg"
  },
  {
    templeName: "Durban Temple",
    location: "Durban, Temple",
    dedicated: "2020, February, 16",
    area: "1,845",
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg"
  },
];

// Function to output temples into <main>
function displayTemples(temples) {
  const main = document.querySelector("main");
  main.innerHTML = "<h1>Temples Around the World</h1>"; // reset main

  temples.forEach((temple) => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${temple.templeName}</strong><br>
      ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq ft
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    main.appendChild(figure);
  });
}

displayTemples(temples);

// Hamburger button toggle
document.getElementById("hamburgerBtn").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
  const btn = document.getElementById("hamburgerBtn");
  btn.textContent = btn.textContent === "☰" ? "✖" : "☰";
});

// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
