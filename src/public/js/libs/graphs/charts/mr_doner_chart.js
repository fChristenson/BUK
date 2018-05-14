const ChartConfig = require("../chart_config");

const id = "#mr-doner";
const columns = [
  ["Puck", 3],
  ["Tillbehör", 2],
  ["Bröd", 3],
  ["Service", 3],
  ["Helhet", 3]
];
const title = "3/6";

module.exports = ChartConfig(id, columns, title);
