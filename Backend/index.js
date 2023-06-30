import express from "express"
import mongoose from "mongoose"
const app = express()
app.use(express.json())

//OPTIONAL TASK
//-----------------------------------------------------------------------------
// let currentRequests = 0
// let requestLimit = 100

// app.use("/", (リクエスト, 応答, 次) => {
//     const ipAddress = リクエスト.socket.remoteAddress;
//     次()
// })

//-----------------------------------------------------------------------------





app.get("/", (req,res) => {
    res.send("I am just an endpoint don't mind me.")
})

mongoose.connect("mongodb://127.0.0.1:27017/cheapBeer").then(() => {
    console.log("Connection to MongoDB database!");
    app.listen(3001, () => {
        console.log("App is running at port: 3001");
    })
}).catch((error) => {
    console.log(error);
})
