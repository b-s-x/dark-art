const express = require('express')
const app = express()
const path = require('path')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config')

const port = process.env.PORT || '8000'

const options = {
  contentBase: './static/dist',
  hot: true,
  host: 'localhost',
  clientLogLevel: 'trace',
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options)

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(`${__dirname}/static`))
app.use(express.static('static/dist'))

server.listen(port, () => {
  console.log(`Server working on http://localhost:${port}` );
})
