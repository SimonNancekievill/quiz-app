const mainContent = document.querySelector('[data-js="body-element"]');
const user = document.querySelector('[data-js="user"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
  mainContent.classList.toggle("dark-mode");
  console.log("Darkmode toggle");
});
