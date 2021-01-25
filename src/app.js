const express = require("express")
const app = express()
const path = require("path")

const port = process.env.PORT || "8000"

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(`${__dirname}/static`))
app.use(express.static(path.resolve(__dirname, "static/dist")))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html" ))
})

app.listen(port, () => {
  console.log(`Server working on http://localhost:${port}` );
})
