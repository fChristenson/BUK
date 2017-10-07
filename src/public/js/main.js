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

  // jk
  const ups = document.querySelectorAll(jsSelector("up"));
  const downs = document.querySelectorAll(jsSelector("down"));

  setTimeout(() => {
    ups.forEach((e, i) => {
      setTimeout(() => e.classList.add("go-away-up"), i * 100);
    });
    downs.forEach((e, i) => {
      setTimeout(() => e.classList.add("go-away-down"), i * 100);
    });
  }, 500);
})();
