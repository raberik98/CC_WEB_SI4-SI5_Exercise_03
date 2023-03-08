const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
app.use(express.json())
app.use(cors())

//OPTIONAL TASK
//-----------------------------------------------------------------------------
// let currentRequests = 0
// let requestLimit = 100

// setInterval(() => {
//     console.log("REQUEST COUNTER RESET!")
//     currentRequests = 0
// }, 60000)

// app.use("/", (dog,cat,beer) => {
//     currentRequests++
//     console.log(`Server can handle this amount of extra requests: ${requestLimit - currentRequests}`);
//     beer()
// })

// app.get("/", (req,res) => {
//     const ipAddress = req.socket.remoteAddress;
//     res.send(ipAddress);
// })
//-----------------------------------------------------------------------------

app.get("/", (req,res) => {
    res.json({"data": ["beer1","beer2","beer3"]})
})





mongoose.connect("mongodb://localhost:27017/cheapBeer").then(() => {
    console.log("Connection to MongoDB database!");
    app.listen(3001, () => {
        console.log("App is running at port: 3001");
    })
}).catch((error) => {
    console.log(error);
})