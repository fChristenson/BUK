const jsSelector = require("../selectors").jsSelector;

const menuButton = document.querySelector(jsSelector("menu-toggle"));

const menuClickCatchers = document.querySelectorAll(
  jsSelector("menu-click-catcher")
);

menuClickCatchers.forEach(function(e) {
  e.addEventListener("click", function(event) {
    menuButton.checked = false;
  });
});
