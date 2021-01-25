const express = require("express")
const app = express()
const path = require("path")

const port = process.env.PORT || "8000"

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))

app.get("*", (req, res) => {
  // res.render("index")
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))

})

app.listen(port, () => {
  console.log(`Server working on http://localhost:${port}` );
})
