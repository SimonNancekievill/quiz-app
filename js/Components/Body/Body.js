import { App } from "../App/App.js";
import { Header } from "../Header/Header.js";
import { Footer } from "../Footer/Footer.js";

export function Body() {
  const body = document.querySelector('[data-js="body-element"]');
  body.classList.add("main-content");
  body.append(Header(), App(), Footer());
  return body;
}
