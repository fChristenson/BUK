const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const BukHtmlWebpackPlugin = (name, chunks) => {
  const url = path.resolve(
    __dirname,
    `../src/views/templates/${name}.template.ejs`
  );
  return new HtmlWebpackPlugin({
    template: `ejs-compiled-loader!${url}`,
    chunks: chunks,
    filename: path.resolve(__dirname, `../src/views/${name}.ejs`)
  });
};

module.exports.BukHtmlWebpackPlugin = BukHtmlWebpackPlugin;
