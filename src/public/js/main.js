(() => {
  const jsSelector = str => `[data-js="${str}"]`;
  const menuButton = document.querySelector(jsSelector("menu-toggle"));
  const menuClickCatcher = document.querySelector(
    jsSelector("menu-click-catcher")
  );

  if (!menubar || !menuClickCatcher) return;

  menuClickCatcher.addEventListener("click", event => {
    menuButton.checked = false;
  });
})();
