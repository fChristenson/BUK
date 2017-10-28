webpackJsonp([1],{

/***/ "ONbP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-10-20-burger2.webp";

/***/ }),

/***/ "SNuS":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-10-20-gubbar1.webp";

/***/ }),

/***/ "VO48":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("sVE1");
__webpack_require__("SNuS");
__webpack_require__("ONbP");
__webpack_require__("dLVs");


/***/ }),

/***/ "dLVs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-10-20-burger3.webp";

/***/ }),

/***/ "khSn":
/***/ (function(module, exports, __webpack_require__) {

const c3 = __webpack_require__("g1pc");

const chartConfig = {
  bindto: "#chart",
  data: {
    type: "donut",
    columns: [
      ["Puck", 51],
      ["Tillbehör", 49],
      ["Bröd", 49],
      ["Service", 51],
      ["Helhet", 54]
    ]
  },
  tooltip: {
    show: false
  },
  color: {
    pattern: ["#3F51B5", "#2196F3", "#00BCD4", "#009688", "#4CAF50"]
  },
  donut: {
    label: {
      format: function(value, ratio, id) {
        return d3.format("")(Math.floor(value / 12));
      }
    }
  }
};

var hasScrolled = false;

document.addEventListener("scroll", function loadGraphs() {
  if (hasScrolled) {
    return document.removeEventListener("scroll", loadGraphs);
  }

  hasScrolled = true;
  c3.generate(chartConfig);
});


/***/ }),

/***/ "sVE1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("khSn");


/***/ })

},["VO48"]);