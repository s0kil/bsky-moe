import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin'
import webpack from 'webpack'
import WebpackBar from 'webpackbar'

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[hash].js',
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
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
      },
    ],
  },
  resolve: { extensions: ['.js', '.ts', '.tsx'] },
  optimization: { splitChunks: { name: 'vendor', chunks: 'initial' } },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({ template: 'static/index.html' }),
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'async' }),
    new WebpackBar(),
  ],
}

export default config
