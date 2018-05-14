webpackJsonp([1],{

/***/ "2HAd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hands-min.webp";

/***/ }),

/***/ "4+mS":
/***/ (function(module, exports) {

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


/***/ }),

/***/ "Hj9j":
/***/ (function(module, exports, __webpack_require__) {

const jsSelector = __webpack_require__("cjF5").jsSelector;

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

const menuButton = document.querySelector(jsSelector("menu-toggle"));

if (menuButton && menuButton.checked) {
  loadMenuImages();
}


/***/ }),

/***/ "PsQF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-10-20-gubbar2.webp";

/***/ }),

/***/ "UJVq":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("cVaB");


/***/ }),

/***/ "W7rZ":
/***/ (function(module, exports, __webpack_require__) {

const jsSelector = __webpack_require__("cjF5").jsSelector;

var hasScrolled = false;

function loadImages() {
  if (hasScrolled) {
    document.removeEventListener("scroll", loadImages);
    return;
  }

  const images = document.querySelectorAll("img[data-js=load-on-scroll]");
  const button = document.getElementById("menu-button");

  if (!images || !button) return;

  hasScrolled = true;
  button.classList.add("menu-button-background");

  Array.from(images).forEach(function(img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = function() {
      img.classList.add("is-visible");
      img.classList.remove("header-image");
    };
  });
}

window.addEventListener("scroll", loadImages);


/***/ }),

/***/ "XpAL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-10-20-burger1.webp";

/***/ }),

/***/ "asBV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u40h");


/***/ }),

/***/ "cHTX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4+mS");
module.exports = __webpack_require__("W7rZ");
module.exports = __webpack_require__("Hj9j");


/***/ }),

/***/ "cVaB":
/***/ (function(module, exports, __webpack_require__) {

const jsSelector = __webpack_require__("cjF5").jsSelector;

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


/***/ }),

/***/ "cjF5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lJA5");


/***/ }),

/***/ "cmPb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "men-min.webp";

/***/ }),

/***/ "f+ke":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("gZ68");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("MTIv")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "gZ68":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(undefined);
// imports


