import { Header } from "../Header/Header.js";
import { Footer } from "../Footer/Footer.js";

export default function Body() {
  const body = document.querySelector('[data-js="body-element"]');
  body.classList.add("-content");
  body.append(Header(), Footer());
  return body;
}
