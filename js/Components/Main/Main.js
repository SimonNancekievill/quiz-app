import { Card } from "../Card/Card.js";

const main = document.querySelector('[data-js="main"]');

export async function Main() {
  main.classList.add("main-content");
  const card = await Card();
  main.append(card);
  return main;
}
Main();
