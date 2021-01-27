const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('../../webpack.config')

const compiler = webpack(config);

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  serverSideRender: true,
})

const hotMiddleware = webpackHotMiddleware(compiler, {
  log: false,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
  hot: true,
  ignored: /node_modules/,
})

module.exports = { devMiddleware, hotMiddleware }