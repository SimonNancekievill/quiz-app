// const mainContent = document.querySelector('[data-js="body-element"]');
// const user = document.querySelector('[data-js="user"]');
// toggleButton.addEventListener("click", () => {
//   mainContent.classList.toggle("dark-mode");
//   console.log("Darkmode toggle");
// });

// Bookmark Toggle

const toggleButton = document.querySelector('[data-js="toggle-button"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]')

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("active");
});

// -----------------------

// Show/Hide Answer Button

const answerButton = document.querySelector('[data-js="question-button"]');
const answer = document.querySelector('[data-js="question-answer"]');
const answerButtonValue = answerButton.textContent;

answerButton.addEventListener("click", () => {
  answerButton.classList.toggle("active");
  answerButton.textContent = "Hide Answer";
  answer.classList.toggle("active");

});


