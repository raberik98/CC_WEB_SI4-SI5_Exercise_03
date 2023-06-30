import express from "express"
import mongoose from "mongoose"
import BeerModel from "./models/Beer.js"
import CompanyModel from "./models/Company.js"
const app = express()
app.use(express.json())

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

//OPTIONAL TASK
//-----------------------------------------------------------------------------
// let currentRequests = 0
// let requestLimit = 100

// app.use("/", (リクエスト, 応答, 次) => {
//     const ipAddress = リクエスト.socket.remoteAddress;
//     console.log(ipAddress)
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
