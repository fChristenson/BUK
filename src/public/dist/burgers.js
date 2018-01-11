webpackJsonp([1],{

/***/ "D+TA":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2018-01-11-burgare2.webp";

/***/ }),

/***/ "EbNs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2018-01-11-burgare4.webp";

/***/ }),

/***/ "IXoS":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2018-01-11-gubbar3.webp";

/***/ }),

/***/ "Ju5E":
/***/ (function(module, exports) {

module.exports = (id, columns, title) => {
  return {
    bindto: id,
    data: {
      type: "donut",
      columns: columns
    },
    tooltip: {
      show: false
    },
    color: {
      pattern: ["#3F51B5", "#2196F3", "#00BCD4", "#009688", "#4CAF50"]
    },
    donut: {
      title: title,
      color: {
        pattern: ["#fff"]
      },
      label: {
        format: function(value) {
          return Math.floor(value);
        }
      }
    }
  };
};


/***/ }),

/***/ "ONbP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-10-20-burger2.webp";

/***/ }),

/***/ "OPt6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2018-01-11-gubbar.webp";

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
__webpack_require__("OPt6");
__webpack_require__("eOHu");
__webpack_require__("IXoS");
__webpack_require__("ZSqu");
__webpack_require__("D+TA");
__webpack_require__("koZb");
__webpack_require__("EbNs");


/***/ }),

/***/ "ZSqu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2018-01-11-burgare.webp";

/***/ }),

/***/ "ZoRh":
/***/ (function(module, exports, __webpack_require__) {

const ChartConfig = __webpack_require__("Ju5E");

const id = "#chart-tio-pepe";
const columns = [
  ["Puck", 5],
  ["Tillbehör", 4],
  ["Bröd", 4],
  ["Service", 2],
  ["Helhet", 4]
];
const title = "4/6";

module.exports = ChartConfig(id, columns, title);


/***/ }),

/***/ "ZtB3":
/***/ (function(module, exports, __webpack_require__) {

const ChartConfig = __webpack_require__("Ju5E");

const id = "#chart-pig-and-whistle";
const columns = [
  ["Puck", 5],
  ["Tillbehör", 4],
  ["Bröd", 4],
  ["Service", 2],
  ["Helhet", 4]
];
const title = "4/6";

module.exports = ChartConfig(id, columns, title);


/***/ }),

/***/ "dLVs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-10-20-burger3.webp";

/***/ }),

/***/ "eOHu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2018-01-11-gubbar2.webp";

/***/ }),

/***/ "khSn":
/***/ (function(module, exports, __webpack_require__) {

const c3 = __webpack_require__("g1pc");
const burgerChartConfig = __webpack_require__("ooXM");
const tioPepeChartConfig = __webpack_require__("ZoRh");
const pigAndWhistleChartConfig = __webpack_require__("ZtB3");

var hasScrolled = false;

document.addEventListener("scroll", function loadGraphs() {
  if (hasScrolled) {
    return document.removeEventListener("scroll", loadGraphs);
  }

  hasScrolled = true;
  c3.generate(burgerChartConfig);
  c3.generate(pigAndWhistleChartConfig);
  c3.generate(tioPepeChartConfig);
});


/***/ }),

/***/ "koZb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2018-01-11-burgare3.webp";

/***/ }),

/***/ "ooXM":
/***/ (function(module, exports, __webpack_require__) {

const ChartConfig = __webpack_require__("Ju5E");

const id = "#chart";
const columns = [
  ["Puck", 4],
  ["Tillbehör", 4],
  ["Bröd", 4],
  ["Service", 4],
  ["Helhet", 4]
];
const title = "4/6";

module.exports = ChartConfig(id, columns, title);


/***/ }),

/***/ "sVE1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("khSn");


/***/ })

},["VO48"]);