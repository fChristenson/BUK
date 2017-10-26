const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const BukHtmlWebpackPlugin = name => {
  const url = path.resolve(
    __dirname,
    `../src/views/templates/${name}.template.ejs`
  );
  return new HtmlWebpackPlugin({
    template: `ejs-compiled-loader!${url}`,
    filename: path.resolve(__dirname, `../src/views/${name}.ejs`)
  });
};

module.exports.BukHtmlWebpackPlugin = BukHtmlWebpackPlugin;
