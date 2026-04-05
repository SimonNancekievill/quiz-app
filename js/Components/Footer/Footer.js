export function Footer() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const footerGroup = document.createElement("span");
  footerGroup.classList.add("footer-group");
  const linkHome = document.createElement("a");
  linkHome.href = "./";
  linkHome.innerHTML = `<img
            class="footer__icon-home.active"
            src="./css/assets/house-filled.svg"
            height="40px"
        />`;
  const linkBookmark = document.createElement("a");
  linkBookmark.href = "./../bookmark.html";
  linkBookmark.innerHTML = `<img src="./css/assets/bookmark.svg" height="40px"
        />`;
  const linkForm = document.createElement("a");
  linkForm.href = "./../form.html";
  linkForm.innerHTML = `<img src="./css/assets/square-plus.svg" height="40px"
        />`;
  const linkProfile = document.createElement("a");
  linkProfile.href = "./../profile.html";
  linkProfile.innerHTML = `<img src="./css/assets/square-user-round.svg" height="40px"
        />`;
  footer.append(footerGroup);
  footerGroup.append(linkHome, linkBookmark, linkForm, linkProfile);
  return footer;
}
