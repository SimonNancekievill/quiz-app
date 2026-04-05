export function Header() {
  const header = document.createElement("header");
  header.classList.add("header");
  const headerTitle = document.createElement("h1");
  headerTitle.classList.add("header-title");
  headerTitle.textContent = "CSS & HTML Quiz";
  header.append(headerTitle);

  return header;
}
