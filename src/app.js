const express = require("express")
const app = express()
const path = require("path")
const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('../webpack.config')

const port = process.env.PORT || "8000"

const compiler = webpack(config)

app.use(
  webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
  }),
  webpackHotMiddleware(compiler, {
    reload: true,
  })
)

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(`${__dirname}/static`))
app.use(express.static("static/dist"))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html" ))
})

app.listen(port, () => {
  console.log(`Server working on http://localhost:${port}` );
})
