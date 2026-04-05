import { QuestionAnswer } from "../Questions/QuestionAnswer.js";
import { QuestionTitle } from "../Questions/QuestionTitle.js";
import { QuestionTags } from "../Questions/QuestionTags.js";
import { Bookmark } from "../Bookmark/Bookmark.js";
import { AnswerButton } from "../Button/AnswerButton.js";

export function App() {
  const app = document.createElement("section");
  app.classList.add("question-card");
  app.append(
    Bookmark(),
    QuestionTitle(),
    QuestionAnswer(),
    AnswerButton(),
    QuestionTags(),
  );
  return app;
}
