const jsSelector = require("../selectors").jsSelector;

(function() {
  const menuButton = document.querySelector(jsSelector("menu-toggle"));

  const menuClickCatchers = document.querySelectorAll(
    jsSelector("menu-click-catcher")
  );

  if (!menuClickCatchers || !menuButton) return;

  menuClickCatchers.forEach(function(e) {
    e.addEventListener("click", function() {
      menuButton.checked = false;
    });
  });
})();
