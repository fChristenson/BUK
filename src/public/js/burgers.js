const c3 = require("c3");

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

c3.generate(chartConfig);
