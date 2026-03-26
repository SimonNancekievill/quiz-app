const mainContent = document.querySelector('[data-js="body-element"]');
const user = document.querySelector('[data-js="user"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]')


bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("active");
});



toggleButton.addEventListener("click", () => {
  mainContent.classList.toggle("dark-mode");
  console.log("Darkmode toggle");
});


