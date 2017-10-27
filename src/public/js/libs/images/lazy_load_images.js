const jsSelector = require("../selectors").jsSelector;

var hasScrolled = false;

window.addEventListener("scroll", function loadImages() {
  if (hasScrolled) {
    document.removeEventListener("scroll", loadImages);
    return;
  }

  hasScrolled = true;
  const images = document.querySelectorAll("img[data-src]");

  const button = document.getElementById("menu-button");
  button.classList.add("menu-button-background");

  Array.from(images).forEach(function(img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = function() {
      img.classList.add("is-visible");
      img.classList.remove("header-image");
    };
  });
});
