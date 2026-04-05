import { QuestionAnswer } from "../../lib/questions/QuestionAnswer.js";
import { QuestionTitle } from "../../lib/questions/QuestionTitle.js";
import { QuestionTags } from "../../lib/questions/QuestionTags.js";
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
