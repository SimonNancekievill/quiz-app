// Bookmark Toggle

const toggleButton = document.querySelector('[data-js="toggle-button"]');
const bookMarkButton = document.querySelector('[data-js="bookmark-button"]');

bookMarkButton.addEventListener("click", () => {
  bookMarkButton.classList.toggle("active");
});

// -----------------------

// Show/Hide Answer Button

const answerButton = document.querySelector('[data-js="question-button"]');
const answer = document.querySelector('[data-js="question-answer"]');
const answerButtonValue = answerButton.textContent;


answerButton.addEventListener("click", () => {
  answerButton.classList.toggle("active");
  answer.classList.toggle("active");

  answerButton.textContent = answerButton.classList.contains("active") ? "Hide Answer" : answerButtonValue;
});

// -----------------------
