const express = require('express')
const path = require('path')
const { devMiddleware, hotMiddleware } = require('./server/hot-module-reload');
const app = express()
const fs = require('fs');

const port = process.env.PORT || '8000'

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

app.use(devMiddleware, hotMiddleware)

app.use(express.static(`${__dirname}/static`))
app.use(express.static('static/dist'))

app.use('*', (req, res) => {
  const indexPath = path.resolve(__dirname, './static/dist/index.html');
  const fileContent = fs.readFileSync(indexPath)

  res.send(fileContent.toString()).end();
});

app.listen(port, () => {
  console.log(`Server working on http://localhost:${port}` );
})
