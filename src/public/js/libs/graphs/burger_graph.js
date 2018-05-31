const c3 = require("c3");
const resturantConfig = require("./charts/resturants_chart");
const burgerChartConfig = require("./charts/@burger_chart");
const tioPepeChartConfig = require("./charts/tio_pepe_chart");
const esterChartConfig = require("./charts/ester_chart");
const burgerssonChartConfig = require("./charts/burgersson_chart");
const pigAndWhistleChartConfig = require("./charts/pig_and_whistle_chart");
const mrDonerChartConfig = require("./charts/mr_doner_chart");
const butchersMarketChartConfig = require("./charts/butchers_market");

var hasScrolled = false;
c3.generate(resturantConfig);

document.addEventListener("scroll", function loadGraphs() {
  if (hasScrolled) {
    return document.removeEventListener("scroll", loadGraphs);
  }

  hasScrolled = true;
  c3.generate(burgerChartConfig);
  c3.generate(pigAndWhistleChartConfig);
  c3.generate(tioPepeChartConfig);
  c3.generate(esterChartConfig);
  c3.generate(burgerssonChartConfig);
  c3.generate(mrDonerChartConfig);
  c3.generate(butchersMarketChartConfig);
});
