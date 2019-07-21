const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.[hash].js',
    chunkFilename: '[name].bundle.[chunkhash].js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
      },
    ],
  },
  resolve: { alias: { react: 'preact/compat', 'react-dom': 'preact/compat' } },
  optimization: { splitChunks: { name: 'vendor', chunks: 'initial' } },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({ template: 'static/index.html' }),
    new WebpackBar({ profile: true }),
  ],
}
