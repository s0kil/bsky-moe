/* eslint-disable @typescript-eslint/no-var-requires */
const Merge = require('webpack-merge')
const OfflinePlugin = require('offline-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const Common = require('./webpack.common.js')

module.exports = Merge(Common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new OfflinePlugin({
        externals: [
          'https://static.bsky.moe/images/favicon.ico',
          'https://static.bsky.moe/images/avatar.png',
        ],
      }),
      new TerserPlugin({ cache: true, parallel: true, extractComments: true }),
    ],
  },
  stats: 'errors-only',
})
