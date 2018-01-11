const c3 = require("c3");
const burgerChartConfig = require("./charts/@burger_chart");
const tioPepeChartConfig = require("./charts/tio_pepe_chart");
const pigAndWhistleChartConfig = require("./charts/pig_and_whistle_chart");

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
