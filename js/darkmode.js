// Toggle Dark Mode
console.clear();

const mainContent = document.querySelector('[data-js="body-element"]');
const user = document.querySelector('[data-js="user"]');
const darkModeButton = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", () => {
  console.log("Darkmode toggle");
  mainContent.classList.toggle("dark-mode");
});
// -----------------------