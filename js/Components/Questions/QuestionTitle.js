export function QuestionTitle() {
  const questionTitle = document.createElement("h2");
  questionTitle.classList.add("question-title");
  questionTitle.textContent = result.question;
  return questionTitle;
}
