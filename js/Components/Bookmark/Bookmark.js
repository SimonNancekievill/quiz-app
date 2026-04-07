export default function Bookmark() {
  const bookmarkButton = document.createElement("button");
  bookmarkButton.type = "button";
  bookmarkButton.classList.add("card__bookmark");
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("active");
  });
  return bookmarkButton;
}
