const ChartConfig = require("../chart_config");

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
