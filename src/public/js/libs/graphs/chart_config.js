module.exports = (id, columns) => {
  return {
    bindto: id,
    data: {
      type: "bar",
      columns: columns
    },
    tooltip: {
      show: false
    },
    color: {
      pattern: ["#3F51B5", "#2196F3", "#00BCD4", "#009688"]
    },
    axis: {
      y: {
        min: 0,
        max: 6
      },
      x: {
        show: false
      }
    },
    bar: {
      width: {
        ratio: 0.3
      }
    }
  };
};
