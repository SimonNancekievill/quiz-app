import { QuestionAnswer } from "../Questions/QuestionAnswer.js";

export function AnswerButton() {
  const answerButton = document.createElement("button");
  answerButton.type = "button";
  answerButton.classList.add("question-button");
  answerButton.textContent = "Show Answer";
  const answerButtonValue = answerButton.textContent;
  answerButton.addEventListener("click", () => {
    answerButton.classList.toggle("active");
    QuestionAnswer().classList.toggle("active");

    answerButton.textContent = answerButton.classList.contains("active")
      ? "Hide Answer"
      : answerButtonValue;
  });
  return answerButton;
}
