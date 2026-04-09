// export async function fetchDataAndRender() {
//   const response = await fetch(
//     "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean",
//   );
//   const data = await response.json();
//   const results = data.results;
//   // results.forEach((result) => {
//   //   const main = document.createElement("main");
//   //   main.classList.add("main-content");
//   //   const app = document.createElement("section");
//   //   app.classList.add("question-card");
//   //   const bookmarkButton = document.createElement("button");
//   //   bookmarkButton.type = "button";
//   //   bookmarkButton.classList.add("card__bookmark");
//   //   bookmarkButton.addEventListener("click", () => {
//   //     bookmarkButton.classList.toggle("active");
//   //   });
//   //   const questionTitle = document.createElement("h2");
//   //   questionTitle.classList.add("question-title");
//   //   questionTitle.textContent = result.question;
//   //   const questionAnswer = document.createElement("p");
//   //   questionAnswer.classList.add("question-answer");
//   //   questionAnswer.textContent = result.correct_answer;
//   //   const questionTags = document.createElement("ul");
//   //   questionTags.classList.add("questions-tags");
//   //   const tag = document.createElement("li");
//   //   tag.classList.add("tags-item");
//   //   tag.textContent = `Difficulty: ${result.difficulty}`;
//   //   const answerButton = document.createElement("button");
//   //   answerButton.type = "button";
//   //   answerButton.classList.add("question-button");
//   //   answerButton.textContent = "Show Answer";
//   //   const answerButtonValue = answerButton.textContent;
//   //   answerButton.addEventListener("click", () => {
//   //     answerButton.classList.toggle("active");
//   //     questionAnswer.classList.toggle("active");

//   //     answerButton.textContent = answerButton.classList.contains("active")
//   //       ? "Hide Answer"
//   //       : answerButtonValue;
//   //   });

//   //   document.body.append(app);
//   //   app.append(
//   //     bookmarkButton,
//   //     questionTitle,
//   //     questionAnswer,
//   //     questionTags,
//   //     answerButton,
//   //   );
//   //   questionTags.append(tag);
//   // });
// }

// fetchDataAndRender();

export async function fetchData() {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean",
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data! Status Code: ${response.status}`);
    }
    const data = await response.json();
    const results = data.results;
  } catch (error) {
    return { error: error };
  }
}
fetchData();
