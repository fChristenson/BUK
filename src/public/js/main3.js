(() => {
  const jsSelector = str => `[data-js="${str}"]`;
  const menuButton = document.querySelector(jsSelector("menu-toggle"));
  const menuClickCatchers = document.querySelectorAll(
    jsSelector("menu-click-catcher")
  );

  if (!menubar || !menuClickCatchers) return;

  menuClickCatchers.forEach(e => {
    e.addEventListener("click", event => {
      menuButton.checked = false;
    });
  });
})();
