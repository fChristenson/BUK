const jsSelector = require("../selectors").jsSelector;

Array.from(document.querySelectorAll("img[data-src]")).forEach(function(img) {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = function() {
    img.classList.add("is-visible");
    img.classList.remove("header-image");
  };
});
