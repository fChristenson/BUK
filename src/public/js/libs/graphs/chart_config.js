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
