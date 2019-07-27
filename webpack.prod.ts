import OfflinePlugin from 'offline-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common'

const config: webpack.Configuration = merge(common, {
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

export default config
