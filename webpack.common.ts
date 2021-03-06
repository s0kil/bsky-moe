import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import ScriptExtHtmlWebpackPlugin from "script-ext-html-webpack-plugin";
import webpack from "webpack";
import WebpackBar from "webpackbar";

const config: webpack.Configuration = {
  entry: "./lib/es6/src/Index.js",
  output: {
    filename: "bundle.[hash].js",
    chunkFilename: "[name].bundle.[chunkhash].js",
    path: resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader", options: { cacheDirectory: true } }]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" }
        ]
      }
    ]
  },
  resolve: { alias: { react: "preact/compat", "react-dom": "preact/compat" } },
  optimization: { splitChunks: { name: "vendor", chunks: "initial" } },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({ template: "static/index.html" }),
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: "async" }),
    new WebpackBar()
  ],
  node: { crypto: false }
};

export default config;
