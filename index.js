const express = require("express")
const app = express()
const http = require("http")
require("dotenv").config();
// let timeOut = require("connect-timeout")
// app.use(timeOut('30s'))
const cors = require('cors')
app.use(cors())

var NODE_ENV = "sfg";

app.use(express.json())

app.get("/get", (req, res) => res.json({ message: "hi" }))

if (NODE_ENV === "development") {
    app.set("port", process.env.PORT || 3001);
    let server = http.createServer(app);
    server.listen(app.get("port"), "0.0.0.0", () => {
        console.log(`server is listening to port http://localhost:${app.get("port")}`)
    })
} else {
    const serverLess = require("serverless-http")
    module.exports.mithunTest = serverLess(app)
}

