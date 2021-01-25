const express = require("express")
const app = express()
const path = require("path")

const port = process.env.PORT || "8000"

app.set("view engine", "pug");

app.get("*", (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`Server working on http://localhost:${port}` );
})