export function QuestionTags() {
  const questionTags = document.createElement("ul");
  questionTags.classList.add("questions-tags");
  const tag = document.createElement("li");
  tag.classList.add("tags-item");
  questionTags.append(tag);
  return questionTags;
}
