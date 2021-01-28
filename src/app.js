const express = require('express')
const path = require('path')
const { devMiddleware, hotMiddleware } = require('./server/hot-module-reload');
const app = express()

const port = process.env.PORT || '8000'

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

app.use(devMiddleware, hotMiddleware)

app.use(express.static(`${__dirname}/static`))
app.use(express.static('static/dist'))

app.listen(port, () => {
  console.log(`Server working on http://localhost:${port}` );
})