// module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n :root {\n  background: #323030;\n  color: #fff;\n  line-height: 21px;\n  letter-spacing: 1px;\n  font-family: 'Roboto', sans-serif;\n}\n#root {\n  margin: 0 auto;\n}\nimg {\n  max-width: 100%;\n}\nh1, h2 {\n  font-size: 20px;\n}\na {\n  text-decoration: none;\n  color: none;\n}\np {\n  font-size: 18px;\n  font-family: 'Roboto-Light', sans-serif;\n}\nbutton {\n  background: none;\n  border: none;\n  outline-color: #2296D2;\n}\nul {\n  list-style: none;\n}\n.title {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.section__link {\n  color: #2296D2;\n  font-weight: bold;\n}\n.section__link:hover {\n  text-decoration: underline;\n}\n.menu {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  transition: all 200ms ease-in-out;\n  transform: translate3D(-100vw, 0, 0);\n}\n.menu__list {\n  width: 240px;\n  height: 100vh;\n  background: #323030;\n  color: #fff;\n  float: left;\n}\n.menu__list__click-catcher {\n  width: 100%;\n  height: 100%;\n}\n.menu__click-catcher {\n  float: left;\n  width: calc(100% - 240px);\n  height: 100vh;\n}\n#menu-toggle {\n  display: none;\n}\n#menu-toggle:checked+.menu {\n  transform: translate3D(0, 0, 0);\n}\n.bold-text {\n  font-weight: bold;\n}\n.section__image {\n  width: 100%;\n  object-fit: cover;\n  max-height: 240px;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.section__image.is-visible, .section__image.header-image {\n  opacity: 1;\n}\n.header-image {\n  filter: blur(20px);\n}\n@media screen and (min-width: 321px) {\n  .section__image {\n    max-height: 800px;\n  }\n}\n.section__title {\n  text-align: center;\n  margin-bottom: 4px;\n}\n.section__text {\n  text-align: center;\n}\n.section__image-text-container {\n  padding: 32px 16px;\n  max-width: 500px;\n  margin: 0 auto;\n}\n#menu-button {\n  width: 44px;\n  height: 44px;\n  cursor: pointer;\n  position: fixed;\n  opacity: 0;\n  transition: opacity 0.3s;\n  top: 8px;\n  left: 8px;\n  z-index: 2;\n}\n#menu-button.menu-button-background {\n  opacity: 1;\n  background: url(/menu_icon.svg);\n}\n.menu__ul {\n  padding: 58px 0 0 16px;\n}\n.menu__li {\n  padding-bottom: 16px;\n}\n.menu__link {\n  display: flex;\n  align-items: center;\n}\n.menu__link-text-container {\n  padding-left: 8px;\n  color: #fff;\n}\n.menu__h2 {\n  font-size: 18px;\n}\n.menu__img {\n  width: 44px;\n}\n.menu__text {\n  font-size: 14px;\n  font-family: 'Roboto-Light', sans-serif;\n}\n.schedule {\n  margin: 76px auto;\n  border-collapse: collapse;\n}\n.schedule__td {\n  padding: 8px;\n  font-size: 14px;\n}\n.schedule__td:first-child {\n  border-right: 1px solid #fff;\n  text-align: right;\n}\n.schedule__h2 {\n  font-size: 18px;\n}\n.schedule__text {\n  font-size: 14px;\n}\n.rules__p {\n  text-align: center;\n  margin: 76px auto;\n  max-width: 500px;\n  font-size: 18px;\n  padding: 0 16px;\n}\n.rules__img {\n  margin: 0 auto;\n  width: 88px;\n  display: block;\n}\n.structure {\n  margin: 76px auto;\n}\n.structure__h2 {\n  padding-bottom: 8px;\n  font-size: 18px;\n}\n.structure__text {\n  font-size: 14px;\n}\n.structure__section {\n  margin: 32px auto;\n  max-width: 500px;\n  padding: 0 16px;\n}\n.members {\n  margin: 76px auto;\n}\n.fidde {\n  background: #0f0c29;  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  \n}\n.members__section {\n  padding: 16px;\n}\n.members__name {\n  padding-left: 16px;\n  font-size: 18px;\n  text-align: center;\n}\n.members__title {\n  font-size: 14px;\n  padding-left: 16px;\n  text-align: center;\n}\n.members__img {\n  padding: 16px 0 64px;\n  width: 100%;\n}\n.burgers {\n  margin: 76px auto;\n}\n.burgers__name {\n  padding-left: 16px;\n  font-size: 18px;\n}\n.burgers__resturant-street {\n  font-size: 14px;\n  padding-left: 16px;\n}\n.burgers__img {\n  max-height: 240px;\n  object-fit: cover;\n  padding: 16px 0;\n  width: 100%;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.burgers__img.is-visible, .burgers__img.header-image {\n  opacity: 1;\n}\n@media screen and (min-width: 321px) {\n  .burgers__img {\n    max-height: 800px;\n  }\n}\n.burgers__rating {\n  padding: 0 0 16px;\n  margin: 0 auto;\n}\n.burgers__rating--4 {\n  width: 192px;\n}\n.burgers__rating--6 {\n width: 290px; \n}\n.c3-chart-arcs-title, .c3-legend-item {\n  fill: #fff;\n}\n.c3-chart-arcs-title {\n  font-size: 4em;\n}", ""]);

// exports


/***/ }),

/***/ "lJA5":
/***/ (function(module, exports) {

module.exports.jsSelector = function(str) {
  return '[data-js="' + str + '"]';
};


/***/ }),

/***/ "qvEG":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("UJVq");
__webpack_require__("asBV");
__webpack_require__("f+ke");
__webpack_require__("cHTX");
__webpack_require__("cmPb");
__webpack_require__("PsQF");
__webpack_require__("XpAL");
__webpack_require__("2HAd");


/***/ }),

/***/ "u40h":
/***/ (function(module, exports) {

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css?family=Roboto:300,700";

document.head.appendChild(fontLink);

const c3Link = document.createElement("link");
c3Link.rel = "stylesheet";
c3Link.href = "/c3.min.css";

document.head.appendChild(c3Link);


/***/ })

},["qvEG"]);