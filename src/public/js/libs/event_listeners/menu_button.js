const jsSelector = require("../selectors").jsSelector;

const menuButton = document.querySelector(jsSelector("menu-toggle"));

Array.from(document.querySelectorAll("img[data-src]")).forEach(function(img) {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = function() {
    img.classList.add("is-visible");
    img.classList.remove("header-image");
  };
});
