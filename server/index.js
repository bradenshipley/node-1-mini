const express = require("express")
const { json } = require("body-parser")
const bc = require("./controllers/books_controller")
const app = express()

app.use(json())
app.use(express.static(__dirname + "/../build"))
// app.use(express.static(node - 1 - mini + "/../build"))

app.get("/api/books", bc.read)
app.post("/api/books", bc.create)
app.put("/api/books/:id", bc.updateBook)
app.delete("/api/books/:id", bc.deleteBook)

app.listen(4000, () => {
  console.log("listen on port 4000")
})
