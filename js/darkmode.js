// Toggle Dark Mode
console.clear();

const mainContent = document.querySelector('[data-js="body-element"]');
const footer = document.querySelector('[data-js="footer"]');
const header = document.querySelector('[data-js="header"]');
const user = document.querySelector('[data-js="user"]');
const darkModeButton = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", () => {
  console.log("Darkmode toggle");
  mainContent.classList.toggle("dark-mode");
  footer.classList.toggle("footer-darkmode");
  header.classList.toggle("header-darkmode");
});
// -----------------------