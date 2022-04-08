const express = require("express")

const app = express()

const debug = true

const port = 8080

app.use(express.static(__dirname+"/public"))

app.get("/data", (req, res) => {
    res.send(data)
    if (debug) console.log("request for data")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
    if (debug) console.log("request for homepage: "+__dirname+"/public/index.html")
})

app.post("/", (req, res) => {
    data.push(req.json())
    if (debug) console.log("data posted: "+req.json())
})

app.listen(port, () => {
    console.log("Server running on port "+port)
})