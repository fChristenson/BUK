const jsSelector = require("../selectors").jsSelector;

var hasLoaded = false;

function loadMenuImages() {
  if (hasLoaded) return;

  const images = document.querySelectorAll("img[data-js=load-on-click]");

  if (!images) return;

  hasLoaded = true;

  Array.from(images).forEach(function(img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = function() {
      img.classList.add("is-visible");
    };
  });
}

window.loadMenuImages = loadMenuImages;
