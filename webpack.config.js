const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { BukHtmlWebpackPlugin } = require("./build/html");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    main: path.join(__dirname, "src/public/js/main.js"),
    burgers: path.join(__dirname, "src/public/js/burgers.js")
  },
  output: {
    path: path.join(__dirname, "src/public/dist/"),
    filename: isProd ? "[name].[chunkhash].bundle.js" : "[name].js",
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
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime",
      minChunks: Infinity
    }),
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
    new webpack.HashedModuleIdsPlugin(),
    BukHtmlWebpackPlugin("index", ["main", "vendor", "runtime"]),
    BukHtmlWebpackPlugin("burgers", ["main", "burgers", "vendor", "runtime"]),
    BukHtmlWebpackPlugin("rules", ["main", "vendor", "runtime"]),
    BukHtmlWebpackPlugin("meetups", ["main", "vendor", "runtime"]),
    BukHtmlWebpackPlugin("members", ["main", "vendor", "runtime"])
  ]
};
