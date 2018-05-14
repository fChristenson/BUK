const ChartConfig = require("../chart_config");

const id = "#ester";
const columns = [
  ["Puck", 6],
  ["Tillbehör", 4],
  ["Bröd", 4],
  ["Service", 3],
  ["Helhet", 5]
];
const title = "5/6";

module.exports = ChartConfig(id, columns, title);
