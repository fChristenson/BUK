const ChartConfig = require("../chart_config");

const id = "#burgersson";
const columns = [
  ["Puck", 5],
  ["Tillbehör", 4],
  ["Bröd", 3],
  ["Service", 4],
  ["Helhet", 4]
];
const title = "4/6";

module.exports = ChartConfig(id, columns, title);
