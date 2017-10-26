const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BukHtmlWebpackPlugin } = require("./build/html");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/public/js/main.js"),
    burgers: path.join(__dirname, "src/public/js/burgers.js")
  },
  output: {
    path: path.join(__dirname, "src/public/dist/"),
    filename: "[name].[chunkhash].bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "src/public/css")],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "node_modules/c3/c3.min.css"),
        to: path.join(__dirname, "/src/public/dist/")
      },
      {
        from: path.join(__dirname, "src/public/images/"),
        to: path.join(__dirname, "/src/public/dist/")
      }
    ]),
    new ExtractTextPlugin("[name].[contenthash].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),
    BukHtmlWebpackPlugin("index"),
    BukHtmlWebpackPlugin("burgers"),
    BukHtmlWebpackPlugin("rules"),
    BukHtmlWebpackPlugin("meetups"),
    BukHtmlWebpackPlugin("members")
  ]
};
