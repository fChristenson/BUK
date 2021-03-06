(function() {
  const images = document.querySelectorAll("img[data-js=lazy-load]");
  const button = document.getElementById("menu-button");

  if (!images || !button) return;

  button.classList.add("menu-button-background");

  Array.from(images).forEach(function(img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = function() {
      img.classList.add("is-visible");
      img.classList.remove("header-image");
    };
  });
})();
