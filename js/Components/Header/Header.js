const header = document.querySelector('[data-js="header"]');

export default function Header() {
  header.classList.add("header");
  const headerTitle = document.createElement("h1");
  headerTitle.classList.add("header-title");
  headerTitle.textContent = "CSS & HTML Quiz";
  header.append(headerTitle);

  return header;
}
