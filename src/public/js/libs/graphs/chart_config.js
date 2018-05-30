module.exports = (id, columns, title) => {
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
    title: title,
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
      space: 0.25,
      width: {
        ratio: 0.2
      }
    }
  };
};
