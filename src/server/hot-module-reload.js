const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('../../webpack.config')

const compiler = webpack(config);

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
});

const hotMiddleware = webpackHotMiddleware(compiler);

module.exports = { devMiddleware, hotMiddleware }
