import express from "express";
import mongoose from "mongoose";
import BeerModel from "./models/Beer.js";
import CompanyModel from "./models/Company.js";
import dotenv from "dotenv";
import Beer from "./models/Beer.js";
dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});

//OPTIONAL TASK
// -----------------------------------------------------------------------------
let currentRequests = 0;
let requestLimit = 100;
let addresses = {}

setInterval(() => {currentRequests = 0; addresses = {} }, 60000);

app.use("/", (req, res, next) => {
    currentRequests++;
    const ipAddress = req.socket.remoteAddress;
    console.log("The current counter stands at: " +currentRequests + ", from: " + ipAddress );
    if (currentRequests >= requestLimit) {
        res.end();
    }
    else{
        addresses[ipAddress] ?  addresses[ipAddress]++ : addresses[ipAddress] = 1
        addresses[ipAddress] > 10 ? res.end() : next();
    }


});

// -----------------------------------------------------------------------------

app.get("/", (req, res) => {
    res.send("I am just an endpoint don't mind me.");
});

app.post("/api/v1/addbeer", async (req, res) => {
    try {
        const newBeer = await Beer.create({
            ...req.body,
        });
        if (newBeer) {
            res.json({ success: true });
        }
    } catch (error) {
        res.status(500).json({ success: false });
        console.error(error);
    }
});

app.get("/api/v1/beers", async (req, res) => {
    try {
        const beers = await BeerModel.find();
        res.status(200).json(beers);
    } catch (error) {
        console.log("error fetching beers", error);
        res.status(500).json({ error: "server error" });
    }
});

mongoose
    .connect(process.env.CONSTRING + "cheapBeer")
    .then(() => {
        console.log("Connection to MongoDB database!");
        app.listen(3001, () => {
            console.log("App is running at port: 3001");
        });
    })
    .catch((error) => {
        console.log(error);
    });
