const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const multi = require("multi-loader");
const { BukHtmlWebpackPlugin } = require("./build/html");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/public/js/main.js"),
    burgers: path.join(__dirname, "src/public/js/burgers.js"),
    vendor: ["c3"]
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
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: "file-loader?name=[name].webp!webp-loader?{quality: 95}"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, "/src/public/dist/")]),
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
    BukHtmlWebpackPlugin("index"),
    BukHtmlWebpackPlugin("burgers"),
    BukHtmlWebpackPlugin("rules"),
    BukHtmlWebpackPlugin("meetups"),
    BukHtmlWebpackPlugin("members")
  ]
};
