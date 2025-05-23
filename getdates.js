// getdates.js

// Get the current year and update the copyright paragraph
const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear} Alice Malabi | WDD 131`;

// Get the last modified date of the document and update the second paragraph
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
