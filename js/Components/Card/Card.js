import Bookmark from "../Bookmark/Bookmark.js";
import AnswerButton from "../Button/AnswerButton.js";
import { fetchData } from "../../fetch.js";

export async function Card() {
  const results = await fetchData();
  results.forEach((result) => {
    const card = document.createElement("section");
    card.classList.add("question-card");
    const questionTitle = document.createElement("h2");
    questionTitle.classList.add("question-title");
    questionTitle.textContent = result.question;
    const questionAnswer = document.createElement("p");
    questionAnswer.classList.add("question-answer");
    questionAnswer.textContent = result.correct_answer;
    const questionTags = document.createElement("ul");
    questionTags.classList.add("questions-tags");
    const tag = document.createElement("li");
    tag.classList.add("tags-item");
    tag.textContent = result.difficulty;
    questionTags.append(tag);
    card.append(Bookmark(), AnswerButton());
    return card;
  });
}
