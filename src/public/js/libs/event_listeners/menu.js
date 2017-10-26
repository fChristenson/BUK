const jsSelector = require("../selectors").jsSelector;

const menuClickCatchers = document.querySelectorAll(
  jsSelector("menu-click-catcher")
);

menuClickCatchers.forEach(function(e) {
  e.addEventListener("click", function(event) {
    menuButton.checked = false;
  });
});
