const Merge = require('webpack-merge')
const OfflinePlugin = require('offline-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const Common = require('./webpack.common.js')

module.exports = Merge(Common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new OfflinePlugin(),
      new TerserPlugin({ cache: true, parallel: true, extractComments: true }),
    ],
  },
  stats: 'errors-only',
})
