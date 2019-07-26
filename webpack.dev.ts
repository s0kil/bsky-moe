import webpack from 'webpack'
import Merge from 'webpack-merge'
import Common from './webpack.common'

const config: webpack.Configuration = Merge(Common, {
  mode: 'development',
  devServer: { port: 3000, stats: 'errors-only' },
  devtool: 'inline-source-map',
})

export default config
