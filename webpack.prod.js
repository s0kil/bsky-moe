const Merge = require('webpack-merge')
const ObsoleteWebpackPlugin = require('obsolete-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const Common = require('./webpack.common.js')

module.exports = Merge(Common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true, extractComments: true }),
    ],
  },
  plugins: [
    new ObsoleteWebpackPlugin({ promptOnUnknownBrowser: false }),
    new ScriptExtHtmlWebpackPlugin({ async: 'obsolete' }),
  ],
  stats: 'errors-only',
})
