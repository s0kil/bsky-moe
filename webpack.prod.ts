import OfflinePlugin from 'offline-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import Merge from 'webpack-merge'
import Common from './webpack.common'

const config: webpack.Configuration = Merge(Common, {
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
