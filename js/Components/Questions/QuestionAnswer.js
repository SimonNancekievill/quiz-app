export function QuestionAnswer() {
  const questionAnswer = document.createElement("p");
  questionAnswer.classList.add("question-answer");
  questionAnswer.textContent = result.correct_answer;
  return questionAnswer;
}
