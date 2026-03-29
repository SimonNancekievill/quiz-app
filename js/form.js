// query Selector

const form = document.querySelector('[data-js="form"]');
const question = document.querySelector('[data-js="input-question"]');
const answer = document.querySelector('[data-js="input-answer"]');
const tag = document.querySelector('[data-js="input-tag"]')
const submitButton = document.querySelector('[data-js="submit-button"]');
const charactersLeftQuestion = document.querySelector('[data-js="remaining-characters-question"]');
const charactersLeftAnswer = document.querySelector('[data-js="remaining-characters-answer"]');

// -----------------------

// handle Input counter

question.addEventListener("input", (event) => {
    charactersLeftQuestion.textContent = 150 - question.value.length;
});

answer.addEventListener("input", (event) => {
    charactersLeftAnswer.textContent = 150 - answer.value.length;
});

// -----------------------

// Submit Event

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(event.target[3].value);

submitButton.classList.add("active");
const card = document.createElement("section");
card.classList.add("question-card");
const bookmark = document.createElement("button");
bookmark.type ="button";
bookmark.classList.add("card__bookmark");
bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("active");
});
const title = document.createElement("h2");
title.classList.add("question-title");
title.textContent = event.target[1].value;
const cardAnswer = document.createElement("p");
cardAnswer.classList.add("question-answer");
cardAnswer.textContent = event.target[2].value;
const showButton = document.createElement("button");
showButton.classList.add("question-button");
showButton.type ="button";
showButton.textContent = "Show Answer";
showButton.addEventListener("click", () => {
    cardAnswer.classList.toggle("active");
});
const tagList = document.createElement("ul");
tagList.classList.add("questions-tags");
const tagItem = document.createElement("li");
tagItem.classList.add("tags-item");
tagItem.textContent = event.target[3].value;


document.body.children[1].append(card); 
card.append(bookmark);
card.append(title);
card.append(cardAnswer);
card.append(showButton);
card.append(tagList);
tagList.append(tagItem);
event.target.reset();
event.target[1].focus();
});

// -----------------------