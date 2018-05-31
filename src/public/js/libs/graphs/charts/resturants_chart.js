const ChartConfig = require("../chart_config");

const id = "#total";
const columns = [
  ["@Burger", 4],
  ["The pig & whistle", 4],
  ["Tio pepe", 4],
  ["Ester", 5],
  ["Burgersson", 4],
  ["Mr Döner", 3],
  ["Butchers market", 5]
];
const title = "Resturanger";

module.exports = ChartConfig(id, columns, title);
